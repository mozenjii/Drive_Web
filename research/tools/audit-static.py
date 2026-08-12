"""Static audit of the built export. Every page, every reference.

Runs against `preview/out` after `next build`. Complements
`audit-visual.js`, which checks the things only a browser can compute
(contrast against a real background, overflow, card geometry).

  python research/tools/audit-static.py [path-to-out]

Exits non-zero if anything is wrong, so it can gate a deploy.
"""
from __future__ import annotations

import collections
import html
import json
import os
import re
import sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.join("preview", "out")

pages = 0
img_refs = 0
link_refs = 0
missing_img: collections.Counter = collections.Counter()
broken_link: collections.Counter = collections.Counter()
shared_stock: collections.Counter = collections.Counter()
no_noindex: list[str] = []
no_title: list[str] = []
no_lang: list[str] = []
no_h1: list[str] = []
multi_h1: list[str] = []
img_no_alt: list[str] = []
dup_ids: list[str] = []

for dirpath, _dirnames, filenames in os.walk(ROOT):
    if "_next" in dirpath or "index.html" not in filenames:
        continue
    pages += 1
    path = os.path.join(dirpath, "index.html")
    doc = open(path, encoding="utf-8", errors="ignore").read()
    rel = "/" + os.path.relpath(dirpath, ROOT).replace(os.sep, "/")

    # A preview carries a real business's name; it must never be indexable.
    if 'content="noindex' not in doc:
        no_noindex.append(rel)
    if "<title>" not in doc:
        no_title.append(rel)
    if not re.search(r"<html[^>]+lang=", doc):
        no_lang.append(rel)

    heads = re.findall(r"<h1[\s>]", doc)
    if len(heads) == 0:
        no_h1.append(rel)
    elif len(heads) > 1:
        multi_h1.append(f"{rel} ({len(heads)})")

    for m in re.finditer(r'src="(/[^"?]+\.(?:jpg|jpeg|png|webp|gif|svg))"', doc, re.I):
        img_refs += 1
        ref = html.unescape(m.group(1))
        if ref.startswith("/images/"):
            shared_stock[ref] += 1
        if not os.path.exists(os.path.join(ROOT, ref.lstrip("/"))):
            missing_img[ref] += 1

    for tag in re.finditer(r"<img[^>]*>", doc):
        if "alt=" not in tag.group(0):
            img_no_alt.append(rel)

    for m in re.finditer(r'href="(/[^"#?]*)"', doc):
        link_refs += 1
        href = html.unescape(m.group(1))
        target = (
            os.path.join(ROOT, "index.html")
            if href == "/"
            else os.path.join(ROOT, href.strip("/"), "index.html")
        )
        if not os.path.exists(target) and not os.path.exists(
            os.path.join(ROOT, href.strip("/"))
        ):
            broken_link[href] += 1

    ids = re.findall(r'\sid="([^"]+)"', doc)
    dups = [i for i, c in collections.Counter(ids).items() if c > 1]
    if dups:
        dup_ids.append(f"{rel}: {dups[:3]}")

report = {
    "pages": pages,
    "imageRefs": img_refs,
    "internalLinks": link_refs,
    "missingImages": dict(missing_img),
    "brokenInternalLinks": dict(broken_link),
    "sharedStockImageRefs": dict(shared_stock),
    "pagesMissingNoindex": no_noindex,
    "pagesMissingTitle": no_title,
    "pagesMissingLangAttr": no_lang,
    "pagesWithNoH1": no_h1,
    "pagesWithMultipleH1": multi_h1,
    "imagesWithoutAltAttribute": len(img_no_alt),
    "pagesWithDuplicateIds": dup_ids,
}
print(json.dumps(report, indent=1))

FATAL = [
    "missingImages",
    "brokenInternalLinks",
    "sharedStockImageRefs",
    "pagesMissingNoindex",
    "pagesMissingTitle",
    "pagesMissingLangAttr",
    "pagesWithNoH1",
    "pagesWithMultipleH1",
    "pagesWithDuplicateIds",
]
bad = {k: report[k] for k in FATAL if report[k]}
if report["imagesWithoutAltAttribute"]:
    bad["imagesWithoutAltAttribute"] = report["imagesWithoutAltAttribute"]

if bad:
    print("\nFAILED:", ", ".join(bad), file=sys.stderr)
    sys.exit(1)
print("\nAll static checks passed.")
