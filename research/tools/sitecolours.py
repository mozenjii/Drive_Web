"""Pull the brand colours out of a site's own stylesheets.

For clients whose logo is a photograph, a wordmark in black, or missing
entirely, the colour that actually identifies them lives in their CSS. This
counts hex and rgb() declarations across the page and its stylesheets, drops
neutrals, and ranks what is left.

  python sitecolours.py <url> [<url> ...]
"""
from __future__ import annotations

import colorsys
import re
import sys
from collections import Counter
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")
HEX = re.compile(r"#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b")
RGB = re.compile(r"rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})")


def srgb_to_lin(c: float) -> float:
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4


def contrast(rgb, on=(255, 255, 255)) -> float:
    def lum(c):
        r, g, b = (srgb_to_lin(v / 255) for v in c)
        return 0.2126 * r + 0.7152 * g + 0.0722 * b
    a, b = lum(rgb), lum(on)
    hi, lo = max(a, b), min(a, b)
    return (hi + 0.05) / (lo + 0.05)


def harvest(text: str, counter: Counter) -> None:
    for m in HEX.finditer(text):
        h = m.group(1)
        if len(h) == 3:
            h = "".join(c * 2 for c in h)
        counter[tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))] += 1
    for m in RGB.finditer(text):
        vals = tuple(min(255, int(v)) for v in m.groups())
        counter[vals] += 1


def run(url: str) -> None:
    headers = {"User-Agent": UA}
    r = requests.get(url, headers=headers, timeout=25)
    soup = BeautifulSoup(r.text, "html.parser")
    counter: Counter = Counter()

    for style in soup.find_all("style"):
        harvest(style.get_text(), counter)
    for tag in soup.find_all(attrs={"style": True}):
        harvest(tag["style"], counter)

    sheets = [link.get("href") for link in soup.find_all("link", rel=True)
              if "stylesheet" in " ".join(link.get("rel")).lower() and link.get("href")]
    for href in sheets[:8]:
        try:
            css = requests.get(urljoin(r.url, href), headers=headers, timeout=20)
            if css.ok:
                harvest(css.text, counter)
        except Exception:  # noqa: BLE001
            pass

    print(f"\n===== {url}   ({len(sheets)} stylesheets)")
    shown = 0
    for rgb, n in counter.most_common(160):
        h, l, s = colorsys.rgb_to_hls(*(v / 255 for v in rgb))
        if s < 0.22 or l < 0.10 or l > 0.92:
            continue  # neutral, near-black or near-white: not an identity colour
        print(f"  #{rgb[0]:02X}{rgb[1]:02X}{rgb[2]:02X}  x{n:<4} "
              f"hue={h * 360:5.0f} s={s:.2f} l={l:.2f}  {contrast(rgb):.2f}:1")
        shown += 1
        if shown >= 12:
            break


if __name__ == "__main__":
    for url in sys.argv[1:]:
        try:
            run(url)
        except Exception as exc:  # noqa: BLE001
            print(f"!! {url}: {type(exc).__name__}: {exc}")
