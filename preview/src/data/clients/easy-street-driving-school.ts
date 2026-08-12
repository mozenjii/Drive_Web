import type { Client } from '@/lib/types';

/**
 * Easy Street Driving School — Ventura, CA.
 *
 * Scraped from easystreetdrivingschool.com on 2026-08-09
 * (research/easy-street-driving-school). Prices are the Ventura location's,
 * because Ventura is the office the campaign is contacting; Santa Barbara and
 * Thousand Oaks price differently.
 *
 * Atelier, and it is not a close call. Mel and Renee Duncan started this school
 * after a conversation in a park about how badly other schools had treated their
 * friends' children, and every page still carries that voice. Eight named
 * instructors with photographs and personal bios. That is an editorial page.
 *
 * Published list prices are used throughout. The VTEEN50 coupon prices are real
 * but expire 31 August 2026, and a preview that outlives the sale would be
 * quoting numbers the client no longer honours.
 */
export const easyStreet: Client = {
  slug: 'easy-street-driving-school',
  name: 'Easy Street Driving School',
  short: 'Easy Street',
  variant: 'atelier',

  /** Mel and Renee are the school, and there are nine real instructor headshots
   *  to carry it. Editorial. */
  heroStyle: 'editorial',

  /**
   * Three locations is how their own site is organised — "Click on Location
   * Nearest You" is the primary navigation — so locations come first here.
   * Their instructors are named and photographed, which almost nobody else in
   * this set does, so the team comes before the cars.
   */
  sections: [
    {
      id: 'areas',
      kicker: 'Three locations',
      title: 'Santa Barbara, Ventura, Thousand Oaks.',
      lede:
        'Serving Santa Barbara, Goleta, Montecito and Carpinteria; Ventura, Ojai, Oak View and Santa Paula; Oxnard, Port Hueneme and Camarillo; Thousand Oaks, Newbury Park and Moorpark.',
    },
    {
      id: 'instructors',
      kicker: 'Who teaches you',
      title: 'The people who get in the car.',
      lede: 'Every instructor is named and pictured, because that is who you are trusting.',
    },
    {
      id: 'programs',
      kicker: 'What we teach',
      title: 'Driver education and behind-the-wheel training.',
    },
    {
      id: 'packages',
      kicker: 'Pricing',
      title: 'Every price, by location.',
      lede: 'Prices differ by location, so pick the one nearest you.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'Three counties of examiner routes.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    { id: 'reviews', kicker: 'In their words', title: 'Students, and their families.' },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'Three locations, one fleet standard.',
    },
    {
      id: 'cta',
      title: 'Making it as easy as possible.',
      lede: 'Call the location nearest you and we will find a slot around school or work.',
    },
  ],

  story: {
    pullQuote:
      'Since 2012, making the process of learning to drive as “Easy” as possible — for our students and their family.',
    paragraphs: [
      'Easy Street Driving School has taught in Santa Barbara, Ventura, Oxnard and Thousand Oaks since 2012.',
      'The school serves Santa Barbara, Goleta, Montecito and Carpinteria; Ventura, Ojai, Oak View and Santa Paula; Oxnard, Port Hueneme and Camarillo; Thousand Oaks, Newbury Park and Moorpark.',
    ],
  },

  logo: '/clients/easy-street-driving-school/logo.jpg',

  /**
   * Their green is #7AC943 — a highlighter at 2.05:1, unusable for text or for
   * a white button label. It ships as #4C8326 (4.59:1): same hue, enough
   * lightness removed to be legible, with the raw green kept as the chip fill.
   * The charcoal of the wordmark becomes the accent.
   */
  brand: {
    primary: '#4C8326',
    primaryDark: '#437321',
    primarySoft: '#EDF8E5',
    accent: '#2E2E2E',
    accentDark: '#202020',
    accentSoft: '#F0F0F0',
    wash: '31, 54, 15',
    bg: '#F7FCF4',
    border: '#D9F0CA',
    borderSoft: '#EAF6E1',
    fgDim: '#61745B',
  },

  photos: {
    hero: {
      src: '/clients/easy-street-driving-school/hero.jpg',
      alt: 'Three Easy Street instructors in branded shirts, looking out over the hills',
    },
    roadTest: {
      src: '/clients/easy-street-driving-school/lesson.jpg',
      alt: 'An Easy Street instructor with a student beside the school car',
    },
    vehicle: {
      src: '/clients/easy-street-driving-school/car.jpg',
      alt: 'The Easy Street Toyota Prius, signwritten with the school name and number',
    },
    support: {
      src: '/clients/easy-street-driving-school/office.jpg',
      alt: 'The Easy Street office on Eastman Avenue in Ventura',
    },
  },

  tagline: 'We would not hire an instructor we would not put our own child in a car with.',
  headline: 'Started by two parents who had heard enough horror stories.',

  city: 'Ventura',
  county: 'Ventura County',
  address: '2112 Eastman Ave., Suite 109, Ventura, CA 93003',

  licence: 'E2202',
  founded: '2012',

  phones: [{ display: '(805) 685-2436', raw: '+18056852436' }],
  email: 'info@easystreetdrivingschool.com',

  schedulingNote:
    'Door-to-door pick-up from home, school or work anywhere in the zone. Lessons are best booked four to six weeks apart, with plenty of practice in between.',

  areas: [
    'Ventura', 'Oxnard', 'Port Hueneme', 'Camarillo', 'Ojai', 'Santa Paula',
    'Oak View',
  ],
  areasNote:
    'The Ventura location covers Ventura, Oxnard, Port Hueneme, Camarillo, Ojai and Santa Paula. Live outside the zone and you can still be picked up from the office.',

  hiring: {
    // Their own "Join Our Ventura Team" page.
    requirements: [
      'You genuinely like helping people',
      'You enjoy teaching teenagers',
      'You pass a Live Scan background check',
      'You pass Easy Street’s own screening and training',
    ],
  },

  packageGroups: [
    {
      title: 'Teens with a permit',
      blurb:
        'Between 15½ and 18 the DMV asks for online driver education plus a minimum of six behind-the-wheel hours. These are the hours.',
      features: [
        'Two-hour lessons, one to one',
        'Door-to-door pick-up',
        'A practice plan written after every lesson',
        'Camera-equipped, dual-control vehicle',
        'Live Scan screened instructor',
      ],
      packages: [
        {
          name: 'Single lesson',
          detail: 'One two-hour lesson, à la carte',
          hours: 2,
          price: 182,
          includes: ['Two-hour lessons, one to one', 'Door-to-door pick-up'],
        },
        {
          name: '3 lessons',
          detail: 'Six hours — the DMV minimum',
          hours: 6,
          price: 498,
          featured: true,
          // $182 x 3 = $546 against $498.
          saving: 'Saves $48 against three separate lessons',
          includes: [
            'Two-hour lessons, one to one', 'Door-to-door pick-up',
            'A practice plan written after every lesson',
            'Camera-equipped, dual-control vehicle',
            'Live Scan screened instructor',
          ],
        },
        {
          name: '5 lessons',
          detail: 'Ten hours',
          hours: 10,
          price: 820,
          saving: 'Saves $90 against five separate lessons',
          includes: [
            'Two-hour lessons, one to one', 'Door-to-door pick-up',
            'A practice plan written after every lesson',
            'Camera-equipped, dual-control vehicle',
            'Live Scan screened instructor',
          ],
        },
        {
          name: '10 lessons',
          detail: 'Twenty hours',
          hours: 20,
          price: 1620,
          saving: 'Saves $200 against ten separate lessons',
          includes: [
            'Two-hour lessons, one to one', 'Door-to-door pick-up',
            'A practice plan written after every lesson',
            'Camera-equipped, dual-control vehicle',
            'Live Scan screened instructor',
          ],
        },
      ],
    },
    {
      title: 'Teens without a permit',
      blurb:
        'Start here. The 30-hour online course comes first, then the behind-the-wheel hours — and the certificate is posted to you free.',
      features: [
        '30-hour DMV-approved online course',
        'Eleven chapters with a quiz after each',
        'Certificate posted to your home',
        'Two-hour lessons, one to one',
        'Door-to-door pick-up',
      ],
      packages: [
        {
          name: 'Online Driver’s Ed',
          detail: 'The 30-hour course on its own',
          price: 49,
          includes: [
            '30-hour DMV-approved online course',
            'Eleven chapters with a quiz after each',
            'Certificate posted to your home',
          ],
        },
        {
          name: 'Driver’s Ed + 6 hours',
          detail: 'The course plus three two-hour lessons',
          hours: 6,
          price: 527,
          featured: true,
          // $49 + $498 = $547 against $527.
          saving: 'Saves $20 against buying the course separately',
          includes: [
            '30-hour DMV-approved online course',
            'Eleven chapters with a quiz after each',
            'Certificate posted to your home',
            'Two-hour lessons, one to one', 'Door-to-door pick-up',
          ],
        },
        {
          name: 'Driver’s Ed + 10 hours',
          detail: 'The course plus five two-hour lessons',
          hours: 10,
          price: 849,
          saving: 'Saves $20 against buying the course separately',
          includes: [
            '30-hour DMV-approved online course',
            'Eleven chapters with a quiz after each',
            'Certificate posted to your home',
            'Two-hour lessons, one to one', 'Door-to-door pick-up',
          ],
        },
        {
          name: 'Driver’s Ed + 20 hours',
          detail: 'The course plus ten two-hour lessons',
          hours: 20,
          price: 1649,
          saving: 'Saves $20 against buying the course separately',
          includes: [
            '30-hour DMV-approved online course',
            'Eleven chapters with a quiz after each',
            'Certificate posted to your home',
            'Two-hour lessons, one to one', 'Door-to-door pick-up',
          ],
        },
      ],
    },
    {
      title: 'Adults with a permit',
      blurb:
        'No classroom, no waiting period, no minimum hours. The same instructors and the same cars.',
      features: [
        'Two-hour lessons, one to one',
        'Door-to-door pick-up',
        'A practice plan written after every lesson',
        'Instructors who teach students of all ages',
      ],
      packages: [
        {
          name: 'Single lesson',
          detail: 'One two-hour lesson, à la carte',
          hours: 2,
          price: 209,
          includes: ['Two-hour lessons, one to one', 'Door-to-door pick-up'],
        },
        {
          name: '3 lessons',
          detail: 'Six hours',
          hours: 6,
          price: 564,
          featured: true,
          // $209 x 3 = $627 against $564.
          saving: 'Saves $63 against three separate lessons',
          includes: [
            'Two-hour lessons, one to one', 'Door-to-door pick-up',
            'A practice plan written after every lesson',
          ],
        },
        {
          name: '5 lessons',
          detail: 'Ten hours',
          hours: 10,
          price: 930,
          saving: 'Saves $115 against five separate lessons',
          includes: [
            'Two-hour lessons, one to one', 'Door-to-door pick-up',
            'A practice plan written after every lesson',
          ],
        },
        {
          name: '10 lessons',
          detail: 'Twenty hours',
          hours: 20,
          price: 1840,
          saving: 'Saves $250 against ten separate lessons',
          includes: [
            'Two-hour lessons, one to one', 'Door-to-door pick-up',
            'A practice plan written after every lesson',
          ],
        },
      ],
    },
  ],

  programs: [
    {
      slug: 'drivers-ed',
      title: 'Online Driver’s Education',
      navLabel: 'Driver’s Ed',
      summary:
        'The 30 hours the DMV requires before a permit — eleven chapters, a quiz after each one, and the certificate posted to your home free.',
      body: [
        'If you are between 15½ and 17½ and have no permit yet, this is the first step. Eleven chapters, a quiz after each, and a cumulative test at the end. Pass with at least 80% and we are notified automatically.',
        'The pink completion certificate is an original — it cannot be emailed or faxed — and we post it to your home at no charge. Take it with you to the DMV to sit the written permit test.',
        'One thing worth knowing: your permit is not activated until your first lesson with a licensed instructor.',
      ],
      bullets: [
        '30 hours, eleven chapters',
        'A quiz after every chapter, then a cumulative test',
        '80% needed to pass',
        'Original pink certificate posted free',
        'Work at your own pace',
      ],
      price: 49,
    },
    {
      slug: 'behind-the-wheel',
      image: '/clients/easy-street-driving-school/lesson.jpg',
      title: 'Behind-the-Wheel Lessons',
      navLabel: 'Behind the Wheel',
      summary:
        'Two hours at a time, door to door, with a written practice plan afterwards — and lessons spaced far enough apart to actually work.',
      body: [
        'Every lesson is two hours, one instructor to one student, with pick-up and drop-off at home, school or work. Afterwards your instructor reviews your progress and writes a practice plan for the weeks in between.',
        'Book lessons four to six weeks apart and practise hard between them. And do not save the last lesson for a couple of days before the DMV test — the DMV wants a few specific things that take about a month of practice to master, and if that lesson has to move, so does your test.',
      ],
      bullets: [
        'Two hours, one to one',
        'Door-to-door pick-up from home, school or work',
        'A written practice plan after every lesson',
        'Every vehicle records video and audio, inside and out',
        'Instructors Live Scan checked and continually retrained',
      ],
      logistics: [
        'Bring your ORIGINAL permit — not a copy, not a photo',
        'Lessons best booked four to six weeks apart',
        '48-hour cancellation policy',
        'Parents do not ride along; it changes the teaching dynamic',
      ],
      price: 182,
      priceNote: 'Teens from $182 for two hours; six hours $498. Adults from $209.',
    },
    {
      slug: 'fleet-training',
      image: '/clients/easy-street-driving-school/car.jpg',
      title: 'Fleet Driver Training',
      navLabel: 'Fleet Training',
      summary:
        'On-site training for company drivers — defensive technique, hazard awareness, and documented evaluations and certificates.',
      body: [
        'We travel to teach the class, keep in touch through the process, and provide driver evaluations and certificates at the end. It works for initial training, for refreshers with experienced drivers, and for drivers moving from a compact car to a multi-passenger vehicle.',
        'The commercial case is straightforward: fewer collisions means less downtime and lower repair cost, many insurers discount for documented driver-safety training, and if something does happen, that documentation shows reasonable measures were taken.',
      ],
      bullets: [
        'Defensive driving and hazard awareness',
        'Training delivered at your site',
        'Driver evaluations and certificates',
        'Refreshers for experienced drivers',
        'Transitions from compact cars to larger vehicles',
      ],
      priceNote: 'Contact us for pricing.',
    },
    {
      slug: 'dmv-drive-test',
      title: 'DMV Drive Test',
      navLabel: 'Drive Test',
      summary:
        'Take the test in an Easy Street car — your instructor brings it to the appointment.',
      bullets: [
        'Ventura, Goleta and Thousand Oaks DMV offices',
        'Your instructor brings the vehicle',
        'The same car you have been training in',
      ],
    },
  ],

  vehicles: {
    summary:
      'Eight cars, grown from the one Mel started with. Every vehicle records video and audio inside and out — for instructor training, and so that trust in what happens in that car is not something you have to take on faith.',
    features: [
      'Camera recording video and audio, inside and out',
      'Dual controls on every car',
      'Door-to-door pick-up and drop-off',
      'Available for the DMV drive test',
    ],
  },

  instructors: [
    {
      name: 'Mel Duncan',
      initials: 'MD',
      role: 'Director of Operations, co-founder',
      photo: '/clients/easy-street-driving-school/mel.jpg',
      years: '20+',
      bio: 'A licensed driving instructor since 2006 and the school’s first and only instructor when it started with one car. Personally oversees the training of everyone who teaches here. Over fifteen years working with junior high and high school students.',
    },
    {
      name: 'Renee Duncan',
      initials: 'RD',
      role: 'Office Manager, co-founder',
      photo: '/clients/easy-street-driving-school/renee.jpg',
      bio: 'In customer service since 1985, and ten years alongside Mel working with junior high and high school students. The voice on the phone when you call the office.',
    },
    {
      name: 'Dylan Duncan',
      initials: 'DD',
      role: 'Driving instructor',
      photo: '/clients/easy-street-driving-school/dylan.jpg',
      bio: 'A criminal justice degree and a long habit of finding different ways to explain the same thing until one of them lands.',
    },
    {
      name: 'Heather Davis',
      initials: 'HD',
      role: 'Driving instructor',
      photo: '/clients/easy-street-driving-school/heather.jpg',
      bio: 'Reading a Masters in Library and Information Science. Spends her time outside the car with books and art projects.',
    },
    {
      name: 'Jonathan Rojas',
      initials: 'JR',
      role: 'Driving instructor',
      photo: '/clients/easy-street-driving-school/jonathan.jpg',
      bio: 'Passed his own behind-the-wheel test as a teenager without a single mark against him, and has been trying to pass that on ever since.',
    },
    {
      name: 'Garrett Long',
      initials: 'GL',
      role: 'Driving instructor',
      photo: '/clients/easy-street-driving-school/garrett.jpg',
      bio: 'A lifelong infatuation with learning that turned into a desire to hand knowledge on in ways that are fun as well as informative.',
    },
    {
      name: 'Matthew Romo',
      initials: 'MR',
      role: 'Driving instructor',
      photo: '/clients/easy-street-driving-school/matthew.jpg',
      bio: 'Easy going, and genuinely enjoys the teaching part. Book a lesson with him and it shows.',
    },
    {
      name: 'Joe Quesada',
      initials: 'JQ',
      role: 'Driving instructor',
      photo: '/clients/easy-street-driving-school/joe.jpg',
      bio: 'Retired after forty years in customer service management. Laid back, and his positivity is obvious to everyone he meets.',
    },
    {
      name: 'Diego Ayala-Baez',
      initials: 'DA',
      role: 'Driving instructor',
      photo: '/clients/easy-street-driving-school/diego.jpg',
      bio: 'Mellow, kind and creative. Plays guitar and a few other instruments, reads, watches films and skateboards.',
    },
  ],

  testimonials: [
    {
      name: 'Angela Buse',
      location: 'Fleet Manager, People Creating Success Inc',
      quote:
        'They raised the confidence of our drivers and helped reduce our driving incidents to zero this year. When you see their cars driving across town, know that the driver trainee is in good hands.',
    },
  ],

  rating: { value: '4.9', count: '147', source: 'Google' },

  sourceUrl: 'https://www.easystreetdrivingschool.com',
  internalNotes: [
    'Licence E2202 confirmed on their own FAQ and in their footer.',
    'This is the most complete prospect in the campaign. The angle is NOT "your site is bad" — it is good. The angle is that behind-the-wheel conversion still ends in a phone call, and that the three locations compete with each other for the same search terms.',
    'Prices used are the Ventura location list prices. Santa Barbara and Thousand Oaks are higher; do not mix them.',
    'The VTEEN50 / SBTEEN80 coupon prices expire 31 August 2026 and are deliberately not baked into the preview.',
    'Affiliations: Driving School Association of the Americas, Driving School Association of California. Not shown yet — ask whether they want the badges.',
    'Their FAQ carries a $100 no-show fee, a $60 late-cancellation fee, a no-refund policy and a 3% card surcharge. Left off the preview; these belong in checkout, not on a sales page, and that is worth saying to them.',
    'Instructor photographs are theirs and show identifiable staff. Written permission before production.',
    'Owners are Mel and Renee Duncan. Taylor Duncan is listed as Office Assistant — omitted here only because no usable photograph was recoverable.',
  ],
};
