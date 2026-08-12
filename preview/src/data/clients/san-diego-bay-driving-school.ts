import type { Client } from '@/lib/types';

/**
 * San Diego Bay Driving School Inc — San Diego, CA.
 *
 * Scraped from sandiegobaydrivingschool.com on 2026-08-09
 * (research/san-diego-bay-driving-school).
 *
 * Apex, because everything they write is aimed at the test: examiner routes,
 * mock drives, the scoring sheet, what points get deducted. That is a buyer who
 * wants to pass, not a parent who wants reassurance.
 *
 * Behind-the-wheel prices are deliberately absent. They publish none — "prices
 * and availability depend upon your zip code" — and inventing one would be the
 * single fastest way to lose the account.
 */
export const sanDiegoBay: Client = {
  slug: 'san-diego-bay-driving-school',
  name: 'San Diego Bay Driving School',
  short: 'San Diego Bay',
  variant: 'apex',

  /** Two real photographs only; the rest of their imagery is AI-generated and
   *  was not reused. A panel hero is the honest composition. */
  heroStyle: 'panel',

  /**
   * This is an online-course business with behind-the-wheel attached, and their
   * own site is organised that way — the $49.95 driver's ed course is the first
   * thing on the page. Courses lead here too, with prices in the heading rather
   * than behind a click.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Courses',
      title: '30 hours of driver’s ed, online, for $49.95.',
      lede:
        'A ten-chapter course approved by the California DMV, with video and interaction throughout and a short test after each chapter. It issues the DMV certificate a teen needs for the permit exam.',
    },
    {
      id: 'road-test',
      kicker: 'Behind the wheel',
      title: 'Then the part that happens in a car.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'The in-car half of the course.',
    },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'San Diego County.',
    },
    {
      id: 'cta',
      title: 'Register and start today.',
      lede:
        'Choose your own username and password, log in and out whenever you want, and the course resumes where you left it.',
    },
  ],

  story: {
    paragraphs: [
      'San Diego Bay Driving School runs a California DMV-approved 30-hour online driver’s education course alongside behind-the-wheel training.',
      'The online course is ten chapters, with videos, interaction and a test after each chapter. The driver’s ed certificate is mailed on completion.',
    ],
  },

  logo: '/clients/san-diego-bay-driving-school/logo.png',

  /**
   * Sampled from their mark: deep navy #002C50 and a sunset orange #FE8807.
   *
   * The navy is lifted a little to #004175 so it reads as navy rather than as
   * black, still at 10.48:1. The orange is 2.40:1 — nowhere near AA — so the
   * accent is that hue darkened to #B55F01 (4.56:1), with the raw orange kept
   * only as the soft chip fill where it is a background and not a text colour.
   */
  brand: {
    primary: '#004175',
    primaryDark: '#00345E',
    primarySoft: '#E7F1F8',
    accent: '#B55F01',
    accentDark: '#A15401',
    accentSoft: '#F7EEE3',
    wash: '0, 49, 89',
    bg: '#F5F9FC',
    border: '#C8DDEF',
    borderSoft: '#DFECF6',
    fgDim: '#415B77',
  },

  photos: {
    hero: {
      src: '/clients/san-diego-bay-driving-school/hero.jpg',
      alt: 'A San Diego Bay school car pulling away through a car park in late afternoon light',
    },
    roadTest: {
      src: '/clients/san-diego-bay-driving-school/in-car.jpg',
      alt: 'An instructor talking a student through the next manoeuvre from the passenger seat',
    },
    vehicle: {
      src: '/clients/san-diego-bay-driving-school/hero.jpg',
      alt: 'The school Toyota, the car students train and take the test in',
    },
    support: {
      src: '/clients/san-diego-bay-driving-school/in-car.jpg',
      alt: 'A lesson in progress, instructor and student side by side',
    },
  },

  tagline: 'Call or text and we will tell you exactly what your zip code costs.',
  headline: 'Trained on the routes the examiner actually drives.',

  city: 'San Diego',
  county: 'San Diego County',
  address: '4009 Park Blvd #35, San Diego, CA 92103',

  licence: 'E2168', // printed in their own site header
  founded: '2020', // corporation filed 2020

  phones: [{ label: 'Call or text', display: '(619) 771-9888', raw: '+16197719888' }],
  email: 'sandiegobaydrivingschool@gmail.com',

  schedulingNote:
    'Call or text to book. Lessons are two hours; the six required hours are taught across three separate days.',

  // Only what they publish. They name no service area beyond San Diego, so no
  // other city gets a page here — an invented coverage claim is still invented.
  areas: ['San Diego'],
  areasNote:
    'We come to you at no charge for pick-up and drop-off. Price and availability depend on your zip code, so call or text and we will tell you straight away.',
  languages: ['English', 'Spanish'],

  social: {
    facebook: 'https://www.facebook.com/Sandiegobaydrivingschool/',
    instagram: 'https://www.instagram.com/sandiegobaydrivingschool/',
  },

  // No package matrix: they publish no behind-the-wheel prices at all. The
  // course prices below are the ones they DO publish, and they are all of them.
  individualLessons: [
    {
      name: 'Online Driver Education',
      description: '30 hours across 10 chapters, approved by the California DMV. Certificate posted on completion.',
      price: 49.95,
    },
    {
      name: 'DMV Written Test Preparation',
      description:
        'Hundreds of real-style questions from the California handbook, unlimited retakes, supported in over 100 languages.',
      price: 21.95,
    },
    {
      name: 'Mature Driver Improvement Course',
      description: 'DMV-approved refresher for drivers aged 55 and over, taken online.',
      price: 39.95,
    },
    {
      name: 'Traffic School',
      description: 'DMV-licensed, open-book 25-question final exam, certificate printable immediately.',
      price: 49.95,
    },
  ],

  programs: [
    {
      slug: 'behind-the-wheel',
      image: '/clients/san-diego-bay-driving-school/in-car.jpg',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Two-hour lessons across three separate days, taught to DMV standards, with free pick-up and drop-off wherever you are.',
      body: [
        'Every lesson is two hours long, and the six hours the state asks for are taught across three different days rather than crammed into one. Spacing them is the point — skills settle between sessions in a way they do not inside a single afternoon.',
        'You need a valid California permit before the first lesson. We come to you at no charge for pick-up and drop-off, and payment is taken on the first day.',
      ],
      bullets: [
        'Steering control and lane discipline',
        'Safe lane changes, blind spots and mirror use',
        'Right-of-way rules and hazard recognition',
        'Right turns on red, protected and unprotected lefts',
        'Reading and responding to road signs',
        'Defensive driving technique from the first lesson',
      ],
      logistics: [
        'Each lesson is two hours; six hours over three days',
        'Valid California permit required',
        'No charge for pick-up and drop-off',
        'Cash, Zelle or Venmo, paid on the first day',
        '72 hours notice to cancel or reschedule',
      ],
      priceNote:
        'Price and availability depend on your zip code — call or text (619) 771-9888 and we will tell you.',
    },
    {
      slug: 'freeway-and-road-test',
      image: '/clients/san-diego-bay-driving-school/hero.jpg',
      title: 'Freeway Driving & DMV Test Preparation',
      navLabel: 'Road Test',
      summary:
        'Mock tests on the real routes, marked the way the examiner marks them, so nothing on the day is a surprise.',
      body: [
        'We take students around the DMV test routes used in this area and run mock drives that mirror the exam. You learn the test format, the scoring sheet and the evaluation process — what examiners look for, how points are assessed, and which mistakes cost the most.',
        'Freeway work is part of it: entering and exiting traffic, merging, lane changes at speed and the continuous scanning that makes all three feel calm rather than frantic.',
      ],
      bullets: [
        'Mock drives on the routes the examiner uses',
        'The scoring sheet explained line by line',
        'Entering, merging and exiting freeway traffic',
        'Lane changes and scanning at speed',
        'We can drive you to the DMV appointment',
      ],
      priceNote:
        'The DMV drive-test service requires at least two hours of behind-the-wheel preparation first.',
    },
    {
      slug: 'mature-drivers',
      title: 'Mature Driver Improvement',
      navLabel: 'Mature Drivers',
      summary:
        'A DMV-approved online refresher for drivers aged 55 and over, from a provider with 35 years in driver and traffic safety.',
      body: [
        'The course is built around the changes that actually affect older drivers: reaction time, vision, and the adjustments that keep both from becoming a problem. Short chapters, video and animation rather than dense text.',
      ],
      bullets: [
        'Approved by the California DMV',
        'For drivers aged 55 and over',
        'Tune up skills and refresh the rules of the road',
        'Understand age-related change and how to drive around it',
        'Short chapters with video and animation',
      ],
      price: 39.95,
    },
  ],

  vehicles: {
    summary:
      'One instructor, one student, in the same car every lesson — and the same car you can take to the DMV appointment.',
    features: [
      'One-to-one instruction, never shared',
      'Free pick-up and drop-off',
      'The car you trained in, on test day',
      'Cash, Zelle or Venmo accepted',
    ],
  },

  rating: { value: '4.9', count: '101', source: 'Google' },

  sourceUrl: 'https://sandiegobaydrivingschool.com',
  internalNotes: [
    'Licence E2168 confirmed in their own site header.',
    'They publish NO behind-the-wheel prices. Do not invent one — "call or text" is the whole booking flow, and that gap is the pitch.',
    'Verified defects to lead with: the Mature Driver page URL is a mangled Squarespace redirect (/https/wwwmaturedrivercoursescom/registerphphttpson1afeidie255ciffg255e), which no search engine will ever rank and no customer will ever share; there is no online booking; and the service-area page does not exist, so every zip-code question becomes a phone call.',
    'Several images on their site are AI-generated (1024x1536 files with generator-style filenames). None are reused here — only their two real photographs, DSC01613 and DSC01630.',
    'They name no service area beyond "San Diego", so the preview has one area page. Ask the owner which cities they actually cover — that is six or eight more pages of local search, and it is the easiest upsell in the pitch.',
  ],
};
