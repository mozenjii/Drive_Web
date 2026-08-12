import type { Client } from '@/lib/types';

/**
 * Dollar Driving School of Ventura — Ventura, CA.
 *
 * Scraped from dollardrivingofventura.com on 2026-08-09 (research/dollar-driving-school).
 * Prices come from their own fee card, Dollar_Driving_fees_march2026.png, dated
 * March 2026 — the most current thing they publish. Nothing here is estimated.
 *
 * Their site claims the "highest passing rate" in the area. That is their claim
 * about themselves and it is not restated here as ours; see sites/VERIFY.md.
 */
export const dollarDriving: Client = {
  slug: 'dollar-driving-school',
  name: 'Dollar Driving School of Ventura',
  short: 'Dollar Driving',
  variant: 'safe-route',

  /** Their own photography of instructors and students carries the page. */
  heroStyle: 'stage',

  /**
   * Their site opens on the welcome, then the offer, then the communities served
   * — a local, referral-driven order rather than a funnel. Section copy is theirs:
   * "Patient, Courteous, Licensed Instructors", "Specially Equipped Vehicles with
   * Dual-brake & Gas Systems", "Free Pick-Up: Days, Evenings & Weekends".
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Courses',
      title: 'Driver’s education and driver’s training.',
      lede:
        'The classroom hours California asks for, and the behind-the-wheel hours that follow — both from the same school, since 1989.',
    },
    {
      id: 'packages',
      kicker: 'Specials',
      title: 'The price list, as a price list.',
      lede:
        'Their own site publishes these as a single image. Here they are as text, which means a search engine and a screen reader can both read them.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'Specially equipped, dual brake and gas.',
      lede: 'Free pick-up: days, evenings and weekends.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'The Ventura examiner’s route.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    {
      id: 'areas',
      kicker: 'Locations',
      title: 'Happy to serve the communities of Ventura County.',
      lede:
        'Ventura, Oxnard, Camarillo, Ojai, Santa Paula, Fillmore, Oak View and Port Hueneme.',
    },
    {
      id: 'cta',
      title: 'Call us today.',
      lede: 'Office hours Monday to Friday 10:00 am – 5:00 pm, Saturday 10:00 am – 2:00 pm.',
    },
  ],

  story: {
    pullQuote: 'When you learn to drive at Dollar Driving School of Ventura, you get patient, courteous, licensed instructors.',
    paragraphs: [
      'Dollar Driving School of Ventura has been offering driver’s education and driver’s training since 1989, and is a California state licensed school, #3218.',
      'The school serves Ventura, Oxnard, Camarillo, Ojai, Santa Paula, Fillmore, Oak View and Port Hueneme, with free pick-up available days, evenings and weekends.',
      'Dollar Driving School of Ventura is not affiliated with the DMV, and the department is not responsible for distributed materials or advertisements.',
    ],
  },

  logo: '/clients/dollar-driving-school/logo.jpg',

  /**
   * Sampled from their mark: forest green #3E7459, gold #F3EB8D.
   *
   * The green ships untouched — 5.46:1 on white. The gold cannot: at 1.23:1 it
   * is a highlighter, not a text colour, so the accent is that hue darkened to
   * #80770D (4.59:1) while the raw gold survives as the accentSoft chip fill,
   * which is the one place it is legitimately a background.
   */
  brand: {
    primary: '#3E7459',
    primaryDark: '#34624B',
    primarySoft: '#E9F3EE',
    accent: '#80770D',
    accentDark: '#6E660C',
    accentSoft: '#F8F7E7',
    wash: '28, 53, 41',
    bg: '#F6FAF8',
    border: '#CFE5DA',
    borderSoft: '#E3F0E9',
    fgDim: '#5E6E6F',
  },

  photos: {
    hero: {
      src: '/clients/dollar-driving-school/hero.jpg',
      alt: 'An examiner marking a drive-test score sheet beside a student waiting in the car',
    },
    roadTest: {
      src: '/clients/dollar-driving-school/road-test.jpg',
      alt: 'A car working through a coned manoeuvring course',
    },
    vehicle: {
      src: '/clients/dollar-driving-school/vehicle.jpg',
      alt: 'The view from the driver’s seat on an open highway',
    },
    support: {
      src: '/clients/dollar-driving-school/senior.jpg',
      alt: 'An older driver at the wheel of his own car, relaxed and smiling',
    },
  },

  tagline: 'Patient, courteous, licensed instructors.',
  headline: 'Teaching Ventura County to drive since 1989.',

  city: 'Ventura',
  county: 'Ventura County',

  // Their footer prints "State Licensed School #3218"; the Camarillo page gives
  // the full form "E3218". Both are theirs, so the full form is used.
  licence: 'E3218',
  founded: '1989', // "Offering you Driver's Education & Training Since 1989"

  phones: [{ display: '(805) 653-6475', raw: '+18056536475' }],
  email: 'dollardriving@yahoo.com',

  hours: [
    { days: 'Monday – Friday', hours: '10:00 AM – 5:00 PM' },
    { days: 'Saturday', hours: '10:00 AM – 2:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  schedulingNote:
    'Free pick-up days, evenings and weekends — we come to your house, school or work.',

  areas: [
    'Ventura', 'Oxnard', 'Camarillo', 'Ojai', 'Santa Paula', 'Fillmore',
    'Oak View', 'Port Hueneme',
  ],
  areasNote:
    'Pick-up and drop-off is free across all eight communities, at whatever address you arrange with your instructor.',

  packageGroups: [
    {
      title: 'Teen driver training',
      blurb:
        'Before your 18th birthday California asks for two things: an approved driver education course and six hours behind the wheel. These cover both.',
      features: [
        '30-hour online driver education',
        'Certificate of completion posted to you',
        'Six hours behind the wheel',
        'Free pick-up and drop-off',
        'Private one-to-one lessons',
      ],
      packages: [
        {
          name: 'Driver Training — 2 hours',
          detail: 'A single two-hour lesson',
          hours: 2,
          price: 160,
          includes: ['Free pick-up and drop-off', 'Private one-to-one lessons'],
        },
        {
          name: 'Education & Training Pack',
          detail: 'The 30-hour course plus six hours behind the wheel',
          hours: 6,
          price: 455,
          featured: true,
          // $45 course + $430 training = $475 bought separately. The pack is $455.
          saving: 'Saves $20 against buying the course and the six hours separately',
          includes: [
            '30-hour online driver education',
            'Certificate of completion posted to you',
            'Six hours behind the wheel',
            'Free pick-up and drop-off',
            'Private one-to-one lessons',
          ],
        },
        {
          name: 'Driver Training — 6 hours',
          detail: 'Three two-hour lessons — the state minimum',
          hours: 6,
          price: 430,
          includes: [
            'Six hours behind the wheel', 'Free pick-up and drop-off',
            'Private one-to-one lessons',
          ],
        },
        {
          name: 'Driver Training — 10 hours',
          detail: 'Five two-hour lessons',
          hours: 10,
          price: 660,
          includes: [
            'Six hours behind the wheel', 'Free pick-up and drop-off',
            'Private one-to-one lessons',
          ],
        },
      ],
    },
  ],

  individualLessons: [
    {
      name: 'Online Driver Education',
      description: '30 hours, 11 chapters, quizzes throughout. Approved by the California DMV.',
      price: 45,
    },
    { name: 'Driver Training — 2 hours', description: 'One private lesson.', price: 160 },
    { name: 'Driver Training — 6 hours', description: 'The state minimum, as three two-hour lessons.', price: 430 },
    { name: 'Driver Training — 10 hours', description: 'Five two-hour lessons.', price: 660 },
    {
      name: 'Online Driver Education and Training Pack',
      description: 'The course and the six required hours together.',
      price: 455,
    },
  ],

  programs: [
    {
      slug: 'drivers-ed',
      image: '/clients/dollar-driving-school/senior.jpg',
      title: 'Online Driver’s Education',
      navLabel: 'Driver’s Ed',
      summary:
        'The 30-hour course the California DMV requires before the written test — eleven chapters, taken at your own pace, from home.',
      body: [
        'The course is broken into eleven chapters with video throughout, and the site is open 24 hours a day. Log in, work through as much as you feel like, and log out; your place and your scores are saved for next time.',
        'Each chapter ends in a short quiz. You need 75% to move on, and if you miss too many questions you can read the chapter again and retake it. The computer grades it, so you know straight away.',
      ],
      bullets: [
        'Eleven chapters with video throughout',
        '75% needed to pass each chapter quiz',
        'Available 24/7, at your own pace',
        'Progress and scores saved when you log out',
        'Original certificate of completion posted to you',
      ],
      price: 45,
      priceNote: 'Bundled with the six required behind-the-wheel hours for $455.',
    },
    {
      slug: 'behind-the-wheel',
      image: '/clients/dollar-driving-school/hero.jpg',
      title: 'Driver’s Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Six private hours behind the wheel, split into three two-hour sessions, with free pick-up and drop-off.',
      body: [
        'Every lesson is private — one student, one instructor — and runs to the six-hour minimum the state sets for drivers under 18. The six hours are taught as three two-hour sessions.',
        'Your instructor collects you and returns you to whatever address you arranged beforehand: home, school or work. On completion, a certificate of driver training is issued in compliance with state requirements.',
      ],
      bullets: [
        'Vehicle components, indicators and systems',
        'Basic driving manoeuvres',
        'Lane position and sharing the road',
        'Turning and intersections',
        'Parking and backing manoeuvres',
        'Entering and exiting highway traffic',
      ],
      logistics: [
        'Three two-hour sessions',
        'Free pick-up days, evenings and weekends',
        'Private, one student to one instructor',
        'Certificate of driver training on completion',
      ],
      price: 430,
    },
    {
      slug: 'seniors-and-new-residents',
      image: '/clients/dollar-driving-school/senior.jpg',
      title: 'Seniors & New California Residents',
      navLabel: 'Seniors',
      summary:
        'Refresher instruction for drivers who already know how to drive — just not here, or not lately.',
      body: [
        'Newcomers to the state often find that California traffic asks for skills they have never needed. Freeway driving in particular takes practice, and the California vehicle code differs from the one you learned on.',
        'For older drivers, instructors experienced in the needs of senior citizens are a speciality here. Where the DMV has suspended a licence and improvement is feasible, that instruction is also aimed at getting it back.',
      ],
      bullets: [
        'New-resident freeway and code refresher',
        'Senior-specific instruction',
        'Help regaining a licence where improvement is feasible',
        'A schedule and plan built around what you need',
      ],
    },
  ],

  vehicles: {
    summary:
      'New and late-model air-conditioned cars, fitted with dual brake and gas systems so your instructor can intervene from the passenger seat.',
    features: [
      'Dual brake and gas systems',
      'New and late-model cars',
      'Air conditioned',
      'Liability insurance on all vehicles',
    ],
  },

  rating: { value: '4.8', count: '86', source: 'Google' },

  sourceUrl: 'https://dollardrivingofventura.com',
  internalNotes: [
    'Licence E3218 confirmed on their own footer and Camarillo page.',
    'Prices are from their own fee card dated March 2026 — the freshest figures they publish.',
    'They claim the "highest passing rate" locally. Their claim, not ours; never restate it.',
    'Photography here is the licensed stock already on their site. Replace with real photos of their cars and instructors before this goes to production.',
    'Verified defects to lead with: prices are trapped inside a PNG so they are invisible to search and to screen readers, a Yahoo address is the only contact email, and there is no online booking at all.',
  ],
};
