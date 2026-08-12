import manifest from '@/data/photo-manifest.json';

/**
 * A photograph, served at a size the layout can actually use.
 *
 * This replaces `next/image`, which cannot help here: the export is static, so
 * the optimiser is off (`images.unoptimized`) and every `<Image>` emitted the
 * original file at its original size with no `srcset`. Prospects were downloading
 * a 1.2MB PNG to fill a 554px card and an 806KB JPEG for a hero — on a phone,
 * seconds of white space before the page resembled anything.
 *
 * `scripts/derive-photos.mjs` writes the WebP ladder and the manifest this reads.
 * Every photograph therefore carries:
 *
 * - a `srcset`/`sizes` pair, so the browser fetches one rung and no more;
 * - intrinsic `width`/`height`, so its box is reserved before it arrives and
 *   nothing below it moves when it does;
 * - a 16px blurred placeholder as a CSS background, so the space is the colour of
 *   the photograph from the first paint rather than a white hole;
 * - `loading="lazy"` unless it is above the fold, where `priority` makes it eager
 *   and high-priority instead.
 *
 * An unknown `src` throws. A photograph that never made it through the
 * derivation would otherwise render as a broken image on a page we are asking a
 * business to judge us by, and the build is the right place to find out.
 */

type Entry = {
  hash: string;
  width: number;
  height: number;
  alpha: boolean;
  lqip: string;
  variants: { w: number; src: string }[];
};

const photos = manifest as Record<string, Entry>;

export type PhotoProps = {
  src: string;
  alt: string;
  /** Declared box ratio. Kept explicit — and kept at the values the layouts were
   *  built against — so a portrait original cannot reshape a 4:3 frame. */
  width?: number;
  height?: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Absolutely fills its positioned parent, for the full-bleed hero plate. */
  fill?: boolean;
};

export function Photo({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className,
  fill = false,
}: PhotoProps) {
  const entry = photos[src];
  if (!entry) {
    throw new Error(
      `No derived photograph for "${src}". Run \`npm run photos\` after adding an image, ` +
        `and check the path in the client's data file matches a file under preview/public.`,
    );
  }

  const classes = ['photoImg', fill ? 'photoFill' : null, entry.alpha ? 'photoFlat' : null, className]
    .filter(Boolean)
    .join(' ');

  return (
    <img
      className={classes}
      src={entry.variants.at(-1)!.src}
      srcSet={entry.variants.map((v) => `${v.src} ${v.w}w`).join(', ')}
      sizes={sizes}
      alt={alt}
      width={fill ? undefined : (width ?? entry.width)}
      height={fill ? undefined : (height ?? entry.height)}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      style={entry.alpha ? undefined : { backgroundImage: `url("${entry.lqip}")` }}
    />
  );
}
