import type { Client } from '@/lib/types';

/**
 * NorCal Driving School — Antelope, CA.
 *
 * Scraped from norcaldriving.com on 2026-08-09 (research/norcal-driving-school).
 *
 * Their homepage claims a "high pass rate (98%!)" in three separate places. It
 * appears nowhere here. VERIFY.md is unambiguous: a pass rate is never
 * published without a source, and there is no source.
 */
export const norcalDriving: Client = {
  slug: 'norcal-driving-school',
  name: 'NorCal Driving School',
  short: 'NorCal',
  variant: 'safe-route',

  heroStyle: 'stage',

  /**
   * Payment plans are the thing their own site repeats and no competitor in this
   * set offers, so pricing comes second rather than last. Their "high pass rate
   * (98%!)" — stated three times — is not reproduced anywhere.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Our services',
      title: 'A full service driving school.',
      lede:
        'Online drivers education, online traffic school, and behind-the-wheel training — all from one school.',
    },
    {
      id: 'packages',
      kicker: 'Pricing',
      title: 'Payment plans that let you pay per lesson.',
      lede:
        'You do not have to buy a package up front. Pay as you go, one lesson at a time.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'What the evaluator writes down.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    { id: 'reviews', kicker: 'In their words', title: 'Read the reviews before you pay.' },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'The car you will take the test in.',
    },
    {
      id: 'areas',
      kicker: 'Where we pick up',
      title: 'Across Northern California.',
    },
    {
      id: 'cta',
      title: 'Register today.',
    },
  ],

  story: {
    paragraphs: [
      'NorCal is a full service driving school, offering online drivers education, online traffic school and behind-the-wheel training.',
      'Payment plans are available that let students pay per lesson rather than buying a package up front.',
    ],
  },

  /**
   * They have no logo file and no wordmark — the school's identity is the black
   * lettering on a silver Prius. The red below is the one custom colour in their
   * own stylesheet (#ED1C24, used throughout their calls to action); everything
   * else in that CSS is Bootstrap's default palette. The red is 4.38:1, just
   * under AA, so it ships one step darker at 4.57:1, paired with the navy their
   * headings already use.
   */
  brand: {
    primary: '#EA131B',
    primaryDark: '#D01018',
    primarySoft: '#F8E5E6',
    accent: '#1F3550',
    accentDark: '#17283C',
    accentSoft: '#E9EFF6',
    wash: '101, 8, 12',
    bg: '#FCF4F5',
    border: '#F0CACB',
    borderSoft: '#F6E1E2',
    // Muted text pulls to slate rather than to a washed-out red — a pink-grey
    // body copy reads as a rendering fault, not as a brand.
    fgDim: '#5D626E',
  },

  photos: {
    hero: {
      src: '/clients/norcal-driving-school/hero.jpg',
      alt: 'A NorCal student holding up her passed drive-test sheet beside the school car',
    },
    vehicle: {
      src: '/clients/norcal-driving-school/vehicle.jpg',
      alt: 'The NorCal Driving School Toyota Prius, signwritten with the school name and number',
    },
    roadTest: {
      src: '/clients/norcal-driving-school/lesson.jpg',
      alt: 'A NorCal instructor and student during a behind-the-wheel lesson',
    },
    support: {
      src: '/clients/norcal-driving-school/traffic.jpg',
      alt: 'The NorCal online traffic school course',
    },
  },

  tagline: 'Ask as many questions as you like. That is the point.',
  headline: 'Every price, and the whole lesson plan, before you book.',

  city: 'Antelope',
  county: 'Sacramento County',
  address: '5212 Heartland Dr, Antelope, CA 95843',

  // Two licences: the driving school and the traffic violator school.
  licence: 'E0195',

  phones: [{ display: '(916) 721-4001', raw: '+19167214001' }],
  email: 'norcaldriving@norcaldriving.com',

  schedulingNote:
    'Register online and the scheduling system emails you when an earlier slot opens up. Payment plans let you pay per lesson rather than up front.',

  areas: ['Antelope', 'Roseville', 'North Highlands', 'Elverta', 'Foothill Farms'],
  areasNote:
    'Serving Antelope, Roseville and the surrounding areas for over ten years, with pick-up from home.',

  packageGroups: [
    {
      title: 'Behind-the-wheel lessons',
      blurb:
        'Every lesson is one-to-one, picked up from home, and followed by written feedback on what to practise next.',
      features: [
        'One-on-one behind-the-wheel instruction',
        'Pick-up from home',
        'Progress feedback after each session',
        'DMV drive test scheduled by the school',
        'Pick-up an hour before the test',
        'Use of the school car at the DMV',
      ],
      packages: [
        {
          name: '2 hours',
          detail: 'A single two-hour lesson, pay as you go',
          hours: 2,
          price: 189,
          includes: [
            'One-on-one behind-the-wheel instruction',
            'Pick-up from home',
            'Progress feedback after each session',
          ],
        },
        {
          name: '6 hours',
          detail: 'Three two-hour lessons',
          hours: 6,
          price: 499,
          // $189 x 3 = $567 against $499. The saving is arithmetic, not marketing.
          saving: 'Saves $68 against three separate two-hour lessons',
          includes: [
            'One-on-one behind-the-wheel instruction',
            'Pick-up from home',
            'Progress feedback after each session',
          ],
        },
        {
          name: '6 hours + drive test',
          detail: 'Three two-hour lessons, plus an hour and the DMV test',
          hours: 7,
          price: 749,
          featured: true,
          includes: [
            'One-on-one behind-the-wheel instruction',
            'Pick-up from home',
            'Progress feedback after each session',
            'DMV drive test scheduled by the school',
            'Pick-up an hour before the test',
            'Use of the school car at the DMV',
          ],
        },
      ],
    },
  ],

  individualLessons: [
    {
      name: 'Online Driver Education',
      description: 'DMV-approved, self-paced, for ages 15 and up. Eleven chapters and a certificate on completion.',
      price: 49,
    },
    {
      name: 'Practice Permit Test',
      description: 'Self-paced with unlimited retakes, hundreds of questions and support for over 100 languages.',
      price: 19.99,
    },
    { name: '2-hour drive lesson', description: 'Pay as you go.', price: 189 },
    { name: '6 hours — three two-hour lessons', price: 499 },
    {
      name: '6 hours plus the DMV drive test',
      description: 'Includes scheduling the test, pick-up an hour beforehand and use of the school car at the DMV.',
      price: 749,
    },
    {
      name: 'Online Traffic School',
      description:
        'California DMV and court approved, self-paced, 24/7. Certificate sent to the court the same day.',
      price: 59,
    },
  ],

  programs: [
    {
      slug: 'behind-the-wheel',
      image: '/clients/norcal-driving-school/lesson.jpg',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Three two-hour lessons with a published, lesson-by-lesson plan — you know before you book what each session covers.',
      body: [
        'The first lesson covers the controls, S.M.O.G. for every turn and lane change, smooth starts and stops at stop signs, hand-over-hand steering, three-point turns, pulling in and out from the kerb, straight-line reversing and light-traffic lane changes. It ends with a review in front of the parent, so practice at home continues in the same direction.',
        'The second builds on it: lane changes, defensive driving in heavier traffic, angle and perpendicular parking, stale greens and the yellow point of no return, right of way at two-way, four-way, T and blind intersections, and freeway driving including the carpool lane.',
        'The third is drive-test preparation — traffic checks, backing, signalling, basic speed laws, smooth starts and stops — and a full practice test run in the way the examiner runs it.',
      ],
      bullets: [
        'S.M.O.G. — signal, mirror, over the shoulder, go only if safe',
        'Hand-over-hand steering and three-point turns',
        'Angle and perpendicular parking',
        'Right of way at two-way, four-way, T and blind intersections',
        'Freeway entering, exiting, lane changes and carpool lane',
        'A full practice drive test before the real one',
      ],
      logistics: [
        'One-on-one, never shared',
        'Pick-up from home',
        'Written progress feedback after each session',
        'Payment plans available — pay per lesson',
      ],
      price: 189,
      priceNote: '$189 for two hours, $499 for six, $749 for six plus the drive test.',
    },
    {
      slug: 'drivers-ed',
      image: '/clients/norcal-driving-school/online.png',
      title: 'Online Driver Education',
      navLabel: 'Driver’s Ed',
      summary:
        'DMV-approved and self-paced, for ages 15 and up — the course that gets you to the written permit test.',
      bullets: [
        'Driving responsibilities',
        'Human physical and psychological issues',
        'The effect of natural forces on your vehicle',
        'Signs, signals and road markings',
        'Licensing, registration and the California Vehicle Code',
        'Rules of the road, urban and rural',
        'Accidents — cost, causes and prevention',
        'Sharing the road, alcohol and drugs',
      ],
      price: 49,
    },
    {
      slug: 'traffic-school',
      image: '/clients/norcal-driving-school/traffic.jpg',
      title: 'Online Traffic School',
      navLabel: 'Traffic School',
      summary:
        'California DMV and court approved, taken whenever suits you, with the certificate sent to the court the same day.',
      bullets: [
        'Accepted by California courts',
        '100% online and self-paced',
        'Same-day completion certificate',
        'Certificate sent directly to the DMV or court',
      ],
      price: 59,
    },
  ],

  vehicles: {
    summary:
      'A signwritten Toyota Prius — the car students learn in, and the car they can take to the DMV drive test.',
    features: [
      'The school car is available for the DMV test',
      'Instructor present at the test',
      'Pick-up an hour before the appointment',
      'Pick-up from home for every lesson',
    ],
  },

  testimonials: [
    {
      name: 'Sara M.',
      location: 'Roseville',
      quote: 'Both of my kids learned to drive here — great instructors and very professional!',
    },
    {
      name: 'Brian T.',
      location: 'Sacramento',
      quote:
        'I had a speeding ticket and needed to take traffic school fast. This course was super easy and I got my certificate the same day.',
    },
  ],

  rating: { value: '4.8', count: '283', source: 'Google' },

  sourceUrl: 'https://www.norcaldriving.com',
  internalNotes: [
    'Two licences on their own footer: E0195 for the driving school, E1447 for the traffic violator school.',
    'DEFECT — every page title renders as "NorCal âDriving Schoolâ". Their smart quotes are being served as Latin-1 while the page declares UTF-8, so the mojibake shows in the browser tab AND in every Google search result for the business. This is the strongest single thing to lead with.',
    'DEFECT — the footer prints a bare "Last Updated:" with no date.',
    'DO NOT reproduce the "98% pass rate" claim that appears three times on their site.',
    'They publish a no-refund policy. Not carried onto the preview — worth asking whether they want it on a sales page at all.',
    'The 10-hour package is offered in the booking dropdown but has no published price. Left out rather than guessed.',
    'Photography here is theirs and shows a recognisable student. Get written permission before production.',
  ],
};
