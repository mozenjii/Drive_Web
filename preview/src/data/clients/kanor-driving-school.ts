import type { Client } from '@/lib/types';

/**
 * Kanor Driving School, Inc. — Cypress, CA.
 *
 * Scraped from kanor.net on 2026-08-09 (research/kanor-driving-school).
 *
 * Atelier: thirty-one years, a company that lets you pick your own instructor,
 * and a customer-service team it talks about more than it talks about cars.
 *
 * No brand override and no photography. Their only logo asset is a white SVG
 * meant for a dark header, and their site publishes no photographs at all —
 * every image is a theme default. Both gaps are noted rather than papered over.
 */
export const kanorDriving: Client = {
  slug: 'kanor-driving-school',
  name: 'Kanor Driving School',
  short: 'Kanor',
  variant: 'atelier',

  /** No usable photography and no brand mark of their own — a panel hero is what
   *  is honestly available, and it carries the phone number they lead with. */
  heroStyle: 'panel',

  photos: {
    hero: {
      src: '/clients/kanor-driving-school/human-hero.jpg',
      alt: 'A mature learner smiling while driving on a clear day',
      disclosure: 'Illustrative photography',
    },
  },

  /**
   * Their homepage is a "Why Choose Kanor Driving School?" list with five named
   * reasons. Those are their words and their emphasis, so they become the
   * section headings rather than being flattened into a generic services grid.
   *
   * "Thousands of satisfied customers" is not reproduced.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Driving lessons',
      title: 'One-on-one, in the car, two hours at a time.',
      lede:
        'Each two-hour lesson is professional training from start to finish, in a car with dual controls.',
    },
    {
      id: 'vehicles',
      kicker: 'Intensive training sessions',
      title: 'Dual controls, so you really are in control.',
      lede:
        'Free pick-up and drop-off at home, work or anywhere else that suits, before and after every lesson.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'Pass with confidence.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    {
      id: 'areas',
      kicker: 'Where we pick up',
      title: 'Picked up anywhere in Orange County.',
    },
    {
      id: 'cta',
      title: 'Plan ahead — reserve your spot early.',
      lede: 'Morning, afternoon, evening or weekend. Call (714) 821-4578.',
    },
  ],

  story: {
    pullQuote: 'Professional driving training, at your fingertips.',
    paragraphs: [
      'Kanor Driving School prides itself on friendly service and flexible teaching styles, with instructors who put students at ease while giving them the skills to pass the driving test.',
      'Lessons run morning, afternoon, evening and weekends, at a range of prices, with free pick-up and drop-off from home or work.',
    ],
  },

  tagline: 'Pick your instructor. Pick your time. We come to you.',
  headline: 'Thirty-one years of Orange County drivers.',

  city: 'Cypress',
  county: 'Orange County',
  address: '5663 Lincoln Avenue, Suite A, Cypress, CA 90630',

  licence: 'E3971', // their footer: driving school E3971, traffic school E0402
  founded: '1995', // "Copyright © 1995-2026 Kanor Driving School, Inc."

  phones: [{ display: '(714) 821-4578', raw: '+17148214578' }],
  email: 'support@kanor.net',

  hours: [
    { days: 'Monday – Friday', hours: '8:00 AM – 5:00 PM' },
    { days: 'Saturday', hours: '9:00 AM – 1:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  schedulingNote:
    'The office keeps weekday hours, but lessons run every day of the week. Book two or three weeks ahead for the times you actually want — especially over summer, spring break and winter break.',

  areas: [
    'Cypress', 'Long Beach', 'Anaheim', 'Fullerton', 'Garden Grove', 'Irvine',
    'Huntington Beach', 'Santa Ana', 'Westminster', 'Buena Park', 'La Palma',
    'Los Alamitos', 'Seal Beach', 'Whittier',
  ],
  areasNote:
    'Over fifty Orange County and Long Beach cities are bookable. Pick-up and drop-off is free within twelve miles of the Cypress office; beyond that you can come to us or meet halfway.',

  programs: [
    {
      slug: 'behind-the-wheel',
      title: 'One-to-One In-Car Lessons',
      navLabel: 'Behind the Wheel',
      summary:
        'Two hours at a time, dual controls, free pick-up and drop-off — and you choose which instructor teaches you.',
      body: [
        'Every lesson runs two hours from start to finish, one instructor to one student, in a car with dual controls. Instructors collect you and return you to home, work or wherever suits, as long as you are within twelve miles of the Cypress office.',
        'Being able to choose your instructor is unusual, and it matters more than it sounds — a student who gets on with the person teaching them learns faster and argues less.',
        'Lessons run seven days a week: weekdays and weekends, mornings through to evening. Book two or three weeks ahead if you want a specific slot.',
      ],
      bullets: [
        'Two-hour lessons, one to one',
        'Dual controls on every car',
        'Choose your own instructor',
        'Free pick-up and drop-off within twelve miles',
        'Lessons every day of the week',
        'Both minors and adults',
      ],
      logistics: [
        'Beyond twelve miles: come to us or meet halfway',
        'Online account for scheduling after you register',
        'Book two to three weeks ahead in busy seasons',
        '$75 charge for same-day cancellations, no-shows and reschedules',
      ],
    },
    {
      slug: 'traffic-school',
      title: 'Traffic School',
      navLabel: 'Traffic School',
      summary:
        'A separately DMV-licensed traffic violator school, run under the same roof — licence E0402.',
      bullets: [
        'DMV-licensed traffic violator school',
        'Licence E0402, held separately from the driving school',
        'Same office, same customer service team',
      ],
    },
  ],

  vehicles: {
    summary:
      'Dual-control cars on every lesson, so a new driver genuinely holds the wheel from the first minute and the instructor can still intervene.',
    features: [
      'Dual controls fitted',
      'Two full hours of instruction per lesson',
      'Free pick-up and drop-off within twelve miles',
      'Morning, afternoon, evening and weekend slots',
    ],
  },

  rating: { value: '4.9', count: '648', source: 'Google' },

  sourceUrl: 'https://www.kanor.net',
  internalNotes: [
    'Two licences in their own footer: driving school E3971, traffic school E0402.',
    'They run a genuine accessibility statement and an accessibility toolbar. Almost nobody in this campaign does. Worth complimenting — and worth noting that a WCAG audit of the actual pages is a natural follow-on service.',
    'DEFECT — no prices anywhere. They say "a variety of lessons at different prices to fit any customer\'s budget" and then never name one.',
    'DEFECT — their FAQ gives behind-the-wheel hours as "Monday – Friday from 7:00 – 10:00 pm", which would mean no weekday lessons before 7pm. Almost certainly meant 7:00 am – 10:00 pm. Not reproduced here; flag it, it is costing them weekday bookings.',
    'DEFECT — no photographs of any kind. Every image on the site is a theme default, and the only logo asset is a white SVG for a dark header. This preview therefore ships with the template palette and shared stock photography. Their own cars and instructors would replace both in an afternoon.',
    'Choosing your own instructor is a real differentiator and is buried in FAQ item 3.',
    'Service areas listed here are the largest of the fifty-plus cities in their own booking dropdown.',
  ],
};
