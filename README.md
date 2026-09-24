# Drive Web previews

A collection of driving school website concepts and reusable preview sites. The main preview
application lives in [`preview/`](preview/); standalone client site builds and verification
utilities live in [`sites/`](sites/). The static concepts in [`previews/`](previews/) and the
interactive studies in [`Website media assets brief/`](Website%20media%20assets%20brief/) are
kept as design references.

## Preview application

The Next.js application in `preview/` serves multiple client previews from one codebase. It uses
the client data in `preview/src/data/clients/` and shared components in `preview/src/components/`.
Photograph variants are derived locally from the committed originals during a build.

```sh
cd preview
npm ci
npm run dev
```

Run its checks with `npm run typecheck`, `npm test`, and `npm run build` from `preview/`.

## Standalone sites

`sites/` contains independent site builds and shared scripts for checking preview assets and
restored pages. Each site with a `package.json` can be installed and run from its own directory.

The GitHub Actions workflow in `.github/workflows/deploy-previews.yml` builds and checks the main
preview app. A Cloudflare Pages deployment requires the repository secrets documented in that
workflow.
