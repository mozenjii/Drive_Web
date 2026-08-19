import type { Client } from '@/lib/types';

/**
 * A California Driving School (ACA Driving School) — Fremont, CA.
 *
 * Scraped from acaliforniadrivingschool.com on 2026-08-13
 * (research/a-california-driving-school). Twenty-two pages, thirteen of them a
 * location page with its own price list.
 *
 * Panel hero. Every image on their site is theme furniture — the file names give
 * it away: `autosalon-5.jpg` from a car-dealership template, `SS_579467138.png`
 * from a stock library. None of it is used. Brand sampled from their own logo
 * instead: the red of the wordmark at 4.56:1 and the teal of the car outline at
 * 4.52:1.
 *
 * The thing this preview does that their own site cannot is put their prices side
 * by side. They run a regional price ladder across thirteen towns and it is only
 * visible if you open thirteen pages.
 */
export const aCaliforniaDriving: Client = {
  slug: 'a-california-driving-school',
  name: 'A California Driving School',
  short: 'ACA Driving',
  variant: 'apex',
  heroStyle: 'panel',

  logo: '/clients/a-california-driving-school/logo.png',

  brand: {
    primary: '#ED0000',
    primaryDark: '#CC0000',
    primarySoft: '#F8E5E5',
    accent: '#348185',
    accentDark: '#2C6E70',
    accentSoft: '#E9F6F6',
    wash: '105, 0, 0',
    bg: '#FCF4F4',
    border: '#EEC6C6',
    borderSoft: '#F5DDDD',
    fgDim: '#934C54',
  },

  sections: [
    {
      id: 'programs',
      kicker: 'Student driver training',
      title: 'Ninety minutes, or twenty hours, or until you pass.',
      lede:
        'Behind-the-wheel training for minors, adults and seniors, from a single lesson to a package that runs until the licence is issued.',
    },
    {
      id: 'packages',
      kicker: 'Every package, every town',
      title: 'The price depends on where you are picked up.',
      lede:
        'Thirteen location pages, two price ladders. Both are here — the East Bay list and the Central Valley list.',
    },
    {
      id: 'road-test',
      kicker: 'Lesson and DMV test',
      title: 'A short practice lesson, then the test itself.',
      lede: 'Four manoeuvres decide most California drive tests. Press one and watch the route.',
    },
    {
      id: 'vehicles',
      kicker: 'How lessons run',
      title: 'Two hours at a time, one class a day.',
      lede:
        'Free pick-up and drop-off within ten miles of the Fremont office, and instructors who teach one class per day per student so nothing is crammed.',
    },
    {
      id: 'areas',
      kicker: 'Service locations',
      title: 'From Fremont and San Leandro out to Stockton and Ripon.',
    },
    {
      id: 'cta',
      title: 'Choose your area, then your package.',
      lede: 'Call (510) 481-6666, or (209) 833-0000 for the Central Valley.',
    },
  ],

  story: {
    pullQuote: 'Learn to drive.',
    paragraphs: [
      'A California Driving School has been teaching since 2004, from an office on Fremont Boulevard, and now covers thirteen towns across the East Bay and the northern Central Valley.',
      'They train minors, adults and seniors, and they issue the certificate a minor needs for the six hours of behind-the-wheel training. Their six-hour course is written for ages fifteen and a half to seventeen and a half — the window in which a California teen actually needs it.',
      'Lessons are taught two hours at a time, one class a day, so a student sleeps between sessions rather than sitting through six hours in one afternoon. Longer packages add intense freeway work: entering, exiting, merging, passing, being passed and lane changes.',
    ],
  },

  tagline: 'Behind-the-wheel training across the East Bay and the Central Valley since 2004.',
  headline: 'Learn to drive, in the town you actually live in.',
  heroLede:
    'Behind-the-wheel training for minors, adults and seniors in thirteen towns from Fremont to Stockton. Free pick-up and drop-off, certificates issued for minors, and packages from ninety minutes upwards.',

  city: 'Fremont',
  county: 'Alameda County',
  address: '37447 Fremont Blvd Suite 13, Fremont, CA 94538',

  founded: '2004',

  phones: [
    { label: 'Business', display: '(510) 481-6666', raw: '+15104816666' },
    { label: 'Central Valley', display: '(209) 833-0000', raw: '+12098330000' },
    { label: 'Mobile', display: '(510) 432-1426', raw: '+15104321426' },
  ],
  email: 'acadrivingschool@gmail.com',

  schedulingNote:
    'Availability can be checked online, and lessons are booked per location. Deposits are non-refundable and a cancellation inside 24 hours carries a $79 fee — worth knowing before you book rather than after. Venmo and Zelle are accepted alongside card.',

  areas: [
    'Fremont',
    'Union City',
    'Hayward',
    'San Lorenzo',
    'San Leandro',
    'Castro Valley',
    'Mountain House',
    'Tracy',
    'Manteca',
    'Lathrop',
    'Salida',
    'Ripon',
    'Stockton',
  ],
  areasNote:
    'Free pick-up and drop-off within ten miles of the Fremont office (94536). Their Central Valley towns — Tracy, Manteca, Lathrop, Salida, Ripon and Stockton — are served on a separate line, (209) 833-0000, and priced slightly higher.',

  programs: [
    {
      slug: 'behind-the-wheel',
      title: 'Six-Hour Behind-the-Wheel Course',
      navLabel: 'Behind the Wheel',
      summary:
        'The six hours a minor needs, taught as three two-hour lessons, with the certificate issued at the end.',
      body: [
        'An in-depth programme of six hours of behind-the-wheel education, divided into three lessons of two hours each. Students cover basic driving skills, proper technique, roadside traffic signs and safe driving, and finish prepared for the DMV test.',
        'The course is written for ages fifteen and a half to seventeen and a half, which is the window a California teen needs it in. Adults take the same six hours at an adult rate.',
        'The certificate that certifies the six hours is $35, and a replacement is $45 — both published, which is more than most schools manage.',
      ],
      bullets: [
        'Six hours as three two-hour lessons',
        'One class a day',
        'Ages 15½ to 17½ for the teen course',
        'Certificate issued for minors',
        'Free pick-up and drop-off',
      ],
      price: 429,
      priceNote: 'East Bay price. $479 in the Central Valley. Adults $485. Certificate $35 extra.',
    },
    {
      slug: 'freeway-training',
      title: 'Ten and Twenty-Hour Freeway Training',
      navLabel: 'Freeway',
      summary:
        'Intense freeway work — entering, exiting, merging, passing, being passed, lane changes — for drivers who need more than the minimum.',
      body: [
        'Their longer packages exist for the part of driving that frightens people: the freeway. Entering and exiting, merging, passing, being passed, and lane changes, taught deliberately rather than encountered by accident.',
        'Ten and twenty-hour packages are available with or without their online California driver education course bundled in, and each class is two hours, one class a day.',
      ],
      bullets: [
        'Intense freeway training',
        'Advanced defensive-driving tactics',
        'Two-hour classes, one a day',
        'Available with or without the online course',
      ],
      price: 799,
      priceNote: 'Ten hours in the East Bay; $820 with the online course. Twenty hours from $1,599.',
    },
    {
      slug: 'lesson-and-dmv-test',
      title: 'Lesson and DMV Test',
      navLabel: 'DMV Test',
      summary: 'A short practice lesson and then the DMV driving test, in their car.',
      body: [
        'One package covering the warm-up and the test itself: a short practice lesson, then the DMV driving test in the same car.',
        'They note that there may be an additional fee depending on how far the DMV office is — said up front rather than discovered on the day.',
      ],
      bullets: [
        'Short practice lesson before the test',
        'The DMV driving test in their car',
        'Additional fee possible depending on distance to the DMV',
      ],
      price: 249,
      priceNote: 'East Bay price. $259 in the Central Valley.',
    },
    {
      slug: 'online-drivers-ed',
      title: 'California Driver Education',
      navLabel: 'Driver’s Ed',
      summary: 'Their online driver education course, priced at less than a tank of fuel.',
      bullets: ['Online California driver education', 'Can be bundled with a ten or twenty-hour package'],
      price: 24.99,
    },
  ],

  /**
   * Two groups because they run two price ladders, and the only way to see that on
   * their own site is to open thirteen pages and compare. East Bay figures are
   * from their Fremont and Union City pages; Central Valley from Tracy and
   * Stockton.
   */
  packageGroups: [
    {
      title: 'East Bay',
      blurb: 'Fremont, Union City, Hayward, San Lorenzo, San Leandro, Castro Valley.',
      features: [
        'Free pick-up and drop-off',
        'Two-hour classes, one a day',
        'Certificate for minors ($35)',
        'Freeway training',
        'Online driver education bundled',
        'Training until the licence is issued',
      ],
      featureNotes: {
        'Certificate for minors ($35)':
          'The document certifying the six hours of behind-the-wheel training. Charged separately at $35; a replacement is $45.',
        'Training until the licence is issued':
          'Their own description of the top package: behind-the-wheel training continues until the student has their California licence.',
      },
      lessonHours: 2,
      packages: [
        { name: '1.5 Hour Lesson', detail: 'Ninety minutes, behind the wheel', hours: 1.5, lessonHours: 1.5, price: 129, includes: ['Free pick-up and drop-off'] },
        { name: '2 Hour Lesson', detail: 'One standard lesson', hours: 2, price: 169, includes: ['Free pick-up and drop-off'] },
        { name: 'Lesson and DMV Test', detail: 'Practice lesson, then the test', hours: 2, price: 249, includes: ['Free pick-up and drop-off'] },
        {
          name: '6 Hour Course',
          detail: 'Three two-hour lessons — the DMV minimum for a minor',
          hours: 6,
          price: 429,
          includes: ['Free pick-up and drop-off', 'Two-hour classes, one a day', 'Certificate for minors ($35)'],
          featured: true,
        },
        { name: 'Adult 6 Hour Course', detail: 'The same six hours, adult rate', hours: 6, price: 485, includes: ['Free pick-up and drop-off', 'Two-hour classes, one a day'] },
        { name: '10 Hour Lesson', detail: 'With intense freeway training', hours: 10, price: 799, includes: ['Free pick-up and drop-off', 'Two-hour classes, one a day', 'Freeway training'] },
        { name: '10 Hour + Driver Education', detail: 'Freeway training plus the online course', hours: 10, price: 820, includes: ['Free pick-up and drop-off', 'Two-hour classes, one a day', 'Freeway training', 'Online driver education bundled'] },
        { name: '20 Hour Lesson', detail: 'The full programme', hours: 20, price: 1599, includes: ['Free pick-up and drop-off', 'Two-hour classes, one a day', 'Freeway training'] },
        { name: '20 Hour + Driver Education', detail: 'The full programme plus the online course', hours: 20, price: 1620, includes: ['Free pick-up and drop-off', 'Two-hour classes, one a day', 'Freeway training', 'Online driver education bundled'] },
        {
          name: 'Unlimited Training Package',
          detail: 'Their "Guaranteed Package" — training until the licence is issued',
          price: 1899,
          includes: ['Free pick-up and drop-off', 'Two-hour classes, one a day', 'Freeway training', 'Training until the licence is issued'],
        },
      ],
    },
    {
      title: 'Central Valley',
      blurb: 'Tracy, Manteca, Lathrop, Salida, Ripon, Stockton, Mountain House.',
      features: [
        'Free pick-up and drop-off',
        'Two-hour classes, one a day',
        'Certificate for minors ($35)',
        'Freeway training',
        'Online driver education bundled',
      ],
      lessonHours: 2,
      packages: [
        { name: '1.5 Hour Lesson', detail: 'Ninety minutes, behind the wheel', hours: 1.5, lessonHours: 1.5, price: 139, includes: ['Free pick-up and drop-off'] },
        { name: '2 Hour Lesson', detail: 'One standard lesson', hours: 2, price: 179, includes: ['Free pick-up and drop-off'] },
        { name: 'Lesson and DMV Test', detail: 'Practice lesson, then the test', hours: 2, price: 259, includes: ['Free pick-up and drop-off'] },
        {
          name: '6 Hour Course',
          detail: 'Three two-hour lessons — the DMV minimum for a minor',
          hours: 6,
          price: 479,
          includes: ['Free pick-up and drop-off', 'Two-hour classes, one a day', 'Certificate for minors ($35)'],
          featured: true,
        },
        { name: '10 Hour Lesson', detail: 'With intense freeway training', hours: 10, price: 849, includes: ['Free pick-up and drop-off', 'Two-hour classes, one a day', 'Freeway training'] },
        { name: '10 Hour + Driver Education', detail: 'Freeway training plus the online course', hours: 10, price: 869, includes: ['Free pick-up and drop-off', 'Two-hour classes, one a day', 'Freeway training', 'Online driver education bundled'] },
        { name: '20 Hour Lesson', detail: 'The full programme', hours: 20, price: 1599, includes: ['Free pick-up and drop-off', 'Two-hour classes, one a day', 'Freeway training'] },
      ],
    },
  ],

  individualLessons: [
    { name: 'California Driver Education (online)', description: 'Their online course, available on its own or bundled with a longer package.', price: 24.99 },
    { name: 'Certificate for minors', description: 'Certifies the six hours of behind-the-wheel training for a student under 18.', price: 35 },
    { name: 'Replacement certificate', description: 'If the original is lost or destroyed.', price: 45 },
    { name: 'Late cancellation (within 24 hours)', description: 'Their published penalty. Deposits and sales are non-refundable.', price: 79 },
  ],

  vehicles: {
    summary:
      'Lessons are taught by qualified instructors two hours at a time, one class a day, with free pick-up and drop-off inside ten miles of the Fremont office. Longer packages take the car onto the freeway deliberately rather than leaving it to chance.',
    features: [
      'Two-hour lessons, one class a day',
      'Free pick-up and drop-off within ten miles of Fremont',
      'Freeway training on longer packages',
      'Certificates issued for minors',
    ],
  },

  rating: { value: '4.9', count: '177', source: 'Google' },

  sourceUrl: 'https://acaliforniadrivingschool.com',
  internalNotes: [
    'LICENCE — no DMV school licence number published anywhere across twenty-two pages. Omitted. First thing to ask for.',
    'DEFECT, AND THE ONE TO OPEN WITH — every page carries the placeholder text "ADD ANYTHING HERE OR JUST REMOVE IT…" in the header. It is on all thirteen location pages, the home page, the about page and the contact page. Their theme shipped with it and nobody has ever removed it.',
    'DEFECT — the twenty-hour package is described as "5 classes, each class is 2 hours", which is ten hours. The text is copy-pasted from the ten-hour package on every location page. A customer paying $1,599 is reading a description of a $799 product.',
    'DEFECT — two packages both titled "Guaranteed Package", at $1,899 and $2,899, with word-for-word identical descriptions. Nothing on the page says what the extra thousand dollars buys.',
    'DO NOT REPRODUCE — the word "Guaranteed" in those package titles, and "We guarantee for this package price after the first driving session". The service (training continues until the licence is issued) is real and is described here as exactly that; the DMV outcome is not something a school can guarantee, and the wording as published invites a dispute. Worth raising with them directly — it is a liability, not just a copy problem.',
    'DEFECT — the footer says "© 2024". Two years stale on a site that is otherwise actively selling.',
    'PRICING — a genuine regional ladder rather than an error: the East Bay pages (Fremont, Union City) run $129/$169/$429, and the Central Valley pages (Tracy, Stockton) run $139-$149/$179/$479. Both ladders are shown here as separate groups. Stockton is $10 above Tracy on the 1.5-hour lesson only, which looks unintentional.',
    'PHOTOGRAPHY — none of it theirs. `autosalon-5.jpg` is a car-dealership theme demo, `SS_579467138.png` is a stock library file, `2_modern-600x400.png` is template furniture. None used. Their own cars and instructors are the ask.',
    'STRENGTH — thirteen location pages with real local pricing is a serious amount of work, and their coverage from Fremont to Stockton is wider than anyone else in this batch. The problem is that the pages are identical apart from the numbers, so none of them ranks and none of them reads as local.',
    'Their cancellation terms are unusually hard: all deposits and sales non-refundable, plus $79 inside 24 hours. Reproduced plainly in the scheduling note rather than buried, because a parent finding that out afterwards is a complaint.',
  ],
};
