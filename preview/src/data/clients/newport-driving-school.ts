import type { Client } from '@/lib/types';

/**
 * Newport Driving & Traffic School, Corporation — Newport Beach, CA.
 *
 * Scraped from newportdrivingschool.com on 2026-08-09
 * (research/newport-driving-school).
 *
 * Apex. They teach manual transmission, licence transfers for people who
 * learned to drive in another country, medical driving assessments and drivers
 * who have failed the test repeatedly. That is a capability list, and it wants
 * a page that reads as engineered rather than reassuring.
 *
 * Their homepage counters — "224000+ satisfied customers", "99% passing rate" —
 * appear nowhere here. A 99% pass rate is exactly what VERIFY.md forbids, and
 * 224,000 customers over 29 years would be 21 a day, every day, including
 * Sundays.
 */
export const newportDriving: Client = {
  slug: 'newport-driving-school',
  name: 'Newport Driving School',
  short: 'Newport',
  variant: 'apex',

  heroStyle: 'stage',

  /**
   * They teach things almost nobody else in this set does — manual transmission,
   * and a Michigan BDI course approved by the Michigan Department of State, run
   * out of Orange County. Those are buried on their own site behind a row of
   * identical "View Course" cards. Here the unusual work leads.
   *
   * Not reproduced: "99% PASSING RATE" and "224000+ SATISFIED CUSTOMERS" —
   * which would be 21 customers a day, every day, since 1997.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Courses',
      title: 'Including the ones nobody else teaches.',
      lede:
        'Manual transmission, licences transferred from abroad, and a Michigan BDI course approved by the Michigan Department of State — alongside the behind-the-wheel training.',
    },
    {
      id: 'packages',
      kicker: 'Pricing',
      title: 'Priced by the hour, so you can check it.',
      lede: 'Lessons are sold by the hour, so the arithmetic is yours to check.',
    },
    {
      id: 'road-test',
      kicker: 'DMV road test',
      title: 'The line the examiner is looking for.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'Manual and automatic, both dual-controlled.',
    },
    {
      id: 'areas',
      kicker: 'Pick-up and drop-off',
      title: 'Anywhere in the local area.',
    },
    {
      id: 'cta',
      title: 'Better drivers, safer roads.',
      lede: 'Teaching Orange County since 1997.',
    },
  ],

  story: {
    pullQuote: 'Better Drivers, Safer Roads.',
    paragraphs: [
      'Newport Driving School has taught in Orange County since 1997.',
      'Alongside standard behind-the-wheel training, the school teaches manual transmission, supports drivers transferring a licence from another country, and runs a Michigan Basic Driver Improvement course approved by the Michigan Department of State.',
    ],
  },

  logo: '/clients/newport-driving-school/logo.png',

  /**
   * Sampled from their mark: navy #262D4B at 13.47:1, and a sky blue #6BBBE6
   * which at 2.13:1 is nowhere near legible. The accent is that blue darkened
   * to #1B77A6 (4.96:1) — same hue, usable on a button.
   */
  brand: {
    primary: '#262D4B',
    primaryDark: '#1A1F33',
    primarySoft: '#E9EBF4',
    // #1E7EB1 measured 4.4925:1 — three thousandths under AA once rounded to a
    // hex value. brand.test.ts caught it; one more step down clears it at 4.96.
    accent: '#1B77A6',
    accentDark: '#186992',
    accentSoft: '#E7F2F8',
    wash: '38, 45, 75',
    bg: '#F6F7FA',
    border: '#D1D6E8',
    borderSoft: '#E6E8F2',
    fgDim: '#545767',
  },

  photos: {
    hero: {
      src: '/clients/newport-driving-school/instructors.jpg',
      alt: 'A learner at the wheel with an instructor coaching from the passenger seat',
      disclosure: 'Illustrative photography published by Newport Driving School',
    },
    roadTest: {
      src: '/clients/newport-driving-school/driver.webp',
      alt: 'A driver at the wheel during a lesson',
    },
    vehicle: {
      src: '/clients/newport-driving-school/instructors.jpg',
      alt: 'A Newport Driving School instructor',
    },
    support: {
      src: '/clients/newport-driving-school/reception.jpg',
      alt: 'The Newport Driving School office',
    },
  },

  tagline: 'Better drivers, safer roads.',
  headline: 'Manual, international, medical assessment — the lessons other schools turn down.',

  city: 'Newport Beach',
  county: 'Orange County',
  address: '3400 Irvine Ave, Suite 119, Newport Beach, CA 92660',

  licence: 'E1996',
  founded: '1997', // "Since 1997" on their own homepage

  phones: [
    { display: '(949) 975-8425', raw: '+19499758425' },
    { display: '(949) 975-8426', raw: '+19499758426' },
  ],
  email: 'driving@newportdrivingschool.com',

  hours: [
    { days: 'Office, Monday – Friday', hours: '9:00 AM – 5:00 PM' },
    { days: 'Lessons, Monday – Friday', hours: '7:00 AM – 7:00 PM' },
  ],
  schedulingNote:
    'Pick-up and drop-off from anywhere in the local area. Lessons run 7am to 7pm, well outside the hours the office itself is open.',

  areas: [
    'Newport Beach', 'Costa Mesa', 'Irvine', 'Huntington Beach', 'Santa Ana',
    'Laguna Beach', 'San Juan Capistrano',
  ],
  areasNote:
    'Based at Irvine Avenue in Newport Beach, serving Newport Beach and the surrounding Orange County cities.',
  languages: ['English', 'Spanish'],

  packageGroups: [
    {
      title: 'Driving instruction',
      lessonHours: 1,
      blurb:
        'One instructor, one student, pick-up and drop-off included. Buy by the hour or by the package.',
      features: [
        'One-to-one instruction',
        'Pick-up and drop-off from anywhere local',
        'DMV-licensed instructors',
        'The school car for the DMV road test',
      ],
      packages: [
        {
          name: '1 hour',
          detail: 'A single hour',
          hours: 1,
          price: 160,
          includes: ['One-to-one instruction', 'Pick-up and drop-off from anywhere local'],
        },
        {
          name: '2 hours',
          detail: 'The standard lesson length',
          hours: 2,
          price: 230,
          // $160 x 2 = $320 against $230.
          saving: 'Saves $90 against two single hours',
          includes: [
            'One-to-one instruction', 'Pick-up and drop-off from anywhere local',
            'DMV-licensed instructors',
          ],
        },
        {
          name: '4 hours',
          detail: 'Two lessons',
          hours: 4,
          price: 420,
          saving: 'Saves $40 against two 2-hour lessons',
          includes: [
            'One-to-one instruction', 'Pick-up and drop-off from anywhere local',
            'DMV-licensed instructors',
          ],
        },
        {
          name: '6 hours',
          detail: 'Three lessons — the DMV minimum for under-18s',
          hours: 6,
          price: 525,
          featured: true,
          // $230 x 3 = $690 against $525.
          saving: 'Saves $165 against three 2-hour lessons',
          includes: [
            'One-to-one instruction', 'Pick-up and drop-off from anywhere local',
            'DMV-licensed instructors',
          ],
        },
        {
          name: '6 hours + DMV road test',
          detail: 'Three lessons and the test itself',
          hours: 6,
          price: 775,
          // $525 + $300 = $825 against $775.
          saving: 'Saves $50 against booking the road test separately',
          includes: [
            'One-to-one instruction', 'Pick-up and drop-off from anywhere local',
            'DMV-licensed instructors', 'The school car for the DMV road test',
          ],
        },
      ],
    },
  ],

  individualLessons: [
    { name: '1 hour lesson', price: 160 },
    { name: '2 hour lesson', price: 230 },
    { name: '4 hour lesson', price: 420 },
    { name: '6 hour lesson', price: 525 },
    { name: 'DMV Road Test', description: 'Use the school car and instructor for the test.', price: 300 },
    { name: '6 hours + DMV Road Test', description: 'Their own bundled price.', price: 775 },
  ],

  programs: [
    {
      slug: 'behind-the-wheel',
      image: '/clients/newport-driving-school/driver.webp',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'One-to-one lessons with pick-up and drop-off, from a single hour to the full six.',
      body: [
        'Instructors here adapt to how the student in front of them actually learns — some people want it explained, some need to see it, and a good instructor works out which within the first ten minutes.',
        'Every instructor holds a DMV professional licence.',
      ],
      bullets: [
        'One-to-one, never shared',
        'Pick-up and drop-off from anywhere local',
        'Single hours through to six-hour packages',
        'Lessons 7am to 7pm on weekdays',
      ],
      price: 160,
      priceNote: '1 hour $160 · 2 hours $230 · 4 hours $420 · 6 hours $525.',
    },
    {
      slug: 'manual-transmission',
      image: '/clients/newport-driving-school/hero.jpg',
      title: 'Manual Transmission',
      navLabel: 'Stick Shift',
      summary:
        'Learning to drive a manual is a skill worth having, and almost nobody in Orange County still teaches it.',
      body: [
        'Most driving schools in California gave up teaching stick shift years ago. Newport did not. If you have bought a manual car, inherited one, or need to drive one abroad, this is the lesson.',
      ],
      bullets: [
        'Clutch control from a standing start',
        'Hill starts',
        'Changing up and down under load',
        'For licensed drivers and learners alike',
      ],
    },
    {
      slug: 'road-test',
      title: 'DMV Road Test',
      navLabel: 'Road Test',
      summary:
        'Take the test in the school car with an instructor who has driven the local examiner routes for decades.',
      bullets: [
        'The school car for the exam',
        'A DMV-licensed instructor with you',
        '$300 on its own, or $250 bundled into the six-hour package',
      ],
      price: 300,
    },
    {
      slug: 'specialist-programs',
      image: '/clients/newport-driving-school/reception.jpg',
      title: 'Specialist Programs',
      navLabel: 'Specialist',
      summary:
        'Seniors, international licence transfers, drivers with special needs, medical driving assessments and fleet evaluation.',
      body: [
        'A large part of the work here is not teenagers. It is a driver who has held a licence in another country for twenty years and now needs a California one. It is a senior facing a medical re-examination. It is an employer who needs a driver evaluated and documented.',
        'Call and you get free advice on the phone about which course actually fits, before you buy anything.',
      ],
      bullets: [
        'Seniors and refresher instruction',
        'International licence transfers',
        'Drivers with special needs',
        'Medical driving assessment',
        'Driver evaluation and global training programs',
        'Free advice over the phone before you book',
      ],
    },
  ],

  vehicles: {
    summary:
      'DMV-licensed instructors, dual-control cars, and a manual-transmission car for the students almost no other school in the county will take.',
    features: [
      'Manual transmission instruction available',
      'The school car for the DMV road test',
      'Pick-up and drop-off from anywhere local',
      'Instructors hold DMV professional licences',
    ],
  },

  rating: { value: '4.9', count: '348', source: 'Google' },

  sourceUrl: 'https://newportdrivingschool.com',
  internalNotes: [
    'Licence E1996 found on their own site. The workbook recorded it as "not captured".',
    'Founding year: their homepage says "Since 1997" and "28+ years". The workbook said 1999. 1997 is their own claim and is used here.',
    'DO NOT reproduce "99% PASSING RATE" or "224000+ SATISFIED CUSTOMERS". Both are on their homepage; neither is defensible.',
    'DEFECT — five different phone numbers appear across the site: (949) 975-8425, 975-8426, 240-8755, 650-9302 and 791-7909. A prospect cannot tell which one reaches a human. Two are shown on the preview; consolidating the rest is a concrete recommendation.',
    'DEFECT — an Orange County driving school is selling a Michigan Basic Driver Improvement course approved by the Michigan Department of State, from its California homepage carousel. Either it is a real second business that deserves its own site, or it is confusing every local visitor.',
    'DEFECT — the workbook flags decentralised enquiry routing across many market phone numbers. Confirmed.',
    'Manual transmission instruction is genuinely rare in Southern California and is buried in a carousel slide.',
    'Photography here is licensed stock already on their site. Replace before production.',
    'Service areas beyond Newport Beach are the neighbouring Orange County cities. Confirm with the owner.',
  ],
};
