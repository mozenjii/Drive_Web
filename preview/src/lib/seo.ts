import type { Metadata } from 'next';
import type { Client } from './types';

/**
 * Previews are sales collateral for a business that is not ours, carrying that
 * business's name. They must never be indexed — a crawlable copy of a real
 * school's site competes with the school's own site in search, which is the
 * exact opposite of what we are selling them.
 *
 * There is deliberately no environment variable to turn indexing on. When a
 * client buys, their site graduates to its own repo and its own project, and
 * indexing is a decision made there.
 */
/**
 * `|| undefined` and not just `?.`: an *unset* variable is undefined and falls
 * through to the default below, but the deploy workflow passes
 * `NEXT_PUBLIC_PREVIEW_BASE: ${{ vars.PREVIEW_BASE }}`, and an unconfigured
 * repository variable arrives as the **empty string** — which is not nullish, so
 * `?? default` would have kept it. Every canonical and og:url in the export
 * would then have been a bare path with no host: exactly the class of fault
 * recorded in memory/014, invisible on the page and fatal to a pasted link.
 */
const configuredBase =
  process.env.NEXT_PUBLIC_PREVIEW_BASE?.trim().replace(/\/+$/, '') || undefined;

/**
 * The host this export will actually be served from, compiled into every
 * `canonical` and `og:url` at build time.
 *
 * The default must be a host that resolves. It used to be
 * `https://preview.epoches.com`, which has never existed — and because the
 * pages themselves looked perfectly fine, that shipped. It only breaks at the
 * one moment that matters: a recipient pasting the link into WhatsApp, Slack
 * or a mail client, where the unfurl reads `og:url` and hits a dead host.
 *
 * Auditing `out/` cannot catch this. The audit checks that links resolve
 * *within the export*, and a fully-qualified URL pointing at another host is
 * not an internal link. Only fetching the deployed page and reading the tag
 * finds it.
 *
 * (Keep prose in this file free of bare Tailwind utility words. Tailwind v4
 * scans source files for class-like tokens, comments included: an earlier
 * draft of this comment used the positioning word for "not relative", and it
 * emitted a dead 28-byte rule into the production CSS bundle.)
 *
 * Set `NEXT_PUBLIC_PREVIEW_BASE` (repository variable `PREVIEW_BASE` in CI) to
 * override. Attaching a custom domain in the Cloudflare dashboard is NOT
 * enough on its own — this value is baked in, so the export must be rebuilt.
 */
export const PREVIEW_BASE = configuredBase ?? 'https://epoches.pages.dev';

export const NOINDEX: Metadata['robots'] = {
  index: false,
  follow: false,
  nocache: true,
  googleBot: { index: false, follow: false },
};

export function pageMetadata(
  client: Client,
  opts: { title: string; description: string; path: string },
): Metadata {
  const url = `${PREVIEW_BASE}/${client.slug}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    robots: NOINDEX,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: client.name,
      locale: 'en_US',
      type: 'website',
    },
  };
}

/**
 * DrivingSchool structured data. Only emits fields the client actually
 * publishes — an omitted licence or rating drops out rather than appearing empty.
 */
export function drivingSchoolJsonLd(client: Client) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: client.name,
    url: `${PREVIEW_BASE}/${client.slug}/`,
    telephone: client.phones[0]?.display,
    areaServed: client.areas.map((a) => ({ '@type': 'City', name: a })),
  };

  if (client.address) {
    data.address = { '@type': 'PostalAddress', streetAddress: client.address, addressRegion: 'CA', addressCountry: 'US' };
  }
  if (client.email) data.email = client.email;
  if (client.founded) data.foundingDate = client.founded;
  if (client.languages?.length) data.availableLanguage = client.languages;

  // Deliberately NOT emitting aggregateRating. The rating we hold is Google's,
  // and republishing it as the business's own on-site rating misattributes it.
  return data;
}

export function yearsInBusiness(client: Client, now = new Date()): number | undefined {
  if (!client.founded) return undefined;
  const founded = Number(client.founded);
  if (!Number.isFinite(founded)) return undefined;
  return now.getFullYear() - founded;
}

export function formatPrice(price: number): string {
  return price % 1 === 0 ? `$${price}` : `$${price.toFixed(2)}`;
}
