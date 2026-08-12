# Log

Newest first. One entry per session or per distinct piece of work.

---

## 2026-08-13 — The chrome was holding a quarter of the phone screen

Third report off a phone, and the framing that matters: **these are mobile-first pages.**
73px of sticky header plus 88px of fixed call bar is 24% of a 667px screen, held
permanently. Both now travel with the scroll direction — gone going down, back going up —
below 1024px. The bar stays at the bottom rather than moving up beside the header: the
bottom edge is the only part of a phone a thumb reaches without regripping, and calling is
the conversion. The assistant is a 58px circle with a speech bubble instead of a pill that
read as a banner.

Two bugs found in the doing. "Book a lesson" wrapped at 320px and made the bar taller than
the room reserved for it. And the reserved room was driven from the value that animates, so
the document shrank 72px every time the bar left — content jumping on every direction
change, with an oscillation waiting at the foot of the page. The second was caught on the
live deploy; the local pass had sampled the padding in the state where it was correct.

The hide/show decision is a pure function with its own tests — thumb jitter, slow drags,
iOS rubber-band, panel open. Tests 387 -> 394.

Detail in [017-mobile-chrome.md](017-mobile-chrome.md).

---

## 2026-08-12 — Photographs were being served exactly as scraped

Second report off the live site: images take too long to appear, and the pages without any
look bare beside the pages with them.

The delivery half was real and unnoticed. A static export cannot run next/image's
optimiser, so `unoptimized: true` was set and every `<Image>` emitted the original file at
its original size with no `srcset` — a 1231KB PNG behind a 361px card, an 806KB JPEG behind
a 511px portrait. There was no step between "scraped" and "served". There is now: a sharp
pass writes a WebP ladder into `public/d`, and a `<Photo>` component carries srcset, the
declared sizes, intrinsic dimensions and a 16px blurred placeholder so the space is the
colour of the photograph from the first paint. Live, warm edge, cache bypassed: the hero
went 806KB/1708ms to 68KB/289ms; a card image went 1231KB to 56KB.

The bare-page half was half a content gap and half our own oversight — Academic's real logo
and a photograph of their own signwritten car were sitting unused in the scraped assets
while their preview rendered a monogram and no pictures. Both wired. AllGood, Kanor and
Driving School For You genuinely have nothing usable; their own photography is still the
ask.

Also fixed: section shading was keyed off the index into `client.sections`, so a section
dropped for want of data left its neighbours matching.

Detail in [016-photograph-delivery.md](016-photograph-delivery.md).

---

## 2026-08-12 — Four spacing tokens that were never declared

Reported from a live screenshot: the programme cards read as unstructured on "almost every one" of
the twenty previews. They were. `--space-7`, `--space-9`, `--space-14` and `--space-20` were
referenced by the stylesheets and declared nowhere, and an undefined custom property does not fall
back — it drops the declaration to its initial value. Card copy was rendering with `padding: 0`
against the card edge, and the `editorial` and `panel` heroes (9 clients) had no vertical padding
at all.

Three more faults in the same cards, all structural rather than cosmetic: the card's gradient wash
was painting *underneath* the photograph because photo, wash and copy scrim all sat at `z-index:-1`;
the copy scrim was inset in percentages, so only its weakest third fell inside the card and white
copy sat on pale photography at ~0.36 alpha; and the copy block was bottom-aligned, so a tile
without a price started its title 40px below its neighbour's.

Photographs and the text-over-photograph treatment kept as designed — spacing, layering and
alignment only. Now guarded by a test that fails on any `var()` with no declaration and no
fallback, which is the only part of this the build could ever have caught. Tests 344 → 345.

Detail and post-fix measurements in
[015-css-tokens-and-card-structure.md](015-css-tokens-and-card-structure.md).

---

## 2026-08-12 — Live at epoches.pages.dev

All 20 previews deployed and verified on the live domain: 20/20 returning 200, 20/20 `noindex`,
20/20 correct canonical, 31 images off the edge with none broken.

Got there via one wrong turn worth remembering. The first deploy went to the **Epoches company**
account purely because Wrangler was already logged in there — torn down the same hour. Being
authenticated answers *can I deploy*, never *should this land here*.

It also exposed a bug nothing static could catch: `canonical` and `og:url` were baked to
`preview.epoches.com`, **a domain that has never existed**. Invisible on the page, fatal to a
pasted link. Fixed at the root — the default in `seo.ts` now resolves.

Detail in [014-deployment.md](014-deployment.md).

---

## 2026-08-10 — Assistant, package finder and booking flow

Shipped on every page of every preview. Deterministic rather than model-backed —
no server to hold a key, and no way to invent a pass rate for a real business.
Detail in [013-assistant-and-ai-features.md](013-assistant-and-ai-features.md).

324 tests (was 144). The new suite proves the assistant cannot state a number the
client does not publish. It caught one real evasion: "what is your pass rate?"
was matching the drive-test intent on the word *pass*.

---

## 2026-08-09 — The previews were a template with the nouns swapped

Reported by Mohib, correct on every count, and worse than described once measured.
All twenty About pages carried the same photograph of the same students. Every
home-page heading was hardcoded in one component, in one order, for all twenty.
Full account in [012-stop-shipping-a-template.md](012-stop-shipping-a-template.md).

After: 128 section headings across the twenty, **128 distinct, zero repeated**; hero
composition split 10/5/5; **zero shared-stock images** across 293 pages; every About
page carrying that client's own history.

Also fixed the two rendering defects he named: hero hairlines that faded out
mid-image, and the hours diagram that printed one labelled "2h" button per lesson.

---

## 2026-08-09 — Manoeuvre simulator rewritten on a vehicle model

The parallel park was wrong, was reported as wrong, and had been signed off as correct by a test
that was skipping the exact frame where it broke.

Replaced hand-authored waypoints with a kinematic bicycle model. Detail in
[009-manoeuvre-simulator.md](009-manoeuvre-simulator.md). Tests 118 → 144.

Also created this memory directory, which had been asked for earlier and not done.

---

## 2026-08-09 — The remaining nineteen previews built

Nineteen prospect sites scraped, digested, colour-sampled and written up as client data files, to
the same standard as the Safety First preview. Twenty previews, 293 pages, one Cloudflare Pages
project.

- Four DMV licence numbers recovered that the enrichment pass had recorded as "not captured" —
  one of them printed inside a logo image. See [007-the-twenty-clients.md](007-the-twenty-clients.md).
- Ten schools publish an unverifiable pass rate or customer count. None of it reproduced. See
  [006-claims-refused.md](006-claims-refused.md).
- Six pairs of different businesses were colliding on the same preview slug in the outreach
  workbook. Both halves would have been emailed the same link. See
  [008-workbook-and-slugs.md](008-workbook-and-slugs.md).
- Live contrast audit across 62 pages found four real defects, all fixed. See
  [004-brand-colour-and-contrast.md](004-brand-colour-and-contrast.md).

Nothing committed to git yet.

---

## Earlier — Safety First preview built end to end

First preview, used as the design reference for the other nineteen. Scrape → brand sample →
variant choice → build → verify. Established the pipeline the rest reuse.
