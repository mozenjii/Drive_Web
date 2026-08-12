# What has actually been measured

Distinguishing measured from assumed, because "it looked fine" has already been wrong once on
this project.

## As of 2026-08-09

| Check | Result | How |
|---|---|---|
| Clients / pages built | 20 / 293 | `next build`, static export in `preview/out` |
| Typecheck | clean | `tsc --noEmit` |
| Tests | **144 passing** | `vitest run` — geometry + per-client brand contrast |
| Contrast failures | **0** across 62 pages, 5,862 text nodes | live in-browser sampler, alpha-composited |
| Broken images | 0 of 425 references | resolved against `preview/out` on disk |
| Broken internal links | 0 of 10,126 | same |
| Pages missing `noindex` | 0 of 293 | same |
| Client photography | 13 of 20 | — |
| Workbook slugs | 211 unique, 20/20 matched | `build_workbook.py` regenerated |

Conditional blocks verified as rendering on exactly the right clients: `hiring` on Easy Street
and H and G only; the fleet gallery on Turlock only; instructor pages on the eight clients with
named staff.

## 2026-08-10 — full sweep, all 293 pages

Every earlier run covered a subset. This one did not.

`research/tools/audit-static.py` over the whole export — **293 pages, 422 image
references, 10,916 internal links** — and every check came back empty: no missing
images, no broken links, no shared-stock references, no page missing noindex, a
title and a `lang` attribute on every page, exactly one `h1` on every page, an
`alt` on every image, no duplicate element ids.

Runtime, in a real browser across all twenty clients: **98 images all painted**
(`naturalWidth > 0` after forcing eager load), **zero console errors**, and the
assistant and manoeuvre simulator present and mounted on every one.

**That audit is now a deploy gate** — it replaced the two inline shell checks in
`.github/workflows/deploy-previews.yml`, and it is stricter than both.

Still NOT gated: `audit-visual.js`, which needs a real browser. It is run by hand.
Wiring it in means adding Playwright to CI.

## How the contrast audit works, and how it was wrong first

Walk every text node in the built pages, resolve its computed colour against its **composited**
background: `fg[3]*fg + (1-fg[3])*bg`.

The first version skipped translucent backgrounds and landed on white, which reported
`.simBadge` at 1:1 and buried the four genuine failures under false positives. With proper alpha
compositing, false positives went to zero. The photo-backed hero is excluded — there is no single
background colour there to measure against.

## Things that look like bugs and are not

- **Images report `naturalWidth: 0` and empty `currentSrc`.** Chrome does not fire lazy-load
  fetches when the Browser pane is hidden and not compositing frames. Confirmed by forcing
  `loading='eager'` — all eight loaded. Not a real defect.
- **`requestAnimationFrame` never fires** while the pane is hidden, so animations cannot be
  sampled live. Verify end states and frame data instead.
- **`computer{action:"screenshot"}` times out** for the same reason. Everything visual here was
  verified through `read_page`, `javascript_tool` and static analysis of the built output.

## Environment notes

- The shell's working directory resets between Bash calls — prefix with `cd /d/Code/DriveWeb`.
- `cp` is aliased to `cp -i` and will silently prompt. Use `\cp -f`. One file (Learn 2 Drive's
  hero) was not replaced for exactly this reason and was only spotted by its file size.
- `find` over `node_modules` times out at two minutes. Use Glob or targeted paths.
- Python's stdout buffering makes a backgrounded scrape log look like it is doing nothing. Watch
  the output directory grow instead.
