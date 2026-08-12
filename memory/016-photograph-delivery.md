# How photographs are delivered

## 2026-08-12 — The previews were serving the scraped originals, untouched

Reported from the live site: photographs took too long to appear, and the pages that
have none look bare next to the pages that do.

The first half was a delivery fault. `next.config.ts` sets `images: { unoptimized: true }`
— it has to, because the optimiser needs a server and this is a static export — so every
`next/image` emitted **the original file, at its original size, with no `srcset`**. The
originals are exactly as each client's own site serves them:

| Original | Weight | Displayed at |
|---|---|---|
| `express/chula-vista.png` | 1231KB | 361px card |
| `learn-2-drive/hero.jpg` | 806KB | 511px portrait |
| `easy-street/renee.jpg` | 997KB | 92px avatar |

Nothing was wrong with the markup; there was simply no step between "scraped" and
"served".

### What now happens

`preview/scripts/derive-photos.mjs` (sharp) walks every original under
`public/clients` and `public/images` and writes a WebP ladder into **`public/d`**,
mirroring the source path — 400/800/1200/1600 for photographs, 200/400/800 for flat
art, **never upscaled**. It records intrinsic size, whether the source has alpha, the
ladder, and a 16px blurred placeholder in `src/data/photo-manifest.json`, keyed by the
original path so **no client data file has to change**.

`<Photo>` (`src/components/Photo.tsx`) replaced `next/image` at all eleven call sites and
gives every photograph: `srcset` + the `sizes` each layout already declared; intrinsic
`width`/`height` so nothing moves when the image lands; the placeholder as a CSS
background so the space is the colour of the photograph from the first paint instead of
a white hole; and `loading`/`fetchpriority` set by whether it is above the fold. An
unknown path **throws at build time** rather than rendering a broken image at a prospect.

Decisions worth keeping:

- **Content hash, not mtime**, for change detection. Git does not preserve mtimes, so
  mtime would make CI re-derive everything on every run and still call it a change.
- **The manifest is committed; the ladder is not.** The typecheck and the tests read the
  manifest and both run *before* the build that regenerates the ladder. `public/d` is
  gitignored — 311 WebP files have no business churning in the diff.
- **The originals are never touched.** They are the only copy of some of this material
  and a lossy pass over them does not reverse.
- **`--check` mode** validates the committed manifest against the committed originals
  without needing the ladder on disk, which is what CI runs before the tests.
- The deploy workflow now runs `npm run build`, not `npx next build`, because the build
  script derives first. Getting this wrong ships an export whose every `srcset` 404s.
- The static audit resolves **srcset rungs** as well as `src`, and its shared-stock rule
  covers `/d/images/...` too — otherwise twenty previews could quietly go back to sharing
  one photograph of one set of students through a derived path.

### Measured on the live host, warm edge, cache bypassed

| | Before | After |
|---|---|---|
| `learn-2-drive` hero | 806KB, 1708/1005/834ms | **68KB, 289/246/499ms** |
| `express` card image | 1231KB, 2131/953/892ms | **56KB, 191/188/187ms** |
| Learn 2 Drive home, initial viewport | 924KB | **72KB** |
| Easy Street home, initial viewport | 379KB | **52KB** |

All 20 clients: `srcset` on every photograph, intrinsic dimensions on every photograph,
a placeholder on everything except transparent logos (which get none by design), two
image fetches to first paint at 1440px.

**Still open:** the 24MB of originals under `public/clients` are still uploaded with the
export even though nothing references them any more — deploy time, not page weight.
Moving them outside `public/` would fix that; the manifest keys would become purely
logical, which is already how `<Photo>` treats them.

## Same day — Academic had images available and was showing none

The second half of the report. Academic's preview had no photograph at all and an "AD"
monogram where their logo belongs, while **both were sitting unused in
`research/academic-driving-school/assets/`**: their real transparent-PNG logo, and a
photograph of their own signwritten car — their logo on the door, their phone number
under it, a real student at the wheel. Both now wired; the logo runs in the header and
footer, the photograph in the `roadTest` slot (the smallest photo slot, because at
394x403 it is already filling ~470px there).

Everything else in their media library stays out: Astra theme furniture
(`*-free-img.jpg`), pixabay road signs, clip-art traffic lights watermarked
`4-designer.com`. Filling a slot with a theme demo is the failure
[012-stop-shipping-a-template.md](012-stop-shipping-a-template.md) records.

**Three clients still have no usable photography: AllGood, Kanor, Driving School For
You.** Their only scraped candidates are stock — AllGood's single asset is a woman
holding a *European* driving licence, which on a California school's page is a tell, not
a photograph. Their own photography remains the ask, unchanged from
[011-open-items.md](011-open-items.md).

## Same day — the alternating surfaces were keyed off the wrong index

Found while looking at Academic. `HomePage` shaded each section by its index into
`client.sections`, so a section dropped for want of data took its shade with it: Academic
publishes no packages and no instructors, and `programs` and `road-test` both came out
`section-alt` and ran together as one undifferentiated block. The alternation now counts
only sections that actually render. Verified `ABABAB…` with zero adjacent duplicates on
Newport, Academic, A1, Kanor and Sanctified.
