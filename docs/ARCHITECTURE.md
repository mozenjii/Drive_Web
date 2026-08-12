# Preview hosting architecture

**One repo. One `main` branch. One Cloudflare Pages project. One path prefix per client.**

```
preview.epoches.com/safety-first-driving-school/
preview.epoches.com/safety-first-driving-school/pricing/
preview.epoches.com/safety-first-driving-school/behind-the-wheel/
preview.epoches.com/safety-first-driving-school/areas/moorpark/
preview.epoches.com/<next-client>/...
```

A client is a **path prefix that owns a subtree**, not a page. That is the whole answer to "if a
client's existing site has several pages, where do the other pages go?" — they are directories
beneath the client's own slug. Two clients can both own `/pricing/` without colliding, and adding a
page to one client cannot affect another.

## Why not one Cloudflare project per client

Cloudflare caps an account at **100 Pages projects**, and the documentation states the limit
"is not routinely increased". `OFFERS.md` §8 plans for 2,000+ schools across CA, AZ, NV and TX once
the pilot clears — that model dead-ends at client 100 with no migration path.

It is also worse before you get there. On the free plan Cloudflare runs **one concurrent build**, so
a shared template fix costs N serial builds instead of one, and you maintain N build configurations.

## Why not one git branch per client

This one genuinely works, which is why it is tempting: Pages gives every branch a
`<branch>.<project>.pages.dev` alias and allows unlimited concurrent previews. The cost shows up
later. You will improve the template after client three — and then every improvement has to be
merged into N divergent branches touching the same files, forever, with conflicts in exactly the
components you most want to change.

Hosting topology should not be coupled to git topology.

## What this buys

| | Path-per-client | Project-per-client | Branch-per-client |
|---|---|---|---|
| Ceiling | ~3,000 clients (20,000 files/deploy) | **100 — hard cap** | No hard cap |
| Shared template fix | 1 build | N builds, serialised | N merges + N builds |
| Deploy | 1 push | N dashboards | N pushes |
| Take a preview down | Delete entry, push | Delete project by hand | Delete branch |
| See every client at once | `/` index page | No | No |

That fourth row matters more than it looks. `OFFERS.md` §7 promises a **14-day link expiry** and
says it has to be honestly enforced — "a deadline you don't keep is a lie your next 200 prospects
will price in." Here expiry is deleting one entry from `src/data/index.ts` and pushing. With 20
separate projects it is 20 manual teardowns that will not happen.

## When a client DOES get their own project

When they pay. That is the natural boundary: the preview monorepo is sales collateral, a sold client
is a product. At that point their site graduates to its own repo, its own Pages project, its own
domain, their own analytics — and indexing gets switched on there, deliberately.

## Indexing

Every preview page is hard-coded `noindex, nofollow`. There is deliberately **no environment
variable to turn it on**, and CI fails the deploy if any page is missing the tag.

A crawlable copy of a real school's site, carrying their name, would compete with that school's own
site in search results. That is the precise opposite of what we are selling them.

## Adding a client

1. Write `preview/src/data/clients/<slug>.ts` — every field sourced from their own site, per
   `sites/VERIFY.md`. Omit anything you cannot point at.
2. Import it in `preview/src/data/index.ts`.
3. Push. CI typechecks, builds, asserts noindex, deploys.

The URL tree comes from the data: `src/lib/routes.ts` derives every page from the client's
`programs`, `packageGroups`, `instructors` and `areas`, so `generateStaticParams`, the nav, the
footer and the internal index cannot disagree with each other.

## Local

```bash
npm run dev --prefix preview
```

Then `http://localhost:4310` for the internal index, or `http://localhost:4310/<slug>/` for a client.

> **Do not run `next build` while `next dev` is running.** They share `.next/`, and the production
> build overwrites the chunks the dev server is holding open — the dev server then 500s with
> `Cannot find module './331.js'`. If it happens: stop the server, `rm -rf preview/.next`, restart.
