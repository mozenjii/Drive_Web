import type { Client } from '@/lib/types';

/**
 * Bill's Driving School — Elk Grove, CA.
 *
 * Scraped from billsdrivingschool1.com on 2026-08-09
 * (research/bills-driving-school).
 *
 * Their site claims a "95% first time pass rate", "28 Teachers", "20k+ Licenses
 * Issued" and "5+ Working Years". None of those appear anywhere in this file.
 * sites/VERIFY.md is explicit that a pass rate is never published without a
 * source, and the counters contradict each other — five working years against a
 * 2014 founding date, and 20,000 licences from a school with 791 reviews.
 *
 * They publish no prices at all. That gap is not filled in; it is the pitch.
 */
export const billsDriving: Client = {
  slug: 'bills-driving-school',
  name: "Bill's Driving School",
  short: "Bill's",
  variant: 'apex',

  heroStyle: 'stage',

  /**
   * Their own homepage leads with a COVID-19 vehicle-cleaning statement and a
   * video about it — in 2026. The offer is buried underneath. This puts the
   * services first, which is the single biggest improvement available to them.
   *
   * No packages section: they publish service names without prices.
   * "28 Teachers | 20k+ Licenses Issued | 5+ Working Years" is not reproduced —
   * the five years contradicts the 2014 founding date on the same page.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Our services',
      title: 'Behind-the-wheel training and DMV service.',
      lede:
        'Two-hour and six-hour behind-the-wheel lessons, pick-up and drop-off, and certification for the DMV — for teens and adults alike.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'Two counties of examiner routes.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'Bonded, insured, dual-controlled.',
    },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'Sacramento and San Joaquin counties.',
      lede: 'Multiple instructors, servicing many areas across both counties.',
    },
    {
      id: 'cta',
      title: 'Book your driving lesson with us today.',
      lede: 'Call 1-916-430-6899.',
    },
  ],

  story: {
    paragraphs: [
      'Bill’s Driving School was established in 2014. It is a bonded and insured driving school offering driving services for both teens and adults.',
      'The school runs multiple instructors and services many areas throughout Sacramento and San Joaquin counties, providing behind-the-wheel training and DMV service to people of all ages.',
    ],
  },

  logo: '/clients/bills-driving-school/logo.png',

  /**
   * Sampled from their mark: grass green #548C4E and a soft gold #DEC069.
   * Both fail AA as-is (2.74:1 and 1.77:1), so both ship darkened to the same
   * hue — #4E8249 and #8F721F. The raw gold survives only as a chip fill.
   */
  brand: {
    primary: '#4E8249',
    primaryDark: '#44723F',
    primarySoft: '#E9F2E8',
    accent: '#8F721F',
    accentDark: '#7E651C',
    accentSoft: '#F7F2E3',
    wash: '32, 53, 30',
    bg: '#F7FAF6',
    border: '#D3E5D1',
    borderSoft: '#E7F1E6',
    fgDim: '#627560',
  },

  photos: {
    hero: {
      src: '/clients/bills-driving-school/hero.jpg',
      alt: 'A car on an open road at sunset',
    },
    roadTest: {
      src: '/clients/bills-driving-school/student.jpg',
      alt: 'A young driver at the wheel, belted in and looking across at the instructor',
    },
    vehicle: {
      src: '/clients/bills-driving-school/mirror.jpg',
      alt: 'The wing-mirror view from a moving car at dusk',
    },
    support: {
      src: '/clients/bills-driving-school/road.jpg',
      alt: 'A city road stretching towards a low sun',
    },
  },

  tagline: 'All driving services, teens and adults, seven days a week.',
  headline: 'Bonded, insured and booked from Elk Grove to Lodi.',

  city: 'Elk Grove',
  county: 'Sacramento County',
  address: '5124 Percheron Drive, Elk Grove, CA 95757',

  licence: 'E4759', // their own footer: "(Bonded/Insurance number E4759)"
  founded: '2014',

  phones: [
    { label: 'Sacramento', display: '(916) 430-6899', raw: '+19164306899' },
    { label: 'San Joaquin', display: '(209) 650-1040', raw: '+12096501040' },
  ],
  email: 'billsdrivingschooledu@gmail.com',

  // Seven days a week, 7am to 7pm — the widest published window of any school
  // in this campaign, and nowhere near prominent enough on their own site.
  hours: [{ days: 'Monday – Sunday', hours: '7:00 AM – 7:00 PM' }],
  schedulingNote:
    'Open seven days a week, 7am to 7pm, with pick-up and drop-off included and lessons spaced out to suit the student.',

  areas: [
    'Elk Grove', 'Sacramento', 'West Sacramento', 'North Sacramento', 'Galt',
    'Lodi', 'Wilton',
  ],
  areasNote:
    'Instruction runs across Sacramento and San Joaquin counties, with instructors based in several locations rather than one office.',

  programs: [
    {
      slug: 'behind-the-wheel',
      image: '/clients/bills-driving-school/student.jpg',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Six hours of behind-the-wheel training with pick-up and drop-off, ending in the certification the DMV requires.',
      body: [
        'The six-hour programme is the one California asks for before a driver under 18 can be licensed. Lessons can be spaced out rather than run back to back, so practice keeps going right up to the drive test instead of finishing weeks before it.',
        'Two-hour lessons are also sold on their own, as many as a student wants, for anyone who is not working to the six-hour requirement — adults returning to driving, or teens who want more than the minimum.',
      ],
      bullets: [
        'Six hours behind the wheel',
        'Pick-up and drop-off included',
        'Certification for the DMV',
        'Two-hour lessons available separately',
        'Lessons spaced out to keep practice continuous',
      ],
      logistics: [
        'Open seven days a week, 7am – 7pm',
        'Instructors across Sacramento and San Joaquin counties',
        'Teens and adults, all ages',
      ],
    },
    {
      slug: 'road-test',
      image: '/clients/bills-driving-school/hero.jpg',
      title: 'DMV Road Test Service',
      navLabel: 'Road Test',
      summary:
        'One hour of behind-the-wheel training immediately before the test, then the school car and insurance for the test itself.',
      body: [
        'Turning up to the DMV in an unfamiliar car is the most avoidable way to fail. This puts you in the school car, insured, with an hour of warm-up driving beforehand rather than a cold start in the examiner’s seat.',
      ],
      bullets: [
        'One hour of training immediately before the test',
        'Use of the school car',
        'School insurance for the test',
      ],
    },
  ],

  vehicles: {
    summary:
      'A bonded and insured school, with the school car and its insurance available for the DMV drive test as well as for lessons.',
    features: [
      'Bonded and insured school',
      'School car and insurance for the DMV test',
      'Pick-up and drop-off included',
      'Vehicles cleaned between lessons',
    ],
  },

  rating: { value: '4.9', count: '791', source: 'Google' },

  sourceUrl: 'https://billsdrivingschool1.com',
  internalNotes: [
    'Licence E4759 is on their own site, described as a "Bonded/Insurance number". Confirm the DMV school licence number with the owner before production — the label may be wrong even though the number is right.',
    'DEFECT — the homepage still leads with a COVID-19 response block about vehicle cleaning policy. In 2026 that is the first thing a parent reads.',
    'DEFECT — no prices anywhere. 791 Google reviews at 4.9 and a prospect still cannot find out what six hours costs. This is the single biggest conversion gap in the campaign.',
    'DEFECT — the footer prints a bare "Last Updated:" with no date.',
    'DO NOT reproduce their "95% first time pass rate" — unverified, and VERIFY.md forbids it.',
    'DO NOT reproduce "28 Teachers | 20k+ Licenses Issued | 5+ Working Years" — the 5 years contradicts the 2014 founding date on the same page.',
    'Photography here is licensed stock already on their site. Replace before production.',
  ],
};
