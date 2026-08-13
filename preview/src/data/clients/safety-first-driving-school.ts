import type { Client } from '@/lib/types';

/**
 * Safety First Driving School — Westlake Village, CA.
 *
 * Every value below was read off safetyfirstds.com on 2026-08-09 and is recorded
 * in research/safety-first-driving-school.md. Nothing is estimated. Fields the
 * school does not publish (pass rate, on-site aggregate rating, vehicle model
 * years, insurance detail) are absent rather than guessed — see sites/VERIFY.md.
 */
export const safetyFirst: Client = {
  slug: 'safety-first-driving-school',
  name: 'Safety First Driving School',
  short: 'Safety First',
  variant: 'safe-route',

  heroStyle: 'stage',

  /**
   * The buyer is a parent, and their first question is which of the three things
   * California asks for actually applies to their child. That question leads,
   * and the price list answers it immediately underneath rather than sitting
   * behind a quote form.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Where to start',
      title: 'Tell us who you are.',
      lede:
        'California asks for three different things depending on your age and whether you already hold a permit. Pick the one that sounds like you.',
    },
    {
      id: 'packages',
      kicker: 'Packages',
      title: 'Three packages. Three prices. No form.',
      lede:
        'No quote form, no callback required. Choose who it is for and the prices below are yours.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'This is the line the examiner wants.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson — then see it done for real on test day.',
    },
    {
      id: 'instructors',
      kicker: 'Who teaches you',
      title: 'One instructor, start to finish.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'The car with your name on the door.',
    },
    { id: 'reviews', kicker: 'In their words', title: 'Thirty years of Ventura County parents.' },
    {
      id: 'areas',
      kicker: 'Service area',
      title: 'Where we pick up.',
    },
    {
      id: 'cta',
      title: 'Ready when you are.',
      lede: 'Call and we will find a slot that works around school or work.',
    },
  ],

  story: {
    pullQuote: 'Help us change the way people drive.',
    paragraphs: [
      'Safety First Driving School has taught in Westlake Village since 1995, and holds California DMV licence E4732.',
      'In-car training runs from the San Fernando Valley through Ventura and Ojai, with lessons scheduled seven days a week and pick-up from home, office or school.',
      'Instruction is available in English and Spanish.',
    ],
  },

  // Their own logo, scraped from safetyfirstds.com/media/img/logo.png.
  logo: '/clients/safety-first-driving-school/logo-restored.png',

  /**
   * Their own photography, which this preview shipped without for far too long
   * — it ran on shared stock and a generic placeholder logo while eleven of
   * their own images sat unused in research/safety-first-assets/.
   *
   * The hero is their signwritten student-driver car rather than one of their
   * banner images: the banners have the school name baked into the artwork, and
   * a headline over the top of a headline reads as a mistake.
   */
  photos: {
    contact: {
      src: '/clients/safety-first-driving-school/contact-team-car.webp',
      alt: 'An instructor and adult learner standing beside a branded Safety First Driving School training car',
      disclosure: 'AI-generated promotional image',
    },
    hero: {
      src: '/clients/safety-first-driving-school/car-image.jpg',
      alt: 'A white Safety First Driving School car, signwritten with STUDENT DRIVER, the school name and the phone number 805.374.2393',
    },
    support: {
      src: '/clients/safety-first-driving-school/banner-621e980db672d.JPG',
      alt: 'A smiling young driver in the driver’s seat holding up a set of car keys, on the Safety First banner',
    },
  },

  /**
   * Verified from their own recruitment banner, which is the artwork on
   * safetyfirstds.com — "Safety First is seeking people that love to teach,
   * drive and have fun on the job!" The requirements below are transcribed from
   * it, not inferred.
   */
  hiring: {
    requirements: [
      'A California driver licence',
      'A high school diploma or equivalent',
      'An excellent driving record',
      'At least six years of driving experience',
      'Pre-licensing training is provided by the school',
    ],
  },

  /**
   * Sampled from that logo: purple #605484, orange #F06C30.
   *
   * The purple ships as-is — 6.78:1 on white. The orange does NOT: at 3.05:1 it
   * fails WCAG AA for normal text and for white-on-orange buttons, so the accent
   * is their hue darkened to #C25214 (4.65:1). Their brand, legible.
   * See brand.test.ts, which fails the build if either drops below 4.5:1.
   */
  brand: {
    primary: '#605484',
    primaryDark: '#4C4269',
    primarySoft: '#EDEAF3',
    accent: '#C25214',
    accentDark: '#9E4210',
    accentSoft: '#FDEDE2',
    wash: '40, 33, 58',
    // Neutrals pulled toward their purple so borders and muted text belong to
    // the same palette. fgDim measured at 5.0:1 on bg — the previous #6B7BA5
    // was 4.2:1 and failed AA for the "not included" rows.
    bg: '#F6F4FA',
    border: '#D6CFE4',
    borderSoft: '#E8E3F0',
    fgDim: '#6A6188',
  },
  tagline: 'Tell us who you are and we’ll tell you what you need.',
  headline: 'Thirty years teaching Ventura County to drive.',

  // Their registered address is Westlake Village; "Thousand Oaks Bl" is the street.
  // The workbook's "Thousand Oaks" is the street name misread as the city.
  city: 'Westlake Village',
  county: 'Ventura County',
  address: '3055 E. Thousand Oaks Bl, Westlake Village, CA 91362',

  licence: 'E4732', // about_us.php — matches the verified list in OFFERS.md §7
  founded: '1995', // about_us.php

  phones: [
    { label: 'Ventura County', display: '(805) 374-2393', raw: '+18053742393' },
    { label: 'San Fernando Valley', display: '(818) 865-9455', raw: '+18188659455' },
  ],
  email: 'info@safetyfirstds.com',

  // Their own site contradicts itself: index.php says 10am, four other pages say
  // 11am. Using the majority value; flagged to the owner as a defect to confirm.
  hours: [
    { days: 'Monday – Friday', hours: '11:00 AM – 6:00 PM' },
    { days: 'Saturday', hours: '10:00 AM – 2:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  schedulingNote: 'Lessons are scheduled 7 days a week, 7am to 10pm, with pickup at home, office or school.',

  areas: [
    'Westlake Village', 'Thousand Oaks', 'Agoura Hills', 'Calabasas', 'Oak Park',
    'Moorpark', 'Newbury Park', 'Camarillo', 'Malibu',
  ],
  areasNote: 'Malibu is served with an additional travel fee. In-car training runs from the San Fernando Valley through Ventura and Ojai.',
  languages: ['English', 'Spanish'],

  social: {
    facebook: 'https://facebook.com/safetyfirstds',
    instagram: 'https://instagram.com/safetyfirst805',
    twitter: 'https://twitter.com/safetyfirstds',
  },

  packageGroups: [
    {
      title: 'Teens with a Permit',
      blurb: 'You have passed the permit test and you are ready for behind-the-wheel hours.',
      features: [
        'Introduction to Driving',
        'Basic surface streets',
        'DMV Exam Preparation',
        'Freeways',
        'Canyons',
        'Defensive Driving',
        'DMV Drive Test Service',
      ],
      packages: [
        {
          name: 'Basic',
          detail: '6 hours — three 2-hour lessons',
          hours: 6,
          price: 475,
          includes: ['Introduction to Driving', 'Basic surface streets', 'DMV Exam Preparation'],
        },
        {
          name: 'Standard',
          detail: '10 hours — five 2-hour lessons',
          hours: 10,
          price: 775,
          featured: true,
          includes: [
            'Introduction to Driving', 'Basic surface streets', 'DMV Exam Preparation',
            'Freeways', 'Canyons',
          ],
        },
        {
          name: 'Deluxe',
          detail: '14 hours — seven 2-hour lessons',
          hours: 14,
          price: 975,
          includes: [
            'Introduction to Driving', 'Basic surface streets', 'DMV Exam Preparation',
            'Freeways', 'Canyons', 'Defensive Driving', 'DMV Drive Test Service',
          ],
        },
      ],
    },
    {
      title: 'Teens without a Permit',
      blurb: 'Includes the DMV-required 30-hour online driver education course you need before the permit test.',
      features: [
        'Online Driver Education',
        'Introduction to Driving',
        'Basic surface streets',
        'DMV Exam Preparation',
        'Freeways',
        'Canyons',
        'Defensive Driving',
        'DMV Drive Test Service',
      ],
      packages: [
        {
          name: 'Driver’s Ed & 6 hours',
          detail: 'Online course plus three 2-hour lessons',
          hours: 6,
          price: 495,
          // $475 + $59 standalone = $534. Bundled at $495. The saving is real and unadvertised.
          saving: 'Saves $39 against buying the course separately',
          includes: [
            'Online Driver Education', 'Introduction to Driving', 'Basic surface streets',
            'DMV Exam Preparation',
          ],
        },
        {
          name: 'Driver’s Ed & 10 hours',
          detail: 'Online course plus five 2-hour lessons',
          hours: 10,
          price: 795,
          featured: true,
          saving: 'Saves $39 against buying the course separately',
          includes: [
            'Online Driver Education', 'Introduction to Driving', 'Basic surface streets',
            'DMV Exam Preparation', 'Freeways', 'Canyons',
          ],
        },
        {
          name: 'Driver’s Ed & 14 hours',
          detail: 'Online course plus seven 2-hour lessons',
          hours: 14,
          price: 995,
          saving: 'Saves $39 against buying the course separately',
          includes: [
            'Online Driver Education', 'Introduction to Driving', 'Basic surface streets',
            'DMV Exam Preparation', 'Freeways', 'Canyons', 'Defensive Driving',
            'DMV Drive Test Service',
          ],
        },
      ],
    },
    {
      title: 'Adult Students',
      blurb: 'No permit-holding period, no classroom requirement. Same instructors, same cars.',
      features: [
        'Introduction to Driving',
        'Basic surface streets',
        'DMV Exam Preparation',
        'Freeways',
        'Canyons',
        'Defensive Driving',
        'DMV Drive Test Service',
      ],
      packages: [
        {
          name: 'Basic',
          detail: '6 hours — three 2-hour lessons',
          hours: 6,
          price: 475,
          includes: ['Introduction to Driving', 'Basic surface streets', 'DMV Exam Preparation'],
        },
        {
          name: 'Standard',
          detail: '10 hours — five 2-hour lessons',
          hours: 10,
          price: 775,
          featured: true,
          includes: [
            'Introduction to Driving', 'Basic surface streets', 'DMV Exam Preparation',
            'Freeways', 'Canyons',
          ],
        },
        {
          name: 'Deluxe',
          detail: '14 hours — seven 2-hour lessons',
          hours: 14,
          price: 975,
          includes: [
            'Introduction to Driving', 'Basic surface streets', 'DMV Exam Preparation',
            'Freeways', 'Canyons', 'Defensive Driving', 'DMV Drive Test Service',
          ],
        },
      ],
    },
  ],

  individualLessons: [
    { name: 'Introduction to driving', description: 'Initial driving lesson — first time on the road.', price: 165 },
    { name: 'Basic surface streets', price: 165 },
    { name: 'DMV exam preparation', price: 165 },
    { name: 'Freeways', description: 'Entering, exiting, lane changes, space cushion and the other skills unique to freeway driving.', price: 165 },
    { name: 'Canyons', price: 165 },
    { name: 'Defensive driving', price: 165 },
    { name: 'Online Driver Education', description: 'DMV-approved, available anywhere in California.', price: 59 },
    { name: 'DMV Test service — 2 hours', description: 'For students in the same city as the DMV office.', price: 195 },
    { name: 'DMV Test Service — 3 hours', description: 'One 3-hour appointment when the DMV office is in a different city.', price: 255 },
    { name: 'Traffic School — Online', description: 'Provided by Academy Traffic School, licence 1533.', price: 29.99 },
    { name: 'Traffic School — Paper Booklet', description: 'Mailed to you or collected from the office. Express shipping +$12.', price: 59.99 },
  ],

  programs: [
    {
      slug: 'drivers-ed',
      title: 'Online Driver’s Education',
      navLabel: 'Driver’s Ed',
      summary:
        'The DMV-required course every California student under 18 completes before the permit test. Ten chapters and a final exam, taken entirely online.',
      body: [
        'California requires a driver under 18 to complete three things: 30 hours of driver education, 6 hours of professional behind-the-wheel training, and 50 hours of supervised practice with a parent or guardian. This course is the first of the three.',
        'It is written to be read in short sittings. Start and stop whenever you like — your progress is saved, and there is no classroom to attend.',
      ],
      bullets: [
        'Ten chapters and a final exam',
        'DMV-approved throughout California',
        'For students aged 15½ and older',
        'No classroom attendance required',
        'Start and stop whenever you like',
      ],
      price: 59,
      priceNote: 'Bundled with behind-the-wheel hours from $495.',
    },
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Two-hour lessons, one-to-one, in a dual-control Toyota Prius. Pickup at home, office or school.',
      body: [
        'Behind-the-wheel training begins once the online driver education course is complete and the DMV permit test is passed. Every lesson is two hours and runs one instructor to one student.',
        'The DMV requires a permit to be held for six months before the drive test can be taken, and lessons book up several weeks ahead in the busy months — starting early is worth more than any single lesson.',
      ],
      bullets: [
        'Fundamentals of driving',
        'DMV drive-test preparation',
        'Freeway and canyon driving',
        'Defensive driving',
        'Accident avoidance techniques',
        'Evasive manoeuvres and emergency procedures',
      ],
      logistics: [
        'Scheduling 7 days a week, 7am to 10pm',
        'Each lesson is two hours long',
        'Pickup at home, office or school',
        'Newer Toyota Prius with instructor brake',
      ],
    },
    {
      slug: 'road-test',
      title: 'DMV Drive Test Service',
      navLabel: 'Road Test',
      summary:
        'We drive you to the DMV appointment in the school car you have been training in, and you take the test in it.',
      body: [
        'Taking the drive test in an unfamiliar car is the single most avoidable way to fail it. The DMV test service puts you in the same dual-control Prius you have trained in, with an instructor who has driven the examiner routes in this county for years.',
        'Which service you need depends on where you live relative to the DMV office.',
      ],
      bullets: [
        'The car you trained in, on the day',
        'Instructors who know the local examiner routes',
        'A warm-up drive before the appointment',
        'Included outright in the 14-hour Deluxe package',
      ],
      priceNote: '$195 for two hours in the same city as the DMV office, $255 for three hours when it is a different city. Included in the Deluxe package.',
    },
    {
      slug: 'traffic-school',
      title: 'Traffic School',
      summary:
        'A DMV-licensed traffic violator school, online or on paper, valid statewide.',
      body: [
        'Both formats are licensed for use anywhere in California. The online course is self-paced and saves your progress, so it can be finished in an afternoon or spread over a few days. The booklet can be read anywhere at all.',
      ],
      bullets: [
        'DMV-licensed traffic violator school (TVS)',
        'Licensed for use statewide',
        'Online course is self-paced and saves progress',
        'Booklet posted to you or collected from the office',
      ],
      priceNote: 'Online $29.99 · Paper booklet $59.99 · Express shipping +$12. The online course is provided by Academy Traffic School, licence 1533.',
    },
    {
      title: 'Senior Program',
      summary:
        'A one-hour or three-hour refresher for older drivers who want to stay confident and independent on the road.',
      bullets: ['One-hour package', 'Three-hour package'],
    },
  ],

  instructors: [
    {
      name: 'John Stapley',
      initials: 'JS',
      role: 'Full-time senior instructor',
      based: 'Woodland Hills',
      years: '30+',
      bio: 'A fixture in driver training for over thirty years, and the instructor who trains our new instructors. A lifelong music enthusiast.',
    },
    {
      name: 'Frank Anabtawi',
      initials: 'FA',
      role: 'Full-time instructor',
      based: 'Simi Valley',
      years: '7+',
      bio: 'Seven years teaching across Ventura County. Spends his time outside the car with family and friends.',
    },
    {
      name: 'Edgar Alvarez',
      initials: 'EA',
      role: 'Full-time instructor',
      based: 'Newbury Park',
      years: '4+',
      bio: 'Bilingual instructor, fluent in English and Spanish, teaching students across the county in whichever they are most comfortable with.',
      languages: ['English', 'Spanish'],
    },
    {
      name: 'Jonathan Harnes',
      initials: 'JH',
      role: 'Part-time instructor',
      based: 'Moorpark',
      years: '10',
      bio: 'An electrician who designs traffic signals when he is not teaching — which gives him a working knowledge of the road system almost no other instructor has. Values his family time.',
    },
    {
      name: 'Adam Wurtz',
      initials: 'AW',
      role: 'Part-time instructor',
      based: 'Moorpark',
      // Deliberately no bio: the bio on their live site describes a different
      // person ("Claudia"). Flagged to the owner rather than reproduced or invented.
    },
  ],

  vehicles: {
    summary:
      'Newer Toyota Priuses, chosen for safety and for being easy cars to learn in.',
    features: [
      'Passenger-side instructor safety brake',
      'Extra rear-view mirrors for the instructor',
      'Full airbag package',
      'Clean and maintained between lessons',
    ],
  },

  // Their own published testimonials, reproduced verbatim. Because these are
  // already public on testimonials.php, reusing them is VERIFY.md-safe.
  testimonials: [
    { name: '54Farfy', quote: 'Fantastic driving school for teenagers. Amer and his team are great to work with.' },
    { name: 'Archana Timmaraju', quote: 'I strongly recommend this school. I passed my driving test at the first attempt.' },
    { name: 'ZaeTrain Salman', quote: 'I had a great experience today with safety first. And I just passed my test with 0 mistakes.' },
    { name: 'Kayla K.', location: 'Westlake Village', quote: 'Great experience with safety first. I did the 10 hour package and upgraded.' },
    { name: 'John G.', location: 'Camarillo', quote: 'All three of my girls have used Safety First for their driving school.' },
    { name: 'Denise B.', location: 'Thousand Oaks', quote: 'We had a great experience with Safety First. It was easy to schedule.' },
    { name: 'Thomas B.', location: 'Simi Valley', quote: 'Safety First Driving School instructors always know what they are doing.' },
    { name: 'Ramesh Thangavel', quote: 'My wife, who is always nervous about driving a car and taking any exams passed her test today.' },
    { name: 'Fatima Salah', quote: 'Got my licenses after two lessons!! Super helpful and patient.' },
  ],

  rating: { value: '4.9', count: '70', source: 'Google' },

  sourceUrl: 'https://safetyfirstds.com',
  internalNotes: [
    'Licence E4732 confirmed on their own about_us.php.',
    'Do NOT cite a broken pricing page — it renders correctly in a real browser.',
    'Verified defects to lead with: jQuery 1.9.1 and end-of-life AngularJS on a payment page, pinch-zoom disabled (WCAG 2.1 AA SC 1.4.4), Adam Wurtz bio describes the wrong person, hours contradict between pages, 2024 copyright.',
    'They claim a driver-ed pass rate "well above 99%" on their own homepage. Do not restate it as ours.',
  ],
};
