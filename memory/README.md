# Project memory — DriveWeb

Written record of what has been done, decided and refused on this project, so none of it has
to be reconstructed from a chat transcript or from the diff.

**One file per subject. Append, do not rewrite.** Every entry is dated. If a decision is
reversed later, add the reversal underneath the original with its own date rather than editing
the original away — the reason something changed is usually worth more than the change.

| File | Subject |
|---|---|
| [LOG.md](LOG.md) | Chronological log. Newest at the top. Start here. |
| [001-campaign-and-client.md](001-campaign-and-client.md) | Who this is for, what is being sold, the legal constraints |
| [002-preview-architecture.md](002-preview-architecture.md) | How the previews are built, routed and deployed |
| [003-design-variants.md](003-design-variants.md) | The three templates and how each client was assigned one |
| [004-brand-colour-and-contrast.md](004-brand-colour-and-contrast.md) | Sampling brand colour, and why it nearly always needs darkening |
| [005-photography-and-permissions.md](005-photography-and-permissions.md) | Whose photographs are in use and what is still needed to ship them |
| [006-claims-refused.md](006-claims-refused.md) | Every claim found and deliberately not reproduced |
| [007-the-twenty-clients.md](007-the-twenty-clients.md) | The roster, with what was recovered per client |
| [008-workbook-and-slugs.md](008-workbook-and-slugs.md) | The outreach workbook, and the slug collisions that would have misfired |
| [009-manoeuvre-simulator.md](009-manoeuvre-simulator.md) | The road-test simulator, and the rewrite that fixed the parallel park |
| [010-verification.md](010-verification.md) | What has actually been measured, and how |
| [011-open-items.md](011-open-items.md) | Blocked on someone else, or not done yet |
| [012-stop-shipping-a-template.md](012-stop-shipping-a-template.md) | The shared-photo and shared-heading failure, and the reference sites to design against |
| [013-assistant-and-ai-features.md](013-assistant-and-ai-features.md) | The on-page assistant, why it is not an LLM, and which AI features need a back end |
| [014-deployment.md](014-deployment.md) | Where the previews are live, on which account, and what is compiled in at build time |
| [015-css-tokens-and-card-structure.md](015-css-tokens-and-card-structure.md) | The undeclared spacing tokens that silently zeroed padding on all 20 previews, and the card layering/alignment fixes |

## Standing rules

These come from `sites/VERIFY.md` and from the campaign docs, and they outrank convenience:

- Never publish an unverified licence number, pass rate, rating, review count or student count.
  Delete the field rather than estimate it.
- Never attribute an invented review to a real named business.
- Never generate a synthetic face for a real named person.
- Every preview is `noindex, nofollow`. There is deliberately no environment variable to turn
  that off.
- The company is **Epoches**. Aeroxify is a stale default and is wrong wherever it appears.
