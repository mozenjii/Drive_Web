import { stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const apps = ['apex', 'atelier', 'cockpit', 'safe-route'];
const assets = ['hero.webp', 'dual-control.webp', 'road-test-prep.webp'];
const MAX_BYTES = 650 * 1024;

for (const app of apps) {
  for (const asset of assets) {
    const file = path.join(import.meta.dirname, app, 'public', 'images', asset);
    const [{ size }, metadata] = await Promise.all([stat(file), sharp(file).metadata()]);

    if (metadata.format !== 'webp' || metadata.width !== 1600 || metadata.height !== 1067) {
      throw new Error(`${file} must be a 1600x1067 WebP image`);
    }
    if (size > MAX_BYTES) {
      throw new Error(`${file} is ${size} bytes; expected at most ${MAX_BYTES}`);
    }
  }
}

console.log(`verified ${apps.length * assets.length} optimized responsive assets`);
