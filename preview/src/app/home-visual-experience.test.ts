import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const appDir = path.resolve(import.meta.dirname);
const homeSource = readFileSync(
  path.join(appDir, '..', 'components', 'pages', 'HomePage.tsx'),
  'utf8',
);
const globalsCss = readFileSync(path.join(appDir, 'globals.css'), 'utf8');
const componentsCss = readFileSync(path.join(appDir, 'components.css'), 'utf8');

describe('photo-led home-page experience', () => {
  it('uses client-specific photography as atmosphere for locations and the closing CTA', () => {
    expect(homeSource).toContain("const atmosphere = photoFor(client, 'hero')!;");
    expect(homeSource).toContain('className="section locationSection"');
    expect(homeSource).toContain('className="section finalCtaSection"');
    expect(homeSource.match(/className="sectionBackdrop"/g)).toHaveLength(2);
    expect(homeSource.match(/src=\{atmosphere\.src\}/g)).toHaveLength(2);
    expect(homeSource.match(/sizes="100vw"/g)).toHaveLength(2);
    expect(componentsCss).toMatch(/\.sectionBackdrop\s*\{[^}]*position:\s*absolute/s);
    expect(componentsCss).toMatch(/\.sectionBackdrop\s*\{[^}]*object-fit:\s*cover/s);
  });

  it('renders service areas as descriptive, icon-led navigation cards', () => {
    expect(homeSource).toContain('className="locationGrid"');
    expect(homeSource).toContain('className="locationCard"');
    expect(homeSource).toContain('<MapPinIcon />');
    expect(homeSource).toContain('<span className="locationAction">View local lessons</span>');
    expect(homeSource).toContain('<ArrowRightIcon />');
    expect(globalsCss).toMatch(/\.locationCard\s*\{[^}]*min-height:\s*72px/s);
    expect(globalsCss).toMatch(/\.locationCard:hover\s*\{/s);
    expect(globalsCss).toMatch(/\.locationCard:active\s*\{/s);
  });

  it('makes every programme link look and feel like a real control', () => {
    expect(componentsCss).toMatch(/\.pathLink\s*\{[^}]*display:\s*inline-flex/s);
    expect(componentsCss).toMatch(/\.pathLink\s*\{[^}]*min-height:\s*44px/s);
    expect(componentsCss).toMatch(/\.pathLink\s*\{[^}]*border:\s*1px solid/s);
    expect(componentsCss).toMatch(/\.pathLink:hover\s*\{[^}]*text-decoration:\s*none/s);
  });

  it('keeps the richer layout mobile-first and motion-safe', () => {
    expect(globalsCss).toMatch(/@media \(max-width:\s*640px\)[\s\S]*?\.locationGrid\s*\{[^}]*grid-template-columns:\s*1fr/s);
    expect(globalsCss).toMatch(/@media \(prefers-reduced-motion:\s*reduce\)[\s\S]*?\.locationCard:hover/s);
  });
});
