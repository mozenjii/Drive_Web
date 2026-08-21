import type { Client } from '@/lib/types';

/**
 * AB Driving School — San Bernardino, CA.
 *
 * Scraped from abdrivingschools.com on 2026-08-13 (research/ab-driving-school).
 * Three pages: home, a genuinely useful DMV resources page, and a page of driver
 * education videos.
 *
 * Panel hero. Their only image is their Facebook profile picture — the logo laid
 * over a collage of road signs — so there is no photograph of the business to
 * build a stage hero from. Brand sampled from the logo: the pale yellow of the
 * diamond darkened to gold at 4.60:1, with the brown of the wheel as the accent.
 *
 * Two things they sell that most of this campaign does not: an online course and
 * a written-test drill, both priced and both bookable on the spot. Those lead.
 */
export const abDriving: Client = {
  slug: 'ab-driving-school',
  name: 'AB Driving School',
  short: 'AB Driving',
  variant: 'safe-route',
  heroStyle: 'editorial',

  photos: {
    hero: {
      src: '/clients/ab-driving-school/human-hero.jpg',
      alt: 'A learner smiling while driving in warm evening light',
      disclosure: 'Illustrative photography',
    },
  },

  logo: '/clients/ab-driving-school/logo.png',

  brand: {
    primary: '#837613',
    primaryDark: '#6F6410',
    primarySoft: '#F8F5E5',
    accent: '#936F37',
    accentDark: '#7C5E2E',
    accentSoft: '#F7F1E9',
    wash: '53, 48, 7',
    bg: '#FCFBF4',
    border: '#EEEAC6',
    borderSoft: '#F5F2DD',
    fgDim: '#736F5A',
  },

  sections: [
    {
      id: 'programs',
      kicker: 'Driver education',
      title: 'The written test, the thirty hours, and the six behind the wheel.',
      lede:
        'An online course that satisfies the DMV’s thirty-hour teen requirement, a drill for the written test, and one-to-one lessons in the car.',
    },
    {
      id: 'road-test',
      kicker: 'Driving test preparation',
      title: 'Six hours, taught as two hours across three days.',
      lede: 'Four manoeuvres decide most California drive tests. Press one and watch the route.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'Automatic, clean, and sanitised between students.',
      lede: 'Free local pick-up and drop-off from home, school or work, weekdays and weekends.',
    },
    {
      id: 'reviews',
      kicker: 'What students say',
      title: 'Their instructors get named by name.',
      lede: 'Every review on their own site thanks a person rather than a company.',
    },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'San Bernardino and Riverside.',
    },
    {
      id: 'cta',
      title: 'Call us for a reservation.',
      lede: 'Call (909) 881-3232, or start the online course tonight.',
    },
  ],

  story: {
    pullQuote: 'Comprehensive one to one behind the wheel lesson.',
    paragraphs: [
      'AB Driving School teaches across San Bernardino and Riverside, certified and licensed by the California DMV, with instructors their students name individually in almost every review.',
      'They run the full path rather than one part of it: an online driver education course that satisfies the DMV’s thirty-hour requirement for teens, a separate written-test drill for anyone who has not managed to pass it yet, and behind-the-wheel lessons that cover the six hours a minor needs.',
      'Their resources page is worth more than most schools’ entire websites — the DMV handbook, the parent-teen training guide, the road sign chart, and the words-and-phrases sheet for the Class C driving test in sixteen languages, from Arabic and Armenian through to Tagalog, Thai and Vietnamese.',
    ],
  },

  tagline: 'Online course, written test, and six hours in the car.',
  headline: 'Certified instructors, and students who remember their names.',
  heroLede:
    'Driver education and behind-the-wheel training in San Bernardino and Riverside. Free local pick-up from home, school or work, weekdays and weekends, mornings and afternoons.',

  city: 'San Bernardino',
  county: 'San Bernardino County',
  address: '1863 N E St, San Bernardino, CA 92405',

  phones: [{ display: '(909) 881-3232', raw: '+19098813232' }],
  email: 'abdrivingschool@hotmail.com',

  schedulingNote:
    'Flexible scheduling on weekdays and weekends, mornings and afternoons, with free local pick-up and drop-off from home, school or work. Lessons are reserved by phone; the online course starts whenever you do.',

  areas: [
    'San Bernardino',
    'Riverside',
    'Highland',
    'Colton',
    'Rialto',
    'Loma Linda',
    'Redlands',
    'Fontana',
  ],
  areasNote:
    'Their own pages name San Bernardino and Riverside. The surrounding cities listed here are the neighbouring ones within their stated local pick-up area — confirm the exact radius with them before this goes out.',

  programs: [
    {
      slug: 'online-drivers-ed',
      title: 'Online Driver Education',
      navLabel: 'Driver’s Ed',
      summary:
        'Certified and approved by the California DMV, satisfies the thirty-hour teen requirement, and the certificate arrives by post.',
      body: [
        'Eleven chapters, taken on a computer, an iPad or a phone, at whatever hour suits. The course saves your progress each time you sign out, and the quizzes and practice tests can be taken as many times as you like.',
        'It satisfies the DMV’s thirty-hour requirement for teens, and it is open to adults too. The DMV certificate is posted to you at completion.',
        'Access to their instructors comes with it, and their customer support is local and available around the clock.',
      ],
      bullets: [
        'Certified, licensed and approved by the California DMV',
        'Satisfies the DMV’s thirty-hour teen requirement',
        'Eleven chapters, on any device',
        'Progress saved between sessions',
        'Unlimited quizzes and practice tests',
        'DMV sample permit test and videos included',
        'Certificate posted at completion',
      ],
      price: 30,
      priceNote: 'Their published price for the full online course.',
    },
    {
      slug: 'written-test-prep',
      title: 'Written Test Preparation',
      navLabel: 'Test Prep',
      summary:
        'A repetition drill for the DMV written exam, at any age — built for people who have already failed it once.',
      body: [
        'This is the product almost nobody else in this campaign sells: not a course, a drill. Quiz repetition as extra study for the DMV written exam, for minors and adults alike.',
        'It exists for the specific person who has taken the written test and not passed, and who does not need thirty hours of theory — they need the same questions again until the answers stick.',
      ],
      bullets: [
        'For minors and adults, any age',
        'DMV sample permit test and videos',
        'Unlimited quizzes and tests',
        'Free local customer support, around the clock',
      ],
      price: 14.95,
      priceNote: 'Their published price.',
    },
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Lessons',
      navLabel: 'Behind the Wheel',
      summary:
        'One to one in the car, satisfying the six hours the DMV requires of a teen — two hours across three days.',
      body: [
        'Lessons are one instructor to one student, in an automatic, taught across San Bernardino and Riverside. The six hours the DMV requires of a minor are taught as two hours on each of three days.',
        'One-hour, two-hour and six-hour lessons are all available, and additional hours beyond a package carry a discount. The DMV certificate is provided at completion.',
        'Instructors collect and return students from home, school or work at no charge, on weekdays or weekends, mornings or afternoons.',
      ],
      bullets: [
        'One to one, in an automatic',
        'Six DMV hours as two hours across three days',
        'One, two and six-hour lessons available',
        'Discount on additional hours',
        'Free local pick-up and drop-off',
        'DMV certificate provided at completion',
      ],
      logistics: [
        'Reserved by phone — call for a reservation',
        'Weekdays and weekends, mornings and afternoons',
        'Students may be eligible for an insurance discount — their wording, and worth asking your insurer about',
      ],
    },
  ],

  individualLessons: [
    {
      name: 'Online Driver Education',
      description: 'Eleven chapters, DMV-approved, satisfies the thirty-hour teen requirement. Certificate posted at completion.',
      price: 30,
    },
    {
      name: 'Test Prep Online',
      description: 'Quiz repetition for the DMV written exam, for any age. Unlimited attempts.',
      price: 14.95,
    },
  ],

  vehicles: {
    summary:
      'Reliable automatic-transmission cars, cleaned and sanitised, with free local pick-up and drop-off from home, school or work before and after every lesson.',
    features: [
      'Automatic transmission',
      'Clean and sanitised vehicles',
      'Free local pick-up and drop-off',
      'Weekday and weekend availability',
    ],
  },

  /**
   * From the reviews published on their own home page. Trimmed for length, not
   * edited — and the instructor names are left in, because those names are the
   * whole point of the section.
   */
  testimonials: [
    {
      name: 'Angie Garcia',
      quote:
        'I just had my last lesson at AB Driving School with Antonio and it was an amazing experience! He was very patient and taught me all the rules of the road very efficiently! I felt very safe and calm driving with him as he thoroughly explained directions to me!',
    },
    {
      name: 'Marco Mercado',
      quote:
        'They teach you everything about driving and put you on the freeway and guide you safely. It is very worth getting the driving class.',
    },
    {
      name: 'Jacqueline Guadarrama',
      quote:
        'I would like to thank my instructor Antonio for being so patient with me and giving me great feedback on how to improve my driving. Thank you, Instructor Toni for your patience, professionalism, and dedication to help teens be great drivers.',
    },
    {
      name: 'Ericka Lopez',
      quote:
        'I just love the instructors, they are super sweet and patient. I can honestly say they are great instructors. I highly recommend AB Driving School. Definitely will be using them again soon for my son.',
    },
  ],

  rating: { value: '4.7', count: '181', source: 'Google' },

  sourceUrl: 'https://abdrivingschools.com',
  internalNotes: [
    'LICENCE — no DMV school licence number published, despite "certified, licensed & approved by California Department of Motor Vehicles" appearing twice. Omitted. First thing to ask for.',
    'INSTRUCTOR — one instructor is named over and over in their own reviews: Antonio, also called Toni and Anthony. One review notes he speaks Spanish. There is no staff page, so no instructor entry is invented here; the reviews carry the names instead. Same treatment as Academic (Mashal). Ask whether they want a named instructor page — the reviews say it would work.',
    'NO BEHIND-THE-WHEEL PRICES — the online course ($30) and the test drill ($14.95) are priced, but the in-car lessons are not. "1 hour, 2 hour, 6 hour lessons available" with no figure against any of them, and "discount on additional hours" with no discount named. That is the gap costing them bookings, and it is the same gap as Kanor.',
    'GEOGRAPHY MISMATCH — every page title says "Riverside CA" while the address and the footer say San Bernardino. Pick one; the title is what shows in a search result.',
    'DEFECT — typos on the home page in their own headings: "BEHIND THE WHEEL DRIVNG LESONS", "Create Acount" (twice), "Test Preperation" in the nav, "San Bernadino" in a heading.',
    'DEFECT — a cookie-consent banner (Complianz) contributes more text to their home page than their behind-the-wheel section does. It is the first thing a crawler sees and the second thing a visitor reads.',
    'PHOTOGRAPHY — none. Their only image asset is the Facebook profile picture: the logo over a collage of road signs. No photograph of a car, an instructor or a student anywhere. That is the ask.',
    'STRENGTH — their Helpful Resources page carries the DMV Class C words-and-phrases sheet in sixteen languages (Arabic, Armenian, Chinese, Farsi, Hindi, Japanese, Khmer, Korean, Portuguese, Punjabi, Russian, Spanish, Tagalog, Thai, Vietnamese, English). Nobody else in this campaign has anything like it, and it is buried behind a nav link called "Helpful Resources".',
    '"AB Driving school students may be eligible for insurance discounts" is their own hedged wording and is reproduced with the hedge intact.',
  ],
};
