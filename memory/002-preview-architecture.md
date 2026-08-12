# How the previews are built

Fuller version in [docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md). This is what is worth
remembering rather than re-deriving.

## Stack

Next.js 15.5.22 static export (`output: 'export'`, `trailingSlash: true`,
`images: { unoptimized: true }`), React 19, TypeScript 5.7 strict, Tailwind v4.3.3, Vitest.

## One project, a path per client

All twenty clients live in **one** Cloudflare Pages project, at
`preview.epoches.com/<client-slug>/`. Not a project each, not a branch each.

Routing is `src/app/[client]/[[...path]]/page.tsx` with `generateStaticParams` and
`dynamicParams = false`, so an unknown slug is a build-time 404 rather than a runtime one.

Twenty clients currently produce **293 pages**.

## Client data

`preview/src/data/clients/<slug>.ts`, one file per client, collected in
`preview/src/data/index.ts`. The shape is `preview/src/lib/types.ts`.

**Every claim-bearing field is optional**, so omitting it degrades cleanly rather than rendering
an empty promise. Two fields exist purely to stop the template asserting things on the client's
behalf:

- `hiring` — the "We are hiring instructors" block renders only for clients who actually
  advertise vacancies. Two of twenty do.
- `lessonHours` — the hours bar draws one block per lesson. Sanctified teaches 90-minute lessons
  and Newport sells single hours; defaulting everyone to two hours drew a diagram that
  contradicted the copy directly beneath it.

`Photo.alt` is **required, not optional**. A supplied photo almost never depicts what a default
alt string would describe, and a confidently wrong alt is worse for a screen-reader user than a
generic one.

## Theming

A `data-variant` attribute selects the template palette; a per-client `brand` block overrides it
via inline CSS custom properties on `.themed`. See
[004-brand-colour-and-contrast.md](004-brand-colour-and-contrast.md).

## Deploy

`.github/workflows/deploy-previews.yml`, on push to `main` touching `preview/**`. Gates, in
order, all of which block the deploy:

1. `tsc --noEmit`
2. `vitest run`
3. `next build`
4. every page carries `noindex`
5. every image reference resolves against the built output

Concurrency group `pages-deploy`, queueing rather than racing, because the free plan allows one
concurrent build.

## Local verification

`.claude/launch.json` has a `previews-static` config serving `preview/out` on port 4311 via
`python -m http.server`. Verify against **that**, not against `next dev` — it is what actually
deploys.
