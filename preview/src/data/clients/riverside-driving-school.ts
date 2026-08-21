import type { Client } from '@/lib/types';

/** Riverside Driving School — Manhattan, New York (despite the campaign name). */
export const riversideDriving: Client = {
  slug: 'riverside-driving-school',
  name: 'Riverside Driving School',
  short: 'Riverside',
  variant: 'atelier',
  heroStyle: 'stage',
  photos: {
    hero: {
      src: '/clients/riverside-driving-school/human-hero.jpg',
      alt: 'A learner smiling from the driver’s seat of a city car',
      disclosure: 'Illustrative photography',
    },
  },
  sections: [
    { id: 'programs', kicker: 'Private lessons', title: 'Learn Manhattan one quiet street at a time.', lede: 'The first evaluation begins with safety and vehicle setup before the instructor moves into city traffic, manoeuvres and test preparation.' },
    { id: 'road-test', kicker: 'The curriculum', title: 'From leaving the curb to reading an intersection.', lede: 'A specific road-skills checklist covers vehicle control, traffic, parking, turns and defensive habits.' },
    { id: 'vehicles', kicker: 'The training car', title: 'One commercially insured, dual-brake Honda Civic.', lede: 'The school says lessons are delivered by the instructor-owner and start away from busy traffic.' },
    { id: 'areas', kicker: 'Manhattan only', title: 'Home pickup, plus three published meeting points.', lede: 'Central Park West, Fifth Avenue and West 96th Street.' },
    { id: 'cta', title: 'Book a private Manhattan lesson.', lede: 'Call or email Riverside with your pickup point and current experience.' },
  ],
  story: {
    pullQuote: 'Safety first.',
    paragraphs: [
      'Riverside Driving School is a small Manhattan operation built around private instruction. Its own site says only the instructor-owner teaches, using a commercially insured car with a dual brake.',
      'The first evaluation covers seat, mirrors, steering wheel and safe vehicle setup before leaving the driveway. New learners begin on a less busy street, then progress into traffic, intersections, parking and highway lessons at their own pace.',
      'The published curriculum is unusually concrete: smooth acceleration, three-point turns, parallel parking, blind-spot checks, correct lane choice, safe following distance and anticipating pedestrians are all named rather than hidden behind a generic “road skills” label.',
    ],
  },
  tagline: 'Private Manhattan lessons, starting on a quieter street.',
  headline: 'City driving without being thrown into city traffic.',
  heroLede: 'Patient, one-to-one instruction with Manhattan home pickup and a dual-brake, commercially insured training car.',
  city: 'Manhattan',
  state: 'NY',
  county: 'New York County',
  phones: [{ display: '(347) 991-2391', raw: '+13479912391' }],
  email: 'riversidedrivingschool@gmail.com',
  schedulingNote: 'Home pickup is available in Manhattan only. Call or email for current lesson and package prices; none are published on the site.',
  areas: [
    'Manhattan',
    '1 Central Park West',
    '975 Fifth Avenue',
    '22 West 96th Street',
  ],
  areasNote: 'The three street addresses are published as pickup locations, not offices.',
  programs: [
    {
      slug: 'private-driving-lessons',
      title: 'Private Driving Lessons',
      navLabel: 'Private Lessons',
      summary: 'One-to-one Manhattan lessons beginning with a safety evaluation and moving at the student’s pace.',
      body: [
        'The first evaluation starts before the car moves: seat belt, mirrors, seat and steering-wheel position, signals and blind-spot checks.',
        'Students begin on a non-busy street and progress through traffic, turns, parking, intersections, defensive habits and highway driving according to skill and comfort.',
      ],
      bullets: ['Home pickup in Manhattan', 'Instructor-owner only', 'Start on a quieter street', 'Highway lessons available'],
    },
    {
      slug: 'road-test-preparation',
      title: 'Road-Test Preparation',
      navLabel: 'Road Test',
      summary: 'A customised session focused on the legal road skills and manoeuvres needed for New York testing.',
      bullets: ['Three-point turns', 'Parallel parking', 'Correct turns and lane choice', 'Traffic signs and intersections', 'Practice tests and permit preparation'],
    },
  ],
  vehicles: {
    summary: 'Riverside publishes one specific training car: a 2016 Honda Civic with a dual brake and commercial insurance, used by the instructor-owner.',
    features: ['2016 Honda Civic', 'Instructor-side dual brake', 'Commercial insurance', 'Private instruction'],
  },
  rating: { value: '4.9', count: '68', source: 'Google' },
  sourceUrl: 'https://riversidedriving.com/',
  internalNotes: [
    'LOCATION — this lead is a Manhattan, New York business. The name “Riverside” and campaign grouping could easily suggest Riverside, California; do not change the city.',
    'PRICE — the navigation mentions prices and packages, but the live WordPress site publishes only Home, About Car and Privacy pages. No amount was recoverable; omitted.',
    'LICENCE — no New York school licence number is published. A generic DMV badge is not evidence of a number.',
    'PHOTOGRAPHY — the site publishes signs, badges, certificates and screenshots, but no reliable student, instructor or car photograph. Keep the panel hero.',
    'DO NOT REPRODUCE — “best defensive driving school,” “lowest rate in New York,” “world class,” and “DMV recognizes our company” are unsupported marketing claims.',
  ],
};
