import type { Client } from '@/lib/types';

/**
 * Sanctified Driving School — Redlands, CA.
 *
 * Scraped from sanctifieddrivingschool.com on 2026-08-09
 * (research/sanctified-driving-school).
 *
 * Safe Route. Their entire homepage opens on anxiety — driving jitters, road
 * test nerves, freeway anxiety — and everything after it is reassurance. That
 * is exactly the register this variant exists for.
 *
 * They publish no DMV licence number anywhere. It is omitted rather than
 * guessed, and flagged as the first thing to ask for.
 */
export const sanctifiedDriving: Client = {
  slug: 'sanctified-driving-school',
  name: 'Sanctified Driving School',
  short: 'Sanctified',
  variant: 'safe-route',

  heroStyle: 'stage',

  /**
   * Their homepage opens on anxiety — "Struggling with Driving Jitters, Road Test
   * Nerves, or Freeway Anxiety?" — before it mentions a single course, and that
   * is a genuinely better opening than anyone else in this set has. It leads
   * here too.
   *
   * Their site is published in English, Spanish and Korean, which is a real
   * commitment and gets said out loud rather than being a flag icon.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Driving jitters, road test nerves, freeway anxiety',
      title: 'Nerves are the normal part.',
      lede:
        'Merging onto a busy freeway or booking the road test is intimidating whether you are a teen after independence, an adult needing a refresher, or someone who has never driven at all.',
    },
    {
      id: 'road-test',
      kicker: 'The road test',
      title: 'Rehearse it until it is boring.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson — 90 minutes at a time.',
    },
    {
      id: 'packages',
      kicker: 'Pricing',
      title: 'Ninety minutes, priced plainly.',
      lede: 'Lessons are 90 minutes, not the usual hour.',
    },
    { id: 'reviews', kicker: 'In their words', title: 'From “I can’t” to the freeway.' },
    {
      id: 'instructors',
      kicker: 'Who teaches you',
      title: 'The same voice, every lesson.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'A brake on the passenger side.',
    },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'Across the Inland Empire.',
    },
    {
      id: 'cta',
      title: 'Drive smart. Drive safe. Drive with confidence.',
      lede:
        'Refer someone who signs up for any lesson and the school pays you $15, with no limit on how many.',
    },
  ],

  story: {
    pullQuote: 'Drive smart. Drive safe. Drive with confidence.',
    paragraphs: [
      'Sanctified Driving School helps teens, adults and seniors across the Inland Empire gain confidence on the road.',
      'The school’s own site is published in English, Spanish and Korean.',
      'Lessons are taught in 90-minute sessions rather than the usual hour.',
    ],
  },

  /**
   * Their mark is the red "S" of SANCTIFIED over a black wordmark. The red is
   * 5.84:1 and needs no correction; the charcoal carries the headings.
   * Everything in their stylesheet is Bootstrap default, so the colour comes
   * from the mark itself.
   */
  brand: {
    primary: '#C1272D',
    primaryDark: '#AA2228',
    primarySoft: '#F8E5E6',
    accent: '#1F1F1F',
    accentDark: '#090909',
    accentSoft: '#F0F0F0',
    wash: '95, 19, 22',
    bg: '#FCF6F5',
    border: '#F0CACB',
    borderSoft: '#F6E1E2',
    fgDim: '#5F5D5D',
  },

  photos: {
    hero: {
      src: '/clients/sanctified-driving-school/hero.webp',
      alt: 'A Sanctified student in the driver’s seat holding an “I Passed!” sign',
    },
    support: {
      src: '/clients/sanctified-driving-school/owners.webp',
      alt: 'Rosa and Moises, the husband-and-wife team who run Sanctified Driving School',
    },
  },

  tagline: 'Drive smart. Drive safe. Drive with confidence.',
  headline: 'Nervous about the freeway? That is who this school is for.',

  city: 'Redlands',
  county: 'San Bernardino County',

  phones: [{ display: '(909) 742-2512', raw: '+19097422512' }],
  email: 'sanctifieddrivingschool@gmail.com',

  hours: [{ days: 'Monday – Friday', hours: '7:00 AM – 7:00 PM' }],
  schedulingNote:
    'Free pick-up and drop-off Monday to Friday within six miles of Redlands. Weekend, holiday and summer lessons run from the office.',

  areas: ['Redlands', 'San Bernardino'],
  areasNote:
    'The standard service area is a six-mile radius from Redlands; beyond that an additional fee applies, so call the office. DMV road tests at the Redlands and San Bernardino offices carry no travel fee.',
  languages: ['English', 'Spanish', 'Korean'],

  packageGroups: [
    {
      title: 'Behind-the-wheel lessons',
      lessonHours: 1.5,
      blurb:
        'Lessons run 1½ hours. Six hours meets the California DMV requirement for minors and comes with the DL-400C certificate.',
      features: [
        '1½-hour lessons',
        'Free pick-up and drop-off, Monday to Friday',
        'DL-400C certificate on completion',
        'Use of our car for the DMV drive test',
        'Defensive driving and situational awareness',
      ],
      packages: [
        {
          name: '3 hours',
          detail: 'For the intermediate driver who needs more time',
          hours: 3,
          price: 265,
          includes: ['1½-hour lessons', 'Free pick-up and drop-off, Monday to Friday'],
        },
        {
          name: '6 hours',
          detail: 'Four 1½-hour lessons — the DMV minimum for minors',
          hours: 6,
          price: 425,
          featured: true,
          includes: [
            '1½-hour lessons', 'Free pick-up and drop-off, Monday to Friday',
            'DL-400C certificate on completion',
            'Defensive driving and situational awareness',
          ],
        },
        {
          name: '6 hours + DMV test',
          detail: 'The four lessons plus our car for the test',
          hours: 6,
          price: 595,
          // $425 + $225 road test session = $650 against $595.
          saving: 'Saves $55 against booking the road test session separately',
          includes: [
            '1½-hour lessons', 'Free pick-up and drop-off, Monday to Friday',
            'DL-400C certificate on completion', 'Use of our car for the DMV drive test',
            'Defensive driving and situational awareness',
          ],
        },
        {
          name: '8 hours',
          detail: 'For the beginner who needs extensive training',
          hours: 8,
          price: 565,
          includes: [
            '1½-hour lessons', 'Free pick-up and drop-off, Monday to Friday',
            'DL-400C certificate on completion',
          ],
        },
        {
          name: '10 hours',
          detail: 'The most time behind the wheel we offer',
          hours: 10,
          price: 700,
          includes: [
            '1½-hour lessons', 'Free pick-up and drop-off, Monday to Friday',
            'DL-400C certificate on completion',
          ],
        },
      ],
    },
    {
      title: 'Adults',
      lessonHours: 1.5,
      blurb: 'For drivers with some experience who need practice before the test rather than a full course.',
      features: [
        '1½-hour lessons',
        'Free pick-up and drop-off, Monday to Friday',
        'Use of our car for the DMV drive test',
        'Exactly what the DMV expects, explained',
      ],
      packages: [
        {
          name: '3 hours + DMV test',
          detail: 'Adults only — practice plus the test itself',
          hours: 3,
          price: 450,
          featured: true,
          includes: [
            '1½-hour lessons', 'Free pick-up and drop-off, Monday to Friday',
            'Use of our car for the DMV drive test',
            'Exactly what the DMV expects, explained',
          ],
        },
        {
          name: '3 hours',
          detail: 'Practice on its own',
          hours: 3,
          price: 265,
          includes: ['1½-hour lessons', 'Exactly what the DMV expects, explained'],
        },
      ],
    },
  ],

  individualLessons: [
    { name: '3 hours behind the wheel', price: 265 },
    { name: '6 hours behind the wheel', description: 'Four 1½-hour lessons. Meets the DMV requirement for minors.', price: 425 },
    { name: '6 hours + DMV drive test', price: 595 },
    { name: '8 hours behind the wheel', price: 565 },
    { name: '10 hours behind the wheel', price: 700 },
    { name: 'Adults — 3 hours + DMV drive test', price: 450 },
    {
      name: '2-hour freeway training',
      description:
        'Speed control, repeated merging on and off ramps, freeway transitions, space cushioning, lane changes and heavy traffic.',
      price: 200,
    },
    {
      name: '1½-hour DMV drive test prep',
      description: 'A final session before the exam.',
      price: 195,
    },
    {
      name: 'Local DMV road test session',
      description:
        'Use our car for the test, with pick-up and drop-off. Redlands and San Bernardino at no fee; other DMV offices $35–$60.',
      price: 225,
    },
    {
      name: 'Road test session + 1-hour prep',
      description: 'Collected an hour before the appointment for a prep drive, then the test in our car.',
      price: 305,
    },
  ],

  programs: [
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Lessons',
      navLabel: 'Behind the Wheel',
      summary:
        'For first-timers and for experienced drivers sharpening their defensive habits — at whatever pace suits.',
      body: [
        'Lessons are 1½ hours rather than two, which for a nervous driver is often the difference between a productive session and an exhausting one. Six hours meets the DMV requirement for anyone under 18, and the DL-400C certificate is issued on completion.',
        'The instruction leans on defensive driving and situational awareness — the retired law-enforcement background in the family shows here more than anywhere else.',
      ],
      bullets: [
        'All essential skills for the licensing requirements',
        'Defensive driving and situational awareness',
        'Personalised to your pace',
        'Certified instructors, modern vehicles',
        'DL-400C certificate on completion',
      ],
      price: 265,
      priceNote: '3 hours $265 · 6 hours $425 · 8 hours $565 · 10 hours $700.',
    },
    {
      slug: 'freeway-training',
      title: 'Freeway Driving Lessons',
      navLabel: 'Freeway',
      summary:
        'Two hours on nothing but the freeway, for drivers who are fine everywhere else and avoid it entirely.',
      bullets: [
        'Speed control at freeway pace',
        'Repeated merging on and off ramps',
        'Freeway-to-freeway transitions',
        'Space cushioning and lane changes',
        'Navigating heavy traffic',
      ],
      price: 200,
    },
    {
      slug: 'road-test',
      title: 'DMV Road Test Sessions',
      navLabel: 'Road Test',
      summary:
        'Use our car for the test. Add an hour of preparation beforehand and the instructor collects you an hour early.',
      body: [
        'The road test session on its own is pick-up, the car, and drop-off. With the prep hour added, your instructor collects you an hour before the DMV appointment and spends it on exactly what the examiner is going to look for.',
        'Redlands and San Bernardino carry no travel fee. Other DMV offices are $35 to $60 depending on distance.',
      ],
      bullets: [
        'Our car, ready for the exam',
        'Pick-up and drop-off included',
        'Optional one-hour prep drive beforehand',
        'Redlands and San Bernardino at no travel fee',
      ],
      price: 225,
      priceNote: '$225 for the session, $305 with a one-hour prep lesson.',
    },
  ],

  vehicles: {
    summary:
      'Well-maintained cars kept ready for the DMV exam, so a student who has no car of their own is never the reason a test gets postponed.',
    features: [
      'Available for the DMV drive test',
      'Free pick-up and drop-off within six miles',
      'Modern, well-maintained vehicles',
      'Redlands and San Bernardino DMV at no travel fee',
    ],
  },

  instructors: [
    {
      name: 'Rosa',
      initials: 'R',
      role: 'Co-owner',
      bio: 'Retired from law enforcement, and the person families deal with when they book. Reviewers single her out for scheduling around a family’s week rather than the other way round.',
    },
    {
      name: 'Moises',
      initials: 'M',
      role: 'Co-owner and instructor',
      bio: 'Also retired from law enforcement. Described by student after student as patient, calm and encouraging — which is the entire product when the student arrived frightened.',
    },
  ],

  testimonials: [
    {
      name: 'Bianca Hernandez',
      quote:
        'My daughter spoke very highly of Moses after every lesson. She said he was extremely patient, calm, and encouraging while teaching her how to drive. He took the time to help build her confidence behind the wheel.',
    },
    {
      name: 'April Michelle',
      quote:
        'As someone who feels afraid of driving, this driving school was exactly what I needed. I took lessons to prepare, and used their car for my DMV appointment. I passed my test!',
    },
  ],

  rating: { value: '5.0', count: '111', source: 'Google' },

  sourceUrl: 'https://sanctifieddrivingschool.com',
  internalNotes: [
    'NO DMV licence number is published anywhere on their site. That is the first thing to ask for — every competitor in this campaign shows theirs, and a parent who checks will notice.',
    'Owners are a husband-and-wife team, both retired from law enforcement. The school is explicitly Christian and faith-driven. That positioning is theirs and is carried across as they state it, without amplification.',
    'They offer the site in Spanish and Korean — unusual, and worth keeping in any rebuild.',
    'Their $15 referral programme and their first-responder/military discount are real and are NOT on the preview yet. Ask where they want them.',
    'Online driver education is marked "coming soon" on their site. Not included here; a coming-soon block is a conversion leak, not a feature.',
    'DEFECT — no address is published, only "Redlands/San Bernardino, California". For a business asking people to get into a car with them, that is a trust gap.',
    'DEFECT — the site is on a builder that serves images with base64-obfuscated filenames, so none of their photography carries a usable name or alt text.',
    'Photography here is theirs and shows identifiable students and owners. Written permission before production.',
  ],
};
