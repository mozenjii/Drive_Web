# Safety First Driving School — source research

**Scraped 2026-08-09** from `safetyfirstds.com`. Every figure below is quoted from the school's
own public pages. Nothing here is estimated or inferred — that is the point. Per `sites/VERIFY.md`,
only values on this page may appear in the preview; anything not here gets omitted, not guessed.

Workbook row: P1 — Build preview · slug `safety-first-driving-school` · Tier: Enrolment System
($3,500 + $297/mo) · Rating 4.9 · 70 reviews · Contact "Amir (Owner)".

---

## Identity

| Field | Value | Source page |
|---|---|---|
| Name | Safety First Driving School | all |
| DMV licence | **E4732** | `about_us.php` — matches OFFERS.md §7 verified list ✅ |
| Founded | **1995** | `about_us.php` |
| Address | 3055 E. Thousand Oaks Bl, Westlake Village, CA 91362 | footer, all pages |
| Phone (primary) | (805) 374-2393 | all |
| Phone (secondary) | (818) 865-9455 | all |
| Email | info@safetyfirstds.com | all |
| Traffic school licence | **1533** (Academy Traffic School — third party) | `pricing.php` |

> Note: the workbook lists the city as **Thousand Oaks**; their actual registered address is
> **Westlake Village**. "Thousand Oaks Bl" is the street name. Use Westlake Village on the preview,
> and keep Thousand Oaks in the service-area list.

**Hours — inconsistent across their own site:**
- `index.php`: Mon–Fri **10am**–6pm, Sat 10am–2pm, Sun closed
- `behind_the_wheel.php`, `driver_ed.php`, `pricing.php` footer: Mon–Fri **11am**–6pm, Sat 10am–2pm

Lessons are scheduled 7 days/week, 7am–10pm.

**Social:** facebook.com/safetyfirstds · instagram.com/safetyfirst805 · twitter.com/safetyfirstds

---

## Pricing — verbatim from `pricing.php`

Lesson components used across all packages: Introduction to Driving · Basic surface streets ·
DMV Exam Preparation · Freeways · Canyons · Defensive Driving · DMV Drive Test Service.

### Packages — Teens with a Permit *(identical pricing for Adult Students)*

| Package | Hours | Price |
|---|---|---|
| Basic | 6 hours (3 × 2hr) | **$475.00** |
| Standard | 10 hours (5 × 2hr) | **$775.00** |
| Deluxe | 14 hours (7 × 2hr) | **$975.00** |

### Packages — Teen without a Permit *(bundled with driver education)*

| Package | Price |
|---|---|
| Driver's ed & 6 hours | **$495.00** |
| Driver's ed & 10 hours | **$795.00** |
| Driver's ed & 14 hours | **$995.00** |

> Commercial observation: the bundle adds only **$20** over the un-bundled package, while the
> standalone online driver's ed is **$59**. They are discounting the bundle by $39 without saying so
> anywhere on the page. Worth surfacing as a labelled saving in the preview.

### Individual lessons

| Item | Price |
|---|---|
| Introduction to driving | $165.00 |
| Basic surface streets | $165.00 |
| DMV exam preparation | $165.00 |
| Freeways | $165.00 |
| Canyons | $165.00 |
| Defensive driving | $165.00 |
| Online Driver Education | $59.00 |
| DMV Test service — 2 hours *(same city as DMV office)* | $195.00 |
| DMV Test Service — 3 hours *(different city)* | $255.00 |
| Traffic School — Online | $29.99 |
| Traffic School — Paper Booklet | $59.99 |
| Traffic school express shipping upgrade | +$12.00 |

---

## Programs

**Online Driver's Education** — 10 chapters + final exam. DMV-approved statewide. For students 15½+.
No classroom attendance. Start/stop at will. Homepage claims a passing rate "well above 99%"
— **their claim, on their site**; do not restate it as ours.

**Behind the Wheel** — 2-hour lessons, 7 days/week 7am–10pm, pickup at home, office or school.
Covers fundamentals, DMV drive-test prep, freeway, canyon, defensive driving, accident-avoidance and
evasive manoeuvres. Note they state the DMV requires holding a permit six months before the drive test.

**Senior Program** — 1-hour or 3-hour packages.

**Traffic School** — online (self-paced, saves progress) or paper booklet. DMV-licensed TVS,
statewide. Online course provided by Academy Traffic School, licence 1533.

## Vehicles — `our_cars.php`

Newer **Toyota Priuses**. Passenger-side instructor brake, extra instructor rear-view mirrors,
"air bags (lots of them)". Selected for "safety and ease of driving". No model years, insurance or
inspection detail published.

## Instructors — `our_instructors.php`

| Name | Status | Based | Experience | Note |
|---|---|---|---|---|
| John Stapley | Full-time senior instructor | Woodland Hills | 30+ years | Trains new instructors |
| Jonathan Harnes | Part-time | Moorpark | 10 years | Electrician, designs traffic signals |
| Frank Anabtawi | Full-time | Simi Valley | 7+ years | |
| Adam Wurtz | Part-time | Moorpark | — | ⚠ **bio is mismatched** — text describes "Claudia" speaking Spanish |
| Edgar Alvarez | Full-time | Newbury Park | 4+ years | Bilingual English/Spanish |

All instructors: DMV training, physical exam, testing and background check. Male and female available.

Named in testimonials but not on the instructor page: **Amer** (owner — workbook says "Amir"),
**Marla**, **Eddy** (likely Edgar).

## Service area

Malibu *(extra fee)*, Calabasas, Agoura Hills, Oak Park, Westlake Village, Thousand Oaks, Moorpark,
Newbury Park, Camarillo. In-car training spans San Fernando Valley through Ventura and Ojai.
Online driver ed serves all of California.

## Testimonials

**26 published on `testimonials.php`, with names.** These are their own published words, so reusing
them on the preview is VERIFY.md-safe — unlike the fabricated reviews currently in `prospects.ts`.
Reviewer names include locations: Kayla K. (Westlake Village), Thomas B. (Simi Valley),
Alexys A. (Pacific Palisades), Sarah A. (Moorpark), Denise B. (Thousand Oaks), John G. (Camarillo).

No aggregate rating is shown on their site. The 4.9 / 70 in the workbook is from Google — attribute
it to Google or omit it.

---

## Site structure — 16 pages to replicate

```
index.php            driver_ed.php        behind_the_wheel.php   traffic_school.php
pricing.php          blog.php             about_us.php           contact_us.php
our_cars.php         our_instructors.php  testimonials.php       sitemap.php
register.php         student_dashboard.php  employement.php      terms_and_conditions.php
```

Note `employement.php` — their own typo, in a live footer link.

---

## Verified defects — safe to cite in outreach

Each of these I confirmed directly in a browser or over the wire on 2026-08-09.

1. **jQuery 1.9.1** (released Feb 2013) on the checkout page. Versions below 3.5.0 carry known XSS
   advisories (CVE-2019-11358, CVE-2020-11022, CVE-2020-11023). This runs on a page that takes card
   payments via "Select Plan" → Merchant Services.
2. **AngularJS** + `ui-bootstrap-tpls-0.12.0`. AngularJS has been end-of-life since December 2021 —
   no security patches are issued for it at all.
3. **Pinch-zoom is disabled** — `<meta name="viewport" … maximum-scale=1.0, user-scalable=no>`.
   That is a WCAG 2.1 AA failure (SC 1.4.4 Resize Text), on a site whose buyers are parents reading
   on phones.
4. **Stale copyright** — footer reads "Copyright (c) 2024 System Village" in August 2026.
5. **Mismatched instructor bio** — Adam Wurtz's profile describes a different person ("Claudia").
6. **Contradictory opening hours** — 10am on the homepage, 11am on four other pages.
7. Two unresolved console errors on load (`ERR_NAME_NOT_RESOLVED`, `ERR_CERT_COMMON_NAME_INVALID`)
   from third-party resources. Real, but I could not name the specific resource — weaker evidence,
   use only if a screenshot is captured at the time of sending.

## Claims that did NOT hold up — do not use

- ❌ **"Their pricing page leaks raw template variables."** It does not. The page is AngularJS and
  renders every price correctly in a real browser. The `{{pricinglist[0].data[0].price}}` strings are
  only present in the un-hydrated HTML source. `HOW-TO-USE.md` refers to a *receipt* page rather than
  pricing — that specific page is behind a purchase and remains **unverified**. Do not attach a
  pricing-page screenshot as evidence of breakage; it would be visibly wrong to the owner.
- ❌ **TLS/certificate problem on `www.`** — checked. One Let's Encrypt cert covers both
  `safetyfirstds.com` and `www.safetyfirstds.com`, valid to 2026-10-29. `www` 301s to apex correctly.

---

## Asset scrape — 2026-08-09 (second pass)

Downloaded to `research/safety-first-assets/`. Everything below is theirs.

| Asset | Source | Use |
|---|---|---|
| `logo.png` | `media/img/logo.png` | **Their real logo** — orange/purple, road-shaped "S". Now in the preview header and footer. |
| `banner-621ea24b8320b.jpg` | `admin/banners/` | "We are hiring driving instructors" banner. Carried onto the instructors page. |
| `image1–3.jpg` | `media/img/` | Real student/instructor photos, 247×189 — small, but genuine. |
| `car-image.jpg` | `media/img/` | Their car photo. |
| `banner-621e980db*.JPG` | `admin/banners/` | Three more homepage slider banners. |

### ⚠ There are no instructor photographs

`our_instructors.php` renders the **same generic stock icon (`driver-512.png`) five times** — a
grey silhouette holding a blue steering wheel. Not one of John Stapley, Frank Anabtawi, Edgar
Alvarez, Jonathan Harnes or Adam Wurtz has a face on their own website.

So instructor photos **cannot be scraped — they do not exist**. They also must not be generated:
attaching a synthetic face to a named real person misrepresents that person, and the owner would
recognise it instantly. The preview uses initial monograms until the school supplies real
headshots, and "five identical stock avatars" goes on the defect list instead.

### Brand colours, sampled from their logo

Purple `#6D6294` · orange `#F07F2C`. The current preview is still on the Safe Route blue —
switching it to their own palette is the next visible win.

### Additional real content found

- **Merchant/payment:** Authorize.Net seal in the footer (`verify.authorize.net`).
- **Careers:** actively hiring instructors — CA licence, high-school diploma, clean record,
  6+ years driving, pre-licensing training provided. This corroborates the "growing market"
  indicator in `OFFERS.md` §1.
