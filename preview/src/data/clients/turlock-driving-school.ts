import type { Client } from '@/lib/types';

/**
 * Turlock Driving School Inc — Turlock, CA.
 *
 * Scraped from turlockdrivingschool.com on 2026-08-09
 * (research/turlock-driving-school).
 *
 * Their DMV licence number, 3826, is printed inside their own logo. The
 * campaign workbook recorded it as "not captured" — it was sitting in the
 * header image the whole time.
 *
 * Atelier, and not as a default. Thirty-five years, named owner-operators who
 * still teach, instructors customers thank by first name, and three cars the
 * town recognises by name. That is an editorial page, not a package grid.
 */
export const turlockDriving: Client = {
  slug: 'turlock-driving-school',
  name: 'Turlock Driving School',
  short: 'Turlock DS',
  variant: 'atelier',

  /**
   * Patty Chesney still teaches alongside her own staff, and the fleet has names
   * the whole valley recognises. A named person is the product here.
   */
  heroStyle: 'editorial',

  /**
   * Their own site is organised OUR STAFF / OUR FLEET / RATES-SCHEDULING /
   * ONLINE COURSES / BEHIND THE WHEEL / DMV TEST, in that order. This follows
   * it, in their words. There is no packages section because they publish no
   * rates at all — "call the office during normal business hours for current
   * rates" is the actual instruction, so it becomes the closing call to action
   * rather than being papered over with invented prices.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Behind the wheel',
      title: 'Training for student drivers of all ages.',
      lede:
        'Drivers education and drivers training, taught the same way since 1991 — thorough, courteous and aimed squarely at the driving performance evaluation.',
    },
    {
      id: 'vehicles',
      kicker: 'Our fleet',
      title: 'Yoda, Dory and Blueberry.',
      lede:
        'Every student car is an automatic with air conditioning, instructor-side brakes and a second rear-view mirror. All of them meet or exceed the DMV requirement — and half the valley knows them by name.',
    },
    {
      id: 'road-test',
      kicker: 'DMV test',
      title: 'Take the test in one of ours.',
      lede:
        'Drive test appointments can be taken in any Turlock Driving School vehicle. $75.00 per hour, one hour minimum.',
    },
    {
      id: 'instructors',
      kicker: 'Our staff',
      title: 'Thorough, courteous, and very knowledgeable.',
      lede:
        'Patty has taught behind the wheel for over a decade and still works alongside her staff as an instructor.',
    },
    { id: 'reviews', kicker: 'Reviews', title: 'What the valley says.' },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'The greater San Joaquin Valley, since 1991.',
      lede:
        'Lessons seven days a week. Pick-up and drop-off locations are tailored to each student.',
    },
    {
      id: 'cta',
      title: 'Call the office for current rates.',
      lede:
        'Rates depend on the student’s age and location, so they are quoted rather than listed. Monday to Friday, 8:30 am to 12:30 pm.',
    },
  ],

  /** Their About copy, close to verbatim. No invented history. */
  story: {
    pullQuote: 'Dedicated to teaching safe driving for life.',
    paragraphs: [
      'TDS has been serving the greater San Joaquin Valley since 1991, providing instruction in drivers education and drivers training for teenagers and adults.',
      'Keeping with tradition, new owners Patty and Don Chesney are committed to keeping the Turlock Driving School staff highly trained and motivated, to ensure the safety and quality of the behind-the-wheel driving experience for student drivers of all ages.',
      'Patty has an extensive teaching background in behind-the-wheel instruction, having taught for over a decade, and continues to work alongside her staff as an instructor.',
    ],
  },

  logo: '/clients/turlock-driving-school/logo.jpg',

  /**
   * Sampled from their mark: deep purple #31215D and magenta #823E74.
   * Both clear AA comfortably as they are (13.94:1 and 7.27:1) — unusually, this
   * is a brand that needed no correction. The purple is lifted very slightly to
   * #382569 so it reads as purple rather than as black at small sizes.
   */
  brand: {
    primary: '#382569',
    primaryDark: '#2A1C4F',
    primarySoft: '#ECE8F7',
    accent: '#823E74',
    accentDark: '#713665',
    accentSoft: '#F5EAF3',
    wash: '49, 33, 92',
    bg: '#F7F6FC',
    border: '#D6CEEE',
    borderSoft: '#E9E5F6',
    fgDim: '#585070',
  },

  // Their banner photography has the headline burned into the JPEG, so none of
  // it is reusable. What they do have is three cars, photographed and named.
  photos: {
    vehicle: {
      src: '/clients/turlock-driving-school/car-dory.jpg',
      alt: 'Dory — the blue Turlock Driving School hatchback, signwritten with the school name',
    },
  },

  tagline: 'Dedicated to teaching safe driving for life.',
  headline: 'Thirty-five years teaching the San Joaquin Valley to drive.',

  city: 'Turlock',
  county: 'Stanislaus County',

  licence: '3826', // printed inside their own logo: "License #3826"
  founded: '1991',

  phones: [
    { label: 'Office', display: '(209) 632-5957', raw: '+12096325957' },
    { label: 'Text', display: '(209) 678-6350', raw: '+12096786350' },
  ],

  // Deliberately narrow, and deliberately shown: 8:30 to 12:30, weekdays only,
  // is the entire window in which a customer can book. It is also the pitch.
  hours: [{ days: 'Monday – Friday', hours: '8:30 AM – 12:30 PM' }],
  schedulingNote:
    'Lessons run seven days a week and pick-up and drop-off is tailored to each student — but the office itself only takes bookings weekday mornings, 8:30 to 12:30.',

  // The towns their own published reviews are signed from. Their site claims
  // "the greater San Joaquin Valley"; these are the places it demonstrably means.
  areas: [
    'Turlock', 'Ceres', 'Modesto', 'Denair', 'Patterson', 'Hughson', 'Delhi',
    'Hilmar', 'Livingston',
  ],
  areasNote:
    'Serving the greater San Joaquin Valley since 1991. Pick-up and drop-off locations are arranged around each student rather than fixed.',

  programs: [
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Six hours of licensed instruction for drivers under 18, taught as three two-hour lessons spread across the six-month permit period.',
      body: [
        'A driver under 18 needs six hours of licensed behind-the-wheel instruction before the drive test, alongside 50 hours of practice with a licensed driver over 25 — ten of those at night.',
        'The six hours are best spread rather than stacked. Take the first lesson as soon as the permit arrives: the permit is not valid until that lesson is done. Take the second after roughly 20 hours of your own practice, about two months later. Take the third five days to a week before the drive test, and book both of those appointments 90 days ahead.',
        'Lessons are also open to adults and to drivers of any age. Over 18 you are not required to take driver education or behind-the-wheel training at all — but an instructor before the evaluation test is still strongly recommended.',
      ],
      bullets: [
        'Six hours as three two-hour lessons',
        'First lesson validates the provisional permit',
        'Spread across the six-month permit period',
        'Lessons seven days a week',
        'Pick-up and drop-off tailored to the student',
        'Open to drivers of all ages',
      ],
      logistics: [
        'Permit must be physically with you at every lesson',
        'Rates depend on student age and location',
        'Cash at the lesson, or invoiced to debit/credit at no extra fee',
        'Discount bundle payment plans available',
      ],
      priceNote:
        'Rates are based on student age and location. Call the office weekday mornings, 8:30 to 12:30, for current rates and availability.',
    },
    {
      slug: 'dmv-test',
      title: 'DMV Test Vehicle',
      navLabel: 'DMV Test',
      summary:
        'Take the drive test in one of our cars — $75 per hour, minimum one hour, after at least one two-hour lesson with an instructor.',
      body: [
        'A DMV drive-test appointment can be taken in any Turlock Driving School vehicle. Before that happens you need at least one two-hour behind-the-wheel lesson with a TDS instructor; the decision on whether the car can be used is made at that lesson.',
      ],
      bullets: [
        '$75.00 per hour, one-hour minimum',
        'Any of the school vehicles',
        'One two-hour lesson required beforehand',
        'Suitability assessed at that lesson',
      ],
      price: 75,
      priceNote: '$75.00 per hour with a one-hour minimum.',
    },
    {
      slug: 'drivers-ed',
      title: 'Driver Education',
      navLabel: 'Driver’s Ed',
      summary:
        'The classroom or online course you need before the written permit test — and a straight answer about which online provider is worth paying for.',
      body: [
        'Driver education comes first: an online course or one taught by a licensed instructor. When it is finished a certificate of completion is posted to you, and you need it — along with a birth certificate, proof of legal presence, a document showing your name and address, and the application fee — to sit the written test for a provisional permit.',
        'There are a great many online driver education courses. After watching which ones actually produce a pass on the written exam, Turlock Driving School endorses one of them.',
      ],
      bullets: [
        'Required before the written permit test',
        'You must be at least 15½ to be issued a permit',
        'Certificate posted — allow five to seven days',
        'Complete the DL44 application at dmv.ca.gov beforehand',
        'A parent must show a California licence and a matching utility bill',
      ],
    },
  ],

  vehicles: {
    summary:
      'Three cars, all automatic, all air conditioned, all fitted with instructor-side brakes and mirrors — and all named, because half the valley recognises them on the road.',
    features: [
      'Automatic transmission and air conditioning',
      'Instructor-side brake and rear-view mirrors',
      'Meets or exceeds DMV requirements',
      'Available for the DMV drive test at $75 per hour',
    ],
    gallery: [
      {
        src: '/clients/turlock-driving-school/car-yoda.jpg',
        alt: 'Yoda, the bright yellow Turlock Driving School hatchback with STUDENT DRIVER across the back',
        label: 'Yoda',
      },
      {
        src: '/clients/turlock-driving-school/car-dory.jpg',
        alt: 'Dory, the blue Turlock Driving School hatchback',
        label: 'Dory',
      },
      {
        src: '/clients/turlock-driving-school/car-blueberry.png',
        alt: 'Blueberry, the blue Scion with the Turlock Driving School decals',
        label: 'Blueberry',
      },
    ],
  },

  instructors: [
    {
      name: 'Patty Chesney',
      initials: 'PC',
      role: 'Owner and instructor',
      years: '10+',
      bio: 'Bought the school with Don and kept teaching. Over a decade of behind-the-wheel instruction, still working alongside her own staff rather than behind a desk.',
    },
    {
      name: 'Don Chesney',
      initials: 'DC',
      role: 'Owner',
      bio: 'Committed, with Patty, to keeping the Turlock Driving School staff highly trained and motivated — the school’s own words, and thirty-five years of reputation behind them.',
    },
  ],

  /**
   * Reproduced verbatim from their own reviews page, where they are already
   * public. Trimmed only for length, never reworded.
   */
  testimonials: [
    {
      name: 'Jose',
      location: 'Ceres',
      quote:
        'I passed my driving test and wanted to let Patty know. I learned a lot from her in two hours. Wished I would have taken lessons before I failed the drive test twice.',
    },
    {
      name: 'Robert',
      location: 'Ceres',
      quote:
        'There’s a big difference between six hours of driving and six hours of teaching. I’ve been driving for many years and still learned a thing or two from my daughter.',
    },
    {
      name: 'Lynda',
      location: 'Turlock',
      quote:
        'Our son took drivers training from another company and was so terrified he wouldn’t even take the final lesson. After the first lesson with Keith he LOVED driving.',
    },
    {
      name: 'Rob',
      location: 'Modesto',
      quote:
        'As a truck driver I appreciate the heads up freeway training. Scott scored a 98 on his driving test. Thanks Keith!',
    },
    {
      name: 'Grace',
      location: 'Turlock',
      quote:
        'Carolyn really helped my Mom regain her confidence. She passed her test in Modesto and is back to driving.',
    },
    {
      name: 'Kyle',
      location: 'Delhi',
      quote: 'Hey TDS! I already have a license but can I still drive one of your cars? That Yellow Cobalt is so sick.',
    },
  ],

  rating: { value: '4.9', count: '132', source: 'Google' },

  sourceUrl: 'https://turlockdrivingschool.com',
  internalNotes: [
    'Licence 3826 is printed inside their own logo image. The workbook had it as "not captured" — worth mentioning, it lands well.',
    'Owners are Patty and Don Chesney. Instructors named by customers in their own reviews: Keith, Lisa, Carolyn, and Dawn in the office. Only Patty and Don are listed here because only they are named by the school itself.',
    'DEFECT — their public contact address is patty@pep.kum.mybluehost.me, a Bluehost server hostname. No email address is shown here at all rather than reproduce that.',
    'DEFECT — the FAQ links to "Welcomedriver.com" as a relative URL, so it resolves to turlockdrivingschool.com/faqs/Welcomedriver.com and returns a 404. Their recommended online course is unreachable from the page that recommends it.',
    'DEFECT — the default WordPress "Hello world!" post is still live in the sidebar.',
    'DEFECT — every banner has its headline burned into the JPEG. It cannot be selected, translated, read by a screen reader or reflowed on a phone, and it is why this preview uses none of their banner photography.',
    'DEFECT — copyright reads 2024, and the office takes bookings only 8:30–12:30 on weekdays. Online booking is the obvious upsell.',
    'They endorse welcomedriver.com with discount code TU3826. Left off the preview: it sends traffic away, and the code is theirs to place where they want it.',
  ],
};
