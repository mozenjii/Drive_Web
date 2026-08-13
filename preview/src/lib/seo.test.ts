import { afterEach, describe, expect, it, vi } from 'vitest';

/**
 * `PREVIEW_BASE` is compiled into every `canonical` and `og:url` at build time,
 * so it is only ever wrong once — after that it is wrong in 293 pages of a
 * deployed export, invisible on the page, and fatal to a pasted link.
 *
 * The case that matters is the empty string. The deploy workflow passes
 * `NEXT_PUBLIC_PREVIEW_BASE: ${{ vars.PREVIEW_BASE }}`; an unconfigured
 * repository variable arrives as `''`, which is not nullish, so `?? default`
 * accepted it and every canonical lost its host.
 */

const load = async () => {
  vi.resetModules();
  return import('./seo');
};

const FALLBACK = 'https://epoches.pages.dev';

afterEach(() => {
  delete process.env.NEXT_PUBLIC_PREVIEW_BASE;
  vi.resetModules();
});

describe('PREVIEW_BASE', () => {
  it('falls back when the variable is unset', async () => {
    delete process.env.NEXT_PUBLIC_PREVIEW_BASE;
    expect((await load()).PREVIEW_BASE).toBe(FALLBACK);
  });

  it.each(['', '   '])('falls back when CI passes an unconfigured variable (%j)', async (value) => {
    process.env.NEXT_PUBLIC_PREVIEW_BASE = value;
    expect((await load()).PREVIEW_BASE).toBe(FALLBACK);
  });

  it('uses a configured host, without its trailing slashes', async () => {
    process.env.NEXT_PUBLIC_PREVIEW_BASE = 'https://previews.example.com//';
    expect((await load()).PREVIEW_BASE).toBe('https://previews.example.com');
  });

  it('never yields a base a canonical could be built on top of wrongly', async () => {
    for (const value of [undefined, '', ' ', 'https://x.test/']) {
      if (value === undefined) delete process.env.NEXT_PUBLIC_PREVIEW_BASE;
      else process.env.NEXT_PUBLIC_PREVIEW_BASE = value;
      const { PREVIEW_BASE } = await load();
      expect(PREVIEW_BASE, `for ${JSON.stringify(value)}`).toMatch(/^https:\/\/[^/]+$/);
    }
  });
});
