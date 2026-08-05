import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const workspace = path.resolve(import.meta.dirname, '..');
const sourceRoot = path.join(workspace, '.artifacts', 'generated-source');
const appHeroes = {
  apex: 'apex-hero.png',
  atelier: 'atelier-hero.png',
  cockpit: 'cockpit-hero.png',
  'safe-route': 'safe-route-hero.png',
};
const appIcons = {
  apex: { letter: 'A', background: '#0c1930', foreground: '#ffc42d' },
  atelier: { letter: 'A', background: '#10233d', foreground: '#f3c45e' },
  cockpit: { letter: 'C', background: '#0f3462', foreground: '#ffc21a' },
  'safe-route': { letter: 'S', background: '#12263f', foreground: '#ffd33d' },
};

const MAX_BYTES = 650 * 1024;

async function render(sourceName, destination) {
  await sharp(path.join(sourceRoot, sourceName))
    .resize(1600, 1067, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82, smartSubsample: true })
    .toFile(destination);

  const { size } = await stat(destination);
  if (size > MAX_BYTES) {
    throw new Error(`${destination} is ${size} bytes; expected at most ${MAX_BYTES}`);
  }
  console.log(`${path.relative(workspace, destination)} ${Math.round(size / 1024)}KB`);
}

for (const [app, hero] of Object.entries(appHeroes)) {
  const outputRoot = path.join(import.meta.dirname, app, 'public', 'images');
  await mkdir(outputRoot, { recursive: true });
  await render(hero, path.join(outputRoot, 'hero.webp'));
  await render('dual-control-detail.png', path.join(outputRoot, 'dual-control.webp'));
  await render('road-test-prep.png', path.join(outputRoot, 'road-test-prep.webp'));

  const icon = appIcons[app];
  const iconMarkup = Buffer.from(
    `<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg"><rect width="512" height="512" rx="116" fill="${icon.background}"/><text x="256" y="345" text-anchor="middle" font-family="Arial, sans-serif" font-size="300" font-weight="800" fill="${icon.foreground}">${icon.letter}</text></svg>`,
  );
  await sharp(iconMarkup).png().toFile(path.join(import.meta.dirname, app, 'src', 'app', 'icon.png'));
}
