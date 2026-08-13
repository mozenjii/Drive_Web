import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const appDir = join(process.cwd(), 'src', 'app');
const publicDir = join(process.cwd(), 'public', 'images');
const componentsCss = readFileSync(join(appDir, 'components.css'), 'utf8');
const variantsCss = readFileSync(join(appDir, 'variants.css'), 'utf8');
const pageHeaderSource = readFileSync(
  join(process.cwd(), 'src', 'components', 'pages', 'PageHeader.tsx'),
  'utf8',
);
const contactPageSource = readFileSync(
  join(process.cwd(), 'src', 'components', 'pages', 'ContactPage.tsx'),
  'utf8',
);

const headerAssets = [
  'page-head-safe-route.webp',
  'page-head-apex.webp',
  'page-head-atelier.webp',
  'page-head-people-safe-route.webp',
  'page-head-people-apex.webp',
  'page-head-people-atelier.webp',
];

describe('inner-page header artwork', () => {
  it('ships one optimized artwork asset per visual variant', () => {
    for (const asset of headerAssets) {
      const assetPath = join(publicDir, asset);
      expect(existsSync(assetPath), `${asset} should exist`).toBe(true);
      expect(statSync(assetPath).size, `${asset} should remain lightweight`).toBeLessThan(500_000);
      expect(variantsCss).toContain(`/images/${asset}`);
    }
  });

  it('keeps artwork outside normal flow and behind existing header copy', () => {
    expect(componentsCss).toMatch(/\.pageHead::after\s*\{[^}]*position:\s*absolute/s);
    expect(componentsCss).toMatch(/\.pageHead::after\s*\{[^}]*pointer-events:\s*none/s);
    expect(componentsCss).toMatch(/\.pageHead \.wrap\s*\{[^}]*z-index:\s*1/s);
  });

  it('defines a phone treatment without changing header layout measurements', () => {
    expect(componentsCss).toMatch(
      /@media \(max-width:\s*700px\)[\s\S]*?\.pageHead::after\s*\{[^}]*opacity:/,
    );
    expect(componentsCss).not.toMatch(/\.pageHead::after\s*\{[^}]*display:\s*(grid|flex)/s);
  });

  it('uses the people artwork only when a page explicitly opts in', () => {
    expect(pageHeaderSource).toContain("art?: 'road' | 'people'");
    expect(pageHeaderSource).toContain('data-art={art}');
    expect(contactPageSource).toContain('art="people"');
    expect(componentsCss).toContain(".pageHead[data-art='people']::after");
    expect(variantsCss).toContain('--page-head-people-image:');
    expect(contactPageSource).toContain('image={client.photos?.contact?.src}');
    expect(contactPageSource).toContain('imageDisclosure={client.photos?.contact?.disclosure}');
    expect(contactPageSource).not.toContain('client.photos?.vehicle ??');
    expect(pageHeaderSource).toContain("'--page-head-custom-image'");
    expect(componentsCss).toContain('.pageHead[data-custom-image]::after');
    expect(componentsCss).toMatch(/\.pageHeadDisclosure\s*\{[^}]*position:\s*absolute/s);
  });
});
