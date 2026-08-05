# Completeness audit

Audited against three things: your original Campaign 1 spec, the California DMV's actual requirements, and the feature sets of real CA driving-school sites ([Drivers Ed Direct](https://www.driverseddirect.com/), [Varsity Driving School](https://varsitydrivingschool.com/), [DriversEd.com](https://driversed.com/california/)).

**The honest answer to "is everything there" was no.** This is what was missing, what got fixed, and what is still outstanding.

---

## The significant miss: the 30-hour requirement

California requires a driver under 18 to complete **three** things, not two:

| Requirement | Hours | Was it on the sites? |
|---|---|---|
| Driver education (classroom or approved online) | **30 hours** | **No — absent entirely** |
| Professional behind-the-wheel training | 6 hours | Yes |
| Supervised practice with a parent/guardian | 50 hours (10 at night) | Yes |

Source: [California DMV — Driver Training Schools](https://www.dmv.ca.gov/portal/driver-education-and-safety/driver-training-schools/).

Every page previously said the DMV "requires 6 hours of professional behind-the-wheel training plus 50 hours of supervised practice" and stopped there. That is wrong by omission, and it is the kind of error a driving-school owner spots in about four seconds — it is their own regulatory environment.

It was also a missing product. Most CA schools sell the 30-hour course, often bundled with behind-the-wheel. The sites were silently omitting a revenue line.

**Fixed:** a `driverEd` section now renders on all four (price, format, DMV certificate, practice tests, bundle prompt), the FAQ explains the three requirements properly, and a second FAQ entry addresses the confusion between "driver education" and "behind-the-wheel training" — which is the single most common question in this niche.

---

## Also added

| Gap | Why it mattered | Status |
|---|---|---|
| **No enquiry form anywhere** | Not everyone books instantly. Parents want to ask first. Every real school site has one. | Added — validated, `type="tel"` for the numeric keypad, inline errors, focus management, success state |
| **No sitemap.xml** | Prospect pages were not discoverable | `sitemap.ts` on all four |
| **No robots.txt** | Same | `robots.ts` on all four |
| **No language signal** | Spanish is a major market in Riverside, Bakersfield, Sacramento | `languages` field, surfaced in the contact block |
| **No gift certificates** | Drivers Ed Direct sells these ("Give the gift of driving") — real revenue line for birthdays/graduation | `giftCertificates` flag + CTA |

All new fields are optional on the `Prospect` type, so a school that does not offer driver ed or gift certificates simply omits them and those sections disappear.

---

## Still outstanding — be aware before you promise anything

**From your original Campaign 1 spec:**

- **Teen / adult / road-test sub-pages.** The homepage links to `#teen`, `#adult`, `#roadtest` anchors, not real pages. The spec asked for pages.
- **Service-area landing pages.** Currently anchor links. These are *the* local-SEO play — one page per city with that DMV office and its test routes — and they are the main reason the `areas` array exists. Not built.
- **Booking-software integration.** Presented as a capability statement. The booking widget is a working front-end simulation with no backend.
- **Payment integration.** Same.
- **Call and form conversion tracking.** Stated on the page, not instrumented.

**Standard pages real schools have that these do not:**

- About page
- Privacy policy and terms — **now genuinely needed**, because the enquiry form collects a name and phone number
- Blog (the long-tail SEO play)
- Student/parent login and progress reports (Drivers Ed Direct has "Study Hall" and lesson reports)
- Free permit practice test — the strongest lead magnet in this niche; DriversEd.com and MyCaliforniaPermit both lead with it
- High-school fundraising programs (Drivers Ed Direct runs these as a channel)
- Actual Spanish translation. The sites *state* that Spanish is available; they are not translated.

---

## The enquiry form is not wired

`EnquiryForm.tsx` validates properly and shows a success state so the preview is fully clickable, but `submit()` resolves locally and **transmits nothing**. Before it collects a real enquiry:

1. Add an API route or Server Action and replace the body of `submit()`
2. Add a privacy notice link next to the submit button
3. Add spam protection (honeypot field or Turnstile)

The function carries a `⚠ WIRING REQUIRED` comment saying exactly this.

---

## Priority if you want to close the rest

1. **Service-area pages** — biggest SEO return, and the data model already supports it
2. **Free permit practice test** — strongest lead magnet in the category
3. **Privacy policy** — required now that a form exists
4. **Teen / adult / road-test pages** — completes the original spec
5. **Spanish** — market-dependent, but material in Riverside and Bakersfield

Items 1 and 4 are mostly mechanical: the `Prospect` type already carries everything needed, so they are new route files reusing existing components rather than new design work.

Sources: [California DMV](https://www.dmv.ca.gov/portal/driver-education-and-safety/driver-training-schools/) · [Drivers Ed Direct](https://www.driverseddirect.com/) · [DriversEd.com California](https://driversed.com/california/) · [My California Permit](https://www.mycaliforniapermit.com/) · [Colorlib driving school examples](https://colorlib.com/wp/driving-school-website-examples/)
