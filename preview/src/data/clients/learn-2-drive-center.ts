import type { Client } from '@/lib/types';

/**
 * Learn 2 Drive Center LLC — Fresno and Clovis, CA.
 *
 * Scraped from learn2drivecenter.wixsite.com/letsgodrive on 2026-08-09
 * (research/learn-2-drive-center). Their DMV licence number, E2135, is printed
 * in their own site footer — the campaign workbook had it as "not captured".
 *
 * Atelier, because this is an owner-operated school with a named founder who
 * writes to customers in the first person. That voice is the product; the
 * template has to make room for it rather than flatten it into feature copy.
 */
export const learn2Drive: Client = {
  slug: 'learn-2-drive-center',
  name: 'Learn 2 Drive Center',
  short: 'Learn 2 Drive',
  variant: 'atelier',

  /** Sylvia signs the About page herself; the school is her. */
  heroStyle: 'editorial',

  /**
   * Two branches is the fact their own site leads with — the Clovis location is
   * flagged "NEW LOCATION NOW OPEN" on the homepage — so locations come early
   * here rather than being buried at the bottom as they are on every other
   * preview. Their tagline is used verbatim.
   */
  sections: [
    {
      id: 'areas',
      kicker: 'Two locations',
      title: 'Fresno, and now Clovis.',
      lede: '5588 N. Palm Ave, Suite Q1, Fresno · 755 N. Peach Ave, Building A-16, Clovis.',
    },
    {
      id: 'programs',
      kicker: 'What we teach',
      title: 'Driver education and driving lessons.',
      lede:
        'The classroom course for the permit, and the behind-the-wheel hours that follow it.',
    },
    {
      id: 'packages',
      kicker: 'Prices',
      title: 'Every price, published up front.',
      lede: 'No quote form and no callback required.',
    },
    {
      id: 'instructors',
      kicker: 'Who teaches you',
      title: 'Sylvia’s instructors, not a rota.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'The Fresno and Clovis test routes.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'Two branches, one standard.',
    },
    {
      id: 'cta',
      title: 'Get started.',
      lede: 'Office hours Monday to Friday 9am–6pm, Saturday 9am–1pm. Closed Sunday.',
    },
  ],

  story: {
    pullQuote: 'Empowering roads, ensuring safety: where safe driving begins.',
    paragraphs: [
      'Learn 2 Drive Center LLC has taught in Fresno since 2018, and now runs a second branch in Clovis.',
      'The school is licensed by the California DMV, licence number E2135.',
    ],
  },

  logo: '/clients/learn-2-drive-center/logo.png',

  /**
   * Their mark is a highway-work diamond: orange #D86900 on white with black
   * lettering. The orange is 3.54:1 — it fails AA — so it ships darkened to
   * #BC5B00 (4.52:1). The black of the lettering becomes the accent, which also
   * keeps the palette honest to a two-colour logo instead of inventing a third.
   */
  brand: {
    primary: '#BC5B00',
    primaryDark: '#A85100',
    primarySoft: '#F7EDE3',
    accent: '#281D13',
    accentDark: '#1C140D',
    accentSoft: '#F4EDE7',
    wash: '40, 29, 19',
    bg: '#FCF8F4',
    border: '#F0DDCC',
    borderSoft: '#F7EDE3',
    fgDim: '#8B6644',
  },

  photos: {
    hero: {
      src: '/clients/learn-2-drive-center/hero.jpg',
      alt: 'Two Learn 2 Drive students beside the school car on a Fresno street in spring',
    },
    roadTest: {
      src: '/clients/learn-2-drive-center/instructor.jpg',
      alt: 'A Learn 2 Drive instructor and a student giving a thumbs-up beside the car after a lesson',
    },
    vehicle: {
      src: '/clients/learn-2-drive-center/girls.jpg',
      alt: 'The Learn 2 Drive car, signwritten with the school name and phone number',
    },
    support: {
      src: '/clients/learn-2-drive-center/students.jpg',
      alt: 'A wall of photographs of Learn 2 Drive students who have passed',
    },
  },

  tagline: 'Empowering roads, ensuring safety.',
  headline: 'Where safe driving begins in Fresno and Clovis.',

  city: 'Fresno',
  county: 'Fresno County',
  address: '5588 N. Palm Ave, Suite Q1, Fresno, CA 93704',

  licence: 'E2135', // printed in their own site footer
  founded: '2018', // "© 2018 by Learn 2 Drive Center LLC"

  phones: [
    { label: 'Fresno branch', display: '(559) 492-2935', raw: '+15594922935' },
    { label: 'Clovis branch', display: '(559) 472-3982', raw: '+15594723982' },
  ],
  email: 's.vargas@learn2drivecenter.com',

  hours: [
    { days: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
    { days: 'Saturday', hours: '9:00 AM – 1:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  schedulingNote:
    'Behind-the-wheel lessons run 7am to 9pm by appointment, seven days a week. Pick-up from home or school is included inside a 12-mile radius.',

  areas: ['Fresno', 'Clovis'],
  areasNote:
    'Two offices: 5588 N. Palm Ave Suite Q1 in Fresno, and 755 N. Peach Ave A-16 in Clovis. Pick-up beyond a 12-mile radius carries an extra charge.',
  languages: ['English', 'Spanish'], // "Hablamos Español" on their contact page

  social: { instagram: 'https://instagram.com/learn_2_drive_center' },

  packageGroups: [
    {
      title: 'Behind-the-wheel training',
      blurb:
        'Three two-hour private lessons — the set California requires before a Certificate of Completion of Behind-the-Wheel Training, DL400D, can be issued.',
      features: [
        'Three private two-hour lessons',
        'Certified driving instructor',
        'Certificate DL400D on completion',
        'Collection from our office',
        'Collection from home or school',
      ],
      packages: [
        {
          name: 'Single lesson',
          detail: 'One two-hour lesson, adults or teens',
          hours: 2,
          price: 150,
          includes: ['Certified driving instructor'],
        },
        {
          name: 'Office pick-up',
          detail: 'Three two-hour lessons, collected from our office',
          hours: 6,
          price: 350,
          includes: [
            'Three private two-hour lessons', 'Certified driving instructor',
            'Certificate DL400D on completion', 'Collection from our office',
          ],
        },
        {
          name: 'Home or school pick-up',
          detail: 'Three two-hour lessons, collected from home or school',
          hours: 6,
          price: 390,
          featured: true,
          includes: [
            'Three private two-hour lessons', 'Certified driving instructor',
            'Certificate DL400D on completion', 'Collection from home or school',
          ],
        },
      ],
    },
  ],

  individualLessons: [
    {
      name: 'Online Driver Education',
      description:
        '30 hours of state-required material, broken into short lessons. Available 24/7 and your place is saved when you sign out.',
      price: 24.95,
    },
    { name: 'Single two-hour lesson', description: 'Adults or teens.', price: 150 },
    { name: 'Behind the wheel — office pick-up', description: 'Three two-hour lessons.', price: 350 },
    { name: 'Behind the wheel — home or school pick-up', description: 'Three two-hour lessons.', price: 390 },
  ],

  programs: [
    {
      slug: 'drivers-ed',
      image: '/clients/learn-2-drive-center/students.jpg',
      title: 'Online Driver Education',
      navLabel: 'Driver’s Ed',
      summary:
        'The 30 hours California asks for, broken into pieces you can actually finish, taken from home at whatever pace suits you.',
      body: [
        'The course carries the full 30 hours of instructional material the state requires, but it is cut into manageable lessons and the system remembers where you stopped. Work through it as quickly or as slowly as you like — the site is open 24 hours a day.',
        'When you finish, your original Certificate of Completion is posted to you, or you are welcome to collect it from the office. Certificates are processed the next business day. You need that document to sit the DMV written exam.',
      ],
      bullets: [
        '30 hours of state-required material',
        'Short lessons rather than one long sitting',
        'Progress saved when you sign out',
        'Available 24/7 from home',
        'Original certificate posted or collected',
        'Five practice exams included',
      ],
      price: 24.95,
    },
    {
      slug: 'behind-the-wheel',
      image: '/clients/learn-2-drive-center/instructor.jpg',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Three private two-hour lessons with a certified instructor. Lessons run seven days a week, and we come to you.',
      body: [
        'Teens between 15½ and 17½ must complete driver training to be licensed before turning 18. If you are 17½ and choose not to take it, you have to wait until you are 18 to sit the behind-the-wheel test.',
        'Bring your original provisional permit to the first appointment — the DMV requires it before a lesson can be booked, along with parent or guardian consent for anyone under 18.',
        'Age is genuinely not the point here. Adults who have avoided driving for years are welcome, and so is anyone who simply never got round to it.',
      ],
      bullets: [
        'Three two-hour private lessons',
        'Defensive driving habits from the first lesson',
        'Rules of the road, taught in the car',
        'Lessons seven days a week',
        'Pick-up from home or school',
        'Certificate DL400D on completion',
      ],
      logistics: [
        'Driving hours 7am – 9pm by appointment',
        'Original provisional permit required at the first lesson',
        'Pick-up inside a 12-mile radius; extra charge beyond',
        'Payment plans available',
      ],
      price: 350,
      priceNote: '$350 collected from our office, $390 collected from home or school.',
    },
  ],

  vehicles: {
    summary:
      'Signwritten school cars carrying the Learn 2 Drive mark and the office number, so a parent can always see which car their child got into.',
    features: [
      'Certified driving instructor in every car',
      'Clearly marked school vehicles',
      'Pick-up and drop-off from home or school',
      'Lessons seven days a week, 7am to 9pm',
    ],
  },

  instructors: [
    {
      name: 'Sylvia Vargas',
      initials: 'SV',
      role: 'Owner and operator',
      photo: '/clients/learn-2-drive-center/sylvia.jpg',
      bio: 'Teaches a solid foundation of safe, cautious, defensive driving — and cares as much about students feeling comfortable behind the wheel as about them passing. Writes to every family herself.',
    },
  ],

  rating: { value: '5.0', count: '218', source: 'Google' },

  sourceUrl: 'https://learn2drivecenter.wixsite.com/letsgodrive',
  internalNotes: [
    'Licence E2135 is in their own footer — the workbook recorded it as "not captured".',
    'Owner is Sylvia Vargas (site signs off "-Sylvia"; email is s.vargas@).',
    'They advertise a local price match and payment plans. Both are their words, quoted as-is.',
    'Verified defects to lead with: the site is still on a learn2drivecenter.wixsite.com subdomain rather than their own domain, the footer says 2018, and the two branches share one undifferentiated page so Clovis has no page of its own to rank.',
    'Their policy page contradicts itself: the same paragraph gives students 9 months to finish and then calls it "the required 6-month time limit". Worth raising — it is the kind of thing that becomes a refund dispute.',
    'Photography here is theirs, including recognisable students. Get written permission before any of it goes to production.',
  ],
};
