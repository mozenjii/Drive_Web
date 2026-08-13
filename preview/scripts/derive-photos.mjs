/**
 * Derive web-sized photographs from the scraped originals.
 *
 * Why this exists: the export is static, so `next/image` runs with
 * `unoptimized: true` — it emits the original file at its original size with no
 * `srcset` at all. The originals came off the clients' own sites and are as they
 * found them: a 1.2MB PNG behind a 554px-wide card, an 806KB JPEG behind a hero.
 * A prospect opening the link on a phone waited for megabytes of photograph to
 * decode before the page looked like anything, which is the opposite of the
 * impression the preview exists to make.
 *
 * This walks every original under `public/clients` and `public/images`, writes a
 * WebP ladder into `public/d` mirroring the source path, and records what it wrote in
 * `src/data/photo-manifest.json` — intrinsic size, the ladder, and a 16px blurred
 * placeholder inlined as a data URI so there is something on screen from the
 * first paint instead of a white hole.
 *
 *   node scripts/derive-photos.mjs [--check]
 *
 * `--check` writes nothing and exits non-zero if the manifest is out of date. The
 * originals are left untouched: they are the only copy of some of this material,
 * and a lossy pass over them is not reversible.
 */

import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const SOURCE_DIRS = ['clients', 'images'];
const MANIFEST = path.join(ROOT, 'src', 'data', 'photo-manifest.json');

/**
 * Everything derived lands under this one directory, mirroring the source path.
 * Not beside the originals: these are build output, they are regenerated from the
 * originals on every build, and one ignorable directory beats three hundred
 * ignorable files interleaved with the material they came from.
 */
const OUT = 'd';
const derivedPath = (key, width) =>
  `/${OUT}${key.replace(/\.[^.]+$/, `-${width}.webp`)}`;

/**
 * Extensions we derive from. Anything else (svg, ico) is left alone.
 *
 * `.gif` is here because two of Allstate's instructor headshots are single-frame
 * GIFs — 35KB of 256-colour dithering for a 171px portrait, which is what their
 * site serves. Nothing on these previews is animated, so the still frame is the
 * whole image.
 */
const RASTER = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

/**
 * Widths to emit. The layouts these feed are at most ~46vw on a desktop and
 * 100vw on a phone, so 1600 is the largest any of them can use; the hero is the
 * only full-bleed slot and 1600 covers it at the density these photographs
 * actually carry — several are under 800px to begin with.
 */
const LADDER = [400, 800, 1200, 1600];

/** Flat art — logos, badges — needs the alpha channel and less resolution. */
const FLAT_LADDER = [200, 400, 800];

const isFlat = (rel) => /logo|badge|icon/i.test(path.basename(rel));

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.isFile()) yield full;
  }
}

/** Content hash, not mtime: git does not preserve mtimes across a checkout, so
 *  mtime would make CI re-derive everything on every run and still call it a
 *  change. */
async function hashOf(file) {
  return createHash('sha1').update(await readFile(file)).digest('hex').slice(0, 12);
}

/** A 16px-wide blur, inlined. Big enough to carry the photograph's colour and
 *  composition, small enough (~300 bytes) to sit in the HTML of 293 pages. */
async function placeholder(image) {
  const buf = await image
    .clone()
    .resize(16, null, { fit: 'inside' })
    .blur(1.2)
    .webp({ quality: 28, effort: 6 })
    .toBuffer();
  return `data:image/webp;base64,${buf.toString('base64')}`;
}

const check = process.argv.includes('--check');

const existing = await readFile(MANIFEST, 'utf8')
  .then((raw) => JSON.parse(raw))
  .catch(() => ({}));

const manifest = {};
let derived = 0;
let reused = 0;
let sourceBytes = 0;
let largestBytes = 0;

for (const dir of SOURCE_DIRS) {
  const base = path.join(PUBLIC, dir);
  let entries;
  try {
    entries = walk(base);
    await stat(base);
  } catch {
    continue;
  }

  for await (const file of entries) {
    const ext = path.extname(file).toLowerCase();
    if (!RASTER.has(ext)) continue;
    // Skip our own output.
    if (/-\d+\.webp$/.test(file)) continue;

    const key = '/' + path.relative(PUBLIC, file).split(path.sep).join('/');
    const hash = await hashOf(file);
    const prior = existing[key];

    const image = sharp(file, { failOn: 'none' });
    const meta = await image.metadata();
    const width = meta.width ?? 0;
    const height = meta.height ?? 0;
    if (!width || !height) {
      console.warn(`  ! unreadable, skipped: ${key}`);
      continue;
    }

    const ladder = (isFlat(key) ? FLAT_LADDER : LADDER).filter((w) => w < width);
    // Always emit the source width too, so even a 400px original is served as
    // WebP rather than as the original JPEG.
    const widths = [...new Set([...ladder, Math.min(width, isFlat(key) ? 800 : 1600)])].sort(
      (a, b) => a - b,
    );

    const variants = widths.map((w) => ({ w, src: derivedPath(key, w) }));

    /** In `--check` mode the derived files are not expected to exist yet — CI
     *  validates the committed manifest against the committed originals, then
     *  derives during the build. Only a real run cares whether the files are
     *  on disk. */
    const filesPresent = check
      ? true
      : await Promise.all(
          variants.map((v) =>
            stat(path.join(PUBLIC, v.src.slice(1)))
              .then(() => true)
              .catch(() => false),
          ),
        ).then((all) => all.every(Boolean));

    const upToDate =
      prior?.hash === hash && prior.variants?.length === variants.length && filesPresent;

    let lqip = prior?.lqip;
    if (upToDate && lqip) {
      reused += 1;
    } else {
      if (check) {
        console.error(`out of date: ${key}`);
        process.exitCode = 1;
      }
      lqip = await placeholder(image);
      if (!check) {
        await mkdir(path.dirname(path.join(PUBLIC, variants[0].src.slice(1))), { recursive: true });
        for (const variant of variants) {
          await image
            .clone()
            .resize(variant.w, null, { withoutEnlargement: true })
            .webp(isFlat(key) ? { quality: 84, effort: 6 } : { quality: 74, effort: 6 })
            .toFile(path.join(PUBLIC, variant.src.slice(1)));
        }
      }
      derived += 1;
    }

    sourceBytes += (await stat(file)).size;
    const biggest = path.join(PUBLIC, variants.at(-1).src.slice(1));
    largestBytes += await stat(biggest)
      .then((s) => s.size)
      .catch(() => 0);

    // Flat art with transparency gets no colour placeholder: there is nothing
    // behind a logo for it to be a placeholder *for*, and a wash would sit
    // inside the transparent pixels for as long as the page is open.
    manifest[key] = { hash, width, height, alpha: Boolean(meta.hasAlpha), lqip, variants };
  }
}

const ordered = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
const serialised = JSON.stringify(ordered, null, 2) + '\n';

/**
 * Anything under the output directory that this run did not just write is left
 * over from a photograph that has since been renamed, replaced or removed. It
 * would otherwise keep being deployed for ever, and — worse — keep resolving, so
 * no check would ever notice it.
 */
let pruned = 0;
if (!check) {
  const wanted = new Set(
    Object.values(ordered).flatMap((entry) => entry.variants.map((v) => v.src)),
  );
  const outDir = path.join(PUBLIC, OUT);
  try {
    await stat(outDir);
    for await (const file of walk(outDir)) {
      const ref = '/' + path.relative(PUBLIC, file).split(path.sep).join('/');
      if (!wanted.has(ref)) {
        await rm(file);
        pruned += 1;
      }
    }
  } catch {
    // No output directory yet — nothing to prune.
  }
}

if (check) {
  const current = await readFile(MANIFEST, 'utf8').catch(() => '');
  // Compare content, not bytes. The manifest is stored LF, but a Windows
  // checkout with core.autocrlf=true writes it CRLF, and a byte comparison then
  // reports every photograph as stale on a fresh clone — a failure with nothing
  // behind it, on the machine this project is actually developed on.
  const sameContent = (a, b) => a.replace(/\r\n/g, '\n') === b.replace(/\r\n/g, '\n');
  if (!sameContent(current, serialised)) {
    console.error('photo-manifest.json is out of date — run: npm run photos');
    process.exitCode = 1;
  } else if (!process.exitCode) {
    console.log(`photos up to date (${Object.keys(ordered).length} originals)`);
  }
} else {
  await writeFile(MANIFEST, serialised);
  const pct = sourceBytes ? Math.round((1 - largestBytes / sourceBytes) * 100) : 0;
  console.log(
    `photos: ${Object.keys(ordered).length} originals, ${derived} derived, ${reused} reused\n` +
      `        originals ${(sourceBytes / 1e6).toFixed(1)}MB -> largest variants ${(
        largestBytes / 1e6
      ).toFixed(1)}MB (${pct}% smaller)`,
  );
}
