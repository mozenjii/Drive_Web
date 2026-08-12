import type { Client } from './types';

/**
 * Every page a client owns, derived from their data. This is the single place
 * that decides the URL tree, so generateStaticParams, the nav, the sitemap and
 * the internal index can never disagree with each other.
 *
 * A client is a path prefix, not a page. Two clients can both own /teen/
 * because each is namespaced beneath its own slug — which is the whole reason
 * one Pages project can host all of them.
 */

export interface RouteDef {
  /** Path segments beneath the client slug. Empty array is the homepage. */
  segments: string[];
  /** Nav and breadcrumb label. */
  label: string;
  kind: 'home' | 'program' | 'pricing' | 'instructors' | 'about' | 'contact' | 'area';
  /** For kind 'program' | 'area', which item this page renders. */
  key?: string;
}

export function routesFor(client: Client): RouteDef[] {
  const routes: RouteDef[] = [{ segments: [], label: 'Home', kind: 'home' }];

  for (const program of client.programs ?? []) {
    if (!program.slug) continue; // section-only programs render on the homepage
    routes.push({
      segments: [program.slug],
      label: program.navLabel ?? program.title,
      kind: 'program',
      key: program.slug,
    });
  }

  if (client.packageGroups?.length) {
    routes.push({ segments: ['pricing'], label: 'Pricing', kind: 'pricing' });
  }
  if (client.instructors?.length) {
    routes.push({ segments: ['instructors'], label: 'Instructors', kind: 'instructors' });
  }

  routes.push({ segments: ['about'], label: 'About', kind: 'about' });
  routes.push({ segments: ['contact'], label: 'Contact', kind: 'contact' });

  // The local-SEO play: one page per service area. This is why `areas` exists.
  for (const area of client.areas) {
    routes.push({
      segments: ['areas', slugify(area)],
      label: area,
      kind: 'area',
      key: area,
    });
  }

  return routes;
}

/** The routes that belong in the header. Area pages live in the footer instead. */
export function navRoutesFor(client: Client): RouteDef[] {
  return routesFor(client).filter((r) => r.kind !== 'area' && r.kind !== 'home');
}

/**
 * Combining marks are stripped by codepoint rather than by a regex range so this
 * file stays pure ASCII — it has to survive Windows editors and CI checkouts
 * without a mojibake'd character silently breaking a URL. NFD splits "Cañada"
 * into "n" + U+0303; dropping the mark yields "canada" rather than "can-ada".
 */
function stripCombiningMarks(value: string): string {
  let out = '';
  for (const char of value) {
    const code = char.codePointAt(0)!;
    if (code >= 0x0300 && code <= 0x036f) continue;
    out += char;
  }
  return out;
}

export function slugify(value: string): string {
  return stripCombiningMarks(value.toLowerCase().normalize('NFD'))
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function hrefFor(client: Client, segments: string[]): string {
  return ['', client.slug, ...segments].join('/') || '/';
}

export function findRoute(client: Client, segments: string[]): RouteDef | undefined {
  const target = segments.join('/');
  return routesFor(client).find((r) => r.segments.join('/') === target);
}
