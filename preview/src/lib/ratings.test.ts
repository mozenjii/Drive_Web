import { describe, expect, it } from 'vitest';
import ratings from '@/data/ratings-tier-a.json';
import { clients } from '@/data';

/**
 * A rating is a factual claim about a real business, and the only failure mode
 * that matters here is transcription: typing a number from memory instead of
 * reading it off the source.
 *
 * That happened. Bolsa's rating went into their client file as "4.7 from 160"
 * when the enrichment data says 4.5 from 87 — a plausible-looking number, on a
 * page carrying the business's own name, that nothing in the pipeline would have
 * caught. sites/VERIFY.md forbids exactly this and the audit cannot see it,
 * because a wrong rating is still a valid string.
 *
 * `ratings-tier-a.json` is the Google enrichment for the Tier A twenty, copied
 * out of the campaign workbook (`Outreach Master`, columns Rating and Reviews) by
 * script rather than by hand. Any client covered by it must match it exactly.
 *
 * Clients outside that list are not checked here — their figures predate the
 * fixture. Do not delete a rating to make this pass; fix the rating.
 */

const fixture = ratings as Record<string, { value: string; count: string; source: string }>;

const covered = clients.filter((client) => fixture[client.slug]);

it('the fixture covers the clients it is supposed to', () => {
  expect(Object.keys(fixture).length).toBe(20);
  expect(covered.length).toBeGreaterThan(0);
});

describe.each(covered)('$slug rating', (client) => {
  const expected = fixture[client.slug];

  it('matches the enrichment data exactly, or is omitted', () => {
    if (!client.rating) return; // omitting a rating is always allowed
    expect(client.rating).toEqual(expected);
  });

  it('is attributed to its source', () => {
    if (!client.rating) return;
    expect(client.rating.source).toBe('Google');
  });
});

describe('every client', () => {
  it('never publishes a rating without a source', () => {
    const unsourced = clients.filter((c) => c.rating && !c.rating.source?.trim());
    expect(unsourced.map((c) => c.slug)).toEqual([]);
  });

  it('never publishes a rating above 5.0 or below 1.0', () => {
    const impossible = clients.filter((c) => {
      if (!c.rating) return false;
      const value = Number(c.rating.value);
      return !Number.isFinite(value) || value > 5 || value < 1;
    });
    expect(impossible.map((c) => c.slug)).toEqual([]);
  });
});
