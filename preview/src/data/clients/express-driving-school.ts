import type { Client } from '@/lib/types';

/**
 * Express Driving School — Chula Vista, CA.
 *
 * Scraped from expressdrivingsd.com on 2026-08-09
 * (research/express-driving-school).
 *
 * Safe Route. Their strongest asset is a genuinely good teen resource centre —
 * six numbered steps from "what documents do I need" to "hold the permit six
 * months" — written for a parent working out what happens next. That is a
 * reassurance page, and it deserves the reassurance template.
 *
 * The prices used are theirs, from their own pricing page. The third-party
 * listing figures the workbook carried ($40 / $110 / $320 / $500) do not match
 * and are not used.
 */
export const expressDriving: Client = {
  slug: 'express-driving-school',
  name: 'Express Driving School',
  short: 'Express',
  variant: 'safe-route',

  heroStyle: 'stage',

  /**
   * No vehicles section — they publish nothing about their cars, and inventing a
   * dual-controls paragraph for them would be exactly the template behaviour
   * this model exists to stop.
   *
   * They run a genuine blog of DMV guidance, which is real work most of this set
   * has not done, so it is acknowledged in the closing section rather than
   * dropped.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'DMV-approved courses',
      title: 'Seven programmes, one school.',
      lede:
        'Online driver’s education, behind-the-wheel lessons, permit test preparation, teen driver education, adult lessons, defensive driving and California traffic school.',
    },
    {
      id: 'packages',
      kicker: 'Pricing',
      title: 'Seven courses, seven prices.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'The Chula Vista test route, rehearsed.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    { id: 'reviews', kicker: 'In their words', title: 'Twenty-five years of Chula Vista families.' },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'Chula Vista and San Diego County.',
    },
    {
      id: 'cta',
      title: 'Learn to drive with confidence.',
      lede: 'Teaching Chula Vista since 2001.',
    },
  ],

  story: {
    pullQuote:
      'To create safer roads by teaching smart driving habits, responsible decision-making, and respectful driving behavior.',
    paragraphs: [
      'Express Driving School was established in 2001 and teaches across Chula Vista and San Diego County.',
      'The school offers DMV-approved courses covering online driver’s education, behind-the-wheel lessons, permit test preparation and California traffic school, for first-time drivers, teens earning a licence and adults refreshing their skills.',
    ],
  },

  logo: '/clients/express-driving-school/logo.png',

  /**
   * Their mark is an amber sun behind a grey wordmark. The amber is 2.03:1 —
   * unusable for text — so it ships as #A2690C (4.60:1), the same hue darkened,
   * with the raw amber kept only as the soft chip fill. The wordmark grey
   * carries the accent at 5.93:1.
   */
  brand: {
    primary: '#A2690C',
    primaryDark: '#8F5D0A',
    primarySoft: '#F8F1E5',
    accent: '#5B6570',
    accentDark: '#505862',
    accentSoft: '#EEF0F1',
    wash: '66, 43, 5',
    bg: '#FCF9F4',
    border: '#F0E1CA',
    borderSoft: '#F6EFE1',
    fgDim: '#6E6A62',
  },

  photos: {
    hero: {
      src: '/clients/express-driving-school/keys.jpg',
      alt: 'A newly licensed driver holding out a set of car keys',
    },
    support: {
      src: '/clients/express-driving-school/chula-vista.png',
      alt: 'The Third Avenue arch over downtown Chula Vista',
    },
  },

  tagline: 'San Diego’s finest, since 2001.',
  headline: 'Three lessons. Each one has a name and a plan.',

  city: 'Chula Vista',
  county: 'San Diego County',

  licence: 'E2089',
  founded: '2001',

  phones: [{ display: '(619) 735-3053', raw: '+16197353053' }],
  email: 'expressdrivingsd@gmail.com',

  schedulingNote:
    'Every student, whatever their age, must hold a valid instruction permit before the first lesson. Full payment at the first lesson unlocks the package price.',

  areas: ['Chula Vista', 'Bonita', 'National City', 'San Diego', 'Imperial Beach'],
  areasNote: 'Chula Vista and the wider South Bay across San Diego County.',

  social: { facebook: 'https://www.facebook.com/xpressdriving' },

  packageGroups: [
    {
      title: 'Behind-the-wheel training',
      blurb:
        'Six hours as three named two-hour lessons that build on each other — basics, then advanced skills, then a mock drive test.',
      features: [
        'Lesson 1 — basic driving skills',
        'Lesson 2 — advanced driving skills',
        'Lesson 3 — drive test prep with a mock test',
        'Certificate of Completion (DL 400D) for under-18s',
      ],
      packages: [
        {
          name: 'Single lesson',
          detail: 'Any one of the three, two hours, pay as you go',
          hours: 2,
          price: 180,
          includes: ['Lesson 1 — basic driving skills'],
        },
        {
          name: 'New Driver Package',
          detail: 'All three lessons — six hours',
          hours: 6,
          price: 500,
          featured: true,
          // $180 x 3 = $540 against $500.
          saving: 'Saves $40 against three single lessons',
          includes: [
            'Lesson 1 — basic driving skills',
            'Lesson 2 — advanced driving skills',
            'Lesson 3 — drive test prep with a mock test',
            'Certificate of Completion (DL 400D) for under-18s',
          ],
        },
        {
          name: 'Returning Student Package',
          detail: 'All three lessons, for students who did driver education with us',
          hours: 6,
          price: 480,
          saving: 'Saves a further $20 for our own driver education students',
          includes: [
            'Lesson 1 — basic driving skills',
            'Lesson 2 — advanced driving skills',
            'Lesson 3 — drive test prep with a mock test',
            'Certificate of Completion (DL 400D) for under-18s',
          ],
        },
      ],
    },
  ],

  individualLessons: [
    {
      name: 'Lesson 1 — Basic Driving Skills',
      description: 'Rules of the road, defensive technique, speed control, stops, turns and lane changes.',
      price: 180,
    },
    {
      name: 'Lesson 2 — Advanced Driving Skills',
      description: 'Lane changing in traffic, parking, turnabouts and freeway driving.',
      price: 180,
    },
    {
      name: 'Lesson 3 — Drive Test Prep',
      description: 'Preparation for the California DMV drive test, including a full mock test.',
      price: 180,
    },
    { name: 'New Driver Package — 6 hours', price: 500 },
    { name: 'Returning Student Package — 6 hours', price: 480 },
  ],

  programs: [
    {
      slug: 'behind-the-wheel',
      image: '/clients/express-driving-school/controls.png',
      title: 'Behind-the-Wheel Lessons',
      navLabel: 'Behind the Wheel',
      summary:
        'Three two-hour lessons, each with a defined syllabus, so you always know what the next one covers.',
      body: [
        'The first lesson is the fundamentals: the rules of the road, defensive driving, speed control, stops, turns and lane changes. The second moves to lane changing in live traffic, parking, turnabouts and the freeway. The third is drive-test preparation, and it includes a full mock test run the way the DMV runs it.',
        'Students of every age need a valid instruction permit before the first lesson. Under-18s receive the DL 400D Certificate of Completion at the end of the course, which the DMV requires before the drive test.',
      ],
      bullets: [
        'Two hours per lesson, one to one',
        'A defined syllabus for each of the three',
        'A mock drive test in lesson three',
        'DL 400D certificate for under-18s',
        'Teens and adults both welcome',
      ],
      price: 180,
      priceNote: '$180 per lesson, or $500 for all three.',
    },
    {
      slug: 'teens',
      image: '/clients/express-driving-school/keys.jpg',
      title: 'Teens — the whole route to a licence',
      navLabel: 'Teens',
      summary:
        'Six numbered steps from driver education to the drive test, written for the parent doing the organising.',
      body: [
        'Between 15 and 17½ the route is fixed and it is more paperwork than driving. Driver education first, and the certificate it produces. Then proof of identity, legal presence and California residency. Then the online licence application and the confirmation code. Then the DMV appointment: documents, fees, photo, fingerprints, knowledge test — and the learner permit is issued.',
        'That permit is not valid until the first behind-the-wheel lesson with a DMV-licensed school has actually started. Then six hours of training, 50 hours of practice with ten at night, and six months of holding the permit before the DMV will test you.',
      ],
      bullets: [
        'Driver education and the certificate it produces',
        'Proof of identity, legal presence and residency',
        'The online DL application and confirmation code',
        'The DMV visit: fees, photo, fingerprints, knowledge test',
        'The permit is not valid until the first lesson',
        'Six hours training, 50 hours practice, six months holding',
      ],
    },
    {
      slug: 'drive-test',
      image: '/clients/express-driving-school/drive-test.png',
      title: 'DMV Drive Test Preparation',
      navLabel: 'Drive Test',
      summary:
        'A mock test that mirrors the real one, including the check-in and vehicle inspection most people do not know happens.',
      bullets: [
        'A full practice test before the real one',
        'Check-in and vehicle inspection explained',
        'The critical errors that end a test immediately',
        'What the examiner is actually scoring',
      ],
      price: 180,
    },
  ],

  testimonials: [
    {
      name: 'Angelo A.',
      quote:
        'My overall experience was absolutely phenomenal. Howie was an extremely knowledgeable and understanding instructor and was able to help me pass my behind the wheel test on my first try.',
    },
    {
      name: 'Nuntana L.',
      quote:
        'Big thanks to Joe who was very supportive, nice, calm, patient and friendly. He made me feel really comfortable with driving.',
    },
    {
      name: 'Nikitha R.',
      quote:
        'Joe was my trainer and he was the best. I can definitely say Joe has instilled in me the knowledge it takes to be a safe and responsible driver.',
    },
    {
      name: 'Summer F.',
      quote: 'Our driving instructor Doreen was so helpful. We would highly recommend this company and this instructor.',
    },
    {
      name: 'Nayeli R.',
      quote:
        'Would definitely recommend asking for Howie as your driving instructor. Got to learn so much and overall he helped me improve my driving.',
    },
    { name: 'Alex G.', quote: 'Awesome experience. I learned a lot about the actual behind-the-wheel driving.' },
  ],

  rating: { value: '4.9', count: '126', source: 'Google' },

  sourceUrl: 'https://expressdrivingsd.com',
  internalNotes: [
    'Two licences on their own site: E2089 for the driving school and E1779 for traffic school.',
    'The workbook carried third-party pricing ($40 online course, $110 lesson, $320 bundle, $500 package). Their own pricing page says $180 a lesson, $500 and $480 for the packages. Their own page wins; do not quote the listing figures.',
    'Instructors named repeatedly in their own reviews: Howie, Joe and Doreen. None of the three appear anywhere on the site as staff — no photo, no bio, no name. That is a whole trust layer they already have and never show.',
    'They publish no price for their online driver education course anywhere. Ask.',
    'Their teen resource centre and blog are the best content in this campaign by a distance — twenty-plus genuinely useful articles. The problem is that every one of them opens with a blue gradient card that just says "express driving BLOG", so a search result or a shared link shows nothing about the article.',
    'DEFECT — the homepage is very long, repeats the service list three times, and pushes pricing well below the fold.',
    'Photography: they own the "teen with keys" shot (their own copyright watermark). Everything else is a text card. Real photography would transform this site.',
    'Service areas beyond Chula Vista are the neighbouring South Bay cities. Confirm with the owner.',
  ],
};
