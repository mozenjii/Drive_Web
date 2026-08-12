import type { Client } from '@/lib/types';

/**
 * Academic Driving School — San Diego, CA.
 *
 * Scraped from academicdrivingschool.com on 2026-08-09
 * (research/academic-driving-school).
 *
 * Apex. They run a student progress dashboard, put students in a Tesla for the
 * drive test, and gate every price behind a zip-code lookup. That is an
 * operations-first business, and it wants the engineered template.
 *
 * Their "99% of DMV drive test passing rate" is not reproduced. Neither is
 * "the topest driving school in California" — which is on their homepage, spelt
 * exactly like that.
 */
export const academicDriving: Client = {
  slug: 'academic-driving-school',
  name: 'Academic Driving School',
  short: 'Academic',
  variant: 'apex',

  /** Their usable photography is two images among two dozen theme demo files —
   *  both now wired below. Neither is big enough to carry a full-bleed hero
   *  (the photograph is 394px square), so the panel hero stands. */
  heroStyle: 'panel',

  /** Their own mark, off their own site. It was sitting in the scraped assets
   *  while the header rendered an "AD" monogram. */
  logo: '/clients/academic-driving-school/logo.png',

  /**
   * The one photograph on their site that is unarguably theirs: their own
   * signwritten car, their logo on the door, their phone number under it, a real
   * student at the wheel. Everything else in their media library is Astra theme
   * furniture (`*-free-img.jpg`), pixabay road signs, or clip-art traffic lights
   * from 4-designer.com — none of it any more theirs than our stock would be.
   *
   * It goes in `roadTest`, the smallest photo slot on the page, because at
   * 394 x 403 it is already being asked to fill ~470px there.
   */
  photos: {
    roadTest: {
      src: '/clients/academic-driving-school/student-car.jpg',
      alt: 'A student in the driver’s seat of a signwritten Academic Driving School car',
    },
  },

  /**
   * "Driving is a skill you learn, not a right you're given" is on their own
   * About page and is the best line any of these twenty schools has written.
   * It leads.
   *
   * Their per-lesson mastery dashboard is genuinely better than anything else in
   * this set and sits three clicks deep on their own site — it gets a section.
   *
   * Not reproduced: "99% of DMV drive test passing rate" and "the topest driving
   * school in California".
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Our services',
      title: 'Driving is a skill you learn, not a right you’re given.',
      lede:
        'Behind-the-wheel training, online driver education and classroom instruction — two hours at a time, one class a day.',
    },
    {
      id: 'packages',
      kicker: 'Prices',
      title: 'The prices, without typing in your zip code.',
      lede:
        'Their own booking page asks for a zip code before it shows a number. These are published as text.',
    },
    {
      id: 'road-test',
      kicker: 'Permit and drive test',
      title: 'A report card, not just a score.',
      lede:
        'The permit course tracks which lessons you have actually mastered rather than a single total. Four manoeuvres decide most California drive tests — press one to see the route.',
    },
    { id: 'reviews', kicker: 'In their words', title: 'Mashal gets named a lot.' },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'Dual gas and brake systems.',
    },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'San Diego.',
    },
    {
      id: 'cta',
      title: 'Free pick-up from home, work or school.',
    },
  ],

  story: {
    pullQuote: 'Driving is a skill you learn, not a right you’re given.',
    paragraphs: [
      'Academic Driving School is dedicated to serving people in California by teaching the knowledge, techniques and skills new drivers need, at reasonable rates.',
      'The school is licensed by the California Department of Motor Vehicles under licence number E0013, and teaches behind-the-wheel, online and classroom instruction with the aim of reducing accidents on the road.',
    ],
  },

  /**
   * Sampled from their logo: a strong flat blue #0746A1 at 8.75:1, with a
   * muted slate-blue secondary at 5.22:1. Neither needed correcting.
   */
  brand: {
    primary: '#0746A1',
    primaryDark: '#063B89',
    primarySoft: '#E5EDF8',
    accent: '#4E6E9A',
    accentDark: '#456187',
    accentSoft: '#EBEFF5',
    wash: '5, 46, 105',
    bg: '#F4F7FC',
    border: '#CAD9F0',
    borderSoft: '#E1EAF6',
    fgDim: '#4A5F85',
  },

  tagline: 'Track every lesson. See the report card.',
  headline: 'Behind-the-wheel training with a progress dashboard behind it.',

  city: 'San Diego',
  county: 'San Diego County',

  licence: 'E0013',

  phones: [
    { display: '(510) 575-7653', raw: '+15105757653' },
    { display: '(408) 785-7878', raw: '+14087857878' },
  ],
  email: 'info@academicdrivingschool.com',

  schedulingNote:
    'Free pick-up and drop-off from home, work or school. Appointments are booked online, and progress is tracked in a student portal between lessons.',

  areas: ['San Diego'],
  areasNote:
    'Enter a zip code on their booking page and it returns the services and prices for that area.',

  individualLessons: [
    {
      name: 'Traffic Violator School — online',
      description:
        'DMV-licensed and valid statewide. Colour graphics, video and cartoons; finish it in an afternoon or over a few days.',
      price: 19.95,
    },
    {
      name: 'California Mature Driver Improvement Course',
      description:
        'For drivers aged 55 and over. Insurers are required to reduce rates for three years on completion — the discount varies, so check with your agent.',
      price: 17.95,
    },
    {
      name: 'DMV written test preparation',
      description:
        'Interactive lessons from the California Driver Handbook with instant feedback, score tracking and DMV-style questions.',
    },
  ],

  programs: [
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Two-hour classes, one a day, in packages from a two-hour refresher to twenty hours.',
      body: [
        'The six-hour package is three two-hour lessons: basic skills, technique, road signs and safe driving, ending with a student prepared for the DMV test. Minors receive the certificate confirming the six hours the state requires.',
        'The ten-hour package is five two-hour classes and adds intensive freeway work — entering, exiting, merging, passing, being passed and lane changes — plus advanced defensive tactics. Twenty hours covers everything in both with more practice on top.',
        'A two-hour refresher exists on its own for drivers who simply want a brush-up with a qualified instructor.',
      ],
      bullets: [
        'Two hours per class, one class a day',
        '6, 10 and 20-hour packages, plus a 2-hour refresher',
        'Intensive freeway training in the longer packages',
        'Certificates issued to minors for the required six hours',
        'Free pick-up and drop-off from home, work or school',
        'For minors, adults and seniors',
      ],
    },
    {
      slug: 'drive-test',
      title: 'DMV Drive Test + 1 Hour Training',
      navLabel: 'Drive Test',
      summary:
        'A three-hour programme: an hour of fresh practice, then the DMV test itself in the school’s dual-control car.',
      body: [
        'One hour of professional training on the morning of the test, then two hours covering the DMV appointment. Vehicle and insurance are provided.',
      ],
      bullets: [
        'One hour of training on the day',
        'Dual-control car for the test',
        'Vehicle and insurance provided',
        'Three hours in total',
      ],
    },
    {
      slug: 'permit-course',
      title: 'DMV Permit Practice Course',
      navLabel: 'Permit Test',
      summary:
        'A self-paced course over the California Driver Handbook, with a dashboard that tells you which lessons you have actually mastered.',
      bullets: [
        'Lessons drawn from the California Driver Handbook',
        'Instant feedback on every question',
        'Score tracking across lessons',
        'A readiness status per lesson, not just a total',
      ],
    },
    {
      slug: 'traffic-school',
      title: 'Traffic School & Mature Driver',
      navLabel: 'Traffic School',
      summary:
        'A DMV-licensed traffic violator school at $19.95, and a mature driver improvement course at $17.95 that pays for itself in insurance.',
      bullets: [
        'DMV-licensed traffic violator school, valid statewide',
        'Take it from home over a few hours or a few days',
        'Mature driver course for drivers 55 and over',
        'Insurers must reduce rates for three years on completion',
      ],
      price: 19.95,
    },
  ],

  vehicles: {
    summary:
      'New cars with dual gas and brake systems, and — as students keep mentioning in reviews — sometimes a Tesla for the DMV test.',
    features: [
      'Dual gas and brake systems',
      'Vehicle and insurance provided for the DMV test',
      'Free pick-up and drop-off',
      'Online progress tracking between lessons',
    ],
  },

  testimonials: [
    {
      name: 'Pako Herrera',
      quote:
        'I am an immigrant with driving experience and wanted my licence. I paid for a 2-hour session and the instructor gave me really good tips I wasn’t aware of. I passed the test on my first attempt.',
    },
    {
      name: 'Finn Wace',
      quote:
        'I learned more in three lessons with Mashal than over ten practice sessions with licensed friends. He was very kind and attentive in helping me correct all of the mistakes I was making.',
    },
    {
      name: 'Srijan Sharma',
      quote:
        'There is an online interface you can use to track your progress and report card, which is very helpful. The cars used during practice are in excellent condition and very responsive.',
    },
  ],

  rating: { value: '4.6', count: '102', source: 'Google' },

  sourceUrl: 'https://academicdrivingschool.com',
  internalNotes: [
    'Licence E0013 confirmed on their own about section.',
    'DO NOT reproduce "99% of DMV drive test passing rate".',
    'DEFECT — their own homepage says they are "the topest driving school in California with 5 start rating" and "Over 7 years of experiance", while another page says "over 8 years". Three spelling errors and a factual contradiction in the two blocks a visitor reads first.',
    'DEFECT — every price is hidden behind "Enter your ZIP CODE or city name then press enter to see all services & prices". A prospect who does not want to type their location into a stranger\'s site leaves without a number.',
    'DEFECT — a "999-999-9999" placeholder phone number is still live on the site.',
    'DEFECT — the workbook flags an identity/location inconsistency: an Alameda legal address against San Diego booking listings, and phone numbers in the 510 and 408 area codes for a San Diego business. Confirmed. Resolve before any of this goes public.',
    'No behind-the-wheel prices are published anywhere; only the $19.95 traffic school and $17.95 mature driver courses. None invented.',
    'Instructor named repeatedly in reviews: Mashal. No staff page exists.',
    'Their permit practice course with a per-lesson mastery dashboard is genuinely better than most competitors and is three clicks deep.',
    'Photography: their own signwritten car (wired) and their own logo (wired) were the only two usable assets among 24 scraped files; the rest are Astra theme demos, pixabay stock and 4-designer clip-art. No shared stock is used anywhere on this preview. Their own instructor and lesson photographs remain the ask.',
  ],
};
