import type { Client } from '@/lib/types';

/**
 * World Driving School — Santa Barbara and Goleta, CA.
 *
 * Scraped from worlddrivingschoolca.com on 2026-08-13
 * (research/world-driving-school). A single well-built page plus a contact page.
 *
 * Stage hero. Their photography is the best in this batch and it is unarguably
 * theirs: watermarked shots of their own students outside the Santa Barbara DMV
 * holding the drive-test result, and their own signwritten Corolla parked in a
 * drive-test bay. That earns a full-bleed composition.
 *
 * Brand sampled from their logo — the teal of the globe at 4.54:1 and the navy of
 * the wordmark, which already measures 12.16:1 and needed no darkening at all.
 *
 * One instructor's name appears in every single review on their site: Henry. The
 * email address is his too. This preview names him nowhere as a claim about
 * staffing, but the reviews carry his name because that is what they say.
 */
export const worldDriving: Client = {
  slug: 'world-driving-school',
  name: 'World Driving School',
  short: 'World',
  variant: 'safe-route',
  heroStyle: 'stage',

  logo: '/clients/world-driving-school/logo.png',

  brand: {
    primary: '#088290',
    primaryDark: '#076F7B',
    primarySoft: '#E5F6F8',
    accent: '#12375C',
    accentDark: '#0C243C',
    accentSoft: '#E7F0F8',
    wash: '3, 54, 60',
    bg: '#F4FBFC',
    border: '#C6EAEE',
    borderSoft: '#DDF3F5',
    fgDim: '#4E737F',
  },

  photos: {
    hero: {
      src: '/clients/world-driving-school/passed.jpg',
      alt: 'A World Driving School student outside the Santa Barbara DMV holding their drive-test result',
    },
    vehicle: {
      src: '/clients/world-driving-school/car.png',
      alt: 'The World Driving School Corolla, marked for Santa Barbara and Goleta, parked in a DMV drive-test bay',
    },
  },

  /**
   * Their own page order, and their own headings: "Simple, Transparent Pricing"
   * before anything else, then the successes, then why choose us. A driving school
   * that leads with a price list is rare enough in this campaign to preserve.
   */
  sections: [
    {
      id: 'packages',
      kicker: 'Simple, transparent pricing',
      title: 'No hidden fees.',
      lede:
        'Three packages, priced on their own home page, with free pick-up and drop-off in Goleta and Santa Barbara.',
    },
    {
      id: 'programs',
      kicker: 'Lessons',
      title: 'For UCSB students, teens, and adults.',
      lede:
        'Professional, patient instruction, built around the DMV test and the road afterwards.',
    },
    {
      id: 'road-test',
      kicker: 'Road test',
      title: 'Including the car you take the test in.',
      lede:
        'Fully insured, registration and insurance included, with the instructor alongside. Press one manoeuvre and watch the route.',
    },
    {
      id: 'vehicles',
      kicker: 'Dual-control safety',
      title: 'Passenger-side brakes on every car.',
      lede: 'Modern cars, DMV-certified instructors, and a student-driver plate other drivers respect.',
    },
    {
      id: 'reviews',
      kicker: 'What our students say',
      title: 'They all thank the same person.',
    },
    {
      id: 'areas',
      kicker: 'Service area',
      title: 'Santa Barbara, Goleta, Isla Vista, Montecito, Carpinteria.',
    },
    {
      id: 'cta',
      title: 'Book your lesson.',
      lede: 'Call (805) 689-9856 — seven days a week, 9am to 5pm.',
    },
  ],

  story: {
    pullQuote: 'We focus on one thing: getting your license.',
    paragraphs: [
      'World Driving School has been helping Santa Barbara and Goleta drivers pass their test since 2018, from a base in Santa Barbara itself.',
      'Their teaching is aimed at three groups they name explicitly — UCSB students, teens and adults — and Isla Vista is in their service area, which tells you the university is not an afterthought.',
      'The curriculum is structured rather than improvised: freeway and city driving, the behind-the-wheel exam protocol itself, and the critical errors that cost people the test. Every car has passenger-side brakes.',
    ],
  },

  tagline: 'Drive safe. Test with confidence.',
  headline: 'Drive safe. Test with confidence.',
  heroLede:
    'Professional, patient instruction for UCSB students, teens and adults across Santa Barbara and Goleta — with free pick-up and drop-off, and a fully insured car for the DMV test.',

  city: 'Santa Barbara',
  county: 'Santa Barbara County',

  founded: '2018',

  phones: [{ display: '(805) 689-9856', raw: '+18056899856' }],
  email: 'henrydrivetech@gmail.com',

  hours: [{ days: 'Seven days a week', hours: '9:00 AM – 5:00 PM' }],
  schedulingNote:
    'Open seven days a week, 9am to 5pm, with flexible scheduling. Lessons are booked by phone or through their contact form.',

  areas: ['Santa Barbara', 'Goleta', 'Isla Vista', 'UCSB', 'Montecito', 'Carpinteria'],
  areasNote:
    'Free pick-up and drop-off in Goleta (93117) and Santa Barbara. Isla Vista and the UCSB campus are named in their service area, which is unusual — most schools treat a student without a car as somebody else’s problem.',

  programs: [
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Two-hour lessons for teens and adults with a DMV safety certified instructor, free pick-up and drop-off included.',
      body: [
        'Lessons run two hours at a time with a DMV safety certified instructor, in a modern car with passenger-side brakes. Pick-up and drop-off in Santa Barbara and Goleta are free.',
        'The training is structured around what the test actually asks for — city driving, freeway driving, and the exam protocol itself — so that the day of the test is not the first time the format has been explained.',
      ],
      bullets: [
        'Two hours behind the wheel',
        'DMV safety certified instructor',
        'Free pick-up and drop-off',
        'Flexible scheduling',
        'Teens and adults, UCSB students welcome',
      ],
      price: 140,
      priceNote: 'Their published price for a two-hour lesson.',
    },
    {
      slug: 'six-hour-package',
      title: 'Six-Hour Training Package',
      navLabel: 'Six Hours',
      summary:
        'The six hours a teen under 18 needs, with the OL 238 certificate, covering freeway and city driving.',
      body: [
        'Six hours of professional training, and the OL 238 certificate that a teen under 18 has to hand the DMV. Their site names the form number, which is a small thing that tells you they do this often.',
        'The six hours cover both freeway and city driving rather than circling a quiet neighbourhood, and pick-up and drop-off are included throughout.',
      ],
      bullets: [
        'Six hours of professional training',
        'OL 238 certificate for teens under 18',
        'Freeway and city driving',
        'Free pick-up and drop-off',
      ],
      price: 420,
      priceNote: 'Their published package price. Marked "best value" on their own site.',
    },
    {
      slug: 'dmv-test-vehicle',
      title: 'DMV Drive Test Vehicle',
      navLabel: 'Test Car',
      summary:
        'An hour of training and their fully insured car for the test — registration, insurance and the instructor alongside.',
      body: [
        'One training session immediately before the test, then their car for the test itself: fully insured, registered, with the instructor accompanying you to the appointment.',
        'This is the package for a driver who has practised in a car they cannot use on test day — a borrowed car, an uninsured car, or no car at all.',
      ],
      bullets: [
        'One-hour training session',
        'Vehicle rental for the DMV test',
        'Fully insured vehicle',
        'Registration and insurance included',
        'Instructor accompaniment',
      ],
      price: 150,
      priceNote: 'Their published price for training plus the test vehicle.',
    },
  ],

  /** Their own pricing block, verbatim, including which package they flag. */
  packageGroups: [
    {
      title: 'Lessons and packages',
      blurb: 'Their whole price list, as published on their home page.',
      features: [
        'Behind-the-wheel training',
        'DMV safety certified instructor',
        'Free pick-up and drop-off',
        'Flexible scheduling',
        'OL 238 certificate for under-18s',
        'Freeway and city driving',
        'Vehicle for the DMV test',
        'Registration and insurance included',
        'Instructor accompaniment to the test',
      ],
      featureNotes: {
        'OL 238 certificate for under-18s':
          'The DMV form a teen has to produce to show the six hours of professional training were completed. Included in the six-hour package.',
        'Vehicle for the DMV test':
          'Their own car, insured and registered, used for the test itself — for drivers who have no car they can legally test in.',
      },
      lessonHours: 2,
      packages: [
        {
          name: '2-Hour Driving Lesson',
          detail: 'Adults and teens',
          hours: 2,
          price: 140,
          includes: [
            'Behind-the-wheel training',
            'DMV safety certified instructor',
            'Free pick-up and drop-off',
            'Flexible scheduling',
          ],
        },
        {
          name: '6-Hour Training Package',
          detail: 'With the OL 238 certificate',
          hours: 6,
          price: 420,
          includes: [
            'Behind-the-wheel training',
            'DMV safety certified instructor',
            'Free pick-up and drop-off',
            'Flexible scheduling',
            'OL 238 certificate for under-18s',
            'Freeway and city driving',
          ],
          featured: true,
        },
        {
          name: '1-Hour Training + Vehicle Rental',
          detail: 'For the DMV test itself',
          hours: 1,
          price: 150,
          includes: [
            'Behind-the-wheel training',
            'DMV safety certified instructor',
            'Vehicle for the DMV test',
            'Registration and insurance included',
            'Instructor accompaniment to the test',
          ],
        },
      ],
    },
  ],

  vehicles: {
    summary:
      'Modern cars with passenger-side brakes, kept for teaching and for the drive test itself. The school car is marked for Santa Barbara and Goleta and carries a student-driver plate, which changes how other traffic behaves around a learner.',
    features: [
      'Passenger-side brakes on every car',
      'Fully insured and registered for the DMV test',
      'Student-driver marked',
      'Free pick-up and drop-off in Santa Barbara and Goleta',
    ],
  },

  /** Published on their own home page. Every one of them names the instructor. */
  testimonials: [
    {
      name: 'Pedro De Brito',
      quote:
        'Great experience driving with Henry. Recommend if you would like some instructor led practice to gain confidence before taking a behind the wheel test. I passed first time, thank you Henry!',
    },
    {
      name: 'Marian Walker',
      quote:
        'Henry was an amazing instructor! His patience made learning how to drive and passing my exam easy! He also went over the behind-the-wheel exam protocol to make sure I didn’t lose points on any critical errors!',
    },
    {
      name: 'Jiuci Xu',
      quote:
        'He is patient, skillful, and always with a warm heart. He never criticizes any of his students for even fatal mistakes, instead, he is able to keep everything under control and make you learn from those mistakes. With more and more practice, I became experienced gradually and finally passed the drive test smoothly.',
    },
  ],

  rating: { value: '5.0', count: '180', source: 'Google' },

  sourceUrl: 'https://worlddrivingschoolca.com',
  internalNotes: [
    'LICENCE — no DMV school licence number published, despite the page title calling them a "Licensed Driving School". Omitted. First thing to ask for.',
    'DO NOT REPRODUCE — "#1 Rated in Santa Barbara & Goleta" sits in their hero. Also left out: the stat block reading "1.5k+ Happy Drivers" and "100% Passed", and "Join thousands of happy students who passed their driving test with us". The 100% figure is the dangerous one.',
    'RATING — their own site says "5.0 based on 163+ Google Reviews". The campaign workbook has 5.0 from 180. The workbook figure is used here as the fresher of the two; both are Google and both are attributed as such.',
    'INSTRUCTOR — Henry is named in every review on the site and the business email is henrydrivetech@gmail.com. No instructor entry is invented (there is no staff page and no photograph of him), but the reviews are reproduced with his name in them because that is what they say. A named instructor page is an obvious win for them.',
    'PHOTO PERMISSION — the hero shows an identifiable student holding their DMV result, watermarked by the school. Fine for a noindex preview of their own published image; written permission needed before a production rebuild (memory/005).',
    'NO ADDRESS — no street address published, only the service area. Santa Barbara is from their own "SB Based" line and the workbook.',
    'STRENGTH — they publish a full price list on the home page with "No hidden fees" above it. Almost nobody else in this campaign does, and it is the single biggest complaint the outreach is built around. Their preview leads with the price table for that reason.',
    'STRENGTH — OL 238 is named by its form number, and the drive-test vehicle package includes registration, insurance and instructor accompaniment. That level of specificity is what a nervous parent is looking for.',
    'Their site is the most competently built of the twenty in this batch. The pitch here is not "your website is broken" — it is reach, structure and the things the site does not yet say.',
  ],
};
