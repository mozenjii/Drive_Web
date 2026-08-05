# Asset generation brief — media-first driving-school template

Everything below is what I need to build a picture-first / video-first / animation-first version of the driving-school homepage. Specs are production-ready: exact dimensions, formats, durations and byte budgets.

**Read the priority order first.** If you only generate six things, generate the six in Tier 1 — the hero is roughly 80% of the impression.

---

## 0. Two constraints that shape everything

**Dark UI is the correct base for media.** Video compression artifacts, banding in gradients, and the hard edges of a 3D model against a flat background all disappear on dark surfaces and are glaring on white. So the media-first build should use the **Apex** chassis (dark), not Safe Route or Atelier. That also solves your "too plain / too textual" complaint — Atelier is the textual one by design.

**Every asset needs a static fallback.** Mobile Safari in low-power mode blocks autoplay; corporate networks block large media; `prefers-reduced-motion` users must get a still. So every video ships with a poster frame that is **byte-identical in composition to frame 0**, and the 3D scene ships with a pre-rendered still of the same camera angle. Generate the stills at the same time as the motion — matching them later is painful.

---

## Tier 1 — generate these first

### 1.1 `car-training-sedan.glb` — the hero 3D model

The single most important asset. A generic 4-door training car I can orbit, spin the wheels on, and re-badge per school.

| Spec | Value |
|---|---|
| Format | glTF 2.0 binary (`.glb`), Draco or Meshopt compressed |
| Triangles | 40k–60k |
| Textures | 2048² for body, 1024² everything else, KTX2/Basis if your tool supports it |
| Materials | PBR metal-rough |
| File size | ≤ 2.5 MB compressed |
| Orientation | Y-up, real-world scale in metres, origin at ground centre between the wheels |

**Named meshes — this matters, don't merge them:**

```
Body            Wheel_FL   Wheel_FR   Wheel_RL   Wheel_RR
Glass           RoofSign   DoorDecal_L   DoorDecal_R
Pedal_Instructor   Mirror_L   Mirror_R   Headlight_L   Headlight_R
```

`RoofSign` and `DoorDecal_*` need to be **flat, blank, front-facing quads with their own UV island** — I swap a texture onto them at runtime so each prospect sees their own school name on the roof sign. If they're baked into the body mesh, per-school personalisation dies and you're back to 30 minutes a preview.

> **Generation prompt**
> "Neutral silver-grey four-door compact sedan, driving-school training car, clean studio product render, three-quarter front view. Roof-mounted rectangular sign bracket, blank white sign face. Blank white rectangular magnetic panel on both front doors. Modern but generic — no manufacturer badges, no grille logo, no recognisable brand identity. Realistic PBR materials, clean topology, neutral lighting."

Keep it **genuinely unbranded**. A recognisable Toyota or Honda body shape creates a trademark problem when you send it to 60 businesses.

### 1.2 `hero-drive-pov` — windshield POV loop

The emotional centre of the page. Driver's-eye view moving down a sunlit suburban California street.

| Spec | Value |
|---|---|
| Resolution | 1920×1080 (desktop), plus a 1080×1350 vertical crop for mobile |
| Duration | 8 s, **seamless loop** (last frame must cut cleanly to first) |
| Frame rate | 24 or 30 fps |
| Formats | `.mp4` (H.264, yuv420p) **and** `.webm` (VP9) |
| Audio | **None** — strip the track entirely, don't just mute it |
| Budget | ≤ 1.8 MB for the MP4 |
| Poster | `hero-drive-pov-poster.avif` — exact frame 0 |

> **Generation prompt**
> "First-person driver's point of view through a car windshield, driving slowly down a wide suburban residential street in California. Golden-hour late-afternoon light, palm trees and single-storey houses, dry warm colour grade. Camera steady, gentle forward motion. Portion of dashboard and steering wheel visible at the bottom of frame. No people, no readable licence plates, no street signs with legible text, no visible car brand logos."

No legible text anywhere in frame — it dates the footage, localises it wrongly, and creates a rights problem.

### 1.3 `dual-control-pedals` — the trust shot

Your strongest differentiator is "there is a second brake pedal." Right now that's a bullet point. It should be a hero image.

- **Still:** `pedals-dual-control.avif`, 1600×1200, ≤ 160 KB
- **Video:** 5 s loop, 1280×960, ≤ 700 KB — instructor's foot easing onto the second brake
- **3D (optional but great):** `pedal-set.glb`, 15k–25k tris, ≤ 800 KB

> **Generation prompt**
> "Close-up interior car footwell, passenger side, showing an aftermarket dual-control instructor brake pedal assembly mounted beside the standard pedals. Clean grey carpet, shallow depth of field, soft natural window light from the left. Technical and reassuring, documentary style, no people's faces."

### 1.4 `hero-car-orbit` — 3D fallback video

Pre-rendered orbit of the model in 1.1. Used as the hero on mobile and anywhere WebGL is too expensive.

- 1920×1080, **10 s seamless 360° orbit**, ≤ 2 MB MP4 + WebM
- Transparent or dark-neutral background, subtle contact shadow
- Constant rotation speed — no ease at the loop point or the seam shows

### 1.5 `parallel-park-topdown` — the manoeuvre demo

Top-down animation of a car parallel parking between two others. Directly answers the thing every learner is afraid of.

- 1200×1200 square, 6 s loop, ≤ 900 KB
- Flat stylised top-down, not photoreal — it reads as instructional
- Dotted trajectory arc drawn behind the car as it moves

### 1.6 `og-share-card.jpg` — 1200×630

The image that renders when your link is pasted into email, Slack or a text. Cheap to make, disproportionately important for a link-based outreach campaign. Car three-quarter view, dark background, generous empty area top-left where I'll overlay the school name per prospect.

---

## Tier 2 — section media

### 2.1 Ambient section loops

Short, quiet, dark-graded loops that sit behind section headers at ~25% opacity.

| File | Content | Duration | Budget |
|---|---|---|---|
| `loop-highway-merge` | Freeway merge from a following camera | 6 s | 700 KB |
| `loop-night-city` | Windshield POV, wet city street at night, bokeh headlights | 6 s | 800 KB |
| `loop-keys-handover` | Car keys passed between two hands, close, no faces | 4 s | 500 KB |
| `loop-dmv-exterior` | Slow push toward a generic government office building | 5 s | 600 KB |

All 1280×720 — they're never full-bleed, so don't waste bytes on 1080p.

### 2.2 Still photography

| File | Content | Size | Budget |
|---|---|---|---|
| `car-three-quarter.avif` | Training car, 3/4 front, dark seamless studio | 2000×1400 | 200 KB |
| `car-interior-wide.avif` | Interior from rear seat, both front seats, dual controls visible | 1600×1200 | 160 KB |
| `car-rooftop-sign.avif` | Tight crop on the blank roof sign — I composite school names onto this | 1200×800 | 120 KB |
| `safety-inspection.avif` | Hands with a clipboard checking tyre tread | 1200×900 | 120 KB |
| `route-map-flat.avif` | Stylised top-down neighbourhood map, no text labels | 1600×1600 | 180 KB |

**Format order:** AVIF primary, WebP fallback, JPEG only as last resort. Export all three; I'll wire up `<picture>`.

### 2.3 Instructor portraits — generate, but read this

Six portraits, 800×800, square, consistent lighting and background so the grid looks like one shoot.

> **Generation prompt**
> "Professional headshot of a friendly driving instructor, 35–55 years old, warm approachable expression, plain mid-grey studio background, soft even lighting, shoulders-up. Neutral polo shirt. Photorealistic, consistent lighting across the set."

Vary age, gender and ethnicity across the six — a driving-school instructor grid that's six similar-looking people reads as stock and undercuts the local-business claim.

**Same rule as the invented reviews:** these are fine in the template as visible placeholders, but a generated face must never be presented as a *named real instructor at a real school*. Before a preview goes to a specific business, swap in their real staff photos or drop the section. A school owner who recognises an AI face where their own team should be will not reply.

---

## Tier 3 — interactive 3D backgrounds

Three concepts. **Pick one** — stacking them will wreck load time and battery, and dilutes the idea.

### Concept A — "Two Pedals" *(my recommendation)*

Hero holds the car model. Slow idle orbit. On scroll, the camera pushes through the passenger door and settles on the instructor brake pedal as the headline changes to the safety message.

- **Assets:** 1.1 + 1.3 (3D version)
- **Cost:** ~150 KB three.js (gzipped) + 2.5 MB model + ~800 KB pedals
- **Why:** it's the only one that argues your actual differentiator. Motion carries meaning rather than decorating.

### Concept B — "The Route"

Low-poly isometric neighbourhood. A car drives a route scrubbed by scroll position, hitting four milestones: Permit → Lessons → Road Test → Licensed. Camera tracks the car.

Needs a **modular tile set**, `city-tiles.glb`, so I can lay out any city:

```
road_straight  road_corner  road_t_junction  road_4way  road_end
house_a  house_b  house_c   tree_a  tree_b   parked_car
building_dmv   building_school   traffic_light   stop_sign
```

- 300–800 tris per tile, shared 1024² atlas, whole set ≤ 1.5 MB
- All tiles on an exact 4×4 m grid with origins at tile centre, or they won't snap
- **Best for:** the Safe Route positioning — it's the "journey" story made literal

### Concept C — "Test Route Simulator"

Isometric intersection where the user clicks a manoeuvre — parallel park, three-point turn, lane change, hill start — and the car performs it with an annotated path.

Highest engagement, highest build cost. Needs the car (1.1), a road tile subset, `cones.glb`, and `parking-markers.glb`. Consider it for v2 once a variant wins.

### Hard performance budget for whichever you pick

| Metric | Ceiling |
|---|---|
| Total page weight, first view | 3.5 MB |
| Largest Contentful Paint, 4G | < 2.5 s |
| 3D scene draw calls | < 60 |
| Mobile behaviour | Ship the pre-rendered orbit video instead of live WebGL below 768 px |
| `prefers-reduced-motion` | Static poster, WebGL never initialises |

The LCP element must be the **poster image**, never the video or canvas. Media loads after first paint.

---

## Do not generate

- **A photorealistic California driver's licence.** For the "Licensed" milestone I need a *stylised* card — rounded rectangle, generic blue, placeholder glyphs, no state seal, no bear, nothing resembling the real document. A convincing replica is forgery-adjacent and you'd be shipping it to 60 businesses.
- **Recognisable car brands.** No badges, no signature grilles.
- **Legible text in any generated image.** Street signs, plates, storefronts, DMV signage. Generative text comes out subtly wrong and it's the first thing that makes an image read as fake. I'll overlay any real text in HTML, where it's also selectable, translatable and accessible.
- **Children's faces.** Teen driver imagery is a minefield. Use hands, over-the-shoulder framing, or an empty car interior.
- **4K anything.** Nothing here benefits from it and the byte cost is severe.

---

## Delivery

```
previews/assets/
  models/     car-training-sedan.glb  pedal-set.glb  city-tiles.glb
  video/      <name>.mp4  <name>.webm
  img/        <name>.avif  <name>.webp  <name>.jpg
  posters/    <name>-poster.avif
```

Lowercase, hyphenated, no spaces. Keep the exact filenames above — I'll wire the template against them, so matching names means the page works the moment you drop the folder in.

If you want to sequence it: **1.1, 1.2, 1.3, 1.6** gets a hero that already looks like a different tier of product. Send those four and I'll build the media-first variant around them while you generate Tier 2.
