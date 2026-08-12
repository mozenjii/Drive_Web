# Open items

Last reviewed 2026-08-12.

## Blocked — needs something only you can provide

**Repository secrets**, so CI can deploy rather than only the workstation:

- `CLOUDFLARE_API_TOKEN` — a token with the *Cloudflare Pages: Edit* permission, on the
  **mohibbasra342@gmail.com** account
- `CLOUDFLARE_ACCOUNT_ID` — `bf90a73e76dc962d466924f51a2cd2fe`. **Not**
  `264259a526f92bbef106ca307dc8d541`; that is the Epoches company account and previews must not
  be hosted there. See [[014-deployment]].

**Sender details**, for the outreach itself:

- `SENDER_EMAIL`
- `SENDER_PHONE`
- `CALENDAR_LINK`
- `SENDER_ADDRESS` — **a real physical postal address. CAN-SPAM requires it and it must not be
  invented.** Penalties run to $53,088 per email.

Repository variable `PREVIEW_BASE` — optional again, now that the default in `src/lib/seo.ts` is
`https://epoches.pages.dev`, a host that resolves. Only needed if a custom domain is attached,
and then the export must be **rebuilt**, not just re-pointed. See [[014-deployment]].

## Blocked — needs the client

Written permission from six clients before their photographs of identifiable people go to
production: **Learn 2 Drive, MAS, NorCal, Easy Street, Allstate, Sanctified**. Recorded in each
`internalNotes`. Does not block the `noindex` preview.

Licence numbers from **Sanctified** and **AllGood**, who publish none.

## Not done

- **Nothing has been committed to git.** The tree has ~397 changes, most of them staged
  `node_modules` deletions from an earlier session, plus untracked `.github/`, `.gitignore`,
  `docs/`, `preview/`, `research/` and now `memory/`. The `node_modules` cleanup should not be
  bundled with the preview work in one commit.
- ~~**Nothing has been deployed.**~~ Live at <https://epoches.pages.dev/> since 2026-08-12, all
  20 verified on the live domain. But **by hand, not by CI** — the workflow has still never run,
  so that path remains unproven.
- **No `og:image` on any page.** Every preview reaches its recipient as a pasted link, and the
  unfurl has no picture. Highest-value remaining fix, and per-client photography for it is
  already in the repo.
- **191 of 211 leads have no preview.** Twenty are built.
