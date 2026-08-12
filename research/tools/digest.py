"""Collapse a scraped site into the part that is actually about the business.

Lines that repeat across most pages are the chrome — nav, footer, phone banner.
They are printed once, then each page shows only what is unique to it. This is
the difference between reading 8 pages and reading 8 copies of the same menu.

  python digest.py <slug> [--full]
"""
from __future__ import annotations

import glob
import json
import os
import re
import sys
from collections import Counter

ROOT = r"D:\Code\DriveWeb\research"

# These pages are full of the punctuation a Windows console cannot encode —
# smart quotes, zero-width spaces, the circled C. cp1252 raises on all of them
# and kills the run partway through a site, which is how several of these
# digests looked shorter than they were.
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")


def digest(slug: str, per_page_chars: int = 4200) -> None:
    base = os.path.join(ROOT, slug)
    files = sorted(glob.glob(os.path.join(base, "pages", "*.txt")))
    if not files:
        print(f"!! no pages for {slug}")
        return

    docs = []
    for path in files:
        with open(path, encoding="utf-8") as fh:
            raw = fh.read()
        head, _, body = raw.partition("\n\n")
        meta = dict(
            line.split(": ", 1) for line in head.splitlines() if ": " in line
        )
        docs.append((meta, [ln.strip() for ln in body.splitlines()]))

    counts = Counter()
    for _meta, lines in docs:
        counts.update(set(ln for ln in lines if ln))
    threshold = max(2, int(len(docs) * 0.6))
    chrome = {ln for ln, n in counts.items() if n >= threshold and len(ln) < 160}

    print(f"########## {slug}  ({len(docs)} pages)")
    print("--- shared chrome (nav / footer / banner) ---")
    for ln in sorted(chrome, key=len, reverse=True)[:45]:
        print("  " + ln)

    for meta, lines in docs:
        uniq, blank = [], False
        for ln in lines:
            if ln in chrome:
                continue
            if not ln:
                if blank:
                    continue
                blank = True
            else:
                blank = False
            uniq.append(ln)
        text = re.sub(r"\n{3,}", "\n\n", "\n".join(uniq)).strip()
        print(f"\n--- {meta.get('URL', '?')}\n    {meta.get('TITLE', '')}")
        print(text[:per_page_chars] if text else "    (nothing beyond the chrome)")
        if len(text) > per_page_chars:
            print(f"    ... [{len(text) - per_page_chars} more chars]")

    idx_path = os.path.join(base, "index.json")
    if os.path.exists(idx_path):
        idx = json.load(open(idx_path, encoding="utf-8"))
        print("\n--- assets ---")
        for a in idx["assets"]:
            print(f"  {a['file']}  {a['w']}x{a['h']}  {a['hint']}")


if __name__ == "__main__":
    for slug in sys.argv[1:]:
        digest(slug)
        print("\n")
