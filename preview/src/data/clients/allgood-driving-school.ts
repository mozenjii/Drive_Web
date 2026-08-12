import type { Client } from '@/lib/types';

/**
 * AllGood Driving School Inc. — Stockton and Northern California.
 *
 * Scraped from allgooddrivers.com on 2026-08-09
 * (research/allgood-driving-school).
 *
 * Apex. Everything about this business is operational: 24/7 online scheduling,
 * text-first contact, thirty named service cities across seven counties, and a
 * how-to video explaining the booking system. It is a logistics company that
 * teaches driving, and the template should read that way.
 *
 * No brand override and no photography — their site serves almost no images a
 * crawler can retrieve, which for a school covering thirty cities is a finding
 * in itself.
 */
export const allgoodDriving: Client = {
  slug: 'allgood-driving-school',
  name: 'AllGood Driving School',
  short: 'AllGood',
  variant: 'apex',

  /** One scraped asset, and it is not usable. Panel hero — which suits a school
   *  whose whole proposition is a scheduler anyway. */
  heroStyle: 'panel',

  /**
   * Their proposition is operational: book any lesson yourself, at any hour,
   * across twenty-nine cities, and use their car for the test. That is the page.
   *
   * Their own homepage prints "Welcome to AllGood Driving School Inc." four
   * times in a row, and heads three different service cards "Behind the Wheel
   * Driver Training". Fixing that is most of the visible improvement.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Services offered',
      title: 'Book it yourself, at any hour.',
      lede:
        'All appointments and classes are scheduled online — 24/7, without waiting for an office to open.',
    },
    {
      id: 'road-test',
      kicker: 'Test day',
      title: 'Use our car for the drive test.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'Or take the test in ours.',
    },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'Twenty-nine cities across the Sacramento region.',
    },
    {
      id: 'cta',
      title: 'Check availability and book online.',
      lede: 'Questions? Text 916-866-8051.',
    },
  ],

  story: {
    paragraphs: [
      'AllGood Driving School Inc. has been trusted by California driving students since 1996.',
      'Behind-the-wheel lessons and classes are booked through an online scheduler available at any hour, and the school’s own car can be used for the DMV drive test.',
    ],
  },

  tagline: 'Everything is booked online. Twenty-four hours a day.',
  headline: 'Thirty cities, seven counties, one scheduler.',

  city: 'Stockton',
  county: 'San Joaquin County',

  founded: '1996', // "Trusted by California Driving Students since 1996"

  phones: [{ label: 'Text for the quickest response', display: '(916) 866-8051', raw: '+19168668051' }],
  email: 'info@allgooddrivers.com',

  schedulingNote:
    'Every appointment and class is scheduled online, day or night. Text for the quickest response — they say so themselves.',

  areas: [
    'Stockton', 'Sacramento', 'Elk Grove', 'Lodi', 'Galt', 'Manteca', 'Lathrop',
    'Folsom', 'Roseville', 'Rancho Cordova', 'West Sacramento', 'Carmichael',
    'El Dorado Hills', 'Sonora', 'Jamestown', 'Angels Camp', 'Tuolumne City',
    'Twain Harte', 'Columbia', 'Petaluma', 'Novato', 'Santa Rosa',
    'Rohnert Park', 'Sebastopol', 'Windsor', 'San Rafael', 'Mill Valley',
    'Corte Madera', 'Larkspur',
  ],
  areasNote:
    'Twenty-nine cities across Sacramento, San Joaquin, Sonoma, Marin, Calaveras, Tuolumne, Placer and El Dorado counties. Behind-the-wheel pricing varies by location.',

  individualLessons: [
    {
      name: 'Online Driver Education',
      description:
        'For teens aged 14 to 17 working towards a learner permit. Meets California DMV requirements.',
      price: 29,
    },
    {
      name: 'Behind-the-wheel driver training',
      description:
        'For teens through to seniors — the DMV requirement, or simply to become a better driver. Price varies by location.',
    },
    {
      name: 'Car for the DMV drive test',
      description: 'Use one of our cars for the test itself. Price varies by location.',
    },
  ],

  programs: [
    {
      slug: 'drivers-ed',
      title: 'Online Driver Education',
      navLabel: 'Driver’s Ed',
      summary:
        'The DMV-required course for teens aged 14 to 17, at $29 — the lowest published driver education price in this campaign.',
      body: [
        'This is the course a teenager takes before applying for a learner permit. It meets the California DMV requirement, it is taken online, and at $29 it costs less than a third of what most schools in the state charge for the same thing.',
      ],
      bullets: [
        'For teens aged 14 to 17',
        'Meets California DMV requirements',
        'Taken entirely online',
        'Scheduled and paid for through the same system as lessons',
      ],
      price: 29,
    },
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'For teens meeting the DMV requirement and for anyone up to and including seniors who wants to drive better.',
      body: [
        'Lessons are booked through the online scheduler, which will also tell you whether your address falls inside one of the service areas before you pay for anything.',
      ],
      bullets: [
        'Teens meeting the DMV six-hour requirement',
        'Adults and seniors at any stage',
        'Booked online, 24 hours a day',
        'Availability and service area checked before you book',
      ],
      priceNote: 'Price varies by location — the scheduler shows yours.',
    },
    {
      slug: 'drive-test-car',
      title: 'Cars for the DMV Drive Test',
      navLabel: 'Test Car',
      summary:
        'Use one of our cars for the DMV drive test, wherever in the coverage area you are testing.',
      bullets: [
        'Available to teens, adults and seniors',
        'Bookable through the same online system',
        'Price varies by location',
      ],
    },
  ],

  vehicles: {
    summary:
      'Cars available for the DMV drive test as well as for lessons, across a service area spanning eight Northern California counties.',
    features: [
      'Available for the DMV drive test',
      'Twenty-nine cities covered',
      'Booked through the same 24/7 scheduler',
      'Service-area check before you pay',
    ],
  },

  rating: { value: '5.0', count: '1,103', source: 'Google' },

  sourceUrl: 'https://www.allgooddrivers.com',
  internalNotes: [
    'NO DMV licence number is published anywhere on their site. Every serious competitor in this campaign shows theirs. This is the first thing to ask for.',
    'A 5.0 rating from 1,103 Google reviews is the second-largest body of public proof in the campaign, and their own homepage does not mention it once.',
    'DEFECT — the homepage prints "Welcome to AllGood Driving School Inc." four times in a row, and "Behind the Wheel Driver Training" as the heading of three different service cards, one of which is actually about online driver education and another about drive-test cars. A visitor cannot tell the three services apart.',
    'DEFECT — behind-the-wheel and drive-test prices are both "varies by location" with no way to see a number without going into the scheduler. Only the $29 course has a public price.',
    'DEFECT — the site serves essentially no photography. One image was retrievable across twenty-two pages.',
    'They cover twenty-nine named cities and have no page for any of them. That is twenty-nine local search pages they are entitled to and do not have — the clearest single opportunity in this campaign.',
    'Founded 1996 per their own homepage: "Trusted by California Driving Students since 1996".',
  ],
};
