import { describe, expect, it } from 'vitest';
import type { Prospect } from './types';
import { IS_DEMO, localBusinessJsonLd, prospectMetadata } from './seo';

const prospect: Prospect = { slug: 'sample', name: 'Sample Driving School', short: 'Sample', city: 'Riverside', county: 'Riverside County', phone: '(951) 555-0100', phoneRaw: '+19515550100', years: '1', hourly: 85, areas: ['Riverside'], instructors: [] };

describe('truthful SEO', () => {
  it('does not claim licensing, ratings, or live inventory without verified data', () => {
    const metadata = prospectMetadata(prospect, '/');
    expect(metadata.description).not.toMatch(/DMV-licensed|live availability/i);
    expect(localBusinessJsonLd(prospect, '/')).not.toHaveProperty('aggregateRating');
    expect(localBusinessJsonLd(prospect, '/')).not.toHaveProperty('identifier');
  });

  it('keeps seeded demo data out of search and uses an existing social image', () => {
    const metadata = prospectMetadata(prospect, '/');
    expect(IS_DEMO).toBe(true);
    expect(metadata.title).not.toMatch(/book driving lessons/i);
    expect(metadata.robots).toMatchObject({ index: false, follow: false });
    expect(metadata.openGraph).toMatchObject({ images: [{ url: expect.stringMatching(/\/images\/hero\.webp$/) }] });
  });

  it('includes optional proof only when the corresponding source fields exist', () => {
    const verified = { ...prospect, licence: 'VERIFIED-LICENCE', rating: '4.9', reviews: '100' };
    expect(prospectMetadata(verified, '/').description).toMatch(/licence details are available/i);
    expect(localBusinessJsonLd(verified, '/')).toMatchObject({
      aggregateRating: { ratingValue: '4.9', reviewCount: '100' },
      identifier: { value: 'VERIFIED-LICENCE' },
    });
  });
});
