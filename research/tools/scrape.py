"""Scrape a prospect's whole public site into research/<slug>/.

Writes:
  research/<slug>/pages/<n>-<name>.txt   visible text of each page
  research/<slug>/assets/                every image worth keeping
  research/<slug>/index.json             url -> title/status/asset map

Nothing here interprets the data. It only makes the client's own published
material readable, so the preview can be built from their facts and not from
guesses (sites/VERIFY.md).
"""
from __future__ import annotations

import io
import json
import os
import re
import sys
import time
from collections import OrderedDict
from urllib.parse import urljoin, urlparse, urldefrag

import requests
from bs4 import BeautifulSoup

ROOT = r"D:\Code\DriveWeb\research"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")
HEADERS = {"User-Agent": UA, "Accept-Language": "en-US,en;q=0.9"}

# Pages that carry the facts a preview needs, in priority order.
PRIORITY = [
    "pricing", "price", "package", "rate", "cost", "tuition", "fees",
    "service", "program", "course", "lesson", "training", "teen", "adult",
    "driver-ed", "drivers-ed", "driver_ed", "education", "behind", "wheel",
    "dmv", "test", "traffic", "senior",
    "about", "instructor", "team", "staff", "who",
    "testimonial", "review", "faq", "contact", "location", "area", "schedule",
]
SKIP = re.compile(
    r"(?:\.(?:pdf|zip|docx?|xlsx?|mp4|mp3|avi|mov)$)|(?:^mailto:)|(?:^tel:)|"
    r"(?:/wp-admin)|(?:/wp-login)|(?:/cart)|(?:/checkout)|(?:/my-account)|"
    r"(?:/feed/?$)|(?:\?add-to-cart)|(?:/privacy)|(?:/terms)",
    re.I,
)
IMG_EXT = re.compile(r"\.(?:png|jpe?g|webp|svg|gif|avif)(?:\?|$)", re.I)


def get(url: str, timeout: int = 25):
    try:
        return requests.get(url, headers=HEADERS, timeout=timeout, allow_redirects=True)
    except Exception as exc:  # noqa: BLE001 - a dead prospect site is data, not a crash
        print(f"    ! {url} -> {type(exc).__name__}: {exc}")
        return None


def visible_text(soup: BeautifulSoup) -> str:
    for tag in soup(["script", "style", "noscript", "svg"]):
        tag.decompose()
    text = soup.get_text("\n")
    lines = [re.sub(r"[ \t\xa0]+", " ", ln).strip() for ln in text.splitlines()]
    out, blank = [], 0
    for ln in lines:
        if not ln:
            blank += 1
            if blank > 1:
                continue
        else:
            blank = 0
        out.append(ln)
    return "\n".join(out).strip()


def score(href: str) -> int:
    low = href.lower()
    for i, key in enumerate(PRIORITY):
        if key in low:
            return i
    return len(PRIORITY) + low.count("/")


def collect_images(soup: BeautifulSoup, page_url: str) -> "OrderedDict[str, str]":
    """url -> role hint. Keeps srcset's largest candidate and CSS background images."""
    found: "OrderedDict[str, str]" = OrderedDict()

    def add(raw: str, hint: str):
        if not raw:
            return
        raw = raw.strip()
        if raw.startswith("data:"):
            return
        url = urljoin(page_url, raw)
        url, _ = urldefrag(url)
        if not IMG_EXT.search(url):
            return
        found.setdefault(url, hint)

    for img in soup.find_all("img"):
        srcset = img.get("srcset") or img.get("data-srcset") or ""
        if srcset:
            best, best_w = None, -1
            for part in srcset.split(","):
                bits = part.strip().split()
                if not bits:
                    continue
                w = 0
                if len(bits) > 1 and bits[1].endswith("w"):
                    try:
                        w = int(bits[1][:-1])
                    except ValueError:
                        w = 0
                if w >= best_w:
                    best, best_w = bits[0], w
            add(best or "", "img")
        add(img.get("src") or img.get("data-src") or img.get("data-lazy-src") or "", "img")

    for tag in soup.find_all(attrs={"style": True}):
        for m in re.finditer(r"url\((['\"]?)(.*?)\1\)", tag["style"]):
            add(m.group(2), "bg")

    for link in soup.find_all("link", rel=True):
        rel = " ".join(link.get("rel"))
        if "icon" in rel.lower() or "apple-touch" in rel.lower():
            add(link.get("href") or "", "icon")

    for meta in soup.find_all("meta", property="og:image"):
        add(meta.get("content") or "", "og")

    return found


def slug_for(url: str) -> str:
    p = urlparse(url)
    path = (p.path or "/").strip("/")
    if p.query:
        path += "-" + re.sub(r"[^a-z0-9]+", "-", p.query.lower())
    name = re.sub(r"[^a-zA-Z0-9]+", "-", path).strip("-").lower() or "index"
    return name[:60]


def scrape(slug: str, base: str, max_pages: int = 22) -> dict:
    outdir = os.path.join(ROOT, slug)
    pages_dir = os.path.join(outdir, "pages")
    assets_dir = os.path.join(outdir, "assets")
    os.makedirs(pages_dir, exist_ok=True)
    os.makedirs(assets_dir, exist_ok=True)

    resp = get(base)
    if resp is None or resp.status_code >= 400:
        code = resp.status_code if resp else "ERR"
        print(f"  homepage failed: {code}")
        return {"slug": slug, "base": base, "error": str(code)}

    home_url = resp.url
    host = urlparse(home_url).netloc.replace("www.", "")

    seen = {home_url}
    queue = [(0, home_url)]
    records, images = [], OrderedDict()

    while queue and len(records) < max_pages:
        queue.sort(key=lambda t: t[0])
        _, url = queue.pop(0)
        r = resp if url == home_url else get(url)
        if r is None:
            continue
        ctype = r.headers.get("content-type", "")
        if "html" not in ctype:
            continue
        soup = BeautifulSoup(r.text, "html.parser")
        title = (soup.title.string or "").strip() if soup.title else ""
        text = visible_text(soup)
        fname = f"{len(records):02d}-{slug_for(url)}.txt"
        with open(os.path.join(pages_dir, fname), "w", encoding="utf-8") as fh:
            fh.write(f"URL: {url}\nTITLE: {title}\nSTATUS: {r.status_code}\n\n{text}\n")
        records.append({"url": url, "title": title, "status": r.status_code, "file": fname,
                        "chars": len(text)})
        print(f"  [{len(records):02d}] {r.status_code} {url}  ({len(text)} chars)")

        for u, hint in collect_images(soup, url).items():
            images.setdefault(u, hint)

        for a in soup.find_all("a", href=True):
            href = a["href"].strip()
            if SKIP.search(href):
                continue
            nxt = urljoin(url, href)
            nxt, _ = urldefrag(nxt)
            if urlparse(nxt).netloc.replace("www.", "") != host:
                continue
            if nxt in seen or SKIP.search(nxt):
                continue
            seen.add(nxt)
            queue.append((score(nxt), nxt))
        time.sleep(0.3)

    # --- assets -------------------------------------------------------------
    saved = []
    try:
        from PIL import Image
    except ImportError:
        Image = None

    for url, hint in list(images.items())[:70]:
        r = get(url, timeout=20)
        if r is None or r.status_code >= 400 or not r.content:
            continue
        raw = r.content
        if len(raw) < 1500 and not url.lower().endswith(".svg"):
            continue
        w = h = None
        if Image is not None and not url.lower().endswith(".svg"):
            try:
                im = Image.open(io.BytesIO(raw))
                w, h = im.size
                if w < 120 or h < 90:
                    continue
            except Exception:  # noqa: BLE001
                continue
        name = re.sub(r"[^a-zA-Z0-9._-]+", "-", os.path.basename(urlparse(url).path))[-60:]
        if not name:
            continue
        dest = os.path.join(assets_dir, name)
        n = 1
        while os.path.exists(dest):
            stem, ext = os.path.splitext(name)
            dest = os.path.join(assets_dir, f"{stem}-{n}{ext}")
            n += 1
        with open(dest, "wb") as fh:
            fh.write(raw)
        saved.append({"url": url, "file": os.path.basename(dest), "hint": hint,
                      "w": w, "h": h, "bytes": len(raw)})

    index = {"slug": slug, "base": base, "resolved": home_url, "pages": records,
             "assets": saved}
    with open(os.path.join(outdir, "index.json"), "w", encoding="utf-8") as fh:
        json.dump(index, fh, indent=2)
    print(f"  -> {len(records)} pages, {len(saved)} assets")
    return index


if __name__ == "__main__":
    targets = json.load(open(sys.argv[1], encoding="utf-8"))
    only = sys.argv[2:] if len(sys.argv) > 2 else None
    for slug, base in targets.items():
        if only and slug not in only:
            continue
        print(f"\n=== {slug} :: {base}")
        scrape(slug, base)
