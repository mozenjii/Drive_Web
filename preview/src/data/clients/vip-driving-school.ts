import type { Client } from '@/lib/types';

/**
 * VIP Driving School LLC — Modesto and Tracy, CA.
 *
 * Scraped from vipdrivingschools.com on 2026-08-13
 * (research/vip-driving-school). Five pages: one home page and one page per
 * service region.
 *
 * Panel hero. They publish no photograph of a person — only two shots of their
 * own wrapped car, one AI-generated image (not used, see internalNotes) and a
 * "licensed & bonded" badge. What they do have is operations: two offices, three
 * service regions, five languages, and a full price list. That is what the panel
 * composition is for.
 *
 * Brand sampled from their own logo — the green of the wordmark and the yellow of
 * the traffic-light disc, each darkened until it clears AA (raw green was 2.42:1,
 * raw yellow 1.36:1). Their red is deliberately left out of the palette: a red
 * accent on a booking button reads as an error state.
 */
export const vipDriving: Client = {
  slug: 'vip-driving-school',
  name: 'VIP Driving School',
  short: 'VIP',
  variant: 'apex',
  heroStyle: 'panel',

  brand: {
    primary: '#438431',
    primaryDark: '#3B752B',
    primarySoft: '#EAF6E7',
    accent: '#79790F',
    accentDark: '#6C6B0E',
    accentSoft: '#F8F8E7',
    wash: '27, 54, 20',
    bg: '#F6FBF5',
    border: '#D4ECCD',
    borderSoft: '#E7F5E3',
    fgDim: '#5E745E',
  },

  photos: {
    vehicle: {
      src: '/clients/vip-driving-school/car.jpg',
      alt: 'A VIP Driving School training car in the school’s green, black and gold wrap',
    },
  },

  /**
   * Their own emphasis, in their own order: what the training covers, then the
   * price list, then the drive test, then where they will collect you. The
   * "Since 2004" line is theirs and leads the About page.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Student driver training',
      title: 'From scratch to freeway driving.',
      lede:
        'Behind-the-wheel training for minors, adults and seniors, with instruction available in five languages.',
    },
    {
      id: 'packages',
      kicker: 'Courses and prices',
      title: 'Every package, and what is not in it.',
      lede:
        'Teen and adult packages priced on their own site — including the certificate fee that the six-hour package does not cover.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'DMV test service, booking included.',
      lede: 'Four manoeuvres decide most California drive tests. Press one and watch the route.',
    },
    {
      id: 'vehicles',
      kicker: 'Our vehicles',
      title: 'Inspected by the California DMV.',
      lede:
        'Cars with current safety technology, checked by the DMV, and free pick-up and drop-off inside ten miles of the Modesto office.',
    },
    {
      id: 'reviews',
      kicker: 'What students say',
      title: 'Three reviews they chose to publish.',
    },
    {
      id: 'areas',
      kicker: 'Areas serviced',
      title: 'Modesto, Tracy, and out into the Bay Area.',
    },
    {
      id: 'cta',
      title: 'Give us a call and register today.',
      lede: 'Call (209) 660-5111, or email and they will come back to you.',
    },
  ],

  story: {
    pullQuote: 'Selecting the right driving school is a pivotal decision for you, your family or your loved ones.',
    paragraphs: [
      'VIP Driving School has been teaching in Stanislaus County since 2004, and now runs two offices — Modesto and Tracy — covering the Central Valley and out into the East Bay.',
      'They are licensed, bonded and insured, approved by the California DMV, and their instructors are licensed and background-checked. Instruction is offered in English, French, Farsi, Pashto and Hindi, which is unusual for a school of this size and is the detail most likely to decide a booking in a multilingual household.',
      'Their cars carry current safety technology and are inspected by the California DMV. Lessons are scheduled around the student, weekends included, with a thirty-minute buffer asked for before every appointment.',
    ],
  },

  tagline: 'Behind-the-wheel training in Modesto and Tracy since 2004.',
  headline: 'Safety first, in five languages.',
  heroLede:
    'Behind-the-wheel training for minors, adults and seniors across Modesto, Tracy and the East Bay. Licensed, bonded and DMV-approved, with free pick-up and drop-off.',

  city: 'Modesto',
  county: 'Stanislaus County',
  address: '3600 Sisk Rd, Suite 5A Unit 4, Modesto, CA 95356',

  founded: '2004',

  phones: [{ display: '(209) 660-5111', raw: '+12096605111' }],
  email: 'avipdrivingschools@gmail.com',
  languages: ['English', 'French', 'Farsi', 'Pashto', 'Hindi'],

  schedulingNote:
    'Lessons run on a flexible schedule including weekends, booked by phone after registration. They ask for a thirty-minute buffer before a lesson — traffic on the way to a pick-up is the one thing an instructor cannot control.',

  areas: [
    'Modesto',
    'Salida',
    'Riverbank',
    'Ceres',
    'Hughson',
    'Turlock',
    'Stockton',
    'Oakdale',
    'Escalon',
    'Ripon',
    'Manteca',
    'Lathrop',
    'Tracy',
    'Mountain House',
    'Livermore',
    'Dublin',
    'Pleasanton',
  ],
  areasNote:
    'Three service regions: Modesto and its surrounds, Tracy and Manteca, and the East Bay — Livermore, Dublin, Pleasanton, Hayward, Union City, Fremont, Walnut Creek, Danville, San Ramon and beyond. Free pick-up and drop-off applies within ten miles of the Modesto office; Oakdale collections carry an extra $10 per lesson.',

  programs: [
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Six hours split into three two-hour sessions, from first time at the wheel through to freeway driving. Free pick-up and drop-off.',
      body: [
        'The six hours the California DMV requires of a minor, taught as three two-hour sessions and booked around the student — evenings and weekends included.',
        'Training covers the whole range in order: from scratch, through residential and city streets, to freeway driving. Instructors collect and return the student, free of charge, within ten miles of the Modesto office.',
        'The package is valid for a year from purchase, so a permit that arrives late does not waste it.',
      ],
      bullets: [
        'Six hours as three two-hour sessions',
        'From scratch through to freeway driving',
        'Free pick-up and drop-off',
        'Flexible schedule, weekends included',
        'Valid for one year',
        'Minors, adults and seniors',
      ],
      price: 479,
      priceNote:
        'Their published promotional price for the teen six-hour package. The DMV certificate of completion is a separate $35 — see the pricing page.',
      logistics: [
        'Call to schedule lessons after registering',
        'Allow a thirty-minute buffer before each lesson',
        'Cancellations inside 24 hours carry an $80 fee',
        'Online payments carry a processing fee',
      ],
    },
    {
      slug: 'adult-lessons',
      title: 'Adult Driver Training',
      navLabel: 'Adult Lessons',
      summary:
        'The same six-hour programme priced for adults, or single two-hour lessons for drivers who only need the gaps filled.',
      body: [
        'Adults book either the full six-hour package or single two-hour lessons, whichever fits. There is no minimum for an adult driver — the DMV requirement applies to minors.',
        'Seniors are taught as well, which not every school in the county offers.',
      ],
      bullets: [
        'Six-hour package or single lessons',
        'Adults and seniors',
        'Free pick-up and drop-off',
        'Weekend appointments available',
      ],
      price: 540,
      priceNote: 'Adult six-hour package. A single two-hour lesson is $189.',
    },
    {
      slug: 'dmv-test-service',
      title: 'DMV Test Service',
      navLabel: 'DMV Test',
      summary:
        'Their own car and an instructor for the drive test, with the DMV appointment booked for you — included in the VIP package.',
      body: [
        'The drive test has to be taken in an insured, roadworthy car, and a student who has trained in one car and takes the test in another loses their best advantage.',
        'VIP includes DMV test service and the test booking itself inside their top package, which also carries unlimited sessions until the student is driving.',
      ],
      bullets: [
        'DMV test service included',
        'DMV test booking handled for you',
        'Unlimited sessions in the VIP package',
      ],
      price: 3250,
      priceNote: 'The VIP License Package, as published on their site.',
    },
  ],

  /**
   * Their price list exactly as published, split into the two groups their own
   * pages use. The certificate is its own line because their six-hour package
   * does not include it and their page says so in small print — a buyer who
   * misses that arrives at the DMV without the document.
   */
  packageGroups: [
    {
      title: 'Teen Drivers',
      blurb: 'The DMV-required six hours, or a single session to try it first.',
      features: [
        'Three two-hour sessions',
        'Free pick-up and drop-off',
        'Scratch to freeway training',
        'Flexible schedule, weekends included',
        'Valid for one year',
        'Six-hour completion certificate',
      ],
      featureNotes: {
        'Six-hour completion certificate':
          'The document the DMV wants from a minor. VIP charges $35 for it separately — it is not inside the six-hour package.',
        'Free pick-up and drop-off':
          'Free within ten miles of the Modesto office. Oakdale pick-ups are an extra $10 per lesson.',
      },
      lessonHours: 2,
      packages: [
        {
          name: '6 Hours of BTW',
          detail: 'Three sessions, two hours each',
          hours: 6,
          price: 479,
          includes: [
            'Three two-hour sessions',
            'Free pick-up and drop-off',
            'Scratch to freeway training',
            'Flexible schedule, weekends included',
            'Valid for one year',
          ],
          featured: true,
        },
        {
          name: 'Additional 2 Hours',
          detail: 'Single session — their "try" package',
          hours: 2,
          price: 195,
          includes: [
            'Free pick-up and drop-off',
            'Scratch to freeway training',
            'Flexible schedule, weekends included',
            'Valid for one year',
          ],
        },
        {
          name: 'Certificate Fee',
          detail: 'The six-hour completion certificate for a minor',
          price: 35,
          includes: ['Six-hour completion certificate'],
        },
      ],
    },
    {
      title: 'Adult Drivers',
      blurb: 'No DMV minimum applies, so adults buy the hours they actually want.',
      features: [
        'Free pick-up and drop-off',
        'Scratch to freeway training',
        'Flexible schedule, weekends included',
        'Unlimited sessions until you are driving',
        'DMV test service and booking',
      ],
      featureNotes: {
        'Unlimited sessions until you are driving':
          'Their own wording on the VIP License Package: sessions continue until the student can drive, rather than a fixed hour count.',
      },
      lessonHours: 2,
      packages: [
        {
          name: '6 Hours BTW',
          detail: 'Three sessions, two hours each',
          hours: 6,
          price: 540,
          includes: [
            'Free pick-up and drop-off',
            'Scratch to freeway training',
            'Flexible schedule, weekends included',
          ],
          featured: true,
        },
        {
          name: 'Single 2 Hour Lesson',
          detail: 'One session',
          hours: 2,
          price: 189,
          includes: [
            'Free pick-up and drop-off',
            'Scratch to freeway training',
            'Flexible schedule, weekends included',
          ],
        },
        {
          name: 'VIP License Package',
          detail: 'Unlimited sessions, DMV test included',
          price: 3250,
          includes: [
            'Free pick-up and drop-off',
            'Scratch to freeway training',
            'Flexible schedule, weekends included',
            'Unlimited sessions until you are driving',
            'DMV test service and booking',
          ],
        },
      ],
    },
  ],

  vehicles: {
    summary:
      'Their cars carry current safety technology and are inspected by the California DMV. The school car is wrapped in their own green, black and gold, which means a student is learning in a vehicle other drivers give room to.',
    features: [
      'Inspected by the California DMV',
      'Current safety technology fitted',
      'Free pick-up and drop-off within ten miles of the Modesto office',
      'Licensed, bonded and insured school',
    ],
  },

  /**
   * Published on their own home page, each one marked "*review taken from Google
   * Reviews". Reproduced with the same attribution and nothing added.
   */
  testimonials: [
    {
      name: 'Mason Agnew',
      location: 'Modesto, CA',
      quote:
        '11 out of 10 driving experience, very knowledgeable, professional, respectful, understanding and patient. Would definitely recommend to my friends and family, because today, thanks to my instructors, I passed my DMV Behind the Wheel Test.',
    },
    {
      name: 'Isabella Moor',
      location: 'Manteca, CA',
      quote:
        'We highly recommend VIP driving school. The instructor really knows what she’s doing and helped my daughter with her skills. Great price and very open availability. Thank you!',
    },
    {
      name: 'Jeremiah Stine',
      location: 'Tracy, CA',
      quote: 'Had a very good experience with instructor and got a great deal!',
    },
  ],

  rating: { value: '4.9', count: '237', source: 'Google' },

  sourceUrl: 'https://www.vipdrivingschools.com',
  internalNotes: [
    'LICENCE — no DMV school licence number is published anywhere on their site, despite "fully licensed, bonded, and insured driving school approved by the California DMV" on the home page. Omitted rather than guessed. First thing to ask for.',
    'DO NOT REPRODUCE — "License is Guaranteed", printed against the $3,250 VIP License Package. No school can guarantee a DMV pass; the package is listed here with what it actually contains (unlimited sessions, test service, booking) and the guarantee left off.',
    'DO NOT REPRODUCE — "TO BE #1 IN TRUST & QUALITY" is their stated vision. As an aspiration it is theirs to publish, but reproduced on a page we send it reads as a ranking claim, so it is not used.',
    'THEIR SITE USES AI IMAGERY — research/vip-driving-school/assets/ChatGPT-Image-Dec-14--2025--03_44_32-PM-1920w.png is on their live site and is generated. Not used here, on the same rule that kept San Diego Bay\'s AI images out (memory/005).',
    'LOGO — their only logo asset has a white "VIP" wordmark, drawn for a dark header. On this light header it would be invisible, and the footer variant inverts to white as well, so the monogram is used instead. Ask them for a dark-text or transparent version; the brand colours here are sampled from that same file.',
    'TWO ENTITY NAMES — the site trades as "VIP Driving School LLC" but the liability release names "A-VIP Driving School LLC". Confirm the legal entity before anything is signed.',
    'DEFECT — the $479 teen six-hour package does not include the $35 completion certificate, and that is only said in small print underneath. A parent who buys the package believing it covers the DMV paperwork finds out at the wrong moment. Surfaced here as a feature-row note rather than hidden.',
    'DEFECT — three separate region pages repeat the same price table and the same city list, and the city list at the bottom of each page contradicts the region it is on (the Bay Area page still lists Modesto, Ceres, Ripon). Their own coverage map is unreadable as published.',
    'Their instructors are described as background-checked and their cars as DMV-inspected. Both are their claims about their own operation, published on their own site, and are reproduced as such.',
    'Five languages — English, French, Farsi, Pashto, Hindi — is the strongest differentiator they have and it sits in the middle of a paragraph on the home page.',
  ],
};
