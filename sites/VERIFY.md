# Pre-send verification

Run this checklist before a link goes to a real driving school. It takes about five minutes per prospect and protects the campaign.

## Everything currently in `prospects.ts` is invented

The three seeded entries — Meridian Riverside, Golden State Sacramento, Apex Bakersfield — are **demonstration data**. The school names, licence numbers, pass rates, student counts, ratings, review counts, reviewer names and review text were all written to make the template look finished. None of it is real.

## Per-field rules

| Field | Rule |
|---|---|
| `licence` | Must be the school's **real** California DMV school licence number, looked up on the DMV's driving-school register. If you cannot find it, **delete the field.** A school owner who sees a fabricated licence number on a page bearing their name will not reply, and is right not to. |
| `rating`, `reviews` | Must match their live Google Business Profile on the day you send. Omit both to remove the reviews section entirely. |
| `passRate` | Only if they publish it. This is the single easiest claim to be caught inventing — a school knows its own pass rate. Omit unless sourced. |
| `students` | Only if they publish it. Omit otherwise. |
| `years` | Check the "in business since" date on their Google profile or site footer. Drives the "Est." year everywhere. |
| `phone`, `phoneRaw` | Call it once. A dead number in a cold email is worse than no number. |
| `instructors` | Real names only if published on their own site. Otherwise cut the array to the owner, or leave it empty. |
| Review quotes | The three quotes in each `SitePage.tsx` are **written, not collected.** Replace with real Google reviews or delete the section. |
| Prices | $189 / $479 / $159 and the `hourly` rate are plausible California market rates but illustrative. Match their published pricing or present the section as a proposed structure. |

## Why the types make omission easy

Every claim field is optional in `src/lib/types.ts`. Delete a line and the UI adapts cleanly — no gaps, no "undefined", no broken layout:

- no `rating`/`reviews` → the whole reviews section and the `aggregateRating` in the JSON-LD disappear
- no `licence` → the header chip, utility bar text, licensing tile and footer line all drop out
- no `passRate` → the gauge (Cockpit) and the floating stat card (Atelier) disappear

The honest version is not extra work. It is less.

## Structured data

`localBusinessJsonLd()` in `src/lib/seo.ts` emits `DrivingSchool` schema. It deliberately omits `aggregateRating` unless both `rating` and `reviews` are set. Publishing a fabricated `aggregateRating` is a Google structured-data policy violation and can get a site's rich results suppressed — a real cost to the client you are trying to win.

## Final check

```bash
grep -n "licence\|passRate\|rating\|reviews\|students" src/data/prospects.ts
```

Read every line it returns and ask: *can I point to where this number came from?* If not, delete it.
