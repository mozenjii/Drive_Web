import type { Client } from '@/lib/types';

/**
 * A1 Driving School — Bakersfield, CA.
 *
 * Scraped from a1safedriving.com/bakersfield on 2026-08-09
 * (research/a1-driving-school-bakersfield).
 *
 * Safe Route. Their whole positioning is anxiety-free training for nervous
 * beginners, and the proof they offer is a senior fitness assessment for a
 * 95-year-old and a remediation for an 83-year-old who had failed three DMV
 * tests. That is reassurance work.
 *
 * Their own page names and ranks two named competitors. None of that is
 * reproduced. Neither are the "30,000+ graduates" or "550+ five-star reviews"
 * counters, or the third-party directory ranking.
 */
export const a1Driving: Client = {
  slug: 'a1-driving-school-bakersfield',
  name: 'A1 Driving School',
  short: 'A1 Driving',
  variant: 'safe-route',

  heroStyle: 'stage',

  /**
   * Anxiety-free training is their actual positioning and it is a good one, so
   * it leads. Everything around it on their own site is a problem:
   *
   * NOT reproduced — "550+ five-star reviews" (Google shows 93), "30,000+
   * graduates", "Kern County's largest", and the Threebestrated.com ranking that
   * names two competitors and places them second and third. That last one is
   * live defamation and unfair-competition exposure and is the first thing to
   * raise with them.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Anxiety-free training',
      title: 'Helping nervous beginners become calm, confident drivers.',
      lede:
        'Private lessons, one to one, for students who find the idea of the road harder than the mechanics of the car.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'Rehearse it until the nerves have nothing left to grip.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'A brake the instructor can reach.',
    },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'Bakersfield and across Kern County.',
    },
    {
      id: 'cta',
      title: 'Ready to drive with confidence?',
      lede: 'A valid DMV permit is required for behind-the-wheel instruction.',
    },
  ],

  story: {
    pullQuote: 'Helping nervous beginners become calm, confident drivers.',
    paragraphs: [
      'A1 Driving School teaches across Bakersfield and Kern County, specialising in anxiety-free training.',
      'Lessons are private and one to one. A valid DMV permit is required for behind-the-wheel instruction.',
    ],
  },

  logo: '/clients/a1-driving-school-bakersfield/logo.jpg',

  /**
   * Sampled from their mark: the red and blue of the car outline. The red is
   * 5.88:1 and the blue 10.07:1 — both clear AA untouched, so the brand ships
   * exactly as they drew it.
   */
  brand: {
    primary: '#C8102E',
    primaryDark: '#B00E29',
    primarySoft: '#F8E5E8',
    accent: '#1F3A93',
    accentDark: '#192F78',
    accentSoft: '#E7EBF8',
    wash: '101, 8, 23',
    bg: '#FCF6F6',
    border: '#F0CAD0',
    borderSoft: '#F6E1E5',
    fgDim: '#61606A',
  },

  tagline: 'Making the difference.',
  headline: 'Anxiety-free training, from a school that has taught Kern County for thirty years.',

  city: 'Bakersfield',
  county: 'Kern County',

  licence: 'E4418',

  phones: [{ display: '(661) 822-1990', raw: '+16618221990' }],
  email: 'a1drivingcontact@gmail.com',

  schedulingNote:
    'Immediate openings, no waiting list. A valid DMV instruction permit is required before the first lesson.',

  areas: ['Bakersfield', 'Tehachapi', 'Ridgecrest', 'Lake Isabella'],
  areasNote:
    'Four locations across Kern County, with instruction tailored to the roads of each — Bakersfield city driving is not Lake Isabella mountain driving.',

  programs: [
    {
      slug: 'anxiety-free-training',
      title: 'Anxiety-Free Training',
      navLabel: 'Nervous Drivers',
      summary:
        'Calm, structured instruction for people who are genuinely frightened of driving — which is a much larger group than anyone admits.',
      body: [
        'Most driving schools will say they are patient. This is the one that built the whole programme around it: structured, predictable lessons for nervous beginners, with male and female DMV-certified instructors so a student can ask for whichever they will be more comfortable with.',
        'Every instructor has passed the FBI Live Scan fingerprint background check California requires for DMV certification.',
      ],
      bullets: [
        'Calm, structured lessons for nervous beginners',
        'Male and female DMV-certified instructors',
        'FBI Live Scan background check on every instructor',
        'Immediate openings — no multi-week waiting list',
      ],
    },
    {
      slug: 'behind-the-wheel',
      title: 'Private Driving Lessons',
      navLabel: 'Behind the Wheel',
      summary:
        'One-to-one instruction across Bakersfield, Tehachapi, Ridgecrest and Lake Isabella. A valid DMV permit is required.',
      body: [
        'About nine in ten students here are teenagers, but adult learners in their twenties, thirties and forties are a routine part of the work rather than an exception.',
        'Every vehicle is clearly signwritten and fitted with dual instructor brakes, GPS tracking and a dual-camera system — 2K facing forward and 1080p on the cockpit with audio. A parent can know exactly what happened on a lesson.',
      ],
      bullets: [
        'One-to-one private lessons',
        'Dual instructor brakes in every car',
        'GPS tracking and dual dash cameras with audio',
        'Clearly marked professional signage',
        'Valid DMV instruction permit required',
      ],
    },
    {
      slug: 'senior-driving-assessment',
      title: 'Senior Driving Fitness Assessment',
      navLabel: 'Seniors',
      summary:
        'Documented evaluations for older drivers, and remediation for drivers who have failed the DMV test more than once.',
      body: [
        'A senior fitness assessment produces a written record of what a driver can and cannot safely do — which is what a family, a physician or the DMV actually needs when the question comes up.',
        'The remediation work is separate and harder: correcting habits laid down over decades, in time for a test that has already been failed.',
      ],
      bullets: [
        'Documented senior driving fitness assessments',
        'Remediation for repeated DMV test failures',
        'Correcting long-established bad habits',
        'High-stakes test preparation',
      ],
    },
    {
      slug: 'traffic-school',
      title: 'Traffic School & Online Driver Education',
      navLabel: 'Online Courses',
      summary:
        'Everything else needed to get licensed, dismiss a ticket, or bring an insurance premium down.',
      bullets: [
        'Online driver education',
        'California traffic school',
        'DMV test support',
      ],
    },
  ],

  vehicles: {
    summary:
      'Signwritten cars with dual instructor brakes, GPS tracking and a two-camera dash system — 2K facing the road and 1080p on the cockpit, with audio.',
    features: [
      'Dual instructor brakes',
      'GPS tracking on every vehicle',
      '2K forward and 1080p cockpit cameras with audio',
      'Clearly marked professional signage',
      'Bonded and insured',
    ],
  },

  rating: { value: '4.9', count: '93', source: 'Google' },

  sourceUrl: 'https://www.a1safedriving.com/bakersfield',
  internalNotes: [
    'Licence E4418 confirmed on their own page. Bonded and insured, per the same page.',
    'DEFECT AND RISK — their Bakersfield page names two competitors by name, ranks them second and third, and quotes one of them saying new students face "a bit of a wait". That is a live defamation and unfair-competition exposure, and it is the single most urgent thing to raise. It is also why none of that copy is reproduced here.',
    'DO NOT reproduce "30,000+ graduates", "Tens of thousands trained", "550+ five-star reviews" or the Threebestrated.com #1 ranking. Google shows 93 reviews.',
    'The dual-camera, GPS-tracked vehicles are a genuinely strong trust signal for a parent and are worth leading with. So is the male/female instructor choice.',
    'The 95-year-old assessment and the 83-year-old remediation are their own published examples. Described here without naming or identifying anyone.',
    'They have no publicly visible price for anything. Ask.',
    'Their site is on Wix with obfuscated image filenames; only the logo was recoverable as usable artwork. This preview therefore uses shared stock photography.',
  ],
};
