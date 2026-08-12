import type { Client } from '@/lib/types';

/**
 * MAS Driving & Traffic School — Rialto, CA.
 *
 * Scraped from masdrivingschool.com on 2026-08-09 (research/mas-driving-school).
 *
 * Their site claims a "95% First-Time Pass Rate". It is not reproduced here.
 * Their "2,500+ 5-star Google reviews" IS reproduced, because it is checkable
 * and it checks out — Google shows 2,833 reviews at 5.0, which is the largest
 * body of public proof of any prospect in this campaign and is being wasted
 * three scrolls down their homepage.
 *
 * They publish no prices at all. None are invented.
 */
export const masDriving: Client = {
  slug: 'mas-driving-school',
  name: 'MAS Driving & Traffic School',
  short: 'MAS Driving',
  variant: 'apex',

  heroStyle: 'stage',

  /**
   * Their own site splits everything into "Courses For Adults" and "Courses For
   * Teens" before anything else, so the audience split leads. Car rental for the
   * drive test is a real differentiator they mention twice and bury once — it
   * gets its own section here.
   *
   * "2,500+ 5-star Google reviews" IS reproduced: Google shows 2,833 at 5.0, so
   * it checks out. "95% First-Time Pass Rate" is not.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Services available for you',
      title: 'Courses for adults. Courses for teens.',
      lede:
        'First time behind the wheel or a refresher after years away — the lessons are built for the driver, not the age bracket.',
    },
    {
      id: 'road-test',
      kicker: 'Test day',
      title: 'You can rent a car for your driving test.',
      lede:
        'Turn up to the DMV without needing to borrow a car — and take the test in the one you learned in. Four manoeuvres decide most California drive tests; press one to see the route.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'Or rent one for the test.',
    },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'Rialto, and the Inland Empire.',
    },
    {
      id: 'cta',
      title: 'Where driving matters.',
      lede: 'Call 909-961-2927. Hablamos Español.',
    },
  ],

  story: {
    pullQuote: 'Where driving matters, MAS.',
    paragraphs: [
      'MAS Driving School is a family-owned and operated business in Rialto, with over 15 years of experience in driver education.',
      'The school is fully licensed and insured by the California Department of Motor Vehicles, and its DMV-licensed instructors have taught both new and experienced drivers across the Inland Empire.',
      'Instruction is available in English and Spanish.',
    ],
  },

  logo: '/clients/mas-driving-school/logo.png',

  /**
   * Sampled from their logo and confirmed by their own cars: red #EA121D on
   * white with a blue secondary. The red is 4.56:1 and ships untouched — rare
   * for a brand red — and the blue is 4.99:1.
   */
  brand: {
    primary: '#EA121D',
    primaryDark: '#D0101A',
    primarySoft: '#F8E5E6',
    accent: '#0975B3',
    accentDark: '#08679D',
    accentSoft: '#E7F2F8',
    wash: '101, 8, 13',
    bg: '#FCF4F5',
    border: '#F0CACC',
    borderSoft: '#F6E1E2',
    // Slate rather than a washed-out red: pink body copy reads as a fault.
    fgDim: '#5E626B',
  },

  photos: {
    hero: {
      src: '/clients/mas-driving-school/hero.jpg',
      alt: 'A MAS student giving a double thumbs-up from the driver’s seat of the school car',
    },
    roadTest: {
      src: '/clients/mas-driving-school/car-rental.jpg',
      alt: 'A MAS student holding his DMV drive-test score sheet beside the rental car he took the test in',
    },
    vehicle: {
      src: '/clients/mas-driving-school/car-rental.jpg',
      alt: 'The MAS Toyota Corolla, marked RENT ME FOR DMV TEST',
    },
    support: {
      src: '/clients/mas-driving-school/wall.jpg',
      alt: 'A MAS student with his certificate, in front of the wall of framed instructor portraits at the Rialto office',
    },
  },

  tagline: 'Hablamos Español. Where driving matters MAS.',
  headline: 'No car for the test? Rent ours.',

  city: 'Rialto',
  county: 'San Bernardino County',
  address: '519 W. Foothill Blvd. Ste C, Rialto, CA 92376',

  phones: [{ display: '(909) 961-2927', raw: '+19099612927' }],
  email: 'masdrivingschool@gmail.com',

  hours: [
    { days: 'Monday – Friday', hours: '9:00 AM – 5:00 PM' },
    { days: 'Saturday', hours: '10:00 AM – 3:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  schedulingNote:
    'The office keeps weekday and Saturday hours, but lessons themselves are scheduled seven days a week.',

  areas: ['Rialto', 'San Bernardino', 'Fontana', 'Colton', 'Bloomington'],
  areasNote: 'Rialto and the surrounding Inland Empire.',
  languages: ['English', 'Spanish'],

  programs: [
    {
      slug: 'teens',
      image: '/clients/mas-driving-school/wall.jpg',
      title: 'Courses for Teens',
      navLabel: 'Teens',
      summary:
        'Patient, professional instruction that gets a teenager through the DMV test and keeps them safe long after it.',
      body: [
        'Teen lessons are built around the DMV test but not limited to it. The aim is a driver who is still safe in five years, not one who scraped through on a Tuesday morning.',
        'Our instructors are bilingual, certified, and — the part that matters most to a nervous fifteen-year-old — calm and friendly.',
      ],
      bullets: [
        'DMV-licensed, certified instructors',
        'Bilingual instruction, English and Spanish',
        'Built around the DMV drive test',
        'Patient with genuinely nervous first-timers',
      ],
    },
    {
      slug: 'adults',
      image: '/clients/mas-driving-school/adults.jpg',
      title: 'Courses for Adults',
      navLabel: 'Adults',
      summary:
        'For adults learning from scratch and for adults who have not driven in years. Same instructors, no classroom.',
      body: [
        'Adult lessons are personalised — some people need the whole thing from the beginning, others need one afternoon to get their confidence back before a test. Both are normal here.',
      ],
      bullets: [
        'First-time adult learners',
        'Refresher and brush-up lessons',
        'Real-world conditions, not a car park',
        'Step by step until you are ready to drive alone',
      ],
    },
    {
      slug: 'dmv-car-rental',
      image: '/clients/mas-driving-school/car-rental.jpg',
      title: 'Car Rental for the DMV Test',
      navLabel: 'Car Rental',
      summary:
        'No car? That is not a reason to postpone the test. Ours are DMV-approved and dual-controlled, ready on the day.',
      body: [
        'A surprising number of people are ready to pass and simply have no car to take the test in — or have one the DMV will not accept. We rent ours, fitted with dual controls and prepared for the exam.',
      ],
      bullets: [
        'DMV-approved vehicles',
        'Dual controls fitted',
        'Available for the behind-the-wheel exam',
        'Brush-up lesson available before the test',
      ],
    },
    {
      title: 'Traffic School',
      summary:
        'A California-licensed traffic violator school, run from the same Rialto office.',
      bullets: ['Licensed by the California DMV', 'Sample knowledge tests available', 'Online sign-in for students'],
    },
  ],

  vehicles: {
    summary:
      'White Toyota Corollas, signwritten in red, fitted with dual controls — and available to rent for the DMV test if you do not have a car of your own.',
    features: [
      'Dual controls fitted',
      'DMV-approved for the behind-the-wheel exam',
      'Available to rent for test day',
      'Fully licensed and insured by the California DMV',
    ],
  },

  rating: { value: '5.0', count: '2,833', source: 'Google' },

  sourceUrl: 'https://masdrivingschool.com',
  internalNotes: [
    'DMV licence number is NOT published anywhere on their site. They state only "licensed by the California DMV". Ask for the number — it belongs in the header.',
    'DO NOT reproduce the "95% First-Time Pass Rate" claim.',
    'The 2,833 Google reviews at 5.0 are real and are their single biggest asset. Their own site buries the count and links out to Google rather than showing any review text.',
    'DEFECT — no prices anywhere, on a site with 2,833 reviews. Every one of those people had to phone to find out what a lesson costs.',
    'DEFECT — the contact page renders no content at all beyond the site chrome. There is no address block, no form and no map on the page a customer clicks when they want to visit.',
    'DEFECT — the workbook flagged a broken review widget; the gallery page is also empty apart from a heading.',
    'They charge $40 for any certificate replacement, "NO EXCEPTIONS", in capitals on the homepage. That is the second thing a visitor reads. Moved off the preview.',
    'Service areas beyond Rialto are the neighbouring Inland Empire cities. Confirm with the owner.',
    'Photography here is theirs and shows identifiable students. Written permission before production.',
    'Their office has a wall of ten framed instructor portraits. None are on their website. That is a whole team page they already own and have never used.',
  ],
};
