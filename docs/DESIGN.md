# Choosing the design for a client

The template is not a default. It is a decision made **after** reading the business, and it can be
changed at any point — `variant` is one field, and every component themes itself from tokens.

## 1. Read the business first

Before touching a template, collect from their own site:

- **Their logo** and the colours in it. Sample the actual pixels, do not eyeball.
- **Their photography.** Real people beat any illustration; see the global photography rule.
- **Who is buying.** A parent buying for a 15-year-old, an adult buying for themselves, and a
  referral-led owner-operator want visibly different pages.
- **The register of their copy.** "Help us change the way people drive" and "Premium instruction
  since 1979" are not the same business.

## 2. Pick the variant

| Variant | Buyer | Signals to look for | Feel |
|---|---|---|---|
| **Safe Route** | Parent of a teen | Teen-heavy programs, driver-ed course, school pickup, "safety" in the name or copy | Trust, licensing, reassurance. Rounded, open, blue-green. |
| **Apex** | Adult learner / retake | Road-test-only services, adult programs, licence transfers, "fast", "pass" | Decisive, engineered. Square corners, tighter tracking, uppercase actions, red. |
| **Atelier** | Referral-led owner-operator | Founded decades ago, named founder, small team, premium pricing, testimonials that name people | Editorial and personal. Serif headlines, warm paper, brass, generous space. |

If a client straddles two, choose by **who pays**, not by what they sell most of.

Safety First runs teen and adult programs, but its buyer is a parent and its own name is the safety
promise — **Safe Route**.

### How the first twenty actually landed

Twenty clients across three templates means repetition, and that is correct — what makes each page
theirs is the brand, the photography and their own content, not a fourth template. The split:

| Variant | Clients | What they had in common |
|---|---|---|
| **Safe Route** (8) | Safety First, Dollar, H and G, NorCal, Teen Driving Academy, Express, Sanctified, A1 | A parent is buying, and the copy is reassurance — H and G's reviews all say "I was nervous and Ghada kept me calm"; Sanctified opens on freeway anxiety; A1 sells anxiety-free training outright. |
| **Apex** (6) | San Diego Bay, Bill's, MAS, Newport, Academic, AllGood | Operations and outcomes. Newport teaches manual and international transfers; Academic runs a progress dashboard; AllGood is a 24/7 scheduler covering twenty-nine cities. |
| **Atelier** (6) | Learn 2 Drive, Turlock, Easy Street, Allstate, Kanor, Driving School For You | A named person is the product. Sylvia signs the About page; Mel and Renee started Easy Street after a conversation in a park; Allstate's founder spent five years as a DMV examiner. |

## 3. Override the palette with their brand

The variant sets a starting palette. A scraped brand beats it every time:

```ts
brand: {
  primary: '#605484',      // sampled from their logo
  accent: '#C25214',       // their orange, darkened to pass AA
  ...
}
```

This is the difference between *a template with their name on it* — which `OFFERS.md` §2 explicitly
calls the mediocre version — and *their site, rebuilt*.

### Brand colours are usually not accessible as-is

Safety First's orange is `#F06C30`. On white that is **3.05:1** — it fails WCAG AA for normal text
and for white-on-orange buttons. Their purple `#605484` is 6.78:1 and ships unchanged.

**The rule: keep their hue, darken until it passes.** Never ship the raw value, and never abandon
their brand for a safe default. `src/lib/brand.test.ts` fails the build if any brand colour drops
below 4.5:1 where it carries text.

Across the first twenty this bit ten times. Easy Street's green is 2.05:1, Express's amber 2.03:1,
Newport's sky blue 2.13:1, Dollar's gold 1.23:1 — none of them usable for text or for a white button
label. Four brands needed no correction at all: Turlock's purple, A1's red and blue, MAS's red, and
Sanctified's red.

Tint the neutrals too. Blue borders around a purple brand is the tell that a template was reskinned
rather than designed — `brand.border`, `borderSoft`, `bg` and `fgDim` exist for that. Keep `fgDim`
close to grey: a washed-out version of a red brand reads as a rendering fault, not as a brand.

### Where a brand is genuinely absent, say so

Four of twenty have no logo and no consistent colour of their own — H and G's "logo" is stock
clip-art of road signs, and Kanor's only mark is a white SVG for a dark header. Those ship on the
template palette with the gap recorded in `internalNotes`. Deriving a brand from a site's CSS only
works when the colour is actually theirs; Bootstrap's `#337AB7` and Gutenberg's `#CF2E2E` turn up in
half these sites and mean nothing.

### The chip problem

A brand that clears 4.5:1 on **white** can still fail on `--primary-soft`, which is where kickers,
nav pills and chips actually sit — worth about a fifth of the ratio. Every one of those uses
`--primary-dark`, and `brand.test.ts` asserts the `primaryDark`/`primarySoft` pair directly. A live
audit caught MAS at 3.77:1 in that exact spot.

## 3b. Use their photographs, and say what is in them

`client.photos` fills the four layout slots — `hero`, `roadTest`, `vehicle`, `support` — and each one
carries a **required** `alt`. That is deliberate: a supplied photo almost never depicts what the
default alt text describes, and a confidently wrong alt is worse for a screen-reader user than a
generic one.

Anything left unset falls back to shared stock in `/images`. That floor is fine for one preview and
is a tell across twenty — a Ventura family on a Bakersfield school's page is exactly the detail a
prospect notices. Of the first twenty, thirteen ship with the client's own photography.

`vehicles.gallery` exists for schools that photograph their own cars. Turlock names theirs — Yoda,
Dory and Blueberry — and half the San Joaquin Valley recognises them on the road. That beats any
stock interior shot, so the cars get a row of their own.

Two fields exist purely to stop the template asserting things:

- `hiring` — the "We are hiring instructors" block renders only for clients who advertise vacancies.
  Two of twenty do.
- `lessonHours` — the hours bar draws one block per lesson. Sanctified teaches 90-minute lessons and
  Newport sells single hours; defaulting everyone to two hours drew a diagram that contradicted the
  copy directly beneath it.

## 4. Non-negotiables, whatever the variant

- **Photography of real people first**, then motion, then vector.
- **Show, don't describe.** Anything expressible as a diagram, a scale drawing, a working
  interaction or a photo is not a paragraph. Every page carries at least one visual.
- **Every interactive element must be correct.** A 3D or animated thing that is visibly wrong
  transfers "sloppy" onto the client's business. The manoeuvre simulator has 47 tests for exactly
  this reason — see `src/lib/manoeuvres.test.ts`. It earned them: the parallel park shipped
  reversing in perpendicular to the kerb and snapping 88° round at the gear change, past a test
  that skipped that one frame. Anything depicting a physical process is now integrated from a
  vehicle model rather than drawn by hand — `memory/009-manoeuvre-simulator.md`.
- **`prefers-reduced-motion` is honoured** everywhere.
- **Never invent a claim.** Licence numbers, ratings, pass rates, reviews and faces come from their
  own site or are omitted. Synthetic faces for named real people are never acceptable.

## 5. Where to look for direction

The global `toolbox` skill indexes the design sources — `MengTo/skills` (81 web-design skills
covering WebGL, shaders and scroll animation), the Framer and Webflow template galleries for
composition, Unsplash and Magnific for photography, Resource Boy for mockups and textures.

Load it rather than improvising. The hero on Safety First came from that skill set's
`image-first-grid-layout` direction: the photograph is the stage, gradient washes carry readability,
structural rails impose order, copy anchors low-left, motion drifts rather than performs.
