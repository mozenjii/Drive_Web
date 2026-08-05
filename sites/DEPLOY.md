# Deploying the four sites to Vercel

Four **standalone** Next.js 15 apps. Each is its own repo and its own Vercel project with its own domain.

| Directory | Concept | Angle | Notable |
|---|---|---|---|
| `cockpit/` | Cockpit | Show, don't tell | Booking flow, manoeuvre simulator, price calculator |
| `safe-route/` | Safe Route | Safety & Licensing | Animated permit → licensed route |
| `apex/` | Apex | Speed & Confidence | 3D car on a moving perspective road |
| `atelier/` | Atelier | Premium & Personal | Editorial serif, founder-led |

## Stack

- **Next.js 15.5.22** — pinned to the patched 15.x backport. `15.1.6` carries CVE-2025-66478.
- **React 19**, **TypeScript 5.7** (strict)
- **Tailwind v4.3.3** — CSS-first `@theme`, no `tailwind.config.js`. `tailwindcss` and `@tailwindcss/postcss` must stay on the *same* version; a mismatch fails the build with `Missing field 'negated' on ScannerOptions.sources`.
- **next/font** self-hosts Google Fonts at build time — no runtime request, no layout shift, works behind a restrictive network.
- `overrides` pin `postcss@8.5.25` and `sharp@0.35.3`. Without them `npm audit` reports 3 high-severity transitive advisories, and `npm audit fix --force` "resolves" them by downgrading Next to 9.3.3. Do not run that.

**Verified:** all four `npm run build` clean, `tsc --noEmit` passes, `npm audit --omit=dev` reports 0 vulnerabilities.

## First deploy

Each directory is a separate repo:

```bash
cd sites/cockpit
git init && git add -A && git commit -m "Initial commit"
gh repo create driveweb-cockpit --private --source=. --push
```

Then in Vercel: **Add New → Project → import the repo**. Framework auto-detects as Next.js; leave build settings alone. Repeat for the other three.

Set the real public URL per project so canonical URLs and OG tags point at the correct domain:

```bash
NEXT_PUBLIC_SITE_URL=https://cockpit.yourdomain.com
```

Demo builds are deliberately blocked from indexing. After every field in `prospects.ts` has been replaced with verified business data using `VERIFY.md`, explicitly enable indexing:

```bash
NEXT_PUBLIC_ALLOW_INDEXING=true
```

Until both variables are configured, page metadata stays `noindex`, `robots.txt` disallows crawling, and the sitemap stays empty. This prevents the bundled demonstration schools and phone numbers from reaching search engines accidentally.

## Adding a prospect

This is the whole workflow:

1. Open `src/data/prospects.ts`
2. Append one object — `slug` becomes the URL
3. Commit and push

```ts
{
  slug: 'valley-driving-fresno',
  name: 'Valley Driving School',
  short: 'Valley',
  city: 'Fresno',
  county: 'Fresno County',
  phone: '(559) 555-0110',
  phoneRaw: '+15595550110',
  licence: 'E5567',        // their REAL number, or omit the field
  years: '14',
  hourly: 88,
  areas: ['Fresno', 'Clovis', 'Madera'],
  instructors: [{ name: 'Rosa Delgado', initials: 'RD', role: 'Head Instructor', years: '14', bio: '…' }],
}
```

Vercel builds `https://yoursite.com/valley-driving-fresno` as a static page with its own title, description, OG tags and `DrivingSchool` structured data. Roughly two minutes per prospect.

`generateStaticParams` prerenders every slug and `dynamicParams = false` means unknown slugs 404 rather than rendering at request time.

### Optional fields degrade properly

`licence`, `students`, `rating`, `reviews` and `passRate` are all optional in `src/lib/types.ts`. Omit one and the UI adapts — the reviews section disappears entirely without `rating` + `reviews`, the licence chip vanishes, the gauge cluster drops that dial, and `aggregateRating` is left out of the JSON-LD.

**This is deliberate.** It means the honest option is also the easy option: if you cannot verify a school's pass rate, delete the line rather than invent one.

## Keeping the four in sync

You chose standalone repos over a monorepo, so genuinely shared files are duplicated. `scaffold.mjs` is the mitigation:

```bash
cd sites && node scaffold.mjs
```

It copies `src/lib/*`, `src/components/Reveal.tsx`, the route files and the configs from `cockpit/` into the other three, and keeps `package.json` dependencies aligned while preserving each app's name. It never touches `globals.css`, `layout.tsx`, `SitePage.tsx` or `data/prospects.ts` — those are meant to differ.

Run it after changing anything shared, then rebuild and push each repo.

## Local development

```bash
cd sites/cockpit && npm install && npm run dev
```

## Before any link reaches a real business

Read `VERIFY.md`. Short version: every `licence`, `passRate`, `rating`, `reviews` and `students` value currently in `prospects.ts` is invented demonstration data, and the reviews are fabricated. Sending a driving school a page showing a made-up DMV licence number is the fastest possible way to lose the lead — and attributing invented reviews to a real named business is a genuine legal exposure, not a style problem.
