# Mobile-first pass

Over **70% of driving-school traffic is phone traffic** ([Colorlib](https://colorlib.com/wp/driving-school-website-examples/)), so all four sites were re-diagnosed and rebuilt against a 390×844 viewport (iPhone 14/15/16 class) rather than scaled down from desktop.

## What was actually wrong

Measured in a real browser at 390×844, not estimated:

| Problem | Before | After |
|---|---|---|
| **Booking widget below the fold** (Cockpit) | started at **862px**, fold at 844px | **310px** — above the fold |
| Chrome before the headline | **291px** (34% of the screen) | **154px** |
| Utility bar wrapped to 3 lines | **102px** | hidden below `md` |
| Gauge cluster blocking the CTA | **293px** 2×2 grid | **97px** 4-across strip, moved *below* the booker |
| Instructor cards stacked | **1930px** (2.3 screens) | **825px** carousel |
| Total page length (Cockpit) | **12.3 screens** | **9.1 screens** |

The root cause was consistent: the pages were *responsive* but not *mobile-first*. Desktop composition order and desktop spacing were being inherited by phones.

## The five changes

**1. Booking widget hoisted above the fold.** On Cockpit the hero is now a flex column on mobile — headline → booking widget → stat strip — and only becomes the two-column grid from `lg`. The single element that converts is now the first thing after the headline.

**2. Utility bar is desktop-only.** It existed to show a DMV licence number, wrapped to three lines on a phone, and cost 102px. The licence already appears in the header lockup and the phone number is in the sticky bottom bar, so nothing is lost.

**3. `.hscroll` — carousel on phones, grid on desktop.** One class, defined in each `globals.css`:

```css
.hscroll { display:flex; overflow-x:auto; scroll-snap-type:x mandatory; margin-inline:-1.5rem; padding-inline:1.5rem; }
.hscroll > * { scroll-snap-align:start; flex:0 0 78%; }
@media (min-width:768px){ .hscroll{ display:grid; grid-template-columns:repeat(3,1fr); overflow:visible; } }
```

Cards are 78% wide so the next one peeks in — that partial card *is* the swipe affordance, no arrows or dots needed. It bleeds to the viewport edge so it reads as native rather than boxed. Applied to instructors, reviews, pricing tiers and program cards.

**4. Mobile spacing scale.** Section padding was a flat 96px. Now `py-14` (56px) on phones, `md:py-24` (96px) from tablet up. Footer link lists are two columns on phones — 44px rows in a single column made the footer a full screen on its own.

**5. Grids that were single-column on phones are now 2-up** where the content is short: enrolment steps, licensing tiles, Atelier's service-area list (1064px → 730px).

## Contrast fixes found during the pass

| Site | Element | Was | Now |
|---|---|---|---|
| Apex | Lane index numerals `01/02/03` | `#E2E8F0` on `#F8FAFC` = **1.18:1** | `#7C8DA6` = **3.4:1** |
| Apex | Footer brand lockup | 40px tap target | 44px |
| Cockpit | Compact gauge labels | ~10px | 11px |

The lane numerals are worth calling out: at 1.18:1 they were a *design* failure as much as an accessibility one — the ghost-numeral effect had gone so far the numbers were invisible.

## Verified

At 390×844, per site: **0 contrast failures**, **0 tap targets under 44px**, **no horizontal overflow**, 16px body text, sticky call/book bar present, carousels confirmed swipeable (scroll width exceeds client width).

All four `tsc --noEmit` and `npm run build` pass.

**Caveat:** the browser pane in the build session could not composite frames, so no screenshot was possible. Everything above is measured from the live DOM — geometry, computed styles and contrast ratios — not seen. Open each site on a real phone before sending links out.

## Where the research changed a decision

Most driving schools **hide pricing behind an enquiry form**. All four of these sites publish prices, and Cockpit adds a live calculator. That was a deliberate keep, not an oversight — it is the clearest differentiator against the incumbent sites in this niche.

Patterns adopted from the research: card-based service categorisation, testimonial carousels, instructor credentials as a trust signal, and location/area organisation.

Sources: [Colorlib — 24 driving school website examples](https://colorlib.com/wp/driving-school-website-examples/), [Webflow driving school templates](https://webflow.com/list/driving-school), [Apex Studio design inspiration](https://apexdot.io/blog/driving-schools-website-examples-inspiration)

## Still long

Atelier is **13 screens** and Safe Route **11.6**. Both are content-heavy by design (Atelier is the editorial variant). If you want them shorter, the next cuts would be collapsing the FAQ to three questions and dropping the enrolment-steps section, which repeats what the packages section already says.
