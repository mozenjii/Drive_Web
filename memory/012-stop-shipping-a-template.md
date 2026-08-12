# The previews were a template with the nouns swapped

## 2026-08-09 — reported by Mohib, and correct on every count

Three complaints, all true, all verified in the code before touching anything.

### 1. The same photograph on twenty different businesses

`AboutPage.tsx` line 29 hardcoded `src="/images/students-1.jpg"`. **All twenty About
pages showed the same photograph of the same students**, with alt text naming a
different school on each one. `InstructorsPage.tsx` did the same with
`/images/hiring-banner.jpg`.

`lib/photos.ts` also resolved any missing slot to shared stock, so seven clients ran
entirely on other people's pictures.

**Fixed by deleting the fallback, not by improving it.** `photoFor()` returns
`undefined` and every caller composes without the image. A missing photograph is now
a missing photograph.

Measured after: **0 shared-stock image references across all 293 pages.**

### 2. Every design the same

`HomePage.tsx` hardcoded every heading and lede, in a fixed order, for all twenty:

> "Tell us who you are." · "Every price, on one page." · "This is the line the
> examiner wants." · "The same instructor, every lesson." · "Dual controls, every
> lesson." · "Where we pick up." · "Ready when you are."

Worse, the ledes made claims — *"Every instructor is DMV-trained, medically examined
and background-checked"* — about businesses nobody had checked that against.

**Fixed by moving composition into the data model.** `Client.sections` is a
**required** array: render order, presence and copy, per client, written from their
own site. `Client.heroStyle` picks one of three compositions (`stage`, `editorial`,
`panel`). The compiler refuses to build a client that has not been authored.

Measured after: **128 section headings across twenty previews, 128 distinct, zero
repeated.** Hero split 10 stage / 5 editorial / 5 panel. Section counts 5–8.

### 3. The recreation looked worse than the original

Two concrete rendering defects, both reported and both real:

- **`.stageRails`** — three 1px white vertical lines over the hero that faded to
  transparent at 22% and 78%, each with a stray 5px dot partway down. Lines that
  start and stop for no reason. **Deleted.**
- **`.journey` connector** — `linear-gradient(180deg, var(--border), transparent)`,
  so the line between numbered steps faded out before reaching the next step.
  **Now continuous, drawn as lane markings.**
- **`HoursBar`** — printed a filled chip reading "2h" for *every lesson*, so a
  twenty-hour package drew ten identical labelled buttons inside one card. Reported
  as "a two-hour button multiplied by four... again and again in the same card".
  **Now a segmented bar with the duration written once.**

### The flagship was the worst of the twenty

Safety First — the preview used as the design reference for the other nineteen —
had **eleven of its own photographs sitting unused** in `research/safety-first-assets/`
and was running on shared stock plus a generic `client-logo.png`. Its own signwritten
student-driver car, its own logo and its own recruitment banner were all there.

Now wired. The hiring requirements on that preview are transcribed from their own
banner artwork rather than assumed.

## What still stands

- 385 of 467 scraped assets remain unused. Some are genuinely theirs; many are theme
  demo files (Astra `*-free-img.jpg`) which are no more "theirs" than our stock, and
  should not be used just to fill a slot.
- Four clients — Academic, AllGood, Kanor, Driving School For You — have no usable
  photography at all. They ship on the `panel` hero, which is honest but sparse.
  Photography is the ask for those four.

## The regression that followed, and the audit that now catches it

Adding two new hero compositions immediately produced a worse bug than the one
being fixed, reported from a screenshot within the hour.

**White text on a white background.** `.stageKicker`, `.proofValue` and
`.proofLabel` were written for the full-bleed photo hero, where white is correct.
`editorial` and `panel` reused them on a **light** surface, so the licence line
and every proof figure on ten previews became invisible. Worse, **neither new
hero had any CSS at all** — every class referenced (`.heroEditorial`,
`.heroPanel`, `.heroPortrait`, `.heroSerifTitle`) was undefined, so the layout
was unstyled too.

Fixed by inverting the default: the shared hero atoms are now **dark by default**
and only `.stage` overrides them to white. A new composition on a light surface
is now correct by default instead of invisible by default.

**Why nothing caught it.** The build passed, 144 tests passed, `tsc` passed, and
the static checks (noindex, image references, links) all passed. None of them
looks at computed colour against computed background. Verification was static
analysis plus one screenshot of one page.

**`research/tools/audit-visual.js`** now walks every page in a real browser and
reports three things: contrast against the actual alpha-composited background,
horizontal overflow, and sibling cards in a stretched grid whose heights
disagree. Two lessons are baked into it:

- An ancestor painting a **gradient** reports `backgroundColor: transparent`.
  Measuring past it produced 49 failures of which 47 were false — `.finalCta`,
  `.avatar` and `.brandMark` are all white-on-gradient and perfectly legible.
  The sampler now returns *"cannot judge"* rather than a wrong answer.
- Card heights must only be compared **within a row**, and only in grids that are
  actually stretched. Second rows are legitimately shorter, and the About page
  sets prose beside a short card on purpose.

Result after the fix: **50 pages, 4,757 text nodes, 0 contrast failures, 0
overflow, 0 uneven rows.**

The one genuine failure it found was `Since 2018` at **4.45:1** — Learn 2 Drive's
brass on its own `--primary-soft`. Same class of bug as
[004](004-brand-colour-and-contrast.md): passes on white, fails on the tint.
Fixed structurally by making `.stageKicker em` use `--primary-dark`, which is the
token `brand.test.ts` already asserts against `--primary-soft`.

## Card grids must not mix treatments

Three photo tiles beside one plain white tile, at three different heights, with
copy running into the rounded corner. Within a photo grid **every** tile now gets
the photo treatment — a programme with no image gets a brand gradient fill rather
than a white card — heights are equal, the scrim is heavier and taller, and the
copy is capped at 38ch so it stops short of the edge.

## Card grids, second pass — copy length was driving the layout

Reported again from a screenshot: one tile unreadable, the row looking ragged.
Measuring it contradicted the obvious diagnosis — fonts were already consistent
(Plus Jakarta Sans throughout, 800 on every heading) and every tile was already
exactly 340px. Two different causes:

- **The scrim was positioned against the card, the text was not.** A summary of
  133 characters started 35% up the tile instead of 43%, which put it above the
  dark part of the gradient and onto a bright car window. `.pathBody` now carries
  its own scrim, so the dark backing travels with the text regardless of length,
  and the summary is clamped to two lines.
- **Three tiles in a two-column grid** left the third stranded beside a hole.
  Column count now follows card count.

After: 10 photo grids, **0 height spread, 0 copy-position spread** — every tile's
copy starts at 41%. 16 clients × 3 pages: **0 ragged rows, 0 horizontal
overflow**. 1,720 text nodes, 0 contrast failures.

Two things the sweep cleared rather than found: the only non-brand typeface on
any page was the local static server's own 404 page, and all 293 pages have
**0 broken internal links** — the `/pricing/` and `/instructors/` paths that 404
are the clients who legitimately have neither, and nothing links to them.

## Reference sites Mohib supplied

drivingschool.net, Radford Racing School, RED Driving School, American Driving
Academy. Patterns worth taking, in order of value:

1. **Photo-backed category cards** (Radford's "Choose your track driving lesson") —
   adopted: `pathCard-photo`, two-up, copy on a scrim, outlined control on the image.
2. **A numbered journey as a road** (RED's "Everything from getting started to being
   newly qualified") — the connector fix is the start of this; the full six-step road
   layout is not built yet.
3. **Stat band** (ADA's 25+ / 40K / 75+ / 15) — exists as `StatBand` but only on
   interior pages, not the home page.
4. **Why-choose-us icon grid** (RED and ADA both) — not built.
5. **Location block with map and written directions** (Radford) — not built.
6. **Review block with source badge and aggregate score** (all three) — partially
   there; no source badge.

Related: [[003-design-variants]], [[005-photography-and-permissions]]
