# Photography, and what is needed before any of it ships

## The rule

**Photography of real people first, then motion, then vector.** A vector illustration where a
photograph belongs reads as cheap and un-human. Check for existing image assets in the repo
before inventing graphics.

## What is in use

**Thirteen of twenty** previews ship with the client's own photography, taken from their own
site and stored under `preview/public/clients/<slug>/`.

`client.photos` fills four layout slots — `hero`, `roadTest`, `vehicle`, `support` — and each
carries a **required** `alt`. Anything unset falls back to shared stock in `/images`. That floor
is fine for one preview and is a tell across twenty: a Ventura family on a Bakersfield school's
page is exactly the detail a prospect notices.

`vehicles.gallery` exists for schools that photograph their own cars. **Turlock names theirs —
Yoda, Dory and Blueberry** — and their own customers mention them by name in reviews. That beats
any stock interior shot, so the cars get a row of their own. Turlock is currently the only client
using it.

## Permission — required before production

Six clients' photographs show identifiable students, instructors or owners:

**Learn 2 Drive · MAS · NorCal · Easy Street · Allstate · Sanctified**

**Written permission is required from each before anything goes to production.** This is recorded
in each client's `internalNotes`. It does not block the `noindex` preview; it blocks the rebuild.

## Licensed stock on their sites

Several schools use licensed stock on their own sites. Reusing it inside a private, `noindex`,
short-lived preview *of their site* is defensible. Shipping it into a production rebuild is not —
the licence is theirs, not ours.

## Refused outright

- Generating synthetic faces for named real people.
- Reusing the AI-generated imagery found on San Diego Bay's site. Only their two real
  photographs were used.
