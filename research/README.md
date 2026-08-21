# Research record — forty previews

Every preview under `preview/src/data/clients/` is built from a scrape of the prospect's own public
site, taken on **2026-08-09**. This directory is the evidence: `<slug>/pages/*.txt` is the visible
text of each page crawled, `<slug>/assets/` is every image worth keeping, and `<slug>/index.json`
records the URL, HTTP status and dimensions behind each one.

If a claim is in a client file and not in here, it should not have shipped.

The second campaign batch was captured on **2026-08-13**. Coastline was researched but deliberately
not built; Teen Driving School in Santee was substituted at the user's direction. The second batch
therefore contains twenty new previews and evidence for twenty-one prospects.

## What was collected

| | |
|---|---|
| Sites crawled | 19 (Safety First was scraped earlier, into `safety-first-driving-school.md`) |
| Pages captured | 293 |
| Assets kept | ~450 |
| Previews built | 20 clients, 293 pages |
| Client photography used | 13 of 20 |

### Second batch

| | |
|---|---|
| Sites researched | 21 (including the skipped Coastline lead) |
| Evidence pages captured | 248, plus 21 crawl indexes |
| Previews built | 20 clients, bringing the roster to 40 |
| Deliberate substitution | Teen Driving School for Coastline |

The second pass recovered additional licence numbers from first-party material, including Bolsa
E0421, Drive Academy E0304, Budget E2166, Teen Driving School E2083, Premier 4734 and Icon's
conflicting legacy/current identifiers. Conflicts are recorded rather than silently resolved: Icon's
official logo says 4648 while the campaign directory reports E0672, so the preview publishes neither.

The Riverside Driving School lead is a Manhattan, New York business despite its name and California
campaign context. Its preview and metadata preserve New York; no California location was inferred.

## Facts recovered that the campaign workbook did not have

Four DMV licence numbers the enrichment pass recorded as "not captured" were sitting in plain sight:

- **Learn 2 Drive Center — E2135**, in their own site footer.
- **Turlock Driving School — 3826**, printed inside their logo image.
- **Newport Driving School — E1996**, on their site.
- **Express Driving School — E1779** (traffic school), alongside the E2089 already known.

Two schools publish **no licence number anywhere**: Sanctified and AllGood. Both are flagged in their
`internalNotes` as the first thing to ask for.

## Claims deliberately not reproduced

sites/VERIFY.md forbids publishing an unverified pass rate, rating, review count or student count.
These were all found and all left out:

| Client | Claim on their own site |
|---|---|
| Bill's | "95% first time pass rate"; "28 Teachers \| 20k+ Licenses Issued \| 5+ Working Years" — the five years contradicts a 2014 founding date on the same page |
| NorCal | "high pass rate (98%!)", stated three times |
| Newport | "99% PASSING RATE"; "224000+ SATISFIED CUSTOMERS" — 21 customers a day for 29 years |
| Academic | "99% of DMV drive test passing rate"; "the topest driving school in California" |
| MAS | "95% First-Time Pass Rate" |
| H and G | "1.5K+ 5-Star Ratings" against 162 Google reviews |
| A1 | "30,000+ graduates"; "550+ five-star reviews" against 93 Google reviews |
| Teen Driving Academy | "over 50,000 happy clients" |
| Dollar | "Highest Passing rate" |
| Driving School For You | third-party directory rankings |

MAS's "2,500+ 5-star Google reviews" **is** reproduced — Google shows 2,833 at 5.0, so it checks out.

## Defects worth leading with

The strongest per client, in rough order of how badly they hurt:

1. **A1** — their Bakersfield page names two competitors, ranks them second and third, and quotes one
   of them. That is live defamation and unfair-competition exposure, not a design problem.
2. **H and G** — marketing spam sits in their public review widget: a December 2025 post from
   "Fiona Nowell / Letstock AI" pitching a video generator, under a 5.0 rating.
3. **NorCal** — every page title renders as `NorCal âDriving Schoolâ`. UTF-8 smart quotes served
   as Latin-1, so the mojibake shows in the browser tab and in every Google result.
4. **Turlock** — the FAQ links their recommended online course as a relative URL, so it resolves to
   `turlockdrivingschool.com/faqs/Welcomedriver.com` and 404s. The default WordPress "Hello world!"
   post is still live.
5. **Academic** — a `999-999-9999` placeholder phone number, an Alameda legal address against San
   Diego listings, and every price hidden behind a zip-code lookup.
6. **San Diego Bay** — their Mature Driver page URL is a mangled Squarespace redirect that no search
   engine will rank and no customer will share.
7. **Bill's** — the homepage still leads with a COVID-19 vehicle-cleaning statement.
8. **Teen Driving Academy** — "Celebrating 30 years", written in 2020, founded 1990.
9. **AllGood** — "Welcome to AllGood Driving School Inc." printed four times, and three service cards
   all headed "Behind the Wheel Driver Training".
10. **Dollar** — the entire price list is a PNG, invisible to search and to screen readers.

## Assets and permission

Photography in `preview/public/clients/<slug>/` is the client's own, taken from their own site.
Where it shows identifiable students, instructors or owners — Learn 2 Drive, MAS, NorCal, Easy
Street, Allstate, Sanctified — **written permission is required before anything goes to production**,
and that is recorded in each client's `internalNotes`.

Several schools use licensed stock on their own sites. Reusing it inside a private, `noindex`,
short-lived preview of *their* site is defensible; shipping it into a production rebuild is not.

Two things were refused outright: generating synthetic faces for named real people, and reusing the
AI-generated imagery found on San Diego Bay's site. Only their two real photographs were used.
