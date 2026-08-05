import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const workspaceRoot = path.resolve(import.meta.dirname, '..');
const previewsRoot = path.join(workspaceRoot, 'previews');

const restorations = [
  {
    app: 'safe-route',
    preview: 'variant-a-safe-route.html',
    enhance(html) {
      return injectBeforeHeadEnd(html, `
<style id="photo-enhancement-safe-route">
  .hero {
    background-image: linear-gradient(90deg, rgba(238,246,255,.98) 0%, rgba(238,246,255,.94) 48%, rgba(238,246,255,.74) 100%), url("images/hero.webp");
    background-size: cover;
    background-position: center 42%;
  }
  @media (max-width: 900px) {
    .hero {
      background-image: linear-gradient(rgba(238,246,255,.94), rgba(238,246,255,.97)), url("images/hero.webp");
      background-position: 58% center;
    }
  }
  @media (max-width: 340px) {
    header .nav > .btn { display: none; }
  }
</style>`);
    },
  },
  {
    app: 'apex',
    preview: 'variant-b-apex.html',
    enhance(html) {
      return injectBeforeHeadEnd(html, `
<style id="photo-enhancement-apex">
  .hero {
    background-image: linear-gradient(100deg, rgba(7,14,27,.94) 0%, rgba(7,14,27,.84) 52%, rgba(7,14,27,.72) 100%), url("images/hero.webp");
    background-size: cover;
    background-position: center 43%;
  }
  @media (max-width: 820px) {
    .hero {
      background-image: linear-gradient(rgba(7,14,27,.9), rgba(7,14,27,.96)), url("images/hero.webp");
      background-position: 57% center;
    }
  }
  @media (max-width: 340px) {
    .pkgs { grid-template-columns: minmax(0, 1fr); }
    .pkg { min-width: 0; }
  }
</style>`);
    },
  },
  {
    app: 'atelier',
    preview: 'variant-c-atelier.html',
    enhance(html) {
      const portraitPattern = /<div class="portrait-art">[\s\S]*?<\/div>\s*<div class="portrait-cap">/;
      const portrait = `<div class="portrait-art">
          <img class="portrait-photo" src="images/hero.webp" alt="Driving instructor guiding a learner during an in-car lesson" width="1600" height="1067">
        </div>
        <div class="portrait-cap">`;
      return injectBeforeHeadEnd(replaceOnce(html, portraitPattern, portrait, 'Atelier portrait'), `
<style id="photo-enhancement-atelier">
  .portrait-photo { width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; }
</style>`);
    },
  },
  {
    app: 'cockpit',
    preview: 'variant-d-cockpit.html',
    enhance(html) {
      const photoSlots = [
        ['pedals-dual-control', 'images/dual-control.webp', 'Dual-control instructor brake pedal in a training vehicle'],
        ['car-interior-wide', 'images/hero.webp', 'Driving instructor briefing a learner beside a training car'],
        ['safety-inspection', 'images/road-test-prep.webp', 'Learner practising road-test manoeuvres with an instructor'],
      ];

      const withPhotos = photoSlots.reduce((result, [slot, src, alt]) => {
        const pattern = new RegExp(`<div class="photo" data-photo="${slot}">[\\s\\S]*?<\\/div>`);
        const photo = `<img class="photo" src="${src}" alt="${alt}" width="1600" height="1067">`;
        return replaceOnce(result, pattern, photo, `Cockpit ${slot} photo slot`);
      }, html);

      return injectBeforeHeadEnd(withPhotos, `
<style id="photo-enhancement-cockpit">
  img.photo { width: 100%; height: auto; aspect-ratio: 4 / 3; object-fit: cover; display: block; }
</style>`);
    },
  },
];

function replaceOnce(input, needle, replacement, label) {
  if (!needle.test(input)) {
    throw new Error(`Could not find ${label}`);
  }
  return input.replace(needle, replacement);
}

function injectBeforeHeadEnd(html, addition) {
  if (!html.includes('</head>')) throw new Error('Preview is missing </head>');
  return html.replace('</head>', `${addition}\n</head>`);
}

function hardenSchoolData(html) {
  const schoolPattern = /const SCHOOL = \{[\s\S]*?\n\};/;
  const match = html.match(schoolPattern);
  if (!match) throw new Error('Preview is missing its SCHOOL data block');

  const sourceBlock = match[0].replace('const SCHOOL =', 'const SCHOOL_SOURCE =');
  const hardenedBlock = `${sourceBlock}
const sanitizeSchoolValue = (value) => {
  if (Array.isArray(value)) return value.map(sanitizeSchoolValue);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, sanitizeSchoolValue(entry)]));
  }
  return typeof value === 'string' ? value.replace(/[<>"'\\\u0060]/g, '') : value;
};
const SCHOOL = sanitizeSchoolValue(SCHOOL_SOURCE);`;

  return html.replace(schoolPattern, hardenedBlock);
}

for (const restoration of restorations) {
  const sourcePath = path.join(previewsRoot, restoration.preview);
  const targetPath = path.join(import.meta.dirname, restoration.app, 'public', 'site.html');
  const source = await readFile(sourcePath, 'utf8');
  const marked = hardenSchoolData(source)
    .replace('<html lang="en">', `<html lang="en" data-restored-from="${restoration.preview}">`)
    .replace('</title>', '</title>\n<meta name="robots" content="noindex,nofollow">');
  const output = restoration.enhance(marked);

  await mkdir(path.dirname(targetPath), { recursive: true });
  await writeFile(targetPath, output, 'utf8');
  console.log(`Restored ${restoration.app} from ${restoration.preview}`);
}
