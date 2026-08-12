# The phone is the device these are opened on

## 2026-08-13 — A quarter of the screen was permanently held by chrome

Reported off a phone: the header never goes away, the call/book bar never goes away,
and the "Ask a question" pill sits across the corner. All three were reasonable on a
desktop and wrong on the device a cold-outreach link is actually opened on.

Measured before the change, on a 667px phone: 73px of sticky header + 88px of fixed call
bar = **161px, 24% of the viewport, permanently**, whatever you were reading.

### What changed

**The header and the call bar now travel with the scroll direction.** Down: gone. Up:
back. Below 1024px only — on a desktop a sticky header is expected and there is no bar.
Transform only; nothing reads or writes layout during a scroll.

**The bar stays at the bottom.** This was explicitly asked as a question — should it move
up beside the header, or go? Neither. On a phone the bottom edge is the only part of the
screen a thumb reaches without regripping, and a phone call is the conversion this entire
page exists to produce. The answer to "it takes up the screen" is that it *leaves*, not
that it moves somewhere harder to press.

**The launcher is a 58px circle with a speech bubble**, not a ~150px "Ask a question"
pill. The pill read as a banner — the thing people have trained themselves to ignore. The
words survive as the accessible name (`aria-label`), and appear on hover on pointer
devices only.

### The two bugs found while doing it

1. **The bar wrapped at 320px.** "Book a lesson" broke onto a second line, making the bar
   96px against the 72px the page reserved — so the last of the content sat under it.
   Fixed at the cause (`white-space: nowrap`, tighter padding under 360px) rather than by
   reserving more. 68–71px now at every width from 320 to 430.
2. **The reserved room animated.** `--bar-h` was doing two jobs, and the page's own
   bottom padding was driven from the value that animates — so the document became 72px
   shorter every time the bar left. Content jumped on every direction change, and at the
   foot of the page the shrink moves the scroll position, which fires another scroll
   event, which hides the bar again: an oscillation waiting for the right page length.
   Split into `--bar-h` (reserved, fixed) and `--bar-lift` (animated, drives the
   assistant only).

**Bug 2 was caught on the live deploy, not locally** — the local pass happened to read
the padding while the chrome was shown, and read a correct 72px. The state you sample in
is part of the measurement.

### Where the logic lives

`lib/chrome-motion.ts` — a pure function, `nextChrome({ y, anchor, state, panelOpen })`,
because every interesting case is a phone case and none of them are reachable through a
synthetic scroll event: a resting thumb must not flicker the header (6px threshold), a
slow drag must still accumulate to a decision (the anchor does not move on an ignored
step), the top 120px always shows, iOS's negative rubber-band offset is the top and not
"scrolling up", and nothing hides while the assistant panel is open. `ChromeMotion.tsx`
owns only the listener and writes `data-chrome` on `<html>`; the rest is CSS.

### Measured, live, three phone sizes, both states

| Viewport | Header | Bar | Launcher | Reserved padding | Reclaimed |
|---|---|---|---|---|---|
| 390 x 844 | 73 → 0 | 773 → off | 694 → 766, visible | 72px / 72px, doc shift 0 | 144px (17%) |
| 375 x 667 | 73 → 0 | 599 → off | 517 → 589, visible | 72px / 72px, doc shift 0 | 141px (21%) |
| 320 x 568 | 73 → 0 | 498 → off | 418 → 490, visible | 72px / 72px, doc shift 0 | 143px (25%) |

Desktop (1440 x 900) deliberately unchanged.

**Not verified by eye.** The browser pane in that session did not composite frames, so
`requestAnimationFrame` never fired and no screenshot was possible: the transitions could
not be watched, only their start and end states measured with transitions pinned off.
The *feel* of the reveal — whether 0.28s is right, whether the threshold is where a thumb
wants it — is unjudged and wants a real device.

## 2026-08-13, later the same day — REVERSED: the bottom bar is gone

The section above argues for keeping the call bar at the bottom on thumb-reach
grounds. Mohib overruled it, and the reason is better than mine:

> "I haven't seen any website with a footer, like, a bottom bar. It's my first, so I'm
> not gonna risk it."

Thumb reach is a real ergonomic argument and it is the wrong one here. These pages are
cold outreach whose entire job is to read as *their site, rebuilt* — not as something
built by someone with opinions about mobile patterns. A control a prospect has never seen
on a driving school's website is a risk with no upside, however well it performs in the
abstract. **Familiarity outranks ergonomics when the page is the pitch.**

So: the bar is deleted, and Call and Book moved up into the header. Below 1024px the nav
collapses entirely, so the header had been carrying a logo and nothing else; it now
carries the logo and both actions. The header keeps the scroll behaviour — off the top
going down, back the moment you scroll up.

Fitting three things across 320px needed two constraints, both worth keeping:

- **Scraped logos are any shape.** Easy Street's is 225px wide at the header's 46px
  height, which alone is most of a 320px screen. Capped at 132px, and 104px under 400px.
- **The call button drops its label under 400px** and keeps it as the accessible name.
  That left it 42px wide — under the minimum target size even though its *height* was
  fine. Both header buttons now carry `min-width` as well as `min-height`.

Everything the bar needed went with it: the reserved page padding (~88px of dead space
under the footer on every client, rendered or not), the `--bar-h`/`--bar-lift` pair, and
the assistant's offset — the launcher sits in the corner of the viewport again.

### Measured live, after the reversal

All 20 clients at 320px: header 69px, both actions at least 44x44, brand never
overlapping the actions, no horizontal overflow, **no bottom bar in any document**.
Header hides at 390x844, 375x667 and 320x568; unchanged at 1440x900; document height
identical in both states. At 430px and up the call label returns; above 1024px the header
actions give way to the full desktop nav.
