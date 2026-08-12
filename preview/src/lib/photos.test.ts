import { describe, expect, it } from 'vitest';
import manifest from '@/data/photo-manifest.json';
import { clients } from '@/data';
import type { Client } from '@/lib/types';

/**
 * Every image path a client's data points at must have a derived WebP ladder.
 *
 * `<Photo>` throws on an unknown path, so a missing derivation already fails the
 * build rather than shipping a broken image — but it fails deep inside a page
 * render, naming one path. This names all of them at once, and it is the check
 * that catches the real mistake: adding a photograph to a data file and
 * forgetting to run `npm run photos`, or renaming a file and leaving the manifest
 * describing the old one.
 *
 * It does not assert the derived files exist on disk. That is
 * `npm run photos:check`'s job (it re-hashes the originals) and the static audit's
 * job (it resolves every src and srcset entry against the export).
 */

const derived = manifest as Record<string, { variants: { w: number; src: string }[] }>;

/** Every path in a client's data that will be handed to <Photo>. */
function imagePaths(client: Client): string[] {
  return [
    client.logo,
    ...Object.values(client.photos ?? {}).map((photo) => photo?.src),
    ...(client.programs ?? []).map((program) => program.image),
    ...(client.instructors ?? []).map((instructor) => instructor.photo),
    ...(client.vehicles?.gallery ?? []).map((car) => car.src),
  ].filter((path): path is string => typeof path === 'string' && path.length > 0);
}

describe.each(clients)('$slug photographs', (client) => {
  const paths = imagePaths(client);

  it('every referenced image has a derived ladder', () => {
    expect(paths.filter((path) => !derived[path])).toEqual([]);
  });

  it('every ladder is ordered, ascending, and WebP', () => {
    for (const path of paths.filter((p) => derived[p])) {
      const widths = derived[path].variants.map((v) => v.w);
      expect(widths.length, path).toBeGreaterThan(0);
      expect(widths, path).toEqual([...widths].sort((a, b) => a - b));
      expect(new Set(widths).size, path).toBe(widths.length);
      for (const variant of derived[path].variants) {
        expect(variant.src, path).toMatch(/-\d+\.webp$/);
      }
    }
  });
});

describe('the manifest itself', () => {
  it('describes at least one variant for every original it lists', () => {
    const empty = Object.entries(derived).filter(([, entry]) => !entry.variants?.length);
    expect(empty.map(([path]) => path)).toEqual([]);
  });

  it('never lists a derived file as an original', () => {
    expect(Object.keys(derived).filter((path) => /-\d+\.webp$/.test(path))).toEqual([]);
  });
});
