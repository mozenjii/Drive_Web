# The twenty clients

Roster order is `preview/src/data/index.ts`. Evidence for every fact is under
`research/<slug>/`, scraped **2026-08-09** — `pages/*.txt` is the visible text of each page
crawled, `assets/` the images kept, `index.json` the URL, HTTP status and dimensions behind each.

**If a claim is in a client file and not in `research/`, it should not have shipped.**

| # | Slug | Variant |
|---|---|---|
| 1 | safety-first-driving-school | Safe Route |
| 2 | dollar-driving-school | Safe Route |
| 3 | learn-2-drive-center | Atelier |
| 4 | san-diego-bay-driving-school | Apex |
| 5 | h-and-g-driving-school | Safe Route |
| 6 | bills-driving-school | Apex |
| 7 | turlock-driving-school | Atelier |
| 8 | norcal-driving-school | Safe Route |
| 9 | easy-street-driving-school | Atelier |
| 10 | teen-driving-academy | Safe Route |
| 11 | mas-driving-school | Apex |
| 12 | kanor-driving-school | Atelier |
| 13 | allstate-driving-school | Atelier |
| 14 | newport-driving-school | Apex |
| 15 | express-driving-school | Safe Route |
| 16 | sanctified-driving-school | Safe Route |
| 17 | academic-driving-school | Apex |
| 18 | a1-driving-school | Safe Route |
| 19 | driving-school-for-you | Atelier |
| 20 | allgood-driving-school | Apex |

## Licence numbers recovered

Four the enrichment pass recorded as "not captured" were sitting in plain sight:

- **Learn 2 Drive Center — E2135**, in their own site footer.
- **Turlock Driving School — 3826**, printed *inside their logo image*.
- **Newport Driving School — E1996**, on their site.
- **Express Driving School — E1779** (traffic school), alongside the E2089 already known.

Two publish none anywhere: **Sanctified** and **AllGood**. Flagged in `internalNotes` as the
first thing to ask for.

## Defects worth leading the conversation with

Strongest per client, roughly in order of how badly they hurt:

1. **A1** — their Bakersfield page names two competitors, ranks them second and third, and quotes
   one of them. Live defamation and unfair-competition exposure.
2. **H and G** — marketing spam sits inside their public review widget: a December 2025 post from
   "Fiona Nowell / Letstock AI" pitching a video generator, under a 5.0 rating.
3. **NorCal** — every page title renders as `NorCal âDriving Schoolâ`. UTF-8 smart quotes
   served as Latin-1, so the mojibake shows in the browser tab and in every Google result.
4. **Turlock** — the FAQ links their recommended online course as a relative URL, so it resolves
   to `turlockdrivingschool.com/faqs/Welcomedriver.com` and 404s. The default WordPress
   "Hello world!" post is still live.
5. **Academic** — a `999-999-9999` placeholder phone number, an Alameda legal address against San
   Diego listings, and every price hidden behind a zip-code lookup.
6. **San Diego Bay** — their Mature Driver page URL is a mangled Squarespace redirect that no
   search engine will rank and no customer will share.
7. **Bill's** — the homepage still leads with a COVID-19 vehicle-cleaning statement.
8. **Teen Driving Academy** — "Celebrating 30 years", written in 2020, founded 1990.
9. **AllGood** — "Welcome to AllGood Driving School Inc." printed four times, and three service
   cards all headed "Behind the Wheel Driver Training".
10. **Dollar** — the entire price list is a PNG. Invisible to search and to screen readers.

## Facts worth keeping

- **Learn 2 Drive** — owner Sylvia Vargas. $150 / $350 / $390.
- **Turlock** — cars named Yoda, Dory and Blueberry. Owners Patty and Don Chesney.
- **Newport** — $160 / $230 / $420 / $525 / $300 / $775. Sells single hours, so `lessonHours: 1`.
- **Allstate** — founder Dee Amanda Wu, five years a DMV examiner at Clairemont, issued 10,000+
  licences. Six instructors with photographs.
- **Easy Street** — Mel and Renee Duncan founding story, nine instructor headshots, full Ventura
  pricing.
- **Sanctified** — teaches 90-minute lessons, so `lessonHours: 1.5`.

## The scrape tooling

Lives in `research/tools/` and is reproducible: `scrape.py`, `digest.py`, `brand.py`,
`palette.py`, `sitecolours.py`, `targets.json`. `digest.py` drops lines appearing on ≥60% of a
site's pages, which is what made 293 pages readable rather than 293 copies of a nav bar.

84 MB of scraped third-party images are gitignored; the page text is kept.
