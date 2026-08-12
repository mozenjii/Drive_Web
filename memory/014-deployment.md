# Deployment

## Live

**<https://epoches.pages.dev/>** — all 20 previews, deployed 2026-08-12.

Cloudflare Pages project `epoches`, account **mohibbasra342@gmail.com**
(`bf90a73e76dc962d466924f51a2cd2fe`), production branch `main`.

The root is the internal index of all twenty; each client owns a path prefix beneath it.

## Not the Epoches company account

An earlier deploy the same day went to the **Epoches** company account
(`epochesofficial@gmail.com`, `264259a526f92bbef106ca307dc8d541`) because Wrangler on this machine
was already logged in there, and I treated "already authenticated" as "the right place". It is
not. Torn down within the hour at Mohib's instruction; project deleted, no client ever saw a link.

**The rule:** a pre-existing credential answers *can I deploy*, never *should this land here*.
Confirm the destination account and say it out loud **before** creating anything.

Client previews live on the separate account above, not on the company account.

## Logging in to the right account

`wrangler logout`, then `wrangler login`. Two things bite:

- **The browser session decides the account.** Whatever Cloudflare session the default browser
  holds is what gets authorised — sign out first, or use an incognito window, or you will
  silently re-authorise the wrong account.
- **Windows truncates the auto-opened URL at the first `&`**, so Cloudflare receives no `state`
  and returns `invalid_state` — *"the state is missing or too weak"*. The state was fine; the URL
  was cut. Ignore the auto-opened tab and paste the full URL from the terminal by hand. It must
  end in `code_challenge_method=S256`.

Wrangler's OAuth scope list is fixed and far wider than needed (Workers, D1, queues, email
sending, containers). A custom API token with only **Account · Cloudflare Pages · Edit** is the
narrower alternative, and is the same credential CI needs.

## The base URL is compiled in — this is the trap

The first upload baked **`https://preview.epoches.com`** into every `canonical` and `og:url`.
That was the fallback in `src/lib/seo.ts`, and **the domain has never existed**.

Nothing on the page looked wrong. It fails at the only moment that matters: a recipient pasting
the link into WhatsApp, Slack or a mail client, where the unfurl reads `og:url` and resolves a
dead host.

**Static analysis of `out/` can never catch this.** `audit-static.py` checks that links resolve
*within the export*; an absolute URL to another host is not an internal link. Only fetching the
live page and reading the tag found it.

Fixed at the root: the default in `seo.ts` is now `https://epoches.pages.dev`, a host that
resolves, with the reasoning written next to it. So a build with no environment set is correct
rather than broken.

**If a custom domain is ever attached**, pointing DNS is not sufficient — the value is compiled
in, so the export must be **rebuilt** with `NEXT_PUBLIC_PREVIEW_BASE` (repository variable
`PREVIEW_BASE` in CI, which the workflow already reads) and redeployed.

## Gates run before the deploy

A hand deploy that skips the gates is how a broken page reaches a client. In order:

| Gate | Result |
| --- | --- |
| `tsc --noEmit` | clean |
| `vitest run` | 324 passed, 3 files |
| `next build` | 296 routes exported |
| `audit-static.py` | 293 pages, 422 image refs, 10,916 links, every check empty |

Then 720 files uploaded.

## Verified on the live domain, not assumed

- **20/20** clients return 200
- **20/20** carry `noindex, nofollow, nocache` — read off the live response, not the local file
- **20/20** have a `<title>` and a canonical on `epoches.pages.dev`
- **31 images** fetched from the edge, **0 broken**
- Interior pages sampled (pricing, about, contact, drivers-ed, behind-the-wheel, an area page) —
  all 200; unknown client paths correctly 404
- Root index 200

Four clients briefly returned **522** immediately after deploying and were clean on the first
retry — propagation, not a bad page. Edge cache also served stale HTML for about a minute after
an earlier redeploy (`Cache-Control: public, max-age=0, must-revalidate`). Retry before
diagnosing a redeploy as failed.

## Tailwind v4 scans comments, and it cost 28 bytes

Checking whether the deployed tree still matched source, the CSS bundle came back **28 bytes
larger** than the live one. Not a hash artifact — a real content difference, found by byte-level
`cmp` at offset 13264.

The addition was exactly `.absolute{position:absolute}`. Cause: the explanatory comment added to
`seo.ts` contained the phrase *"an absolute URL to another host"*. **Tailwind v4 scans source
files for class-like tokens, comments included**, so a word in English prose emitted a dead
utility rule into the production bundle.

Reworded; the CSS hash returned to `70eef41336eef141`, byte-identical to live. Harmless in
itself, but worth knowing: prose in a scanned source file is not inert.

The general lesson is the one that keeps repeating here — **"functionally identical" is a claim,
not an observation.** I asserted the output was byte-identical, and it was not. Hashing both
trees took under a minute and was the only reason the difference surfaced.

## Still open

- **`og:image` is absent on every page.** Every preview reaches its recipient as a pasted link,
  and the unfurl has no picture. Highest-value remaining fix, and per-client photography for it
  is already in the repo.
- **Nothing is committed to git.** This deployment went up with `--commit-dirty=true` against an
  uncommitted tree, so what is live corresponds to no commit and cannot be reproduced from
  history. See [[011-open-items]].
- **CI has still never run.** The workflow now names project `epoches`, but its two repository
  secrets are unset, so that path remains unproven.
- Safety First's hero reads *"Thirty years teaching Ventura County to drive"* directly above a
  proof figure of **31 years**, both derived from `SINCE 1995`. One of the two should move.

Related: [[002-preview-architecture]], [[010-verification]], [[011-open-items]]
