import type { Client } from '@/lib/types';

/**
 * American Best Cali Driving School — Canoga Park, CA.
 *
 * Scraped from americanbestcalidrivingschool.com on 2026-08-13
 * (research/american-best-cali-driving-school). Ten pages: a home page, an about
 * page, and one price page per service area.
 *
 * Panel hero, no photography and no brand override — and all three for the same
 * reason. Every image on their site is licensed stock (the "instructor and
 * student" shot is a right-hand-drive car), they publish no logo, and the colours
 * in their stylesheets are Bootstrap's defaults: #007BFF, #DC3545, #28A745.
 * A template palette is the honest result. Their own photographs and their own
 * mark are the ask.
 *
 * What they do have is the clearest area-by-area price list in this campaign —
 * and a 50% price difference between two of those areas that their own site never
 * explains. See internalNotes.
 */
export const americanBestCali: Client = {
  slug: 'american-best-cali-driving-school',
  name: 'American Best Cali Driving School',
  short: 'American Best',
  variant: 'atelier',
  heroStyle: 'stage',

  photos: {
    hero: {
      src: '/clients/american-best-cali-driving-school/human-hero.jpg',
      alt: 'A parent calmly coaching a teenage learner in the driver’s seat',
      disclosure: 'Illustrative photography',
    },
  },

  /**
   * Their own order: what the lessons are, then the price list per area, then the
   * test, then who they cover. "We specialize with the elderly" is on their home
   * page and is the line that sets them apart in this campaign — almost nobody
   * else mentions senior drivers at all, so it leads the programmes section.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Driving lessons',
      title: 'Beginners, refreshers, and drivers who have been at it fifty years.',
      lede:
        'Behind-the-wheel training, DMV test preparation and defensive driving for teens, adults and seniors — with a car you can rent for the test itself.',
    },
    {
      id: 'packages',
      kicker: 'Packages',
      title: 'Pick your area, then your hours.',
      lede: 'Their prices are set per service area. Both area price lists are here, side by side.',
    },
    {
      id: 'road-test',
      kicker: 'DMV test preparation',
      title: 'The test routes, taught before you drive them.',
      lede: 'Four manoeuvres decide most California drive tests. Press one and watch the route.',
    },
    {
      id: 'reviews',
      kicker: 'Reviews',
      title: 'Three students, in their own words.',
    },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'The Valley, Los Angeles, and out to Simi Valley and Canyon Country.',
    },
    {
      id: 'cta',
      title: 'Book your driving lesson today.',
      lede: 'Call (818) 703-3844 — free pick-up and drop-off, whichever area you are in.',
    },
  ],

  story: {
    pullQuote: 'Whether you are a beginner or need a refresher, we will prepare you for the road with confidence.',
    paragraphs: [
      'American Best Cali Driving School teaches across Los Angeles and the San Fernando Valley, out as far as Agoura Hills, Simi Valley, Newhall and Canyon Country, with certified instructors and door-to-door pick-up.',
      'Their courses are built for three groups rather than one: teens working towards a first licence, adults returning to it, and seniors — they say plainly that they specialise with the elderly, which is rare enough in this trade to be worth saying twice.',
      'Alongside lessons they rent a car for the DMV drive test and will make the DMV reservation, which solves the problem of a student who has trained in one car and would otherwise sit the test in another.',
    ],
  },

  tagline: 'Certified instructors, free pick-up, and a car for the test.',
  headline: 'Teens, adults, and drivers who have been driving for decades.',
  heroLede:
    'Behind-the-wheel training and DMV test preparation across Los Angeles, the San Fernando Valley, Agoura, Simi Valley and Canyon Country. Free home pick-up and drop-off on every lesson.',

  city: 'Canoga Park',
  county: 'Los Angeles County',

  phones: [{ display: '(818) 703-3844', raw: '+18187033844' }],

  schedulingNote:
    'Flexible scheduling, and free home pick-up and drop-off on every lesson. Lessons are booked by phone — there is no online calendar.',

  areas: [
    'Canoga Park',
    'San Fernando Valley',
    'Los Angeles',
    'Agoura Hills',
    'Simi Valley',
    'Newhall',
    'Canyon Country',
    'Santa Clarita',
  ],
  areasNote:
    'Four service areas, each with its own price list: San Fernando Valley, the Los Angeles area, Agoura Hills and Simi Valley, and Newhall with Canyon Country.',

  programs: [
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Real-world driving with a certified instructor, in packages from a single two-hour class up to eighteen hours.',
      body: [
        'Lessons are taught one to one with a certified instructor, starting wherever the driver actually is — a first-timer who has never held a wheel, or someone who has held a licence for years and stopped driving.',
        'Every package includes pick-up and drop-off at home, preparation for the driving test, and what their site calls driving executions: the manoeuvres an examiner will ask for.',
        'Packages run from one two-hour class to eighteen hours, and the price depends on which of their four service areas you are in.',
      ],
      bullets: [
        'One-to-one with a certified instructor',
        'Free pick-up and drop-off',
        'Preparation for the driving test included',
        'Teens, adults and seniors',
        'Two-hour classes',
      ],
      priceNote: 'From $195 for a single two-hour class. Package prices vary by service area — see pricing.',
    },
    {
      slug: 'senior-lessons',
      title: 'Lessons for Senior Drivers',
      navLabel: 'Seniors',
      summary:
        'They say it themselves: they specialise with the elderly. Refresher training at the pace of the driver, not the syllabus.',
      body: [
        'Most driving schools in this county are built around teenagers and treat an older driver as an exception. American Best Cali advertises senior drivers as a speciality on their own home page.',
        'That covers a licence renewal that now needs a drive test, a return to driving after a break or an illness, and drivers who simply want an honest second opinion on their own habits from someone qualified to give it.',
      ],
      bullets: [
        'Refresher lessons at the driver’s own pace',
        'Preparation for a renewal drive test',
        'Defensive driving: freeway, parking, lane changes, intersections',
        'Free pick-up and drop-off',
      ],
    },
    {
      slug: 'dmv-test-car-rental',
      title: 'Car Rental for the DMV Test',
      navLabel: 'Test Car',
      summary:
        'Their car for your drive test, with the DMV reservation made for you — for drivers who have no insured car to take.',
      body: [
        'The DMV will not conduct a drive test in a car that is not roadworthy and insured, which stops a real number of people from taking the test at all.',
        'American Best Cali rents one of their own cars for the test, includes driving practice in it, and will make the DMV reservation. You arrive in the car you have already driven.',
      ],
      bullets: [
        'Use their car for the drive test',
        'Driving practice in the same car',
        'They can make the DMV reservation',
      ],
      priceNote: '$215 in the San Fernando Valley, $249 in their other areas.',
    },
  ],

  /**
   * Their published prices, exactly as their own area pages list them. The two
   * groups are their own split — and the difference between them is the finding:
   * six hours is $399 in the San Fernando Valley and $599 everywhere else.
   */
  packageGroups: [
    {
      title: 'San Fernando Valley',
      blurb: 'Their cheapest area, and the only one with an eighteen-hour package.',
      features: [
        'Pick-up and drop-off',
        'Preparation for the driving test',
        'Driving executions',
        'Two-hour classes',
      ],
      lessonHours: 2,
      packages: [
        {
          name: '2 Hours',
          detail: 'One driving class',
          hours: 2,
          price: 195,
          includes: ['Pick-up and drop-off', 'Preparation for the driving test', 'Driving executions', 'Two-hour classes'],
        },
        {
          name: '6 Hours',
          detail: 'Three driving classes',
          hours: 6,
          price: 399,
          includes: ['Pick-up and drop-off', 'Preparation for the driving test', 'Driving executions', 'Two-hour classes'],
          featured: true,
        },
        {
          name: '12 Hours',
          detail: 'Six driving classes',
          hours: 12,
          price: 778,
          includes: ['Pick-up and drop-off', 'Preparation for the driving test', 'Driving executions', 'Two-hour classes'],
        },
        {
          name: '18 Hours',
          detail: 'As published on their Valley page',
          hours: 18,
          price: 1157,
          includes: ['Pick-up and drop-off', 'Preparation for the driving test', 'Driving executions'],
        },
      ],
    },
    {
      title: 'Los Angeles, Agoura, Simi Valley & Newhall',
      blurb: 'The same packages, priced for their other three areas.',
      features: [
        'Pick-up and drop-off',
        'Preparation for the driving test',
        'Driving executions',
        'Two-hour classes',
      ],
      lessonHours: 2,
      packages: [
        {
          name: '2 Hours',
          detail: 'One driving class',
          hours: 2,
          price: 195,
          includes: ['Pick-up and drop-off', 'Preparation for the driving test', 'Driving executions', 'Two-hour classes'],
        },
        {
          name: '6 Hours',
          detail: 'Three driving classes',
          hours: 6,
          price: 599,
          includes: ['Pick-up and drop-off', 'Preparation for the driving test', 'Driving executions', 'Two-hour classes'],
          featured: true,
        },
        {
          name: '12 Hours',
          detail: 'Six driving classes',
          hours: 12,
          price: 1185,
          includes: ['Pick-up and drop-off', 'Preparation for the driving test', 'Driving executions', 'Two-hour classes'],
        },
      ],
    },
  ],

  individualLessons: [
    {
      name: 'Car rental for the DMV test — San Fernando Valley',
      description: 'Their car for the test, with driving practice, and they can make the DMV reservation.',
      price: 215,
    },
    {
      name: 'Car rental for the DMV test — other areas',
      description: 'Los Angeles, Agoura Hills, Simi Valley, Newhall and Canyon Country.',
      price: 249,
    },
  ],

  vehicles: {
    summary:
      'Lessons are taught in the school’s own cars, and one of them can be rented for the DMV drive test — including the DMV reservation — so the test is taken in a car the student already knows.',
    features: [
      'Free home pick-up and drop-off',
      'Car available to rent for the DMV test',
      'They can make the DMV reservation',
      'Freeway, parking, lane changes and intersections covered',
    ],
  },

  /** Published on their own site, unattributed beyond a first and last name. */
  testimonials: [
    {
      name: 'Samantha Jonas',
      quote:
        'From the very first day, the staff was incredibly friendly and professional. My instructor was very patient and explained everything clearly, which helped me feel confident and safe behind the wheel.',
    },
    {
      name: 'Larisse Lewis',
      quote:
        'The entire process was smooth, and the instructors were fantastic. They made sure to take their time with me, addressing any questions or concerns I had. The lessons were well-structured, and I always felt supported.',
    },
    {
      name: 'RJ Lucanas',
      quote:
        'The instructors are not only skilled but also very encouraging and patient. They made me feel comfortable behind the wheel from day one and taught me everything I needed to know to become a safe driver.',
    },
  ],

  rating: { value: '4.9', count: '185', source: 'Google' },

  sourceUrl: 'https://www.americanbestcalidrivingschool.com',
  internalNotes: [
    'LICENCE — no DMV school licence number anywhere on the site, despite "DMV-Certified & Licensed" and "Fully approved by the California DMV". Omitted. First thing to ask for.',
    'NO ADDRESS — the site publishes no street address at all, only a phone number. Canoga Park comes from the campaign workbook (Google listing), not from their own pages.',
    'DEFECT, AND THE BEST ONE — six hours costs $399 on their San Fernando Valley page and $599 on their Los Angeles, Agoura and Newhall pages. Twelve hours is $778 against $1185. Same school, same packages, same site, a 50% difference, and nothing anywhere explains why. A parent who compares two pages of one website finds this in thirty seconds. Both lists are shown here side by side deliberately — it is the single most valuable thing this preview can show them.',
    'DEFECT — the Valley page lists an 18-hour package as "6 Driving Classes", which is what the 12-hour package also says. One of the two is wrong.',
    'DEFECT — the footer says 2026 on every page except blog.html, which says 2025. The page titled "Our Gallery" in the nav contains blog posts, not a gallery.',
    'DO NOT REPRODUCE — "California\'s #1 DMV-Certified Driving School", "the most trusted and top-rated driving school in California", "95% of our students pass the DMV driving test on their first try", "Best Prices Guaranteed!", "Join Thousands of Safe & Confident Drivers". Five separate unverifiable claims, all left out. The 95% figure is the one with real exposure.',
    'PHOTOGRAPHY — every image on their site is licensed stock, and the "instructor and student" hero is a right-hand-drive car, so it was not photographed in California. None of it is used here. Their own cars and instructors are the ask.',
    'NO BRAND — no logo published, and the colours in their stylesheets are Bootstrap defaults (#007BFF, #DC3545, #28A745, #FFC107). Nothing to sample, so the template palette stands rather than a brand being invented for them.',
    'Instructors are described as bilingual but the second language is never named, so no language claim is made here.',
    '"We specialize with the elderly" is on their home page and is a genuine differentiator in this campaign. It has been given a programme page of its own.',
  ],
};
