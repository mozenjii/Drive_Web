import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const sitesRoot = path.resolve(import.meta.dirname, '..');
const restoredRoutes = ['/', '/meridian-riverside', '/golden-state-sacramento', '/apex-bakersfield'];

const restorations = [
  {
    app: 'safe-route',
    preview: 'variant-a-safe-route.html',
    signature: 'From permit to <span class="hl">licensed driver</span>',
    photos: ['images/hero.webp'],
  },
  {
    app: 'apex',
    preview: 'variant-b-apex.html',
    signature: '<span>Pass the</span>',
    photos: ['images/hero.webp'],
  },
  {
    app: 'atelier',
    preview: 'variant-c-atelier.html',
    signature: 'One instructor,<br>from your first<br><em>mile to your licence.</em>',
    photos: ['images/hero.webp'],
  },
  {
    app: 'cockpit',
    preview: 'variant-d-cockpit.html',
    signature: 'Book a lesson in<br><span class="amber">under two minutes.</span>',
    photos: ['images/dual-control.webp', 'images/hero.webp', 'images/road-test-prep.webp'],
  },
];

for (const restoration of restorations) {
  test(`${restoration.app} restores its unique preview and approved photos`, async () => {
    const htmlPath = path.join(sitesRoot, restoration.app, 'public', 'site.html');
    const html = await readFile(htmlPath, 'utf8');
    const config = await readFile(path.join(sitesRoot, restoration.app, 'next.config.ts'), 'utf8');
    const fallback = await readFile(path.join(sitesRoot, restoration.app, 'src', 'app', '[slug]', 'page.tsx'), 'utf8');

    assert.match(html, new RegExp(`data-restored-from=["']${restoration.preview}["']`));
    assert.ok(html.includes(restoration.signature), 'original design signature must remain intact');
    assert.match(html, /<meta name="robots" content="noindex,nofollow">/);

    for (const photo of restoration.photos) {
      assert.ok(html.includes(photo), `expected approved photo ${photo}`);
    }

    assert.ok(config.includes("destination: '/site.html'"));
    for (const route of restoredRoutes) {
      assert.ok(config.includes(`source: '${route}'`), `missing exact rewrite for ${route}`);
    }
    assert.match(fallback, /notFound\(\)/, 'unknown prospect slugs must return 404');
  });
}
