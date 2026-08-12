# The assistant, and why it is not a language model

`preview/src/lib/assistant.ts` — the logic
`preview/src/lib/assistant.test.ts` — the guarantees
`preview/src/components/Assistant.tsx` — the interface

## 2026-08-10 — built

An assistant on every page of every preview: answers questions, recommends a
package, and takes a lesson request.

## The decision that shaped everything

**It is deterministic, and that is the feature, not a compromise.**

Two constraints made a language model the wrong tool:

1. **No server.** The previews are a static export on Cloudflare Pages. Calling a
   model means shipping an API key to the browser.
2. **Real businesses.** Every page carries a real driving school's name. A model
   asked "what's your pass rate?" produces a plausible number, and publishing an
   invented pass rate for a real company is what `sites/VERIFY.md` forbids
   outright. Ten of these twenty schools publish an unverifiable pass rate or
   student count on their own sites; all ten were refused by hand
   ([006](006-claims-refused.md)). Handing a generator the same job would undo
   that in one afternoon.

So every reply is assembled from fields on `Client`. Where the data is absent it
says so and gives a phone number. **It is structurally incapable of inventing a
fact about the business** — a stronger guarantee than any system prompt, and the
reason it is safe to put in front of a prospect's customers.

## What it does

- **Answers** on price, hours, service areas, DMV licence, courses, the drive
  test, languages and contact — each intent returning `undefined` when the client
  publishes nothing, so it falls through rather than improvising.
- **Recommends a package** from that client's own `packageGroups`, by audience
  and by how much practice they want, explaining the pick in the hours and price
  that package actually carries.
- **Takes a lesson request** — who, where, when, name, phone — then summarises it
  and hands over to the phone number or the contact page.

## What it refuses

A dedicated `UNANSWERABLE` guard runs **before** any intent: pass rate, success
rate, guarantees, student counts, "are you the best".

This was found by the tests, not by inspection. `"what is your pass rate?"`
originally matched the drive-test intent on the word *pass* and replied with a
course description. No invented number — but answering a question about pass
rates with something that merely *looks* like an answer is the same failure in
different clothes.

## What the tests actually assert

`assistant.test.ts` runs against all twenty clients, 324 tests total in the suite.
The load-bearing one:

> **never states a number the client does not publish** — every digit in every
> reply, across 26 probe questions, must appear somewhere in that client's own
> data.

Plus: never claims a pass rate/guarantee/superlative; refuses claim questions
outright; admits ignorance on gibberish; always leaves a route to a human; only
offers opening prompts it can actually answer; recommends only packages the
client genuinely sells; and summarises a booking **without** the words confirm,
booked, reserved or scheduled.

## Honesty in the interface

Follows the pattern `EnquiryForm` already set. The booking summary says plainly:

> Nothing was sent just now. This is a preview, so it will not take a real
> person's details until it is live on *<school>*'s own domain.

The panel footer says it is a demo built by Epoches that answers from published
information only. It never claims a booking was made, because it cannot make one.

## Verified

- 324 tests pass, `tsc` clean, 296 pages build.
- Full flow driven in a real browser: greeting → price → pass-rate refusal →
  booking (who/where/when/name/phone) → summary → `tel:` and contact handoffs.
- **261 assistant text nodes measured across 8 clients' panels, 0 contrast
  failures.**

One content bug the browser run caught: Allstate's cheapest *priced* line is
"Second and third lessons", so `"Packages start at $168 — that is the Second and
third lessons"` was clumsy and implied a starter package. Now phrased as "The
lowest published price is …", which is precisely true.

## What is built, and what is not — an honest inventory

Asked directly on 2026-08-10 whether *every* AI feature was implemented. It is not.

**Built and verified:**

| Feature | Where |
|---|---|
| Q&A over the client's published data | `assistant.ts` — 10 intents |
| Refusal of unverifiable claim questions | `UNANSWERABLE` guard |
| Package recommender | `recommend()` |
| Lesson-request flow with honest handoff | `Assistant.tsx` booking steps |

**Safe to build next, still static, no invention risk** — in value order:

1. **Site search** over the client's own pages. Purely client-side, no new claims.
2. **Eligibility / next-step checker** — "16, no permit" → what California
   actually requires, using the DMV rules already encoded in `DmvRequirements`.
3. **Instant quote** from the published price list — partly covered by the
   recommender, but not exposed on the pricing page itself.

None of these were started. Half-building a feature is how `editorial` and
`panel` shipped with no CSS; better to name them than to leave three broken.

## AI features that would need a back end

Worth knowing what is on the other side of the line, because these are real
things to sell — they just cannot ship inside a static `noindex` preview:

| Feature | What it needs |
|---|---|
| Free-text conversation over their content | A model endpoint and a server to hold the key |
| Real availability and booking into the diary | Calendar/CRM integration |
| Reminder and follow-up texts | A messaging provider, plus TCPA consent — see [001](001-campaign-and-client.md) |
| Call answering / voice agent | Telephony, plus California two-party consent for recording |
| Lesson-progress summaries for parents | Instructor data the school does not currently keep |

Anything that texts or calls a customer is TCPA territory and needs prior express
consent. That is not a technical footnote; it is the constraint that decides
whether the feature can exist.

Related: [[006-claims-refused]], [[012-stop-shipping-a-template]]
