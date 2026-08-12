# Brand colour, and why it nearly always needs darkening

## The rule

**Keep their hue. Lower the lightness until it passes AA. Re-measure.**

Never ship the raw scraped hex — it produces an unreadable page. Never fall back to a safe
default either — that throws away the main reason the preview persuades.

Sample the logo's **actual pixels** (PIL, median-cut quantised, `research/tools/palette.py`).
Do not eyeball a hex, and do not lift colours from a site's CSS: Bootstrap's `#337AB7` and
Gutenberg's `#CF2E2E` turn up in half these sites and mean nothing.

## How often it bit

Sixteen of twenty carry a brand override. **Ten of those needed darkening.**

| Client | As published | Contrast on white |
|---|---|---|
| Easy Street | green | 2.05:1 |
| Express | amber | 2.03:1 |
| Newport | sky blue | 2.13:1 |
| Dollar | gold | 1.23:1 |
| Safety First | `#F06C30` orange | 3.05:1 → shipped `#C25214` at 4.65:1 |

Four needed no correction: Turlock's purple, A1's red and blue, MAS's red, Sanctified's red.

Four have **no brand at all** — H and G's "logo" is stock clip-art of road signs, Kanor's only
mark is a white SVG for a dark header. Those ship on the template palette with the gap recorded
in `internalNotes`. Say the brand is absent; do not invent one.

## Passing on white is not enough

This is the part that was got wrong and only caught by a live audit.

A colour that clears 4.5:1 on **white** can still fail on `--primary-soft`, which is where
kickers, nav pills, chips and inline links actually sit. The tint costs roughly a fifth of the
ratio.

Four real failures found in the live audit on 2026-08-09, all fixed:

| Where | Measured | Cause |
|---|---|---|
| `.kicker` on MAS | 3.77:1 | `--primary` on `--primary-soft`; measured 4.56:1 on white |
| `.brandSub` on Apex | 4.37:1 | `--fg-dim` never corrected when Safe Route's was |
| `.brandSub` on Atelier | 4.30:1 | same |
| `.pickerFoot a` on Easy Street, Express | 4.21:1 | inline link on a tinted section background |

Fixes: every rule where text lands on a soft or tinted background now uses `--primary-dark` —
`.kicker`, `.navLink:hover`, `.navLink[aria-current]`, `a.chip:hover`, `.opsChip`,
`.btn-ghost:hover`, `.pickerFoot a`. Apex `--fg-dim` `#64748b` → `#5a6778`; Atelier `#7a736a` →
`#6b645a`.

**A brand only just over 4.5:1 will fail somewhere. Aim for 5:1+ on anything small.**

## Tint the neutrals too

Blue borders around a purple brand is the tell that a template was reskinned rather than
designed. `brand.border`, `borderSoft`, `bg` and `fgDim` exist for that. Keep `fgDim` close to
grey — a washed-out version of a red brand reads as a rendering fault, not as a brand.

## Guarded

`preview/src/lib/brand.test.ts` fails the build below 4.5:1 where a colour carries text, and
asserts the `primaryDark`/`primarySoft` pair directly. It has already earned its place: Newport's
accent `#1E7EB1` measured **4.4925:1** — three thousandths under the line once rounded to hex.
Shipped as `#1B77A6` (4.96:1) instead.

The template palettes needed the same treatment. Safe Route green `#16A34A` (3.3:1) and Atelier
brass `#B4823C` (3.22:1) are darkened in `variants.css`. **Do not "restore" the brighter
originals.**

## Auditing contrast

Composite alpha properly — `fg[3]*fg + (1-fg[3])*bg`. An earlier sampler skipped translucent
backgrounds and landed on white, which reported `.simBadge` at 1:1 and buried the real failures
in false positives. Exclude the photo-backed hero; there is no single background colour there.
