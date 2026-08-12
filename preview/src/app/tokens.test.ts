import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Every custom property this stylesheet *reads* has to be declared somewhere it
 * can see, or supply its own fallback.
 *
 * This is not pedantry. An undefined custom property is invalid at computed-value
 * time, and CSS does not then fall back to something sensible — it drops the
 * declaration to the property's initial value. `padding: var(--space-7)` with no
 * --space-7 is `padding: 0`, and a shorthand with one bad value voids the whole
 * shorthand, so `padding-block: var(--space-20) var(--space-16)` loses BOTH
 * sides. Four steps of the spacing scale (7, 9, 14, 20) were missing that way,
 * which is how twenty client previews shipped with copy sitting flush against
 * the edge of the programme cards and two of the three heroes carrying no
 * vertical padding at all.
 *
 * Nothing else catches it: it is valid CSS, the build is silent, the type
 * checker never sees it, and the page renders — just wrong.
 */

const CSS_DIR = path.resolve(import.meta.dirname);
const SHEETS = ['globals.css', 'components.css', 'stage.css', 'infographic.css', 'variants.css'];

/** Properties set from JS at runtime or by next/font, not by any stylesheet. */
const SET_ELSEWHERE = new Set([
  '--font-sans', // layout.tsx, via next/font
  '--font-serif', // layout.tsx, via next/font
  '--tilt-x', // Infographic.tsx pointer tilt
  '--tilt-y',
  '--drift-x', // HeroStage.tsx parallax
  '--drift-y',
  '--brand-accent', // per-client inline style on the themed wrapper
]);

/** Comments mention `var(--space-N)` while explaining this very rule. */
const stripComments = (css: string) => css.replace(/\/\*[\s\S]*?\*\//g, ' ');

const sheets = SHEETS.map((name) => ({
  name,
  css: stripComments(readFileSync(path.join(CSS_DIR, name), 'utf8')),
}));

const declared = new Set<string>();
for (const { css } of sheets) {
  for (const [, prop] of css.matchAll(/(?:^|[;{\s])(--[a-zA-Z0-9-]+)\s*:/g)) declared.add(prop);
}

/** Every `var()` reference, with whether that particular reference has a fallback. */
function references(css: string) {
  return [...css.matchAll(/var\(\s*(--[a-zA-Z0-9-]+)\s*(,)?/g)].map(([, prop, comma]) => ({
    prop,
    hasFallback: Boolean(comma),
  }));
}

describe.each(sheets)('$name', ({ css }) => {
  it('references no custom property that is neither declared nor given a fallback', () => {
    const dangling = references(css)
      .filter((ref) => !ref.hasFallback)
      .filter((ref) => !declared.has(ref.prop) && !SET_ELSEWHERE.has(ref.prop))
      .map((ref) => ref.prop);

    expect([...new Set(dangling)]).toEqual([]);
  });
});

describe('spacing scale', () => {
  const STEP_REM = 0.25;

  /** The name is the multiplier: --space-6 is six 0.25rem steps. */
  it.each(
    [...declared]
      .filter((prop) => /^--space-\d+$/.test(prop))
      .map((prop) => [prop, Number(prop.slice('--space-'.length))] as const),
  )('%s is %i steps of 0.25rem', (prop, steps) => {
    const value = new RegExp(`${prop}:\\s*([\\d.]+)rem`).exec(sheets[0].css)?.[1];
    expect(value).toBe(String(steps * STEP_REM));
  });

  it('declares every step the stylesheets actually use', () => {
    const used = new Set(
      sheets.flatMap(({ css }) =>
        references(css)
          .map((ref) => ref.prop)
          .filter((prop) => /^--space-\d+$/.test(prop)),
      ),
    );
    expect([...used].filter((prop) => !declared.has(prop))).toEqual([]);
  });
});
