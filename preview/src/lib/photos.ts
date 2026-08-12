import type { Client, Photo, Photos } from '@/lib/types';

/**
 * Photograph lookup for the four layout slots.
 *
 * **There is no fallback, deliberately.**
 *
 * This module used to resolve a missing slot to shared stock in `/images`. The
 * result was twenty previews of twenty different businesses showing the same
 * photograph of the same students — and, on the About page, the same picture
 * with alt text naming a different school on every one of them. A Ventura family
 * on a Bakersfield school's page is precisely the detail that tells a prospect
 * they are looking at a template with their name dropped into it.
 *
 * A slot with no photograph now returns `undefined`, and the section composes
 * without an image. Every caller must handle that. If a client's own site has a
 * usable photograph, wire it up in their data file; if it does not, the honest
 * page is the one without a picture.
 */
export type PhotoSlot = keyof Photos;

export function photoFor(client: Client, slot: PhotoSlot): Photo | undefined {
  return client.photos?.[slot];
}

export function hasPhoto(client: Client, slot: PhotoSlot): boolean {
  return client.photos?.[slot] !== undefined;
}
