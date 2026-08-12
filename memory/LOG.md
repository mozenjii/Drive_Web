# Log

Newest first. One entry per session or per distinct piece of work.

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
