# Undefined CSS custom properties, and the card structure they broke

## 2026-08-12 — Four spacing tokens were never declared

`preview/src/app/globals.css` declared `--space-1..6, 8, 10, 12, 16, 24`. The stylesheets
referenced **`--space-7`, `--space-9`, `--space-14` and `--space-20`** as well. None of those four
existed.

An undefined custom property is *invalid at computed-value time*. CSS does not fall back to
something reasonable — it drops the declaration to the property's **initial** value, and one bad
value voids an entire shorthand. So:

| Rule | Intended | Actually computed |
|---|---|---|
| `.pathCard-photo .pathBody { padding: var(--space-7) }` | 28px | **0** |
| `.heroEditorial { padding-block: var(--space-20) var(--space-16) }` | 80px / 64px | **0 / 0** |
| `.heroPanel { padding-block: var(--space-20) var(--space-14) }` | 80px / 56px | **0 / 0** |
| `.heroEditorialInner { gap: var(--space-14) }` | 56px | **0** |
| `.heroPanelInner { gap: var(--space-9) }` (≤1000px) | 36px | **0** |
| `.heroEditorialProof { padding-top: var(--space-7) }` | 28px | **0** |
| `.heroPanelProof { padding: var(--space-7) }` | 28px | **0** |

Effect on what prospects were sent: programme-card copy ran flush into the card edge and the
outlined "Behind the Wheel →" link stretched the full width of the tile like a form field, on every
client with photo-backed programme cards; and the 9 clients on the `editorial` or `panel` hero had
a hero with no internal spacing at all.

This is the failure mode to remember: **valid CSS, silent build, clean typecheck, page renders —
just wrong.** Nothing in the pipeline reported it, and the contrast audit could not see it because
contrast was never the problem.

Guarded now by `preview/src/app/tokens.test.ts`, which walks all five stylesheets and fails on any
`var()` reference that is neither declared nor given an inline fallback (with a short allow-list for
the properties set at runtime by `next/font`, the parallax handler and the per-client inline brand
style). It also pins the scale: `--space-N` must be N steps of 0.25rem.

## Same day — three structural faults in the photo programme cards

Found while fixing the above, in the same block of CSS.

1. **The card's own gradient wash never painted.** `.pathPhoto`, `.pathCard-photo::before` and
   `.pathCard-photo .pathBody::before` all sat at `z-index: -1`. Equal z-index resolves by tree
   order, and the `<img>` comes after the card's `::before`, so the photograph painted *over* the
   wash. Layers are now numbered explicitly: photo 0, wash 1, copy 2.
2. **The copy scrim was sized in percentages** — `inset: -30% -100% -100% -100%` — which stretched
   its gradient over ~460px while only ~260px of it was inside the card. Only the weakest third
   was visible: white body copy was landing on pale photography at roughly **0.36 alpha**. It is
   now anchored to the copy block with px stops, and the 0.9 stop is placed to coincide with the
   title's top edge, so every line of copy has ≥0.9 behind it regardless of card height or how
   long the summary is. Over a pure-white photograph that composites to RGB ~34, about 15:1
   against white text.
3. **The copy block was bottom-aligned**, which tied the title's position to how much sat below
   it. Tiles without a price started their titles 40px lower than tiles with one — same-size
   tiles, ragged row. Copy now runs from the top of a fixed 264px band with the link pushed to the
   bottom by `margin-top: auto`, so titles start on one line and controls finish on one line.

The photographs and the text-over-photograph treatment are unchanged — this was a spacing,
layering and alignment fix, not a redesign.

### Measured after the fix

Built output, in-browser, iframe at a fixed width, all 20 clients:

| Check | Result |
|---|---|
| Copy inset from card edge | 28px on every photo card (was 0) |
| Title top spread within a grid | **0px** at 1440px and 940px (was up to 40px) |
| Control bottom spread within a grid | **0px** |
| Copy overflowing the band | 0 cards |
| Full-width stretched links | 0 cards |
| Scrim alpha behind the first line | 0.90 at both 1440px and 375px |
| Hero padding / gaps | editorial 80/64 gap 56, panel 80/56 gap 48, proof panels 28 |
| Painted boxes holding text with no padding | 0, across home, pricing, about, contact, programme and area pages at 1440px and 375px |
| Horizontal overflow | 0 on every page checked |
| Typecheck / tests | clean / 345 passing |

No screenshot in that session: the browser pane was not being composited, so
`computer{screenshot}` timed out and Claude-in-Chrome was not connected. Everything above is
geometry and computed style read out of a real Chromium, which is stronger than a screenshot for
these particular claims but does not replace a look at the page — **worth an eyeball before the
next batch of outreach goes out.**
