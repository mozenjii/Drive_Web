"""Pull the checkable facts out of a scrape, each with the page it came from.

    python research/tools/facts.py <slug> [<slug> ...]

digest.py makes a scrape readable; this makes it *auditable*. Every value a
client file is allowed to assert — a DMV licence number, a price, a phone
number, an address, opening hours — has to come from the prospect's own page,
and this prints them next to the page they appear on so writing the file is
transcription rather than recall.

It also prints the claims that must NOT be reproduced (pass rates, "#1", student
counts), because those are easier to leave out when you have seen the list.
See sites/VERIFY.md for the claim verification rules.
"""
from __future__ import annotations

import os
import re
import sys
from collections import OrderedDict

# These pages are other people's marketing copy: curly quotes, em dashes, the
# occasional emoji. On Windows a piped stdout defaults to cp1252 and the whole
# run dies on the first one, halfway through a client's facts.
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

PATTERNS = OrderedDict([
    # DMV licence numbers. California driving-school licences are E#### or a bare
    # four digits next to the word licence; both spellings appear in the wild.
    ("licence", re.compile(r"(?:licen[cs]e|lic\.?|#)\s*[:#]?\s*(E\d{3,5}|\d{4,5})\b|\b(E\d{4})\b", re.I)),
    ("phone", re.compile(r"\(?\b\d{3}\)?[\s.\-]\d{3}[\s.\-]\d{4}\b")),
    ("email", re.compile(r"\b[\w.+-]+@[\w-]+\.[\w.]{2,}\b")),
    ("price", re.compile(r"\$\s?\d[\d,]*(?:\.\d{2})?")),
    ("zip", re.compile(r"\b(?:CA|California)[\s,]+9\d{4}\b")),
    ("hours", re.compile(r"\b(?:mon|tue|wed|thu|fri|sat|sun)[a-z]*\.?\s*(?:[-–—]|through|to)?[^\n]{0,40}?\d{1,2}\s*(?::\d{2})?\s*(?:am|pm)", re.I)),
    ("founded", re.compile(r"\b(?:since|est\.?|established|serving[^\n]{0,30}?since)\s*(?:19|20)\d{2}\b|\b(?:19|20)\d{2}\s*[-–—]\s*(?:19|20)?\d{2,4}\b", re.I)),
    ("years", re.compile(r"\b(?:over\s+)?\d{1,2}\+?\s*years?\b[^\n]{0,30}", re.I)),
])

# Anything matching these is a claim about performance or scale. Never reproduced.
REFUSE = re.compile(
    r"\b\d{1,3}\s*%|\bpass(?:ing)?\s*rate|\bfirst[\s-]?time\s*pass|#\s*1\b|\bnumber\s*one\b"
    r"|\bbest\s+in\b|\btop\s+rated\b|\b\d[\d,]{2,}\+?\s*(?:students?|drivers?|licenses?|licences?)\b"
    r"|\bguarantee",
    re.I,
)


def read_pages(slug: str):
    pages_dir = os.path.join(ROOT, slug, "pages")
    if not os.path.isdir(pages_dir):
        return
    for name in sorted(os.listdir(pages_dir)):
        with open(os.path.join(pages_dir, name), encoding="utf-8", errors="replace") as fh:
            yield name, fh.read()


def main(slug: str) -> None:
    print(f"\n{'=' * 72}\n{slug}\n{'=' * 72}")
    found = {k: OrderedDict() for k in PATTERNS}
    refused: OrderedDict[str, list[str]] = OrderedDict()
    pages = 0

    for name, text in read_pages(slug):
        pages += 1
        for key, pattern in PATTERNS.items():
            for m in pattern.finditer(text):
                value = " ".join(m.group(0).split())[:90]
                found[key].setdefault(value, name)
        for line in text.splitlines():
            line = " ".join(line.split())
            if line and REFUSE.search(line):
                refused.setdefault(line[:150], []).append(name)

    if not pages:
        print("  no pages — scrape produced nothing")
        return

    for key, values in found.items():
        if not values:
            continue
        print(f"\n  {key.upper()}")
        for value, page in list(values.items())[:14]:
            print(f"    {value:<52} <- {page}")
        if len(values) > 14:
            print(f"    ... {len(values) - 14} more")

    if refused:
        print(f"\n  DO NOT REPRODUCE ({len(refused)})")
        for line, pages_seen in list(refused.items())[:12]:
            print(f"    {line}  <- {pages_seen[0]}")


if __name__ == "__main__":
    for slug in sys.argv[1:]:
        main(slug)
