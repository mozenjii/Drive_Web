# Preview Restoration Design QA

## Visual source of truth

- Safe Route: `previews/variant-a-safe-route.html`
- Apex: `previews/variant-b-apex.html`
- Atelier: `previews/variant-c-atelier.html`
- Cockpit: `previews/variant-d-cockpit.html`

Each deployed `public/site.html` is generated directly from its matching preview file. The restoration test checks the preview identity marker, unique headline signature, route mapping, and approved image references.

## Intentional visual changes

- Safe Route retains its civic blue/green layout and route diagram; its unique realistic learner/instructor photograph is used as a restrained hero background.
- Apex retains its dark red motorsport layout, perspective road, and animated car; its unique realistic lesson photograph is used as a darkened cinematic hero background.
- Atelier retains its warm editorial layout and portrait frame; the original steering-wheel illustration inside that frame is replaced with its unique in-car lesson photograph.
- Cockpit retains its dashboard, gauges, booking flow, car stage, simulator, and calculator; only the three explicit safety photo placeholders are replaced with the dual-control, instructor/vehicle, and road-test-preparation photographs.

No sections, type systems, navigation patterns, program layouts, color systems, or interactive concepts were shared across the four designs.

## Verified viewports

- Mobile: 320 × 844, 375 × 844, and 390 × 844 for all four sites
- Desktop: 1440 × 1000 for all four sites
- Root and all three approved prospect routes return the corresponding restored preview; unknown slugs return 404
- All inserted images load with non-zero natural dimensions
- No horizontal overflow was detected
- Cockpit's booking selection enables the Continue action
- No browser console errors were detected

Screenshots are stored in `.artifacts/restored-sites/`.

## Automated verification

- Restoration contract: 4/4 passed
- Existing unit tests: 12/12 passed
- Production builds: 4/4 passed
- Responsive browser checks: 16/16 passed
- Optimized image asset checks: 12/12 passed
- Preview data is recursively copied and stripped of HTML/attribute-breaking characters before any DOM template rendering

final result: passed
