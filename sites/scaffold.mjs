#!/usr/bin/env node
/**
 * Copies the shared infrastructure from sites/cockpit into the other variant
 * apps. Run from sites/:  node scaffold.mjs
 *
 * You chose four standalone repos over a monorepo, which means the shared
 * files below genuinely are duplicated. This script is the mitigation: edit a
 * shared file in cockpit, re-run, and every app picks the change up. It never
 * touches variant-specific files (globals.css, SitePage.tsx, layout.tsx,
 * data/prospects.ts) — those are meant to diverge.
 */
import { cpSync, mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const SRC = 'cockpit';
const TARGETS = ['safe-route', 'apex', 'atelier'];

/** Identical in every app. Overwritten on each run. */
const SHARED = [
  'tsconfig.json',
  'postcss.config.mjs',
  '.gitignore',
  'src/lib/types.ts',
  'src/lib/seo.ts',
  'src/components/Reveal.tsx',
  'src/app/sitemap.ts',
  'src/app/robots.ts',
];

/** Copied only if absent, so per-variant edits survive. */
const SEED_ONCE = [
  'src/data/prospects.ts',
  'src/app/globals.css',
  'src/app/layout.tsx',
];

let copied = 0, seeded = 0;

for (const t of TARGETS) {
  for (const rel of SHARED) {
    const from = join(SRC, rel), to = join(t, rel);
    if (!existsSync(from)) continue;
    mkdirSync(dirname(to), { recursive: true });
    cpSync(from, to);
    copied++;
  }
  for (const rel of SEED_ONCE) {
    const from = join(SRC, rel), to = join(t, rel);
    if (!existsSync(from) || existsSync(to)) continue;
    mkdirSync(dirname(to), { recursive: true });
    cpSync(from, to);
    seeded++;
  }

  // package.json: keep the deps in sync, keep the name distinct
  const pkg = JSON.parse(readFileSync(join(SRC, 'package.json'), 'utf8'));
  pkg.name = `driveweb-${t}`;
  pkg.description = `${t} — driving-school enrolment site. Static prospect pages, Vercel-ready.`;
  mkdirSync(t, { recursive: true });
  writeFileSync(join(t, 'package.json'), JSON.stringify(pkg, null, 2) + '\n');
}

console.log(`synced ${copied} shared files, seeded ${seeded} new variant files across: ${TARGETS.join(', ')}`);
console.log('variant-specific files were left alone: globals.css, layout.tsx, SitePage.tsx, data/prospects.ts');
