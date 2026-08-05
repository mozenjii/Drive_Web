import type { MetadataRoute } from 'next';
import { prospects } from '@/data/prospects';
import { ALLOW_INDEXING, SITE_URL } from '@/lib/seo';

/**
 * Every prospect page is a real indexable URL. For a business whose customers
 * search "driving school near me", being crawlable is not optional polish.
 * Next generates /sitemap.xml from this at build time.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!ALLOW_INDEXING) return [];
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...prospects.map((p) => ({
      url: `${SITE_URL}/${p.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
