"""Turn two brand hexes into a complete, AA-clean token block.

  python palette.py <name> <primaryHex> <accentHex> [...repeat]

Keeps each hue, lowers lightness only as far as it has to, and re-measures
everything it prints. Anything it prints has already passed.
"""
from __future__ import annotations

import colorsys
import sys

AA = 4.5
WHITE = (255, 255, 255)


def srgb_to_lin(c: float) -> float:
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4


def lum(rgb) -> float:
    r, g, b = (srgb_to_lin(v / 255) for v in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast(a, b=WHITE) -> float:
    la, lb = lum(a), lum(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def hexs(rgb) -> str:
    return "#{:02X}{:02X}{:02X}".format(*(int(round(v)) for v in rgb))


def parse(h: str):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def darken_to(rgb, target: float, on=WHITE):
    h, l, s = colorsys.rgb_to_hls(*(v / 255 for v in rgb))
    for _ in range(220):
        out = tuple(v * 255 for v in colorsys.hls_to_rgb(h, l, s))
        if contrast(out, on) >= target:
            return out
        l -= 0.005
        if l <= 0:
            return (0, 0, 0)
    return (0, 0, 0)


def tint(rgb, lightness: float, max_sat: float = 0.55):
    h, _l, s = colorsys.rgb_to_hls(*(v / 255 for v in rgb))
    return tuple(v * 255 for v in colorsys.hls_to_rgb(h, lightness, min(s, max_sat)))


def mix(a, b, t):
    return tuple(a[i] * (1 - t) + b[i] * t for i in range(3))


def block(name: str, primary_hex: str, accent_hex: str) -> None:
    praw, araw = parse(primary_hex), parse(accent_hex)
    p = darken_to(praw, AA)
    a = darken_to(araw, AA)
    p_dark = darken_to(p, contrast(p) * 1.2)
    a_dark = darken_to(a, contrast(a) * 1.2)
    p_soft = tint(praw, 0.935)
    a_soft = tint(araw, 0.94)
    wash = darken_to(p, 13.0)
    bg = tint(praw, 0.973)
    border = tint(praw, 0.865)
    border_soft = tint(praw, 0.925)
    fg_dim = darken_to(mix(p, (108, 108, 118), 0.66), AA)

    checks = {
        "primary/white": contrast(p),
        "accent/white": contrast(a),
        "white/primary": contrast(WHITE, p),
        "white/accent": contrast(WHITE, a),
        "pDark/pSoft": contrast(p_dark, p_soft),
        "aDark/aSoft": contrast(a_dark, a_soft),
        "fgDim/bg": contrast(fg_dim, bg),
        "fgDim/white": contrast(fg_dim, WHITE),
        "border/bg": contrast(border, bg),
    }
    bad = [k for k, v in checks.items() if (v < AA and k != "border/bg") or (k == "border/bg" and v < 1.15)]

    print(f"\n----- {name}   raw {primary_hex} ({contrast(praw):.2f}:1) / {accent_hex} ({contrast(araw):.2f}:1)")
    print("  brand: {")
    print(f"    primary: '{hexs(p)}',")
    print(f"    primaryDark: '{hexs(p_dark)}',")
    print(f"    primarySoft: '{hexs(p_soft)}',")
    print(f"    accent: '{hexs(a)}',")
    print(f"    accentDark: '{hexs(a_dark)}',")
    print(f"    accentSoft: '{hexs(a_soft)}',")
    print(f"    wash: '{', '.join(str(int(round(v))) for v in wash)}',")
    print(f"    bg: '{hexs(bg)}',")
    print(f"    border: '{hexs(border)}',")
    print(f"    borderSoft: '{hexs(border_soft)}',")
    print(f"    fgDim: '{hexs(fg_dim)}',")
    print("  },")
    print("  // " + "  ".join(f"{k} {v:.2f}" for k, v in checks.items()))
    if bad:
        print(f"  // !! FAILS: {bad}")


if __name__ == "__main__":
    args = sys.argv[1:]
    for i in range(0, len(args), 3):
        block(args[i], args[i + 1], args[i + 2])
