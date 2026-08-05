# Preview Restoration with Photo-Only Enhancement

## Approved direction

The user's explicit correction is the approval: restore the four websites to the distinct designs preserved in `previews/`, then add high-quality realistic driving-school photography without redesigning their layout, copy, components, interaction model, typography, or visual identity.

## Source of truth

| Running site | Authoritative original |
|---|---|
| `sites/safe-route` | `previews/variant-a-safe-route.html` |
| `sites/apex` | `previews/variant-b-apex.html` |
| `sites/atelier` | `previews/variant-c-atelier.html` |
| `sites/cockpit` | `previews/variant-d-cockpit.html` |

The preview HTML is complete and self-contained. It includes the original responsive CSS, branding, content, reveal effects, mobile behavior, and client-side interactions. It must be copied without structural simplification.

## Photo treatment

- Safe Route keeps its route diagram and civic visual language. Its existing hero receives the Safe Route family/instructor photo as a restrained background layer beneath the original content.
- Apex keeps its perspective road, animated SVG training car, speed streaks, typography, and red/black palette. Its unique Apex learner/instructor photo becomes a darkened cinematic hero background beneath those elements.
- Atelier keeps its editorial split, warm paper palette, serif typography, and founder card. Only the steering-wheel artwork inside the existing portrait frame is replaced by the unique in-car lesson photograph.
- Cockpit keeps its booking widget, gauges, car illustration, calculator, simulator, and dashboard palette. Only the three existing safety photo placeholders are replaced with the dual-control, vehicle/instructor, and road-test-prep photographs.

No instructor portraits will be fabricated or attached to invented staff identities.

## Runtime architecture

Each Next.js app serves a generated `public/site.html` copied from its authoritative preview. Next rewrites `/` and the three existing prospect slugs to that exact static document, so all original inline CSS and JavaScript execute without a React conversion changing behavior. A deterministic restoration script owns the minimal photo injections and fails if an expected source anchor is missing.

## Reversal scope

The prior shared redesign UI is removed from the delivered experience. Its generated QA report and redesign-specific artifacts are replaced by restoration QA. Unused redesign-only components and tests are deleted after the restored pages pass.

## Verification

- Automated checks prove each running site contains its unique original signature and only its assigned photos.
- Production builds must pass for all four apps.
- Browser QA covers 390 × 844 and 1440 × 1000.
- The original primary interactions are exercised, especially Cockpit booking, calculator, and manoeuvre controls.
- Side-by-side comparisons use the preview capture as source truth and the running site capture as implementation evidence.

