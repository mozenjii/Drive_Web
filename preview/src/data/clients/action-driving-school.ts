import type { Client } from '@/lib/types';

/**
 * Action Driving School — Sacramento, CA.
 *
 * Scraped from actiondrivingclass.com on 2026-08-13
 * (research/action-driving-school). Five pages, one instructor, and by far the
 * most claim-heavy site in either batch of twenty.
 *
 * Editorial hero, because the business genuinely is one named person: Jimmy Wong
 * has owned, operated and taught it since the 1990s. There is no photograph of
 * him on the site, so the composition runs on his words instead — the ones that
 * can be published.
 *
 * MOST OF THAT SITE COULD NOT COME ACROSS. It claims a patent, a 99.99% pass
 * rate, 250,000 students, and being "ranked and sanctioned by the Department of
 * Motor Vehicles as one of the undisputed Best Driving Instructor in the world" —
 * a government endorsement that does not exist. It also describes its own
 * prospective customers as "illiterates, foolish and ... very unfortunate
 * people". None of it is reproduced. See internalNotes; the copy is the
 * conversation to have with this client before anything else.
 *
 * What is left is a real business with real strengths: one-to-one lessons, dual
 * controls, free pick-up anywhere, thirty years of Sacramento roads, Chinese
 * dialects almost nobody else in the trade offers, and a stated pride in teaching
 * special education students.
 */
export const actionDriving: Client = {
  slug: 'action-driving-school',
  name: 'Action Driving School',
  short: 'Action',
  variant: 'atelier',
  heroStyle: 'editorial',

  photos: {
    hero: {
      src: '/clients/action-driving-school/human-hero.jpg',
      alt: 'An adult driver smiling during a relaxed lesson',
      disclosure: 'Illustrative photography',
    },
  },

  sections: [
    {
      id: 'programs',
      kicker: 'Driver training',
      title: 'Always private, one to one.',
      lede:
        'Six hours for a minor as California requires, or any arrangement an adult needs — two hours a day, spread over up to twelve months if that suits.',
    },
    {
      id: 'road-test',
      kicker: 'The driving test',
      title: 'He takes you to the test himself.',
      lede: 'Four manoeuvres decide most California drive tests. Press one and watch the route.',
    },
    {
      id: 'vehicles',
      kicker: 'The car',
      title: 'Dual-control brakes on every lesson.',
      lede:
        'A student-driver vehicle with a dual braking system, and free pick-up and drop-off at your home or wherever you need to start.',
    },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'Sacramento, and eighteen counties beyond it.',
    },
    {
      id: 'cta',
      title: 'Call and start training.',
      lede: 'Call (916) 489-1668 — he answers his own phone, day or night.',
    },
  ],

  story: {
    pullQuote: 'Very special care and pride teaching for special education students.',
    paragraphs: [
      'Action Driving School is Jimmy Wong. He started it in Sacramento in the 1990s and he is still the owner, the operator and the instructor — every lesson is taught by the person whose name is on the door.',
      'Lessons are always private and one to one, in a car with a dual braking system, and pick-up and drop-off are free wherever you are starting from. Minors take the six hours California requires; adults take whatever suits, at two hours a day, spaced out over six to twelve months if that works better than doing it all at once.',
      'He teaches in English, Mandarin, Cantonese and Taishanese, and Action has Chinese-speaking instructors for students with little or no English — which in Sacramento is not a small thing. He also states a particular pride in teaching special education students.',
    ],
  },

  tagline: 'Private one-to-one driving lessons in Sacramento since the 1990s.',
  headline: 'One instructor, one student, thirty years of Sacramento roads.',
  heroLede:
    'Private one-to-one driver training for teens, adults and seniors across Sacramento and eighteen surrounding counties — in English, Mandarin, Cantonese or Taishanese, with free pick-up and drop-off.',

  city: 'Sacramento',
  county: 'Sacramento County',
  address: '1914 27th Street, Sacramento, CA 95816',

  phones: [{ display: '(916) 489-1668', raw: '+19164891668' }],
  email: 'actiondriving888@gmail.com',
  languages: ['English', 'Mandarin', 'Cantonese', 'Taishanese'],

  schedulingNote:
    'Two hours of training a day. Sessions can be taken back to back or spread over six to twelve months, whichever suits the student. Pick-up and drop-off at your home or another agreed location is free.',

  areas: [
    'Sacramento',
    'Placer',
    'Yolo',
    'El Dorado',
    'San Joaquin',
    'Solano',
    'Contra Costa',
    'Alameda',
    'Santa Clara',
    'Sutter',
    'Yuba',
    'Napa',
  ],
  areasNote:
    'Sacramento is the base. Their About page also lists Placer, Yolo, El Dorado, Amador, San Joaquin, Calaveras, Stanislaus, San Mateo, Santa Clara, Alameda, Contra Costa, Solano, Marin, Napa, Sonoma, Sutter and Yuba — eighteen counties in total. Worth confirming which of those are genuinely served before this goes out.',

  programs: [
    {
      slug: 'teen-training',
      title: 'Teen Driver Training',
      navLabel: 'Teen Training',
      summary:
        'The six hours California requires of a minor, taught privately at two hours a day, at whatever pace suits the student.',
      body: [
        'California law requires a minor to complete six hours of behind-the-wheel training. Action teaches it as two-hour sessions, one a day, and the sessions can be completed straight through or spread out over six to twelve months.',
        'Every lesson is private and one to one — there is no second student in the back seat — in a student-driver vehicle with a dual braking system.',
        'Pick-up and drop-off at the student’s home or another agreed location is free.',
      ],
      bullets: [
        'Six hours as California requires',
        'Always private, one to one',
        'Two hours per session',
        'Spread over up to twelve months if needed',
        'Free pick-up and drop-off',
        'Dual-control braking system',
      ],
    },
    {
      slug: 'adult-and-senior-training',
      title: 'Adult and Senior Training',
      navLabel: 'Adults & Seniors',
      summary:
        'Any number of hours, chosen by the driver rather than set by the DMV — for adults, seniors and drivers who need more time than a syllabus allows.',
      body: [
        'There is no legal minimum for an adult, so adults choose the arrangement that suits them: a single session, or a course spread across months.',
        'Lessons are taught in English, Mandarin, Cantonese or Taishanese, and Action has Chinese-speaking instructors for students with little or no English.',
        'Their site states a particular pride in teaching special education students, and that is worth asking about directly — it is the kind of teaching most schools quietly decline.',
      ],
      bullets: [
        'Adults and seniors, any number of hours',
        'English, Mandarin, Cantonese and Taishanese',
        'Chinese-speaking instructors available',
        'Special education students welcomed',
        'Free pick-up and drop-off',
      ],
    },
    {
      slug: 'drive-test-service',
      title: 'Driving Test Service',
      navLabel: 'Drive Test',
      summary: 'He takes you to the DMV for the test himself, in the car you have been training in.',
      bullets: [
        'Driven to the test appointment',
        'The test taken in the training car',
        'Dual-control vehicle, fully equipped',
      ],
    },
  ],

  vehicles: {
    summary:
      'One student-driver vehicle, fitted with a dual braking system, used for every lesson and for the drive test itself. Free pick-up and drop-off, wherever the lesson needs to start.',
    features: [
      'Dual-control braking system',
      'Private one-to-one lessons',
      'Free pick-up and drop-off',
      'The same car for training and for the test',
    ],
  },

  rating: { value: '4.1', count: '115', source: 'Google' },

  sourceUrl: 'http://www.actiondrivingclass.com',
  internalNotes: [
    'READ THIS FIRST — their own About page describes their prospective customers as "the disabled/handicapped, illiterates, foolish and of course some very unfortunate people who have hard time getting drivers license". That sentence is live on their website today. It is not reproduced anywhere on this preview, and it is the first thing to raise with them: it is doing more damage than any design problem could. Their 4.1 rating is the lowest in this batch of twenty and this is a plausible reason why.',
    'FALSE CLAIM OF GOVERNMENT ENDORSEMENT — "Master Jimmy \'One-Time-Pass\' Wong is ranked and sanctioned by the Department of Motor Vehicles as one of the undisputed \'Best Driving Instructor\' in the world." The DMV licenses driving instructors; it does not rank or sanction them, and it certainly does not do so worldwide. Publishing that is a real exposure, not a stylistic choice. Not reproduced.',
    'DO NOT REPRODUCE — "99.99% chance in passing your driving test"; "250,000+ very very satisfied students"; "PATENTED ONE-TIME-PASS Service" and "Patented Check-Check-Check-Check-Check Method" (a patent claim, with no patent number anywhere); "ABSOLUTE BEST"; "World Champion"; "best drivers in the world"; "no other driving school can even come close". Every one of them left out.',
    'LICENCE — no DMV school licence number published. Their services page title cites California Vehicle Code 310.6, which is the definition of a driving school, not a licence. Omitted. First thing to ask for.',
    'THE FIVE-STEP METHOD — his "check-check-check-check-check" traffic-check method is a real teaching method and is his own. It is describable as his method; what cannot come across is that it is patented or "proven to prevent accidents". Left out entirely here rather than half-stated.',
    'COVERAGE — eighteen counties are listed, from Sacramento out to Marin, San Mateo and Santa Clara. A one-instructor school cannot realistically serve a two-hour radius with free pick-up. Twelve of the plausible ones are listed on this preview and the full list is flagged for confirmation.',
    'PHOTOGRAPHY — none. Four images, all template furniture (`accord.3282844_std.jpg`, `fb1.202170751_std.jpg`). He tells visitors to "go to my facebook and see all my ONE TIME PASS students", which means the photographs exist and are on the wrong platform.',
    'NO PRICES — a "$50 discount when you enrol" is mentioned and no actual price appears anywhere on the site.',
    'STRENGTHS, and there are real ones: thirty years in Sacramento, always one-to-one, free pick-up anywhere, he drives students to the test himself, Taishanese and Cantonese alongside Mandarin, and stated pride in teaching special education students. That is a genuinely differentiated business underneath the copy.',
  ],
};
