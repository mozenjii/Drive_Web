import type { Client } from '@/lib/types';

/**
 * Teen Driving Academy — Brea, CA.
 *
 * Scraped from teendrivingacademy.com on 2026-08-09
 * (research/teen-driving-academy).
 *
 * Their homepage says "Celebrating 30 years". They were established in 1990,
 * which makes it 36. Neither the 30 nor the "over 50,000 happy clients" appears
 * here — the first is stale and the second is unverifiable. The founding year
 * is used instead and the page counts the years itself, so it cannot go stale.
 */
export const teenDrivingAcademy: Client = {
  slug: 'teen-driving-academy',
  name: 'Teen Driving Academy',
  short: 'Teen Driving',
  variant: 'safe-route',

  heroStyle: 'stage',

  /**
   * They sell bundles — online driver's ed packaged with behind-the-wheel hours
   * — and the bundle price is the offer, so packages come before anything else.
   * "Serving the OC" is their phrase.
   *
   * Not reproduced: "Celebrating 30 years and over 50,000 happy clients". The
   * 30 years was written in 2020 against a 1990 founding, so it is also stale.
   */
  sections: [
    {
      id: 'packages',
      kicker: 'Packages',
      title: 'Online driver’s ed and behind-the-wheel, together.',
      lede:
        'The behind-the-wheel packages include the online driver’s education course. The online course on its own is $85.',
    },
    {
      id: 'programs',
      kicker: 'What we teach',
      title: 'Built for teenagers, and their parents.',
      lede: 'Professional, pre-screened, DMV-licensed instructors.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'What your teen is actually marked on.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'Pre-screened instructors, dual-controlled cars.',
    },
    {
      id: 'areas',
      kicker: 'Serving the OC',
      title: 'Serving the OC since 1990.',
    },
    {
      id: 'cta',
      title: 'You could start in the next two minutes.',
      lede: 'Register online, or call (714) 646-6521.',
    },
  ],

  story: {
    paragraphs: [
      'Teen Driving Academy is a teen driving school and driver training course serving Orange County, founded in 1990.',
      'Behind-the-wheel training packages include the online driver’s education course; the online course is also sold on its own for $85. Instructors are professional, pre-screened and DMV licensed.',
    ],
  },

  /**
   * They publish no logo file. The red and navy below are the two custom colours
   * in their own stylesheet — everything else in that CSS is theme default.
   * The red is 4.63:1 and ships untouched; the navy is 11.48:1.
   */
  brand: {
    primary: '#E02B20',
    primaryDark: '#C8261C',
    primarySoft: '#F8E6E5',
    accent: '#003388',
    accentDark: '#002869',
    accentSoft: '#E7EEF8',
    wash: '97, 18, 14',
    bg: '#FCF5F4',
    border: '#F0CCCA',
    borderSoft: '#F6E3E1',
    fgDim: '#5F5F6B',
  },

  photos: {
    hero: {
      src: '/clients/teen-driving-academy/hero.jpg',
      alt: 'A teenage driver at the wheel with both hands on it, looking ahead',
    },
    roadTest: {
      src: '/clients/teen-driving-academy/student.jpg',
      alt: 'A student in the driver’s seat looking back over her shoulder before pulling out',
    },
    vehicle: {
      src: '/clients/teen-driving-academy/lesson.jpg',
      alt: 'A behind-the-wheel lesson in progress',
    },
    support: {
      src: '/clients/teen-driving-academy/lesson2.jpg',
      alt: 'An instructor talking a student through the next manoeuvre',
    },
  },

  tagline: 'Every package price is on the page. Pick one and start.',
  headline: 'Teaching North Orange County to drive since 1990.',

  city: 'Brea',
  county: 'Orange County',
  address: '2771 East Saturn Street, Unit E, Brea, CA 92821',

  licence: 'E-3064',
  founded: '1990',

  phones: [
    { display: '(714) 577-5708', raw: '+17145775708' },
    { label: 'Orange County', display: '(714) 646-6521', raw: '+17146466521' },
    { label: 'Toll free', display: '(800) 766-7733', raw: '+18007667733' },
  ],
  email: 'info@teendrivingacademy.com',

  hours: [
    { days: 'Monday – Friday', hours: '9:00 AM – 5:00 PM' },
    { days: 'Saturday – Sunday', hours: 'Closed' },
  ],

  areas: [
    'Brea', 'Anaheim', 'Anaheim Hills', 'Buena Park', 'Fullerton', 'La Habra',
    'La Mirada', 'Orange', 'Placentia', 'Villa Park', 'Whittier', 'Yorba Linda',
    'Chino Hills', 'Diamond Bar', 'Rowland Heights', 'Walnut',
  ],
  areasNote:
    'North Orange County, published down to the zip code. The service area now extends into Chino Hills, Diamond Bar, Rowland Heights and Walnut.',

  packageGroups: [
    {
      title: 'Without a permit yet',
      blurb:
        'Every one of these includes the online driver education course free — you start the course today and the behind-the-wheel hours follow once the permit arrives.',
      features: [
        'Online driver education included free',
        'Two-hour behind-the-wheel lessons',
        'DMV drive-test service',
        'Our car for the test',
        'Instructor there for last-minute questions',
      ],
      packages: [
        {
          name: 'Online + 6 hours',
          detail: 'The course plus three two-hour lessons',
          hours: 6,
          price: 550,
          includes: ['Online driver education included free', 'Two-hour behind-the-wheel lessons'],
        },
        {
          name: 'Online + 6 hours + test',
          detail: 'The course, three lessons and the DMV test service',
          hours: 6,
          price: 750,
          featured: true,
          includes: [
            'Online driver education included free', 'Two-hour behind-the-wheel lessons',
            'DMV drive-test service', 'Our car for the test',
            'Instructor there for last-minute questions',
          ],
        },
        {
          name: 'Online + 10 hours',
          detail: 'The course plus five two-hour lessons',
          hours: 10,
          price: 900,
          includes: ['Online driver education included free', 'Two-hour behind-the-wheel lessons'],
        },
        {
          name: 'Online + 10 hours + test',
          detail: 'The course, five lessons and the DMV test service',
          hours: 10,
          price: 1100,
          includes: [
            'Online driver education included free', 'Two-hour behind-the-wheel lessons',
            'DMV drive-test service', 'Our car for the test',
            'Instructor there for last-minute questions',
          ],
        },
        {
          name: 'Online + 20 hours',
          detail: 'The course, ten lessons and the DMV test service',
          hours: 20,
          price: 1800,
          includes: [
            'Online driver education included free', 'Two-hour behind-the-wheel lessons',
            'DMV drive-test service', 'Our car for the test',
            'Instructor there for last-minute questions',
          ],
        },
        {
          name: 'Online + 30 hours',
          detail: 'The course, fifteen lessons and the DMV test service',
          hours: 30,
          price: 2700,
          includes: [
            'Online driver education included free', 'Two-hour behind-the-wheel lessons',
            'DMV drive-test service', 'Our car for the test',
            'Instructor there for last-minute questions',
          ],
        },
      ],
    },
    {
      title: 'Already have a California permit',
      blurb: 'Behind-the-wheel hours on their own, with or without the DMV test service.',
      features: [
        'Two-hour behind-the-wheel lessons',
        'DMV drive-test service',
        'Our car for the test',
        'We drive you to the DMV',
        'Instructor there for last-minute questions',
      ],
      packages: [
        {
          name: '2 hours',
          detail: 'One lesson',
          hours: 2,
          price: 210,
          includes: ['Two-hour behind-the-wheel lessons'],
        },
        {
          name: '6 hours',
          detail: 'Three lessons — the DMV minimum',
          hours: 6,
          price: 550,
          // $210 x 3 = $630 against $550.
          saving: 'Saves $80 against three separate lessons',
          includes: ['Two-hour behind-the-wheel lessons'],
        },
        {
          name: '6 hours + test service',
          detail: 'Three lessons and the DMV test',
          hours: 6,
          price: 750,
          featured: true,
          includes: [
            'Two-hour behind-the-wheel lessons', 'DMV drive-test service',
            'Our car for the test', 'We drive you to the DMV',
            'Instructor there for last-minute questions',
          ],
        },
        {
          name: '10 hours',
          detail: 'Five lessons',
          hours: 10,
          price: 900,
          saving: 'Saves $150 against five separate lessons',
          includes: ['Two-hour behind-the-wheel lessons'],
        },
        {
          name: '10 hours + test service',
          detail: 'Five lessons and the DMV test',
          hours: 10,
          price: 1100,
          includes: [
            'Two-hour behind-the-wheel lessons', 'DMV drive-test service',
            'Our car for the test', 'We drive you to the DMV',
            'Instructor there for last-minute questions',
          ],
        },
        {
          name: '20 hours',
          detail: 'Ten lessons, test service included',
          hours: 20,
          price: 1800,
          includes: [
            'Two-hour behind-the-wheel lessons', 'DMV drive-test service',
            'Our car for the test', 'We drive you to the DMV',
            'Instructor there for last-minute questions',
          ],
        },
      ],
    },
  ],

  individualLessons: [
    { name: 'Online Driver Education', description: 'On its own. Free inside any behind-the-wheel package.', price: 85 },
    { name: '2 hours — one lesson', price: 210 },
    { name: '6 hours — three lessons', price: 550 },
    { name: '10 hours — five lessons', price: 900 },
    { name: '20 hours — ten lessons, test service included', price: 1800 },
    { name: '4-hour DMV Test Service', description: 'On its own, without a lesson package.', price: 350 },
  ],

  programs: [
    {
      slug: 'drivers-ed',
      image: '/clients/teen-driving-academy/student.jpg',
      title: 'Online Driver Education',
      navLabel: 'Driver’s Ed',
      summary:
        'You could start in the next two minutes. $85 on its own — and free inside every behind-the-wheel package.',
      body: [
        'This is the course California requires before a driver under 18 can sit the written permit test. It runs online, at your own pace, and you register and pay in one step.',
        'The reason to buy it inside a package rather than on its own is simply that inside a package it costs nothing.',
      ],
      bullets: [
        'Start within minutes of registering',
        'Free with every behind-the-wheel package',
        '$85 if bought on its own',
        'Student login for progress',
      ],
      price: 85,
    },
    {
      slug: 'behind-the-wheel',
      image: '/clients/teen-driving-academy/lesson.jpg',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Two-hour lessons with pre-screened, DMV-licensed instructors, in packages from six to thirty hours.',
      body: [
        'The DMV asks for six hours before a driver under 18 can be licensed. Most families take exactly six; the ten, twenty and thirty-hour packages exist because some students want a lot more time before the test, and because the per-hour price falls as the package grows.',
        'Every instructor is DMV-licensed and pre-screened.',
      ],
      bullets: [
        'Two hours per lesson',
        'DMV-licensed, pre-screened instructors',
        'Packages from 6 to 30 hours',
        'The per-hour price falls as the package grows',
      ],
      price: 210,
      priceNote: '$210 for a single two-hour lesson; $550 for six hours.',
    },
    {
      slug: 'dmv-test-service',
      image: '/clients/teen-driving-academy/hero.jpg',
      title: 'DMV Test Service',
      navLabel: 'Test Service',
      summary:
        'We drive you to the DMV, you take the test in the car you have been practising in, and your instructor is there right up to the door.',
      body: [
        'Taking the test in an unfamiliar car is an avoidable way to fail it. This is the car you have been driving all along, and someone who knows exactly how you drive is standing next to you until the examiner gets in.',
        'It also means a parent does not have to take a morning off work.',
      ],
      bullets: [
        'We take the student to the DMV',
        'You do not have to take time off work',
        'Take the test in the vehicle you practised in',
        'The instructor is there for last-minute questions',
      ],
      price: 350,
      priceNote: '$350 for the four-hour test service on its own, or $200 added to a lesson package.',
    },
  ],

  vehicles: {
    summary:
      'The car you take the DMV test in is the car you have been practising in, brought to the appointment by the instructor who taught you.',
    features: [
      'The same vehicle throughout training and testing',
      'Instructor drives the student to the DMV',
      'Instructor present for last-minute questions',
      'DMV-licensed, pre-screened instructors',
    ],
  },

  rating: { value: '4.9', count: '162', source: 'Google' },

  sourceUrl: 'https://www.teendrivingacademy.com',
  internalNotes: [
    'Licence E-3064 confirmed in their own footer.',
    'DEFECT — "Celebrating 30 years" on the homepage. Founded 1990, so it is 36. Someone wrote that banner in 2020 and no one has touched it since. On this preview the year count is derived from the founding date, so it cannot go stale again.',
    'DO NOT reproduce "over 50,000 happy clients" — unverifiable.',
    'Their pricing transparency is genuinely the best in the campaign. The pitch is not pricing; it is that there is no instructor, no team and no face anywhere on the site — a school called "Teen Driving Academy" with nothing to tell a parent about who gets in the car.',
    'Three phone numbers on one site with no explanation of which to call. Worth simplifying.',
    'The $200 gap between "6 hours" and "6 hours + test service" is arithmetic from their own price list; the $350 four-hour standalone figure is published separately.',
    'Photography here is licensed stock already on their site. Replace before production.',
  ],
};
