# Scrape tooling

The scripts that produced everything in `research/`. Kept in the repo because the
client files assert facts about real businesses, and an evidence trail that cannot
be regenerated is not much of an evidence trail.

```bash
python research/tools/scrape.py research/tools/targets.json           # all sites
python research/tools/scrape.py research/tools/targets.json <slug>    # one site
python research/tools/digest.py <slug>                                # readable
python research/tools/brand.py <logo.png>                             # sample a logo
python research/tools/palette.py <name> <primaryHex> <accentHex>      # AA-clean tokens
python research/tools/sitecolours.py <url>                            # colours from their CSS
```

- **scrape.py** — crawls a site breadth-first, prioritising the pages that carry facts
  (pricing, services, about, instructors, contact), and saves the visible text of each
  plus every image over 120×90.
- **digest.py** — collapses a scrape into the part that is about the business. Lines
  appearing on 60%+ of pages are chrome and get printed once; each page then shows only
  what is unique to it. The difference between reading 8 pages and 8 copies of a menu.
- **brand.py** — quantises a logo and picks primary/accent by coverage, breaking ties on
  saturation. Coverage decides, so a small very saturated accent cannot outrank the colour
  the mark is mostly made of.
- **palette.py** — turns two hexes into a full token block, keeping each hue and lowering
  lightness only as far as it has to. Everything it prints has already been re-measured.
- **sitecolours.py** — counts hex and `rgb()` declarations across a page and its
  stylesheets, dropping neutrals. Useful when the logo is a photograph or missing —
  but watch for framework defaults: Bootstrap's `#337AB7` is not a brand.

`targets.json` is the nineteen sites scraped on 2026-08-09. Safety First was scraped
earlier by hand; its record is `research/safety-first-driving-school.md`.
