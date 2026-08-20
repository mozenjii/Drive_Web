import type { Client } from '@/lib/types';

/**
 * Budget Driving School LLC — Chula Vista, CA.
 *
 * Scraped from budgetdrivingschoolonline.com on 2026-08-13
 * (research/budget-driving-school-chula-vista). Eighteen pages, and they print
 * their DMV licence number in the navigation of every one of them.
 *
 * Panel hero. They publish no photograph of the business — their images are a
 * scan of their own classroom flyer, a map, and stock for the online courses — so
 * a photo-led composition would have to borrow, and it does not. Brand sampled
 * from their logo: their cyan darkened to 4.54:1.
 *
 * The most complete offer in this batch: classroom driver ed, online driver ed in
 * 30+ languages, behind-the-wheel, a mature driver course, DMV test prep and
 * traffic school. Every one of them priced.
 */
export const budgetDriving: Client = {
  slug: 'budget-driving-school-chula-vista',
  name: 'Budget Driving School',
  short: 'Budget',
  variant: 'safe-route',
  heroStyle: 'panel',

  logo: '/clients/budget-driving-school-chula-vista/logo.jpg',

  brand: {
    primary: '#1380A3',
    primaryDark: '#106C8A',
    primarySoft: '#E5F3F8',
    accent: '#6F6D4B',
    accentDark: '#5D5B3F',
    accentSoft: '#F3F2ED',
    wash: '8, 53, 67',
    bg: '#F4FAFC',
    border: '#C6E4EE',
    borderSoft: '#DDEFF5',
    fgDim: '#5F7480',
  },

  sections: [
    {
      id: 'programs',
      kicker: 'Our courses',
      title: 'Both halves of what California requires, and the rest besides.',
      lede:
        'Driver education in the classroom or online, six hours behind the wheel, a mature driver course, DMV test prep and traffic school.',
    },
    {
      id: 'packages',
      kicker: 'Prices',
      title: 'Every course, priced — and $15 off if you do both with us.',
      lede:
        'Pay for the six hours in full or lesson by lesson as you schedule them. Their published rates, in full.',
    },
    {
      id: 'road-test',
      kicker: 'Before the DMV exam',
      title: 'Book your third lesson before you book the test.',
      lede:
        'Their own advice, and it is good: the third lesson is the one that decides whether you are ready. Press one manoeuvre and watch the route.',
    },
    {
      id: 'vehicles',
      kicker: 'Instructors and cars',
      title: 'Male and female instructors, automatic cars.',
      lede:
        'Every instructor licensed by the DMV, and students are covered by the instructor’s insurance while they are driving.',
    },
    {
      id: 'areas',
      kicker: 'Where we are',
      title: 'Off E Street, by the trolley station.',
    },
    {
      id: 'cta',
      title: 'Call or come by the office.',
      lede: 'Call (619) 476-9999 — evenings and weekends available.',
    },
  ],

  story: {
    pullQuote:
      'Communities improve safety on their streets when good drivers travel their roads.',
    paragraphs: [
      'Budget Driving School LLC is a California DMV-licensed school in Chula Vista, licence E2166, running from an office on Woodlawn Avenue off E Street near the trolley station.',
      'They teach both halves of what the state requires of anyone under 18: driver education, as a four-day classroom course or online, and driver training — the six hours behind the wheel. Their stated goal is students who can manage the risk of driving rather than students who can pass a test.',
      'Their online driver education is available in more than thirty languages, and their behind-the-wheel instructors are bilingual in Spanish. Both matter in Chula Vista, and neither is mentioned anywhere near the top of their own site.',
    ],
  },

  tagline: 'The best possible training at the most affordable rate.',
  headline: 'Driver education and six hours behind the wheel, in Chula Vista.',
  heroLede:
    'Classroom or online driver education, six hours of behind-the-wheel training, and a mature driver course — with male and female instructors, automatic cars, and DMV licence E2166.',

  city: 'Chula Vista',
  county: 'San Diego County',
  address: '240 Woodlawn Ave. #8, Chula Vista, CA 91910',

  licence: 'E2166', // "CA DMV Lic # E2166" in the navigation of every page

  phones: [{ display: '(619) 476-9999', raw: '+16194769999' }],
  email: 'budgetdriving@gmail.com',
  languages: ['English', 'Spanish'],

  hours: [{ days: 'Classroom driver education', hours: '8:00 AM – 1:30 PM, four days' }],
  schedulingNote:
    'Instructors work evenings and weekends as well as during the day, so a time can usually be arranged. Pick-up is within fifteen minutes of the scheduled time, traffic depending. Book your third driving lesson before you book the DMV exam — their advice, and it protects you from a test date you cannot get an instructor for.',

  areas: ['Chula Vista', 'National City', 'Imperial Beach', 'Bonita', 'San Diego', 'Eastlake', 'Otay Ranch'],
  areasNote:
    'Their office is at 240 Woodlawn Ave, off E Street near the trolley station. Pick-up is offered but the radius is not published — their own page says to call or email to check whether they collect in your area, so confirm before this goes out.',

  programs: [
    {
      slug: 'driver-education-classroom',
      title: 'Driver Education — Classroom',
      navLabel: 'Classroom Ed',
      summary:
        'The four-day classroom course, 8:00 AM to 1:30 PM, that certifies a teen for their permit.',
      body: [
        'Four days in a classroom, 8:00 AM to 1:30 PM, and the student leaves certified for the permit. Their own flyer promises it is "not boring" and "very dynamic", which is a fair thing to have to promise about driver education.',
        'Miss a day and it can be made up — their secretaries schedule the catch-up rather than sending you back to the start.',
        'California requires driver education as well as driver training for anyone under 18, so this is half of a legal requirement rather than an optional extra.',
      ],
      bullets: [
        'Four days, 8:00 AM – 1:30 PM',
        'Certified for the permit at the end',
        'Missed days can be made up',
        'Required by the state for under-18s',
      ],
      price: 100,
    },
    {
      slug: 'driver-education-online',
      title: 'Driver Education — Online',
      navLabel: 'Online Ed',
      summary:
        'The same requirement, taken at your own pace, in more than thirty languages. The certificate is posted immediately.',
      body: [
        'For students who cannot make four consecutive mornings, the same driver education requirement is met online at their own pace, and the certificate is mailed as soon as it is finished.',
        'It is available in more than thirty languages. For a household where the parent reads Tagalog or Arabic more comfortably than English, that is the difference between supervising the course and hoping it is going well.',
      ],
      bullets: [
        'Available in 30+ languages',
        'Work at your own pace',
        'Certificate mailed immediately on completion',
        'Same DMV requirement as the classroom course',
      ],
      price: 35,
    },
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Six hours across three days, on a curriculum with objectives for each session — and $15 off if you take their driver ed too.',
      body: [
        'Six hours, done in three days, following a three-day curriculum with specific objectives for each session rather than three hours of driving around.',
        'Male and female instructors, automatic cars, and the fee can be paid in full or lesson by lesson as you schedule each one. The certificate is included.',
        'Take their driver education course — classroom or online — and the six hours drop by $15. Adults pay the same rate and have no six-hour minimum to meet.',
      ],
      bullets: [
        'Six hours across three days',
        'Three-day curriculum with objectives per session',
        'Male and female instructors',
        'Automatic cars',
        'Certificate included',
        'Pay in full or per lesson',
      ],
      price: 450,
      priceNote:
        '$450 for six hours, or $150 a lesson as you schedule them. $435 if you also take their driver education course.',
      logistics: [
        'A learner’s permit must be carried at every lesson',
        'Credit card, debit card and cash accepted',
        '$50 fee for cancellation without 48 hours’ notice, or a no-show',
        'Students are covered by the instructor’s insurance while driving',
      ],
    },
    {
      slug: 'mature-driver-course',
      title: 'Mature Driver Course',
      navLabel: 'Mature Driver',
      summary:
        'The California mature driver course, taken online — the one many insurers discount a premium for.',
      bullets: [
        'California mature driver course',
        'Taken online at your own pace',
        'Often qualifies for an insurance discount — check with your insurer',
      ],
      price: 35,
    },
    {
      slug: 'dmv-test-prep',
      title: 'DMV Test Prep and Traffic School',
      navLabel: 'Test Prep',
      summary:
        'Practice for the written permit test, and a DMV-approved California traffic school course for a citation.',
      bullets: [
        'DMV written test preparation — $19.95',
        'California online traffic school — $40.00',
        'Both taken online',
      ],
      price: 19.95,
      priceNote: 'DMV test prep $19.95. Online traffic school is $40.00.',
    },
  ],

  packageGroups: [
    {
      title: 'Courses and lessons',
      blurb: 'Their whole published price list. Taking driver ed with them takes $15 off the six hours.',
      features: [
        'Behind-the-wheel instruction',
        'Certificate included',
        'Male and female instructors',
        'Automatic cars',
        'Pay per lesson as you schedule',
        'Driver education discount applied',
      ],
      featureNotes: {
        'Driver education discount applied':
          'Take their classroom or online driver education course and the six-hour behind-the-wheel price drops from $450 to $435.',
        'Pay per lesson as you schedule':
          'You do not have to pay for six hours up front — each two-hour lesson can be paid for as you book it, at $150.',
      },
      lessonHours: 2,
      packages: [
        {
          name: 'Driver Education — Online',
          detail: 'At your own pace, 30+ languages',
          price: 35,
          includes: ['Certificate included'],
        },
        {
          name: 'Driver Education — Classroom',
          detail: 'Four days, 8:00 AM – 1:30 PM',
          price: 100,
          includes: ['Certificate included'],
        },
        {
          name: 'One 2-Hour Lesson',
          detail: 'Behind the wheel',
          hours: 2,
          price: 150,
          includes: [
            'Behind-the-wheel instruction',
            'Male and female instructors',
            'Automatic cars',
            'Pay per lesson as you schedule',
          ],
        },
        {
          name: '6 Hours Behind the Wheel',
          detail: 'Three days — the state requirement',
          hours: 6,
          price: 450,
          includes: [
            'Behind-the-wheel instruction',
            'Certificate included',
            'Male and female instructors',
            'Automatic cars',
            'Pay per lesson as you schedule',
          ],
          featured: true,
        },
        {
          name: '6 Hours + Driver Education',
          detail: 'With their driver ed course',
          hours: 6,
          price: 435,
          saving: '$15 off',
          includes: [
            'Behind-the-wheel instruction',
            'Certificate included',
            'Male and female instructors',
            'Automatic cars',
            'Driver education discount applied',
          ],
        },
      ],
    },
  ],

  individualLessons: [
    { name: 'DMV test prep', description: 'Practice for the written permit test, online.', price: 19.95 },
    { name: 'Mature driver course', description: 'The California mature driver course, online.', price: 35 },
    { name: 'California online traffic school', description: 'DMV-approved, for a citation.', price: 40 },
    {
      name: 'Late cancellation or no-show',
      description:
        'Charged when an appointment is cancelled without 48 hours’ notice, or if a student arrives without their permit.',
      price: 50,
    },
    {
      name: 'Refund processing fee',
      description: 'Applied to all refund requests, including unused services.',
      price: 30,
    },
  ],

  vehicles: {
    summary:
      'Automatic cars, male and female instructors, and every instructor licensed by the Department of Motor Vehicles. While a student is driving with an instructor they are covered by the instructor’s insurance — which is the question every parent asks and almost no school answers on its own site.',
    features: [
      'Automatic transmission',
      'Male and female instructors',
      'All instructors DMV-licensed',
      'Students covered by the instructor’s insurance while driving',
    ],
  },

  rating: { value: '4.2', count: '69', source: 'Google' },

  sourceUrl: 'https://www.budgetdrivingschoolonline.com',
  internalNotes: [
    'LICENCE RECOVERED — "CA DMV Lic # E2166" appears in the navigation of every page. The campaign workbook had no number for them. Published here.',
    'STRENGTH — "male & female instructors" stated plainly. For some families that is the deciding factor and nobody else in either batch of twenty says it.',
    'STRENGTH — their FAQ answers the insurance question directly: a student driving with an instructor is covered by the instructor’s insurance. Every parent wants to know and almost nobody publishes it.',
    'STRENGTH — online driver education in 30+ languages, and bilingual Spanish behind-the-wheel instructors. In Chula Vista that is the market, and it is buried in an FAQ answer.',
    'STRENGTH — the $15 discount for taking both courses with them is a genuine bundle and it is mentioned once, in a paragraph, on the behind-the-wheel page.',
    'STALE CONTENT, NOT REPRODUCED — their classroom flyer (research/.../driver_classroom.jpg) lists six summer 2026 sessions running 8 June to 16 July. Those dates have passed. The format is used here ($100, four days, 8:00 AM – 1:30 PM) and the specific dates are deliberately left off, because publishing an expired schedule on a page we send them is worse than publishing none.',
    'DEFECT — the About page says they offer "Driver Training (Behind-The-Wheel) instruction for tickets". Behind-the-wheel training is not for tickets; traffic school is. Two products have been run into one sentence.',
    'DEFECT — their terms are scattered across three pages: the $50 cancellation fee is on the behind-the-wheel page AND the FAQ, the $30 refund processing fee only in the FAQ, and the permit requirement in both. Collected in one place here.',
    'DEFECT — pick-up is offered but no radius is published anywhere; the page says to call and ask. That is a phone call standing between them and a booking.',
    'PHOTOGRAPHY — none of the business. Their images are a scan of their own flyer, a location map, and stock for the online course products. Their own cars, classroom and instructors are the ask.',
  ],
};
