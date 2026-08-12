import { describe, expect, it } from 'vitest';
import { clients } from '@/data';
import { AA_NORMAL, contrast } from './contrast';

/**
 * Every client's brand palette must be legible before it ships.
 *
 * A scraped brand hex is often not: Safety First's orange (#F06C30) is 3.05:1
 * on white, which fails AA for normal text and for white-on-orange buttons. The
 * rule is to keep their hue and darken it until it passes — never to ship the
 * raw value and never to abandon their brand for a safe default.
 */

const SURFACE = '#FFFFFF';
const WHITE = '#FFFFFF';

describe.each(clients.filter((c) => c.brand))('$name brand palette', (client) => {
  const brand = client.brand!;

  it('primary is readable as text on white', () => {
    expect(contrast(brand.primary, SURFACE)).toBeGreaterThanOrEqual(AA_NORMAL);
  });

  it('accent is readable as text on white', () => {
    expect(contrast(brand.accent, SURFACE)).toBeGreaterThanOrEqual(AA_NORMAL);
  });

  it('white button labels are readable on primary and accent fills', () => {
    expect(contrast(WHITE, brand.primary)).toBeGreaterThanOrEqual(AA_NORMAL);
    expect(contrast(WHITE, brand.accent)).toBeGreaterThanOrEqual(AA_NORMAL);
  });

  it('dark variants are darker than their base', () => {
    expect(contrast(brand.primaryDark, SURFACE)).toBeGreaterThan(contrast(brand.primary, SURFACE));
    expect(contrast(brand.accentDark, SURFACE)).toBeGreaterThan(contrast(brand.accent, SURFACE));
  });

  it('brand-tinted neutrals stay legible', () => {
    const bg = brand.bg ?? '#FFFFFF';
    // fgDim carries genuine content — "not included" rows, per-hour rates,
    // micro-labels — so it is held to AA for normal text, not to a decorative bar.
    if (brand.fgDim) {
      expect(contrast(brand.fgDim, bg)).toBeGreaterThanOrEqual(AA_NORMAL);
      expect(contrast(brand.fgDim, SURFACE)).toBeGreaterThanOrEqual(AA_NORMAL);
    }
    // Borders are non-text, but must still be visible against the page.
    if (brand.border) expect(contrast(brand.border, bg)).toBeGreaterThan(1.15);
  });

  it('soft tints are light enough to carry dark text', () => {
    // Soft tints back chips and badges whose label uses the dark brand colour.
    expect(contrast(brand.primaryDark, brand.primarySoft)).toBeGreaterThanOrEqual(AA_NORMAL);
    expect(contrast(brand.accentDark, brand.accentSoft)).toBeGreaterThanOrEqual(AA_NORMAL);
  });
});

describe('contrast maths', () => {
  it('matches known WCAG values', () => {
    expect(contrast('#000000', '#FFFFFF')).toBeCloseTo(21, 1);
    expect(contrast('#FFFFFF', '#FFFFFF')).toBeCloseTo(1, 5);
    // The raw Safety First orange — the value this guard exists to catch.
    expect(contrast('#F06C30', '#FFFFFF')).toBeLessThan(AA_NORMAL);
  });
});
