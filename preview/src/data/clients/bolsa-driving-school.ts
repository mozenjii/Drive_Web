import type { Client } from '@/lib/types';

/**
 * Bolsa Driving School — Westminster, CA.
 *
 * Scraped from bolsadrivingschool.com on 2026-08-13
 * (research/bolsa-driving-school). Six pages, plainly written, and the only site
 * in this batch that prints its DMV licence number in the footer of every page.
 *
 * Panel hero: their one photograph is 2000s stock of two people in a red coupé,
 * so it stays out. Brand sampled from their own logo — a muted blue at 4.58:1
 * with a warm brown accent.
 *
 * Their price list is the most complete in this batch and includes something
 * nobody else publishes: what the same lesson costs if you pay online instead of
 * in person. It costs more. That is on the page here, because a customer finding
 * a card surcharge at the checkout is a customer who does not come back.
 */
export const bolsaDriving: Client = {
  slug: 'bolsa-driving-school',
  name: 'Bolsa Driving School',
  short: 'Bolsa',
  variant: 'safe-route',
  heroStyle: 'panel',

  logo: '/clients/bolsa-driving-school/logo.jpg',

  brand: {
    primary: '#4C7AA1',
    primaryDark: '#416789',
    primarySoft: '#E9EFF4',
    accent: '#8C6F49',
    accentDark: '#765E3D',
    accentSoft: '#F5F0EB',
    wash: '31, 50, 66',
    bg: '#F5F8FA',
    border: '#CDDBE7',
    borderSoft: '#E2EAF1',
    fgDim: '#627084',
  },

  sections: [
    {
      id: 'programs',
      kicker: 'Driver education and training',
      title: 'The online course, and the six hours in the car.',
      lede:
        'Eleven units online for the DMV requirement, then six hours of behind-the-wheel instruction as three two-hour lessons.',
    },
    {
      id: 'packages',
      kicker: 'Prices',
      title: 'Every lesson, and what it costs in person.',
      lede:
        'Their full price list, including the online-payment prices — which are higher than paying at the school.',
    },
    {
      id: 'road-test',
      kicker: 'DMV drive test',
      title: 'Forty minutes of practice, then the test.',
      lede: 'Four manoeuvres decide most California drive tests. Press one and watch the route.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars and the instructors',
      title: 'Dual pedals, checked often, insured.',
      lede:
        'Cars with brake and gas pedals on both sides, safety-checked frequently, and instructors licensed by the DMV.',
    },
    {
      id: 'areas',
      kicker: 'Pick-up',
      title: 'Free within five miles of the school.',
    },
    {
      id: 'cta',
      title: 'Lessons seven days a week, morning to evening.',
      lede: 'Call (714) 892-8882 — the office is open 8am to 5pm, Monday to Friday.',
    },
  ],

  story: {
    pullQuote:
      'Students will also receive an evaluation from the driving instructor which will indicate the specific driving tasks that may need improvement.',
    paragraphs: [
      'Bolsa Driving School is a California DMV driving school in Westminster, licence E0421, teaching teens and adults from an office on Bolsa Avenue.',
      'Their six-hour driver training programme is divided into three two-hour lessons and ends with two documents rather than one: the DMV certificate of completion, and a written evaluation from the instructor naming the specific tasks the student still needs to work on. Nobody else in this batch hands over the second one.',
      'Lessons run Monday through Sunday, morning, afternoon and evening, with free pick-up and return from home, school or work within five miles of the school.',
    ],
  },

  tagline: 'California DMV driving school — licence E0421.',
  headline: 'Six hours, three lessons, and an honest write-up at the end.',
  heroLede:
    'Driver education online and behind-the-wheel training in Westminster, for teens and adults. Free pick-up within five miles, lessons seven days a week, and a written evaluation from your instructor when you finish.',

  city: 'Westminster',
  county: 'Orange County',
  address: '9039 Bolsa Ave, Westminster, CA 92683',

  licence: 'E0421', // "License #E0421" in the footer of every page

  phones: [{ display: '(714) 892-8882', raw: '+17148928882' }],

  hours: [
    { days: 'Monday – Friday', hours: '8:00 AM – 5:00 PM (office)' },
    { days: 'Monday – Sunday', hours: 'Lessons: morning, afternoon and evening' },
  ],
  schedulingNote:
    'The office keeps weekday hours but lessons run every day of the week, morning through evening. Note their cancellation terms: any cancellation is charged $35.',

  areas: [
    'Westminster',
    'Garden Grove',
    'Huntington Beach',
    'Fountain Valley',
    'Santa Ana',
    'Midway City',
    'Seal Beach',
  ],
  areasNote:
    'Free home, school or work pick-up and return within five miles of the school — their own figure, and they ask you to verify it with them. The cities listed here are the ones inside that radius of 9039 Bolsa Ave; confirm before this goes out.',

  programs: [
    {
      slug: 'driver-education',
      title: 'Online Driver Education',
      navLabel: 'Driver’s Ed',
      summary:
        'Eleven units, a quiz after each, a thirty-question final exam, and the DMV certificate posted to you.',
      body: [
        'A DMV-licensed online course that fulfils the mandatory California driver education requirement, taken any time and anywhere.',
        'The course runs as eleven units with a quiz at the end of each one, followed by a thirty-question final exam. Pass it and the DMV Certificate of Completion is posted to you — valid at every DMV office in the state.',
        'They are careful to say what it is not: this is a driver education course for teenagers, not a traffic school course for a citation.',
      ],
      bullets: [
        'DMV-licensed online course',
        'Eleven units, quiz after each',
        'Thirty-question final exam',
        'DMV certificate posted to you',
        'Valid at every California DMV office',
        'All credit cards and PayPal accepted',
      ],
      price: 35,
    },
    {
      slug: 'driver-training',
      title: 'Six-Hour Driver Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Six hours of professional behind-the-wheel instruction as three two-hour lessons, ending with a certificate and a written evaluation.',
      body: [
        'Six hours of professional instruction, divided into three lessons of two hours each. Students learn the basic skills to operate a car safely and the techniques the DMV drive test asks for.',
        'At the end they receive the certificate of completion the DMV requires — and an evaluation from the instructor indicating the specific driving tasks that may still need improvement. That second document is the useful one, and almost nobody else provides it.',
        'Free home, school or work pick-up and return within the same vicinity. Lessons run every day of the week, morning, afternoon and evening.',
      ],
      bullets: [
        'Six hours as three two-hour lessons',
        'Certificate of completion for the DMV',
        'Written evaluation from your instructor',
        'Free pick-up and return within five miles',
        'Lessons Monday to Sunday',
        'Teens and adults',
      ],
      price: 350,
      priceNote: '$350 paid at the school, $363 paid online. Two hours on its own is $120.',
      logistics: [
        'Instructors licensed by the DMV',
        'Cars with brake and gas pedals on both sides',
        'Vehicles safety-checked frequently and insured',
        'Any cancellation is charged $35',
      ],
    },
    {
      slug: 'dmv-drive-test',
      title: 'DMV Drive Test with Practice',
      navLabel: 'Drive Test',
      summary: 'Forty minutes of practice immediately before the test, then the test itself in their car.',
      bullets: [
        'Forty minutes of practice before the test',
        'The DMV drive test in their car',
        'Dual-pedal, insured vehicle',
      ],
      price: 180,
      priceNote: '$180 at the school, $185 online.',
    },
    {
      slug: 'freeway-lesson',
      title: 'Two Hours with Freeway Time',
      navLabel: 'Freeway',
      summary:
        'A standard two-hour lesson with the last twenty minutes on the freeway — the part most new drivers avoid.',
      bullets: [
        'Two-hour lesson',
        'Last twenty minutes on the freeway',
        'Free pick-up and return',
      ],
      price: 130,
      priceNote: '$130 at the school, $135 online. Their ten-hour package includes freeway time free.',
    },
  ],

  packageGroups: [
    {
      title: 'Lessons and courses',
      blurb: 'Their whole published price list. Paying in person is cheaper than paying online.',
      features: [
        'Behind-the-wheel instruction',
        'Free pick-up and return within five miles',
        'DMV certificate of completion',
        'Written instructor evaluation',
        'Freeway time included',
        'DMV drive test in their car',
      ],
      featureNotes: {
        'Written instructor evaluation':
          'A note from the instructor naming the specific driving tasks that still need work. Included with the six-hour course.',
        'Freeway time included':
          'The ten-hour package includes the last twenty minutes on the freeway at no extra cost; on a two-hour lesson it is a priced option.',
      },
      lessonHours: 2,
      packages: [
        {
          name: '2 Hours',
          detail: 'One lesson',
          hours: 2,
          price: 120,
          includes: ['Behind-the-wheel instruction', 'Free pick-up and return within five miles'],
        },
        {
          name: '2 Hours + Freeway',
          detail: 'Last twenty minutes on the freeway',
          hours: 2,
          price: 130,
          includes: [
            'Behind-the-wheel instruction',
            'Free pick-up and return within five miles',
            'Freeway time included',
          ],
        },
        {
          name: '6 Hours',
          detail: 'Three two-hour lessons — the DMV requirement',
          hours: 6,
          price: 350,
          includes: [
            'Behind-the-wheel instruction',
            'Free pick-up and return within five miles',
            'DMV certificate of completion',
            'Written instructor evaluation',
          ],
          featured: true,
        },
        {
          name: '10 Hours',
          detail: 'With freeway time included free',
          hours: 10,
          price: 580,
          includes: [
            'Behind-the-wheel instruction',
            'Free pick-up and return within five miles',
            'DMV certificate of completion',
            'Written instructor evaluation',
            'Freeway time included',
          ],
        },
        {
          name: 'Drive Test + 40 min practice',
          detail: 'Practice, then the DMV test',
          hours: 1,
          lessonHours: 1,
          price: 180,
          includes: ['Behind-the-wheel instruction', 'DMV drive test in their car'],
        },
      ],
    },
  ],

  individualLessons: [
    {
      name: 'Teenage online course',
      description: 'Eleven units, thirty-question final exam, DMV certificate posted to you.',
      price: 35,
    },
    {
      name: 'DMV practice test course',
      description: 'Practice for the written permit test.',
      price: 19.99,
    },
    {
      name: 'Online payment surcharge',
      description:
        'Their published online prices run $5–$20 above the in-person price: $363 against $350 for six hours, $600 against $580 for ten, $185 against $180 for the drive test.',
    },
    {
      name: 'Cancellation fee',
      description: 'Their terms: any cancellation is charged $35.',
      price: 35,
    },
  ],

  vehicles: {
    summary:
      'Cars fitted with brake and gas pedals for both student and instructor, safety-checked frequently and insured. Their instructors are licensed by the DMV, fluent in English and — their emphasis — on time.',
    features: [
      'Brake and gas pedals on both sides',
      'Vehicles safety-checked frequently',
      'Insurance covered',
      'Instructors licensed by the DMV',
    ],
  },

  rating: { value: '4.5', count: '87', source: 'Google' },

  sourceUrl: 'https://bolsadrivingschool.com',
  internalNotes: [
    'LICENCE RECOVERED — "License #E0421" is printed in the footer of every page. The campaign workbook had no licence number for them. Verified on their own site and published on this preview.',
    'STRENGTH — the written instructor evaluation at the end of the six-hour course is a genuine differentiator: nobody else in either batch of twenty hands the student a document naming what still needs work. It is one line on their driver-training page and it should be a selling point.',
    'DEFECT — paying online costs more than paying at the school: $363 vs $350, $600 vs $580, $185 vs $180, $135 vs $130. If that is a card processing fee it needs saying as one; as published it reads as a penalty for using the website, which discourages the exact behaviour a website exists to encourage.',
    'DEFECT — "ANY CANCELLATION WILL BE CHARGED $35 FOR CANCELLATION FEE", in capitals, with no notice period attached. Every other school in this campaign gives 24 hours. As written, cancelling three weeks out costs $35.',
    'DEFECT — duplicate pages: /driver-education/ and /index.php/driver-education/ serve identical content on different URLs. That splits any ranking they might have earned between two addresses.',
    'THEIR WORDING — instructors are described as "English fluently, young, on time". "Young" is reproduced nowhere here: it is not a qualification, and as a published claim about staff it is a liability. Their punctuality and DMV licensing are kept.',
    'PHOTOGRAPHY — one image, and it is stock: two people in a red coupé, mid-2000s. Not used. Their own cars and instructors are the ask.',
    'RATING — 4.5 from 87 reviews, from the campaign workbook (Google). Their own site shows no reviews at all, which is a waste of a perfectly good score.',
    'The service area listed here is inferred from their five-mile pick-up radius around 9039 Bolsa Ave. They ask customers to verify the radius with them, so confirm the city list before sending.',
  ],
};
