import type { Prospect } from '@/lib/types';

/**
 * ADD A PROSPECT: append one object, commit, push. Vercel builds a static page
 * at /<slug> with its own OG image and structured data.
 *
 * ⚠  Every claim below (licence, passRate, rating, reviews, students) is a
 *    factual assertion about a real business. The entries shipped here are
 *    DEMONSTRATION DATA with invented figures. Before sending a link to a real
 *    school, replace them with that school's own published numbers or delete
 *    the field — optional fields degrade gracefully. See VERIFY.md.
 */
export const prospects: Prospect[] = [
  {
    slug: 'meridian-riverside',
    name: 'Meridian Driving School',
    short: 'Meridian',
    city: 'Riverside',
    county: 'Riverside County',
    phone: '(951) 555-0164',
    phoneRaw: '+19515550164',
    years: '16',
    hourly: 89,
    driverEd: { format: 'both', price: 99 },
    languages: ['English', 'Spanish'],
    giftCertificates: true,
    email: 'hello@meridiandriving.example',
    areas: [
      'Riverside', 'Moreno Valley', 'Corona', 'Jurupa Valley', 'Perris',
      'Norco', 'Eastvale', 'Rialto', 'Colton', 'Redlands',
    ],
    instructors: [
      { name: 'Andre Salas', initials: 'AS', role: 'Head Instructor', years: '16', bio: 'Sixteen years on Riverside roads. Specialises in first-time teen drivers.' },
      { name: 'Karen Whitfield', initials: 'KW', role: 'Road-Test Lead', years: '11', bio: 'Drives every DMV examiner route in the county most weeks.' },
      { name: 'Deepak Rao', initials: 'DR', role: 'Adult & Refresher', years: '9', bio: 'Adult learners, licence transfers and drivers returning after years off.' },
    ],
  },
  {
    slug: 'golden-state-sacramento',
    name: 'Golden State Driving Academy',
    short: 'Golden State',
    city: 'Sacramento',
    county: 'Sacramento County',
    phone: '(916) 555-0142',
    phoneRaw: '+19165550142',
    years: '18',
    hourly: 92,
    driverEd: { format: 'online', price: 89 },
    languages: ['English', 'Spanish'],
    giftCertificates: true,
    email: 'hello@goldenstatedriving.example',
    areas: [
      'Sacramento', 'Elk Grove', 'Roseville', 'Folsom', 'Citrus Heights',
      'Rancho Cordova', 'Davis', 'West Sacramento', 'Carmichael', 'Natomas',
    ],
    instructors: [
      { name: 'Marcus Reed', initials: 'MR', role: 'Lead Instructor', years: '14', bio: 'Specialises in nervous first-time teen drivers and freeway confidence.' },
      { name: 'Elena Vargas', initials: 'EV', role: 'Adult Program Lead', years: '9', bio: 'Bilingual instruction. Works with adult learners and licence transfers.' },
      { name: 'David Chen', initials: 'DC', role: 'Road-Test Specialist', years: '11', bio: 'Knows every DMV route in the county. Pre-test dry runs a speciality.' },
    ],
  },
  {
    slug: 'apex-bakersfield',
    name: 'Apex Driving School',
    short: 'Apex',
    city: 'Bakersfield',
    county: 'Kern County',
    phone: '(661) 555-0198',
    phoneRaw: '+16615550198',
    years: '12',
    hourly: 85,
    driverEd: { format: 'both', price: 95 },
    languages: ['English', 'Spanish'],
    giftCertificates: true,
    email: 'hello@apexdriving.example',
    areas: [
      'Bakersfield', 'Delano', 'Shafter', 'Wasco', 'Taft',
      'Tehachapi', 'Arvin', 'Oildale', 'Rosedale', 'McFarland',
    ],
    instructors: [
      { name: 'Tony Alvarez', initials: 'TA', role: 'Head Instructor', years: '15', bio: 'Fifteen years on Kern County roads. Calm under pressure, zero drama.' },
      { name: 'Priya Nair', initials: 'PN', role: 'Road-Test Lead', years: '8', bio: 'Knows every DMV examiner route in Bakersfield. Runs it before you do.' },
      { name: 'Curtis Boyd', initials: 'CB', role: 'Adult & Refresher', years: '10', bio: 'Works with adult learners, licence transfers and anxious returners.' },
    ],
  },
];

export const bySlug = (slug: string): Prospect | undefined =>
  prospects.find((p) => p.slug === slug);

/** The prospect rendered at `/`. */
export const defaultProspect: Prospect = prospects[0];
