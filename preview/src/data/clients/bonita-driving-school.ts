import type { Client } from '@/lib/types';

/**
 * Bonita Driving School — San Diego, CA.
 *
 * Scraped from bonitadrivingschool.com on 2026-08-13
 * (research/bonita-driving-school). Eight pages, a Squarespace site carrying real
 * photography of their own students and their own cars.
 *
 * Editorial hero, because the thing they have that nobody else in this campaign
 * has is a photograph of a specific moment: their own student, outside Chicano
 * Park, holding the yellow certificate. A portrait frame shows it. A full-bleed
 * crop would cut the certificate out of the picture.
 *
 * No brand override: their mark is black and white — a circular badge with palm
 * trees and a road — so there is no hue to keep. The template palette stands
 * rather than a colour being invented for them.
 *
 * Their licence is deliberately NOT asserted. Their own homepage says
 * "Administered by International Driving School E2790" — a licence held by a
 * different named company, and printing it as Bonita's own number is exactly the
 * error sites/VERIFY.md exists to prevent. Flagged in internalNotes instead.
 */
export const bonitaDriving: Client = {
  slug: 'bonita-driving-school',
  name: 'Bonita Driving School',
  short: 'Bonita',
  variant: 'safe-route',
  heroStyle: 'editorial',

  logo: '/clients/bonita-driving-school/logo.png',

  photos: {
    hero: {
      src: '/clients/bonita-driving-school/student-certificate.jpeg',
      alt: 'A Bonita Driving School student holding their certificate of completion beside the school car in Barrio Logan',
    },
    vehicle: {
      src: '/clients/bonita-driving-school/car.jpeg',
      alt: 'A Bonita Driving School training car, photographed by the school',
    },
  },

  /**
   * Their homepage is built around two headings — "OUR SERVICES" and "HOW TO GET
   * A LICENSE" — and the second is a four-step path most of their competitors
   * never bother to explain. That ordering is theirs and it survives here.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Our services',
      title: 'Learning to drive with us is easy, fun, and safe.',
      lede:
        'Online driver’s ed, the six hours a teen needs for the DMV, and lessons for adults at any level.',
    },
    {
      id: 'road-test',
      kicker: 'How to get a license',
      title: 'Four steps, in order, and nobody skips one.',
      lede:
        'Online course, permit test, six hours behind the wheel, then the drive test — after fifty hours of practice with a parent.',
    },
    {
      id: 'vehicles',
      kicker: 'Our cars',
      title: 'Gas and brake on both sides.',
      lede:
        'Every training car is dual-control, so the instructor can act while the student stays at the wheel.',
    },
    {
      id: 'areas',
      kicker: 'Where we drive',
      title: 'Most of San Diego, and lessons that start at your door.',
    },
    {
      id: 'cta',
      title: 'Send your availability and they come back within a day or two.',
      lede: 'Call (619) 484-3519 or email, and pay per lesson as you go.',
    },
  ],

  story: {
    pullQuote:
      'We treat our students as though we were teaching our own children and family members to drive.',
    paragraphs: [
      'Bonita Driving School is a family owned and operated business, teaching San Diego to drive since the 1980s, with instructors licensed and certified by the DMV.',
      'Their stated mission is to take a student by the hand from the first time they sit behind the wheel until the licence is in their pocket — local, knowledgeable and friendly, with safety as the first goal rather than the closing line.',
    ],
  },

  tagline: 'Family owned in San Diego since the 1980s.',
  headline: 'Learning to drive with us is easy, fun, and safe.',
  heroLede:
    'From the first time you sit behind the wheel until you get your license. Dual-control cars, lessons that start and end at your door, and payment per lesson rather than up front.',

  city: 'San Diego',
  county: 'San Diego County',

  phones: [{ display: '(619) 484-3519', raw: '+16194843519' }],
  email: 'BonitaDrivingSchool@yahoo.com',
  languages: ['English', 'Spanish', 'Tagalog'],

  schedulingNote:
    'Open seven days a week. Send an appointment request with your availability and they come back to you within one to two days. Lessons go ahead in the rain — their view is that learning to drive in it is worth having.',

  areas: [
    'San Diego',
    'Chula Vista',
    'Coronado',
    'Downtown San Diego',
    'Mission Valley',
    'Ocean Beach',
    'Sunset Cliffs',
    'Barrio Logan',
  ],
  areasNote:
    'They service most areas of San Diego. Lessons start and end at the student’s home, school, college or workplace, and an instructor can collect a student directly from school where the location allows it.',

  programs: [
    {
      slug: 'online-drivers-ed',
      title: 'Online Driver’s Ed',
      navLabel: 'Driver’s Ed',
      summary:
        'The DMV-approved online course a minor needs before the permit test. The pink certificate arrives at your home address.',
      body: [
        'Step one for anyone under 18. The course is taken online, at your own pace, and once it is finished the pink certificate is posted to your home address.',
        'That certificate is what the DMV wants to see at the permit test, alongside a social security card, proof of residency and a birth certificate.',
      ],
      bullets: [
        'DMV-approved online course',
        'Pink certificate posted to your home address',
        'Required before the permit test for under-18s',
      ],
    },
    {
      slug: 'teen-behind-the-wheel',
      title: 'Teen: Behind the Wheel Training',
      navLabel: 'Teen Lessons',
      summary:
        'The six hours the DMV requires, taught as three two-hour lessons, with the certificate of completion issued on the last one.',
      body: [
        'A learner’s permit is needed before the first lesson. Teens under 18 must take a minimum of six hours of behind-the-wheel training from a DMV-licensed school, which Bonita teaches as three two-hour lessons.',
        'Lessons start and end at the student’s residence or school, and run through San Diego itself — Coronado, downtown, Mission Valley, Sunset Cliffs and Ocean Beach — rather than around an empty car park.',
        'On the third lesson the certificate of completion is issued for students under 18. Many students take more than the minimum and the school encourages it, but six hours is what the DMV asks for.',
      ],
      bullets: [
        'Learner’s permit required before the first lesson',
        'Six DMV-required hours as three two-hour lessons',
        'Pick-up and drop-off at home or school',
        'Certificate of completion issued on the third lesson',
        'Parents do not have to be present for pick-up or drop-off',
      ],
      priceNote: '$120 an hour. Lessons are two hours, so $240 a lesson, paid per lesson.',
      logistics: [
        'A parent’s signed note lets a student leave class for a lesson',
        'Pay per lesson — the full six hours are not charged up front',
        'Cash preferred; cheques accepted, payable to Bonita Driving School',
        '$40 fee if a lesson is cancelled within 24 hours',
        'Hours are non-transferable between students',
      ],
    },
    {
      slug: 'adult-behind-the-wheel',
      title: 'Adult: Behind the Wheel Training',
      navLabel: 'Adult Lessons',
      summary:
        'For drivers 18 and over at any level, starting and finishing at your home, college or workplace. No commitment — pay per lesson.',
      body: [
        'Adults hold a learner’s permit and then book as many two-hour lessons as they want. There is no package to commit to and no minimum: you pay for the lesson you take.',
        'Lessons begin and end at your residence, college or workplace, and cover real San Diego driving — downtown, Mission Valley, Coronado, Chula Vista.',
      ],
      bullets: [
        'Drivers 18 and over, any level',
        'Learner’s permit required',
        'Starts and ends at home, college or work',
        'No commitment — pay per lesson',
      ],
      priceNote: '$120 an hour, two-hour lessons, $240 a lesson.',
    },
  ],

  /**
   * Their own published rates and fees, verbatim. They publish no package pricing
   * at all, so nothing is bundled here that they do not sell.
   */
  individualLessons: [
    {
      name: 'Behind-the-wheel lesson (2 hours)',
      description:
        'Charged at $120 an hour. Paid per lesson — the six DMV hours are not charged up front.',
      price: 240,
    },
    {
      name: 'Late cancellation (within 24 hours)',
      description: 'Their instructors book tightly, so a lesson cancelled inside a day carries a fee.',
      price: 40,
    },
    {
      name: 'Replacement certificate',
      description: 'If the original certificate of completion is lost or destroyed.',
      price: 30,
    },
  ],

  vehicles: {
    summary:
      'Their training cars are modified with the gas and brake on the passenger side as well, so a first-time driver holds the wheel from the first minute while the instructor keeps a way to intervene.',
    features: [
      'Dual controls — gas and brake on both sides',
      'Lessons start and end at your door',
      'Two full hours of driving per lesson',
      'Lessons run in the rain, deliberately',
    ],
  },

  rating: { value: '5.0', count: '488', source: 'Google' },

  sourceUrl: 'https://www.bonitadrivingschool.com',
  internalNotes: [
    'LICENCE — their homepage says "Administered by International Driving School E2790". That number belongs to a different named company, so it is NOT published as Bonita’s own licence here. Ask whether they hold their own DMV school licence or operate under International’s; the answer changes what this page may say.',
    'PHONE — their contact page publishes (619) 484-3519. The campaign workbook has +1 619-861-4243 from the Google listing. Two different numbers for one business: confirm which is answered before any email goes out. This preview uses the one on their own site.',
    'DEFECT — their About page ends "the mission that drives Safety 1st: to provide the best quality Driver’s Education to our students". Safety 1st is a different driving school. Their own About page is carrying another company’s name, which means it was pasted from a template and never read. The single most useful thing to open a conversation with.',
    'DO NOT REPRODUCE — their FAQ states "75% of students take more than the minimum 3 lessons". A statistic about their own customers, unverifiable by us, left out.',
    'PHOTO PERMISSION — the hero shows an identifiable student and a real certificate. Acceptable for a noindex preview of their own published image; written permission is required before any production rebuild. Same rule as Learn 2 Drive, MAS, NorCal, Easy Street, Allstate and Sanctified (memory/005).',
    'No street address is published anywhere on their site — only "San Diego, CA". Omitted rather than guessed.',
    'No opening hours published. "Open 7 Days A Week" is on the homepage and carries the scheduling note instead.',
    'No instructors named and no testimonials published. The 5.0 from 488 Google reviews is their strongest asset and appears nowhere on their own pages — a finding worth leading with.',
    'Lessons are offered in Spanish and Tagalog per their FAQ. Tagalog is unusual in this campaign and worth a line in the email.',
  ],
};
