# Preview Restoration with Photo-Only Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore all four original preview designs exactly and add only design-specific realistic photography.

**Architecture:** Treat the self-contained preview HTML files as immutable source truth. Generate one `public/site.html` per app with tightly scoped photo substitutions, then use Next rewrites for the existing entry routes so the original HTML/CSS/JavaScript runs unchanged.

**Tech Stack:** Next.js 15, static HTML/CSS/JavaScript, Node.js restoration verifier, Playwright Chromium.

## Global Constraints

- Do not redesign, normalize, or share the four visual systems.
- Do not remove original interactions or content.
- Use only the assigned realistic photos; do not fabricate named instructor portraits.
- Preserve mobile behavior and 44px interactive targets.
- The preview files remain unchanged as the comparison source.

---

### Task 1: Restoration contract

**Files:**
- Create: `sites/tests/restored-previews.test.mjs`
- Test: `sites/tests/restored-previews.test.mjs`

- [ ] Write assertions for each original design signature, generated site file, assigned photo, and route rewrite.
- [ ] Run `node --test tests/restored-previews.test.mjs` from `sites/` and verify RED because generated sites and rewrites do not exist.

### Task 2: Deterministic restoration generator

**Files:**
- Create: `sites/restore-preview-designs.mjs`
- Create: `sites/{safe-route,apex,atelier,cockpit}/public/site.html`

- [ ] Map each app to its authoritative preview.
- [ ] Copy the original source in memory and apply only the approved CSS/slot substitutions.
- [ ] Fail when an expected insertion or replacement anchor is absent.
- [ ] Write the generated static documents and rerun the restoration contract to GREEN.

### Task 3: Route the apps to the restored originals

**Files:**
- Modify: `sites/{safe-route,apex,atelier,cockpit}/next.config.ts`

- [ ] Add exact rewrites for `/`, `/meridian-riverside`, `/golden-state-sacramento`, and `/apex-bakersfield` to `/site.html`.
- [ ] Rerun the restoration contract and all four production builds.

### Task 4: Remove the delivered shared redesign

**Files:**
- Delete redesign-only router, mobile-nav, responsive-photo, and associated test files from all four apps.
- Delete the prior cross-site redesign E2E/capture scripts and prior QA artifact.

- [ ] Confirm the app builds do not depend on the redesign-only files.
- [ ] Remove only files introduced for the unwanted redesign.
- [ ] Run all four builds again.

### Task 5: Browser and visual verification

**Files:**
- Create: `sites/e2e/restored-previews.spec.ts`
- Replace: `design-qa.md`

- [ ] Start all four production sites.
- [ ] Verify unique headlines, original interactions, photo loading, overflow, console output, and mobile tap targets.
- [ ] Capture mobile and desktop screenshots for every preview and implementation.
- [ ] Build side-by-side comparisons and resolve every P0/P1/P2 difference not caused by the approved photo substitutions.
- [ ] Finish `design-qa.md` with the exact final line `final result: passed`.

