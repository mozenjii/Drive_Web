# The road-test manoeuvre simulator

`preview/src/lib/manoeuvres.ts` — geometry and model
`preview/src/lib/manoeuvres.test.ts` — the checks
`preview/src/components/ManoeuvreSimulator.tsx` — drawing only

Shown on every client's home page. A driving school owner looks at it for about four seconds and
decides from it whether we know what we are doing, which is the entire reason it has to be right.

---

## 2026-08-09 — Rewritten on a vehicle model, after the parallel park was reported wrong

### What was wrong

Three defects, of which the first two were the same root cause.

1. **The car reversed in perpendicular to the kerb.** The reverse leg's last waypoints ran almost
   straight down the screen, so the car finished the reverse pointing 88° away from the kerb —
   nose out into the road. That is bay parking done backwards, not parallel parking.

2. **It then snapped 87.7° round in a single frame** at the gear change, and the three-point turn
   snapped 80° at its own. Nothing in the model forced the end of a reverse leg to agree with the
   start of the forward leg that followed it.

3. **The scene did not describe a parallel park.** The parked cars floated nine units off the
   kerb, and the bay was 33 units long for a 13-unit car — two and a half car lengths.

### Why the tests passed anyway

`manoeuvres.test.ts` had, inside the "always faces its direction of travel" case:

```ts
if (prev.reverse !== frame.reverse) continue; // direction flip between legs
```

The gear change is the *only* place the bug existed, and that line skipped it. The comment reads
as a reasonable exclusion, which is what made it survive. **A skip written to make a test pass is
a place to look first, not a place to trust.**

The component also kept its own hardcoded copy of where the parked cars were, separate from the
copy the collision test used, so the drawing and the geometry were free to drift apart.

### What replaced it

The path is no longer authored. Each manoeuvre is a list of driving inputs — how far, and how
much lock — integrated through a kinematic bicycle model at the rear axle:

```
dx/ds = cos θ      dy/ds = sin θ      dθ/ds = tan δ / wheelbase
```

Consequences, all of them structural rather than checked-for:

- **Heading is a state variable**, so it is continuous by construction. A gear change flips the
  sign of `ds` and leaves θ untouched. The snap cannot come back.
- **The car cannot pivot on the spot**, cannot exceed its own steering lock, and cannot travel in
  a direction it is not pointing.
- Frames report the **body centre**; the model integrates the **rear axle**. The centre swings
  out while turning by `atan(d·tan δ / wheelbase)` — that is geometry, not error, and the test
  compares against that closed form rather than against a tolerance.

The layout is derived rather than eyeballed. Two equal opposite arcs move a car sideways by
`2R(1 − cos φ)` and leave it parallel to where it started — that *is* a parallel park, and it is
what fixes the swing angle at 46° rather than it being a number someone liked. The setup position
is one car width plus about a metre off the parked cars, which is what makes 46° come out.

Min turn radius is 1.2 car lengths, scaled from a real hatchback (5.5 m against a 4.5 m body).
That ratio is why a real parallel park lands near 45°.

### Numbers that matter

| | |
|---|---|
| Rotation per frame, worst case | 0.61° (parallel park), 1.4° (three-point) |
| Travel-vs-heading agreement | within 0.1° — was a 22° tolerance |
| Clearance to the front parked car, worst case | 1.13 units |
| Final resting pose | 46.25, 74.20 at 0.0° — dead centre of the bay, parallel to the kerb |
| Bay | 24.5 units for a 13-unit car (1.9×) |

### Tests

118 → 144. The ones that would have caught the original bug:

- `heading is continuous, including across every gear change` — no skip, 2° ceiling
- `travels exactly where it is pointing` — 0.1°, against the closed-form sideslip
- `never asks for more lock than the car has`
- `leaves a visible margin rather than scraping past` — clearing the SAT test by a thousandth
  still reads as a near miss on screen, so there is a 1-unit floor
- `Parallel Park … ends parallel to the kerb`, `ends in the bay, not alongside it`,
  `sits centred between the two parked cars`, `reverses in, rather than driving in forwards`
- `Three-Point Turn … uses forward, reverse, forward` and ends at 180°

### Also changed

- Kerbs are now solid, so mounting one fails the same test that catches hitting a parked car.
  They used to be decoration only.
- The component draws kerbs, parked cars and the bay outline **from the geometry data**. It has
  no coordinates of its own left.
- The front wheels are drawn at the model's actual steering angle. If the path and the lock ever
  disagreed it would now be visible on screen.
- Each leg carries a written note, shown as a numbered step list that follows the car.
- Per-manoeuvre durations — a parallel park earns more time than a lane change.
- A `PARK_NUDGE` constant places the arcs *and* drives the final forward correction. They were
  two separate numbers (3 and 2.5) and the car came to rest exactly one unit off centre. Caught
  by the new centring test.

### Note on verification

`requestAnimationFrame` does not fire while the Browser pane is hidden, so the animation could
not be sampled live. The end state was verified in a real browser against the built output; the
motion is verified through the frame data, and the component's only transform between frames is
`lerpAngle`, which cannot exceed the frame-to-frame delta it interpolates.
