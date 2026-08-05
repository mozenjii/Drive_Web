# Driving School Enrolment System — Campaign 1 templates

Three front-end homepage concepts for **licensed passenger-car driving schools in California**, built for the Campaign 1 cold-outreach test.

Open `index.html` to see all three side by side.

| File | Concept | Positioning angle it tests | Best-fit lead type |
|---|---|---|---|
| `variant-d-cockpit.html` | **Cockpit** ← lead with this | Show, don't tell | Every lead type — widest net |
| `variant-a-safe-route.html` | **Safe Route** | Safety & Licensing | Teen-heavy schools; parent is the buyer |
| `variant-b-apex.html` | **Apex** | Speed & Confidence | Adult learners, road-test prep, retakes |
| `variant-c-atelier.html` | **Atelier** | Premium & Personal | Long-established, referral-led, owner-operated |

### Cockpit — what makes it different

A/B/C all *describe* the enrolment system in prose. Cockpit **runs it in the browser**, which is the fix for "too plain, too textual":

- **Working 3-step booking flow** — pick a program, pick from seven days of live-looking availability with realistically unavailable slots, get a summary and a confirmation state. Fully client-side, no back end.
- **Road-test manoeuvre simulator** — click Parallel Park, Three-Point Turn, Lane Change or Hill Start and a top-down car drives the line the examiner wants, leaving a dotted trail. This is the section that demonstrates expertise rather than claiming it.
- **Price calculator** — drag hours, see the package and price update live, with multi-hour discounts applied.
- **Instrument-cluster visual language** — animated gauge arcs, amber readouts on near-black, mono numerals. Reads like a car dashboard at night, which no competitor site does.

Visual language and pattern came from the skill: "Funnel (3-Step Conversion)" landing pattern + "Modern Dark (Cinema)" style.

The three differ by **message**, not just palette. That matters for your test design: within Campaign 1 you said you wanted to compare driving-school *lead types*, and these three map onto exactly that split. If replies cluster on one variant, that tells you which angle to standardise on before Campaign 2.

---

## Personalising a preview (the actual bottleneck)

You said producing credible previews by hand is the real constraint, not scraping. So each file is a **single self-contained HTML document** with one editable config block near the top of `<body>`:

```js
const SCHOOL = {
  name:     "Golden State Driving Academy",
  short:    "Golden State",
  city:     "Sacramento",
  county:   "Sacramento County",
  phone:    "(916) 555-0142",
  phoneRaw: "+19165550142",     // used for tel: links
  licence:  "E1234",
  years:    "18",
  students: "12,400",
  rating:   "4.9",
  reviews:  "327",
  passRate: "96",
  areas:    ["Sacramento","Elk Grove", /* … */],
  instructors: [ {n:"…", i:"MR", c:"#1E40AF", r:"Lead Instructor", y:"14", b:"…"} ]
};
```

Editing those values updates the `<title>`, every heading, the `tel:` links, the footer, the service-area chips, the instructor cards, the roof sign on the Apex car, and the "serving since" year — everywhere, automatically. Roughly **two minutes per prospect**.

Workflow for the 10–15 personalised previews:

1. Copy the chosen variant to `previews/out/<school-slug>.html`
2. Edit only the `SCHOOL` block
3. Open it once in a browser to sanity-check the name and phone
4. Screenshot the hero, or host the file and send the link

`areas` and `instructors` accept any array length — the layouts reflow.

---

## Dropping real photos into Cockpit

Cockpit has photo slots already wired. Each is a `<div class="photo" data-photo="...">` containing a placeholder SVG, with an HTML comment directly above giving the exact swap. Replace the whole `<div>` with an `<img>`:

```html
<!-- before -->
<div class="photo" data-photo="pedals-dual-control"> <svg …/> </div>

<!-- after -->
<img class="photo" src="assets/img/pedals-dual-control.avif"
     alt="Dual-control instructor brake pedal" width="1600" height="1200">
```

Slots currently in the page: `pedals-dual-control`, `car-interior-wide`, `safety-inspection`, and one per instructor (`instructor-as`, `instructor-kw`, `instructor-dr` — derived from initials in the `SCHOOL` block). Filenames match `ASSET-BRIEF.md`, so generated assets drop in without renaming.

The hero car is inline SVG rather than a photo deliberately — it recolours per school, stays sharp at any size, costs a few KB, and cannot break in an email client. Swap it for a 3D render or photo only once you have a hosted-link workflow.

## Read this before sending to a real business

**All figures in these files are invented.** Licence numbers (`E1234`), pass rates, student counts, star ratings, review text, reviewer names and instructor names are demonstration placeholders.

Before a preview goes to a named real business, either replace them with that school's real published figures or remove them. Specifically:

- **DMV licence number** — use theirs from the California DMV school lookup, or delete the field. Showing a real school a fabricated licence number is the fastest way to lose the lead.
- **Reviews and star ratings** — pull from their actual Google Business Profile, or cut the section.
- **Pass rate / students trained** — cut unless they publish it. It is the single easiest claim to be caught inventing.
- **Prices** — the $189 / $479 / $159 tiers are plausible California market rates, but they are illustrative. Either match their published pricing or present the section as a suggested structure.

Attributing invented reviews or statistics to a real named business is a real legal and reputational risk for you, not just a design detail. Keeping the *structure* while emptying the *claims* still demonstrates the product perfectly well.

---

## What's actually built

Front end only, as scoped. Every file is one HTML document: no build step, no npm install, no framework, no external JS. The only network request is Google Fonts (system-font fallbacks are in place if that fails).

Homepage sections implemented in all three:

- Hero with primary "Book a Lesson" action and a trust strip
- Teen / Adult / Road-test path selector
- Package comparison, three tiers, transparent pricing
- Four-step enrolment explainer
- Instructor profiles with DMV-licensed credentials
- Vehicles & safety (dual controls, insurance, inspection)
- Service-area chips/links — the hook for per-city landing pages
- Reviews with aggregate rating
- Licensing & credentials panel
- FAQ accordion (native `<details>`, works without JS)
- Final CTA, footer, sticky mobile call/book bar

Represented but **not wired up** (they need a back end and the school's own accounts):

- Booking-software integration — shown as a capability statement; the design integrates with whatever platform the school already uses rather than replacing it
- Payment integration
- Call and form conversion tracking
- Google Business Profile optimisation
- The teen / adult / road-test / service-area **sub-pages** — the homepage links to them via anchors; the pages themselves are the next build

---

## Design decisions and where they came from

Colour, type and layout pattern were pulled from the `ui-ux-pro-max` skill's database rather than chosen by eye:

- **Safe Route** — "Government Portal / Civic Services" palette (professional blue + service green), "Trust & Authority + Conversion" landing pattern
- **Apex** — "Automotive / Car Dealership" palette (premium dark + action red), "Kinetic Brutalism" style
- **Atelier** — "B2B Service" navy, warmed with brass; "Social Proof-Focused" pattern

Three recommendations were overridden deliberately:

1. The default query returned **EB Garamond / Crimson Text** with an "Enterprise Gateway" pattern — university-archive styling, wrong register for a local driving school.
2. The kids-education pull suggested **Comic Neue**. Not for a business whose core promise is safety.
3. The editorial pull suggested a **pink `#EC4899` accent**. Replaced with brass.

Three palette colours were darkened for accessibility after measuring them in-browser:

| Variant | Original | Measured | Changed to | Now |
|---|---|---|---|---|
| Safe Route | `#16A34A` green | 3.3:1 | `#15803D` | 5.02:1 |
| Apex | `#DC2626` red as small text | 3.9–4.3:1 | `#B91C1C` / `#EF4444` on dark | 5.0–6.5:1 |
| Atelier | `#B4823C` brass | 3.22:1 | `#8A6124` | 5.23:1 |

---

## Verified, not assumed

Screenshots were unavailable in the build session, so each page was checked programmatically in a real browser:

- **Contrast** — every rendered text node measured against its effective background (including gradient and alpha-overlay backdrops). **0 failures** of WCAG AA across all three (193 / 196 / 192 elements checked).
- **Tap targets** — **0** interactive elements under 44 px at 375 px.
- **Horizontal overflow** — none at 375, 768 or 1280 px.
- **Token replacement** — 0 unreplaced `{{…}}` placeholders.
- **Console** — 0 errors on all three.

Two real bugs were caught this way and fixed: Apex's hero phone button and mobile "Call" button were rendering near-black text on a near-black background (1.05:1 — effectively invisible), and Atelier's header CTA was pushing the document 10 px wider than a 375 px viewport.

`prefers-reduced-motion` is honoured everywhere: the Apex speed streaks are removed, the travelling car parks mid-route, and all transitions collapse.

**Not verified:** actual visual appearance. No screenshot was possible in this session, so review each file in a browser before it goes to a prospect.
