import type { Metadata } from 'next';
import type { Prospect } from './types';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, '');
export const IS_DEMO = !configuredSiteUrl;
// Indexing is an explicit post-verification action because bundled prospects are demonstration data.
export const ALLOW_INDEXING = Boolean(configuredSiteUrl) && process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';
export const SITE_URL = configuredSiteUrl ?? 'http://localhost:3000';

export function prospectMetadata(p: Prospect, path: string): Metadata {
  const title = `${p.name} — Driving Lessons in ${p.city}, CA`;
  const licensing = p.licence ? ' California DMV school licence details are available.' : '';
  const description =
    `${p.name} offers teen and adult behind-the-wheel lessons and road-test preparation in ${p.city}, California.` +
    licensing;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: p.name,
      locale: 'en_US',
      type: 'website',
      images: [{ url: `${SITE_URL}/images/hero.webp`, width: 1600, height: 1067, alt: p.name }],
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: ALLOW_INDEXING, follow: ALLOW_INDEXING },
  };
}

/**
 * LocalBusiness structured data. For a business whose customers all search
 * "driving school near me", this is not optional polish — it is how the
 * listing earns a rich result. Fields the prospect has not verified are
 * omitted rather than guessed.
 */
export function localBusinessJsonLd(p: Prospect, path: string) {
  const json: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: p.name,
    url: `${SITE_URL}${path}`,
    telephone: p.phoneRaw,
    areaServed: p.areas.map((a) => ({ '@type': 'City', name: a })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: p.city,
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    priceRange: '$$',
  };

  if (p.rating && p.reviews) {
    json.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: p.rating,
      reviewCount: p.reviews,
      bestRating: '5',
    };
  }
  if (p.licence) {
    json.identifier = {
      '@type': 'PropertyValue',
      name: 'California DMV School Licence',
      value: p.licence,
    };
  }
  return json;
}
