import type { Client } from '@/lib/types';

/**
 * H and G Best Driving School Corp. — Highland, CA.
 *
 * Scraped from handgbestdrivingschool.com on 2026-08-09
 * (research/h-and-g-best-driving-school).
 *
 * Safe Route, because every genuine review on their own site says the same
 * thing: "I was nervous and my instructor kept me calm." Two named, licensed
 * instructors who teach anxious beginners is the product. The template has to
 * lead with reassurance, not with speed.
 *
 * NO brand override and NO logo. What they use as a logo is a stock clip-art
 * pile of road signs, and their site has no consistent colour of its own.
 * Inventing a brand for them would be dishonest; the absence is a talking point.
 *
 * Their homepage counters — "1.8K+ Trained Students", "1.5K+ 5-Star Ratings" —
 * are not reproduced anywhere here. 1.5K five-star ratings against 162 Google
 * reviews is not a number that survives one click, and republishing it would
 * transfer their credibility problem onto us.
 */
export const handG: Client = {
  slug: 'h-and-g-best-driving-school',
  name: 'H and G Best Driving School',
  short: 'H and G',
  variant: 'safe-route',

  heroStyle: 'stage',

  /**
   * Their whole register is reassurance — "Keep calm and steer on", "Signal,
   * Mirror, Over-Shoulder, and Go!", "whether you're a nervous novice" — and
   * every review on their site says the same thing about being nervous. The
   * nervous learner leads the page rather than being a footnote.
   *
   * Not reproduced: "1.8K+ Trained Students", "1.5K+ 5-Star Ratings", "2.2K+
   * Loyal Members". Google shows 162 reviews.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Our services',
      title: 'Signal, mirror, over-shoulder, and go.',
      lede:
        'Personalised instruction tailored to your learning style and your pace — whether you are a nervous novice or brushing up after years away.',
    },
    {
      id: 'packages',
      kicker: 'Pricing',
      title: 'A free consultation, then the number.',
      lede: 'A free consultation first, then the numbers. No callback required.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'Keep calm and steer on.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    { id: 'reviews', kicker: 'In their words', title: '“I was nervous and they kept me calm.”' },
    {
      id: 'instructors',
      kicker: 'Who teaches you',
      title: 'Matched to how you learn.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'A car built to be forgiving.',
    },
    {
      id: 'areas',
      kicker: 'Where we pick up',
      title: 'Across the county.',
    },
    {
      id: 'cta',
      title: 'Ready to take the wheel?',
      lede: 'Free consultation. Call and we will find a slot that works.',
    },
  ],

  story: {
    pullQuote: 'Drive with safety. Navigate with skill.',
    paragraphs: [
      'H and G Best Driving School is licensed by the California DMV, licence E0307.',
      'The school is committed to more than teaching people how to drive — the aim is the skills, confidence and knowledge to navigate the roads safely and responsibly.',
      'Instructors offer personalised instruction tailored to each student’s learning style and pace, so that students not only pass the driving test but become skilled and conscientious drivers for life.',
    ],
  },

  photos: {
    hero: {
      src: '/clients/h-and-g-best-driving-school/hero.jpg',
      alt: 'A new driver holding up her licence through the car window',
    },
    roadTest: {
      src: '/clients/h-and-g-best-driving-school/lesson.jpg',
      alt: 'An instructor marking a checklist while a student drives',
    },
    vehicle: {
      src: '/clients/h-and-g-best-driving-school/training.jpg',
      alt: 'A dual-control training car with the instructor in the passenger seat',
    },
    support: {
      src: '/clients/h-and-g-best-driving-school/road.jpg',
      alt: 'An open road heading out of the Inland Empire',
    },
  },

  tagline: 'Drive with safety. Navigate with skill.',
  headline: 'Choose your instructor. Book the slot. That is the whole process.',

  city: 'Highland',
  county: 'San Bernardino County',
  address: '26940 Base Line St., Suite #110, Highland, CA 92346',

  licence: 'E0307',

  phones: [{ display: '(909) 770-0003', raw: '+19097700003' }],
  email: 'info@handgbestdrivingschool.com',

  hours: [
    { days: 'Monday – Friday', hours: '9:00 AM – 5:00 PM' },
    { days: 'Saturday – Sunday', hours: 'Closed' },
  ],
  schedulingNote:
    'Book, reschedule and cancel online. Pick-up and drop-off is included at no extra cost within ten miles.',

  areas: ['Highland', 'San Bernardino', 'Redlands', 'Loma Linda'],
  areasNote:
    'Pick-up and drop-off is free within a ten-mile radius of the Base Line Street office.',

  hiring: {
    // Their own homepage banner: "ATTENTION - WE'RE NOW HIRING DRIVING
    // INSTRUCTORS - PLEASE CALL FOR FURTHER DETAILS".
    requirements: ['Call (909) 770-0003 for details'],
  },

  packageGroups: [
    {
      title: 'Behind-the-wheel packages',
      blurb:
        'Every package uses the school car — insured and dual-controlled — at no extra cost, and you pick which licensed instructor you train with after checkout.',
      features: [
        'Insured, dual-controlled school car',
        'Free pick-up and drop-off within 10 miles',
        'Choose your own licensed instructor',
        'Book, reschedule and cancel online',
        'Freeway driving and night-time driving',
        'DMV certificate of completion',
      ],
      packages: [
        {
          name: 'Bronze',
          detail: 'One 2-hour session',
          hours: 2,
          price: 169.99,
          saving: 'Reduced from $199.99',
          includes: [
            'Insured, dual-controlled school car',
            'Free pick-up and drop-off within 10 miles',
            'Choose your own licensed instructor',
            'Book, reschedule and cancel online',
          ],
        },
        {
          name: 'Silver',
          detail: 'Three 2-hour sessions — six hours',
          hours: 6,
          price: 479.99,
          featured: true,
          saving: 'Reduced from $549.99',
          includes: [
            'Insured, dual-controlled school car',
            'Free pick-up and drop-off within 10 miles',
            'Choose your own licensed instructor',
            'Book, reschedule and cancel online',
            'Freeway driving and night-time driving',
            'DMV certificate of completion',
          ],
        },
        {
          name: 'Gold',
          detail: 'Five 2-hour sessions — ten hours',
          hours: 10,
          price: 749.99,
          saving: 'Reduced from $999.99',
          includes: [
            'Insured, dual-controlled school car',
            'Free pick-up and drop-off within 10 miles',
            'Choose your own licensed instructor',
            'Book, reschedule and cancel online',
            'Freeway driving and night-time driving',
            'DMV certificate of completion',
          ],
        },
      ],
    },
  ],

  individualLessons: [
    {
      name: 'Online Education',
      description: 'State-approved, taken at your own pace on a laptop, tablet or phone.',
      price: 49.99,
    },
    { name: 'Bronze — one 2-hour session', price: 169.99 },
    { name: 'Silver — three 2-hour sessions', price: 479.99 },
    { name: 'Gold — five 2-hour sessions', price: 749.99 },
    {
      name: 'Test Day Drive',
      description:
        'The school car for the whole DMV test, plus the drive there, check-in help and a results review afterwards. Book your DMV appointment first.',
      price: 249.99,
    },
    {
      name: 'Freeway Driving Training',
      description: 'Entering, merging, exiting, lane changes, following distances and speed judgement.',
      price: 250,
    },
  ],

  programs: [
    {
      slug: 'behind-the-wheel',
      image: '/clients/h-and-g-best-driving-school/lesson.jpg',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Two-hour sessions that build on each other in a fixed order, so you always know what the next lesson covers.',
      body: [
        'The first session is the pre-check list, steering control, braking in different conditions, vision, residential streets and intersections. By the end of it the permit is signed and you have driven on real streets.',
        'The second adds residential parking, lane changes, right and left turns, U-turns, three-point turns, uphill and downhill parking and reversing. The third takes you onto the freeway — entering, exiting, night driving if the appointment falls late enough — and finishes with the DMV certificate of completion.',
        'Sessions four and five, in the Gold package, are yours: weak points, the roads you actually drive, a full drive-test review, emergency situations and what to do when the car itself goes wrong.',
      ],
      bullets: [
        'Steering control and braking in varied conditions',
        'Turns, intersections, U-turns and three-point turns',
        'Uphill and downhill parking, reversing',
        'Freeway entering, exiting and lane changes',
        'Night-time driving where the appointment allows',
        'Emergency situations and vehicle breakdown',
      ],
      logistics: [
        'Every session is two hours',
        'Insured, dual-controlled school car included',
        'Free pick-up and drop-off within ten miles',
        'Choose your instructor after checkout',
        'Book, reschedule and cancel online',
      ],
      price: 169.99,
      priceNote: 'From $169.99 for one session; $479.99 for six hours, $749.99 for ten.',
    },
    {
      slug: 'test-day-drive',
      image: '/clients/h-and-g-best-driving-school/hero.jpg',
      title: 'Test Day Drive',
      navLabel: 'Test Day',
      summary:
        'The school car for the whole DMV appointment, with an instructor who takes you there, gets you checked in and goes through the result afterwards.',
      body: [
        'You drive from the pick-up point to the DMV office with your instructor, going over the test on the way. They help you check in and wait in line, you take the test in the insured school car, and afterwards you sit down and go through the examiner’s marks together.',
        'Book your drive-test appointment with the DMV first — the Test Day Drive is scheduled around it.',
      ],
      bullets: [
        'The insured school car for the entire test',
        'Free pick-up and drop-off within ten miles',
        'Test preparation on the drive over',
        'Help checking in and waiting in line',
        'Results reviewed with your instructor',
      ],
      price: 249.99,
    },
    {
      slug: 'freeway-training',
      image: '/clients/h-and-g-best-driving-school/road.jpg',
      title: 'Freeway Driving Training',
      navLabel: 'Freeway',
      summary:
        'A standalone session for drivers who are fine on surface streets and avoid the freeway entirely.',
      bullets: [
        'Entering and exiting the freeway safely',
        'Merging smoothly with traffic flow',
        'Proper lane-changing technique',
        'Freeway signs and road markings',
        'Safe following distances',
        'Managing speed and making decisions at speed',
      ],
      price: 250,
    },
    {
      slug: 'online-education',
      title: 'Online Education',
      navLabel: 'Online Course',
      summary:
        'State-approved and taken from home on whatever device you already have.',
      bullets: [
        'Traffic laws, signs, signals and right of way',
        'Vehicle controls, steering and braking systems',
        'Defensive driving and hazard recognition',
        'Adverse weather and low visibility',
        'Emergency response and breakdowns',
        'Impaired driving, insurance and liability',
      ],
      price: 49.99,
      priceNote: 'Reduced from $99.99.',
    },
  ],

  instructors: [
    {
      name: 'Hany Aly',
      initials: 'HA',
      role: 'Driving instructor',
      // Their instructor licence numbers, published on their own about page.
      bio: 'Licence I3204055. Teaches from basic manoeuvres to advanced technique, with a strong emphasis on clear communication and patience, and on defensive habits outlasting the test.',
    },
    {
      name: 'Ghada Mahmoud',
      initials: 'GM',
      role: 'Driving instructor',
      years: '10+',
      bio: 'Licence I3064086. Over ten years teaching, and the instructor named in almost every review here — usually by a student who says they arrived nervous and left calm.',
    },
  ],

  vehicles: {
    summary:
      'Insured, dual-controlled cars — the instructor has a second brake pedal on the passenger side — provided for both training and testing at no extra cost.',
    features: [
      'Second brake pedal on the passenger side',
      'Insured for training and for the DMV test',
      'Included in every package at no extra cost',
      'Free pick-up and drop-off within ten miles',
    ],
  },

  /**
   * Only reviews that carry a date and describe a specific lesson. The three
   * unattributed quotes on their homepage read as placeholder copy, and their
   * review widget also contains a "TestReviewer" entry and a marketing spam
   * post. None of those are reproduced.
   */
  testimonials: [
    {
      name: 'Slade Rivera',
      quote:
        'With my instructor Ghada I was able to do amazing on my first lesson. She was incredibly patient with me, she didn’t make me stress when I would make a mistake.',
    },
    {
      name: 'yvonne',
      quote:
        'I was super nervous because this was my first session. My instructor, Ghada, was super kind and helped me to stay calm throughout my drive!',
    },
    { name: 'Eman', quote: 'It was my first time driving and my instructor was extremely helpful!' },
  ],

  rating: { value: '5.0', count: '162', source: 'Google' },

  sourceUrl: 'https://handgbestdrivingschool.com',
  internalNotes: [
    'Licence E0307 confirmed on their own homepage and in their footer.',
    'Instructor licences I3204055 (Hany Aly) and I3064086 (Ghada Mahmoud) are published on their about page.',
    'DEFECT — their public review widget contains marketing spam: a December 2025 post from "Fiona Nowell / Letstock AI" pitching a video generator, plus an entry from "TestReviewer". Both sit under a 5.0 rating on their About page. This is the single strongest thing to lead with.',
    'DEFECT — homepage counters claim 1.5K+ 5-star ratings against 162 Google reviews. Not reproduced here; raise it as a credibility risk, not as an accusation.',
    'They have no logo — what sits in the header is stock clip-art of road signs — and no consistent brand colour. This preview therefore ships with the template palette. That gap is a deliverable, not an oversight.',
    'They are actively hiring instructors; the banner is theirs.',
    'All photography here is licensed stock already on their site. Replace before production.',
    'Service areas beyond Highland are the cities inside their stated ten-mile pick-up radius. Confirm with the owner.',
  ],
};
