"""Sample a client's brand from their own logo and make it legible.

Prints a ready-to-paste `brand: { ... }` block. The rule, from
docs/DESIGN.md: keep their hue, lower the lightness until it clears WCAG AA,
never ship the raw hex and never fall back to a safe default.

  python brand.py <image> [<image> ...]
"""
from __future__ import annotations

import colorsys
import sys
from collections import Counter

from PIL import Image

AA = 4.5
# Aim above the line, not at it. See the note in palette.py: three sampled
# palettes printed as "4.50"/"4.51" here and were rejected by brand.test.ts,
# which measures the ratio without rounding.
AA_TARGET = 4.62


def srgb_to_lin(c: float) -> float:
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4


def luminance(rgb) -> float:
    r, g, b = (srgb_to_lin(v / 255) for v in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast(a, b) -> float:
    la, lb = luminance(a), luminance(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def hexs(rgb) -> str:
    return "#{:02X}{:02X}{:02X}".format(*(int(round(v)) for v in rgb))


def darken_to(rgb, target: float, on=(255, 255, 255)):
    """Lower HLS lightness in small steps until contrast clears `target`."""
    h, l, s = colorsys.rgb_to_hls(*(v / 255 for v in rgb))
    for _ in range(200):
        out = tuple(v * 255 for v in colorsys.hls_to_rgb(h, l, s))
        if contrast(out, on) >= target:
            return out
        l = max(0.0, l - 0.005)
        if l == 0.0:
            return (0, 0, 0)
    return (0, 0, 0)


def lighten_to(rgb, lightness: float):
    h, _l, s = colorsys.rgb_to_hls(*(v / 255 for v in rgb))
    s = min(s, 0.55)
    return tuple(v * 255 for v in colorsys.hls_to_rgb(h, lightness, s))


def mix(a, b, t):
    return tuple(a[i] * (1 - t) + b[i] * t for i in range(3))


def dominant(path: str, k: int = 14):
    im = Image.open(path)
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
        im = Image.alpha_composite(bg, im)
    im = im.convert("RGB")
    im.thumbnail((240, 240))
    q = im.quantize(colors=k, method=Image.MEDIANCUT)
    pal = q.getpalette()
    counts = Counter(q.getdata())
    total = sum(counts.values())

    out = []
    for idx, n in counts.most_common():
        rgb = tuple(pal[idx * 3: idx * 3 + 3])
        h, l, s = colorsys.rgb_to_hls(*(v / 255 for v in rgb))
        out.append({"rgb": rgb, "share": n / total, "h": h, "l": l, "s": s})
    return out


def pick(path: str):
    cands = dominant(path)
    # Ignore near-white and near-black: they are paper and ink, not brand.
    chroma = [c for c in cands if 0.10 < c["l"] < 0.88 and c["s"] > 0.16]
    # Coverage decides the primary, saturation only breaks ties. A small,
    # very saturated accent should not outrank the colour the mark is mostly
    # made of.
    chroma.sort(key=lambda c: c["share"] * (0.55 + 0.45 * c["s"]), reverse=True)
    if not chroma:
        return None, None, cands
    primary = chroma[0]
    accent = None
    for c in chroma[1:]:
        dh = abs(c["h"] - primary["h"])
        dh = min(dh, 1 - dh)
        if dh > 0.06:                     # a genuinely different hue
            accent = c
            break
    return primary, accent, cands


def block(path: str) -> str:
    primary, accent, cands = pick(path)
    if primary is None:
        return f"// {path}: no usable brand colour (logo is greyscale)\n"

    p_raw = primary["rgb"]
    a_raw = accent["rgb"] if accent else None

    p = darken_to(p_raw, AA_TARGET)
    a = darken_to(a_raw, AA_TARGET) if a_raw else darken_to(mix(p_raw, (140, 90, 30), 0.75), AA_TARGET)

    p_dark = darken_to(p, contrast(p, (255, 255, 255)) * 1.28)
    a_dark = darken_to(a, contrast(a, (255, 255, 255)) * 1.28)
    p_soft = lighten_to(p, 0.935)
    a_soft = lighten_to(a, 0.94)

    wash = darken_to(p, 13.0)
    bg = lighten_to(p, 0.972)
    border = lighten_to(p, 0.855)
    border_soft = lighten_to(p, 0.915)
    # Muted text should read as grey that happens to belong to the brand family,
    # not as a washed-out version of the brand itself.
    fg_dim = darken_to(mix(p, (108, 108, 120), 0.7), AA_TARGET)

    lines = [
        f"  // sampled from {path.split(chr(92))[-1]}",
        f"  // raw primary {hexs(p_raw)} ({contrast(p_raw, (255,255,255)):.2f}:1)"
        + (f", raw accent {hexs(a_raw)} ({contrast(a_raw, (255,255,255)):.2f}:1)" if a_raw else ""),
        "  brand: {",
        f"    primary: '{hexs(p)}',        // {contrast(p, (255,255,255)):.2f}:1 on white",
        f"    primaryDark: '{hexs(p_dark)}',",
        f"    primarySoft: '{hexs(p_soft)}',",
        f"    accent: '{hexs(a)}',         // {contrast(a, (255,255,255)):.2f}:1 on white",
        f"    accentDark: '{hexs(a_dark)}',",
        f"    accentSoft: '{hexs(a_soft)}',",
        f"    wash: '{', '.join(str(int(round(v))) for v in wash)}',",
        f"    bg: '{hexs(bg)}',",
        f"    border: '{hexs(border)}',",
        f"    borderSoft: '{hexs(border_soft)}',",
        f"    fgDim: '{hexs(fg_dim)}',     // {contrast(fg_dim, bg):.2f}:1 on bg",
        "  },",
    ]
    top = ", ".join(f"{hexs(c['rgb'])}@{c['share']:.0%}" for c in cands[:6])
    lines.append(f"  // palette: {top}")
    return "\n".join(lines) + "\n"


if __name__ == "__main__":
    for path in sys.argv[1:]:
        print(f"\n===== {path}")
        try:
            print(block(path))
        except Exception as exc:  # noqa: BLE001
            print(f"  !! {type(exc).__name__}: {exc}")
