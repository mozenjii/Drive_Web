# The three templates, and who got which

Fuller reasoning in [docs/DESIGN.md](../docs/DESIGN.md).

The template is **not a default**. It is a decision made after reading the business, and it can
be changed at any point — `variant` is one field and every component themes itself from tokens.

| Variant | Buyer | Signals | Feel |
|---|---|---|---|
| **Safe Route** | Parent of a teen | Teen programs, driver ed, school pickup, "safety" in the name | Trust and reassurance. Rounded, open, blue-green. |
| **Apex** | Adult learner / retake | Road-test-only services, licence transfers, "fast", "pass" | Decisive, engineered. Square corners, tight tracking, red. |
| **Atelier** | Referral-led owner-operator | Founded decades ago, named founder, small team, premium pricing | Editorial and personal. Serif headlines, warm paper, brass. |

**If a client straddles two, choose by who pays** — not by what they sell most of.

## How the twenty landed — 8 / 6 / 6

| Variant | Clients | What they had in common |
|---|---|---|
| Safe Route (8) | Safety First, Dollar, H and G, NorCal, Teen Driving Academy, Express, Sanctified, A1 | A parent is buying and the copy is reassurance. H and G's reviews all say "I was nervous and Ghada kept me calm"; Sanctified opens on freeway anxiety. |
| Apex (6) | San Diego Bay, Bill's, MAS, Newport, Academic, AllGood | Operations and outcomes. Newport teaches manual and international transfers; Academic runs a progress dashboard; AllGood is a 24/7 scheduler across 29 cities. |
| Atelier (6) | Learn 2 Drive, Turlock, Easy Street, Allstate, Kanor, Driving School For You | A named person is the product. Sylvia signs the About page; Mel and Renee started Easy Street after a conversation in a park; Allstate's founder spent five years as a DMV examiner. |

**Twenty clients across three templates means repetition, and that is correct.** What makes a
page theirs is the brand, the photography and their own content — not a fourth template.

## Non-negotiables, whatever the variant

- **Photography of real people first**, then motion, then vector. Never substitute an SVG diagram
  for a photograph that already exists in the repo.
- **Show, don't describe.** Anything expressible as a diagram, a scale drawing, a working
  interaction or a photo is not a paragraph. Every page carries at least one visual.
- **Every interactive element must be correct.** A 3D or animated thing that is visibly wrong
  transfers "sloppy" onto the client's business. This is not theoretical — see
  [009-manoeuvre-simulator.md](009-manoeuvre-simulator.md).
- `prefers-reduced-motion` honoured everywhere.
- Never invent a claim.

## Where to look for direction

The global `toolbox` skill indexes the design sources — `MengTo/skills` (81 web-design skills
covering WebGL, shaders, scroll animation), Framer and Webflow galleries for composition,
Unsplash and Magnific for photography, Resource Boy for mockups and textures. Load it rather
than improvising.

The Safety First hero came from that set's `image-first-grid-layout` direction: the photograph is
the stage, gradient washes carry readability, structural rails impose order, copy anchors
low-left, motion drifts rather than performs.
