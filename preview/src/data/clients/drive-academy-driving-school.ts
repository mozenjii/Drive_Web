import type { Client } from '@/lib/types';

/**
 * Drive Academy Driving School, LLC — Fresno, CA.
 *
 * Scraped from driveacademyca.com on 2026-08-13
 * (research/drive-academy-driving-school). Nine pages on an old WordPress theme,
 * with post dates from 2016 still showing above the copy.
 *
 * Stage hero: they photograph their own car properly — a black Sentra with their
 * magnetic door sign, shot in full sun with the plate blurred, which is somebody
 * being careful. Brand sampled from their own pink sticker: magenta at 4.58:1.
 *
 * Two things set them apart in this campaign and both are buried: the student and
 * parent debrief after every lesson, and instruction in Punjabi and Hindi with
 * international students named as their speciality.
 */
export const driveAcademy: Client = {
  slug: 'drive-academy-driving-school',
  name: 'Drive Academy Driving School',
  short: 'Drive Academy',
  variant: 'atelier',
  heroStyle: 'stage',

  brand: {
    primary: '#E5056F',
    primaryDark: '#C5045F',
    primarySoft: '#F8E5EE',
    // Darkened one step past what brand.py proposed: #A56847 measures 4.4958:1
    // on white, which rounds to 4.5 in the tool's output and fails brand.test.ts.
    // Same hue, same saturation, 4.73:1.
    accent: '#A06545',
    accentDark: '#88563B',
    accentSoft: '#F6EEEA',
    wash: '102, 2, 49',
    bg: '#FCF4F8',
    border: '#EEC6D9',
    borderSoft: '#F5DDE9',
    fgDim: '#904D75',
  },

  photos: {
    hero: {
      src: '/clients/drive-academy-driving-school/car.jpg',
      alt: 'The Drive Academy training car with the school’s door sign, photographed in Fresno',
    },
    vehicle: {
      src: '/clients/drive-academy-driving-school/car.jpg',
      alt: 'The Drive Academy Nissan with its magnetic door sign and phone number',
    },
  },

  sections: [
    {
      id: 'programs',
      kicker: 'Teen and adult driving',
      title: 'One instructor, one student, and a debrief with your parents afterwards.',
      lede:
        'Behind-the-wheel instruction for teens and adults, assessed at the student’s own skill level and reported back honestly.',
    },
    {
      id: 'packages',
      kicker: 'Prices',
      title: 'Fresno, and everywhere further out.',
      lede: 'Their published rates, including what changes once you are outside Fresno.',
    },
    {
      id: 'road-test',
      kicker: 'State drivers test preparation',
      title: 'The test, in the car you learned in.',
      lede: 'Four manoeuvres decide most California drive tests. Press one and watch the route.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'Dual controls, bonded and insured.',
      lede:
        'Instruction vehicles fitted with dual controls, and every instructor background-checked and licensed by the California DMV.',
    },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'Fresno, Clovis, Madera, Kerman and Fowler.',
    },
    {
      id: 'cta',
      title: 'Call to schedule your lesson.',
      lede: 'Call (559) 944-3344 — lessons seven days a week.',
    },
  ],

  story: {
    pullQuote:
      'Drive Academy is dedicated to creating safe conscious and courteous drivers in California.',
    paragraphs: [
      'Drive Academy Driving School is a licensed, bonded and insured California driving school on North Blackstone Avenue in Fresno, DMV licence E0304, teaching teens and adults across Fresno, Clovis, Madera, Kerman and Fowler.',
      'Their instruction is one-to-one: the instructor assesses a student’s skill level and progresses from there rather than working through a fixed script. An important part of the on-road programme is the student and parent debrief, where the instructor tells both of them what is going well and what still needs work.',
      'They speak English, Punjabi and Hindi, and they say plainly that international students are their speciality — which for a driver who has held a licence in another country for twenty years, and is dreading being treated like a sixteen-year-old, is the whole decision.',
    ],
  },

  tagline: 'For a lifetime of driving.',
  headline: 'For a lifetime of driving.',
  heroLede:
    'One-to-one behind-the-wheel instruction in Fresno for teens, adults and international drivers — in English, Punjabi or Hindi, with dual-control cars and free door-to-door service.',

  city: 'Fresno',
  county: 'Fresno County',
  address: '3003 N. Blackstone Ave. Ste 104, Fresno, CA 93703',

  licence: 'E0304', // "DMV License No: E0304" in their footer

  phones: [{ display: '(559) 944-3344', raw: '+15599443344' }],
  email: 'driveacademyca@gmail.com',
  languages: ['English', 'Punjabi', 'Hindi'],

  schedulingNote:
    'Driving lessons seven days a week, booked by phone. Their terms are strict and worth reading first: two business days’ notice to reschedule or cancel, weekends and holidays not counted, and lessons must be used within two months of payment.',

  areas: ['Fresno', 'Clovis', 'Madera', 'Kerman', 'Fowler'],
  areasNote:
    'Free door-to-door pick-up and drop-off, depending on location. Lessons outside Fresno — Clovis, Madera, Kerman and Fowler — are $10 more.',

  programs: [
    {
      slug: 'teen-driving',
      title: 'Teen Driving Classes',
      navLabel: 'Teen Driving',
      summary:
        'The six hours a permit holder needs, taught one-to-one, with a debrief for the student and the parent at the end.',
      body: [
        'A California teen under 17½ needs a driver education course before anything else, then a learner’s permit, then six hours of behind-the-wheel training with a state-licensed school, plus fifty hours of practice with a parent, guardian or certified instructor.',
        'Drive Academy teaches the six hours one instructor to one student, assessing skill level first and progressing from there. Their own framing is worth repeating: you have to want to succeed, and your parents have to be part of the team and provide the practice.',
        'The part that makes it work is the debrief. After the on-road session the instructor speaks to the student and the parent together about progress and the areas that still need work — so the fifty hours of home practice are spent on the right things.',
      ],
      bullets: [
        'One instructor, one student',
        'Six hours of DMV-required behind-the-wheel training',
        'Student and parent debrief on progress',
        'Free door-to-door service, depending on location',
        'City, residential and freeway experience',
      ],
      logistics: [
        'A valid California permit must be carried at every lesson',
        'Full lesson fee is paid at the start of the class, in cash or by Zelle',
        'Glasses or contacts must be brought if they are needed to drive',
      ],
    },
    {
      slug: 'adult-driving',
      title: 'Adult Driving Classes',
      navLabel: 'Adult Driving',
      summary:
        'Two-hour lessons for adults and international drivers, taught in English, Punjabi or Hindi by instructors who expect a language gap.',
      body: [
        'Learning to drive is one of the most important choices a person makes, and their line is that who teaches you is the next one. Adult lessons are built for confidence and defensive driving rather than for a test date.',
        'Their words: have no fear of a communication block — let calm and patient instructors teach you without being overwhelmed by the language barrier. International students are their speciality, and they teach in English, Punjabi and Hindi.',
        'Single lessons or packages, seven days a week, with free door-to-door service depending on location.',
      ],
      bullets: [
        'Two-hour lessons, single or as a package',
        'English, Punjabi and Hindi',
        'International students a speciality',
        'Adult drivers education programme available',
        'Lessons seven days a week',
      ],
      price: 120,
      priceNote: '$120 for two hours in Fresno; $130 in Clovis, Madera, Kerman and Fowler.',
    },
    {
      slug: 'dmv-drive-test',
      title: 'DMV Drive Test',
      navLabel: 'Drive Test',
      summary:
        'Their car and an instructor for the test itself, or an hour of practice immediately beforehand.',
      body: [
        'The drive test taken in a dual-control car the student has already driven, with the school handling the vehicle side of it.',
        'They also sell the combination most people actually want: one hour of behind-the-wheel practice and then the test, back to back.',
      ],
      bullets: [
        'DMV drive test in their vehicle',
        'One hour of practice beforehand available',
        'Free pick-up and drop-off, depending on location',
      ],
      price: 120,
      priceNote:
        '$120 in Fresno, $130 further out. One hour of practice plus the drive test is $180 in Fresno.',
    },
  ],

  packageGroups: [
    {
      title: 'Fresno',
      blurb: 'Their published rates inside Fresno.',
      features: [
        'Behind-the-wheel instruction',
        'Free pick-up and drop-off',
        'Dual-control vehicle',
        'DMV drive test',
        'Student and parent debrief',
      ],
      featureNotes: {
        'Student and parent debrief':
          'After the session the instructor speaks with the student and the parent together about progress and what still needs work.',
      },
      lessonHours: 2,
      packages: [
        {
          name: '2 Hours Behind the Wheel',
          detail: 'One lesson',
          hours: 2,
          price: 120,
          includes: [
            'Behind-the-wheel instruction',
            'Free pick-up and drop-off',
            'Dual-control vehicle',
            'Student and parent debrief',
          ],
          featured: true,
        },
        {
          name: 'DMV Drive Test',
          detail: 'The test in their car',
          hours: 1,
          lessonHours: 1,
          price: 120,
          includes: ['Free pick-up and drop-off', 'Dual-control vehicle', 'DMV drive test'],
        },
        {
          name: '1 Hour + DMV Drive Test',
          detail: 'Practice, then the test',
          hours: 1,
          lessonHours: 1,
          price: 180,
          includes: [
            'Behind-the-wheel instruction',
            'Free pick-up and drop-off',
            'Dual-control vehicle',
            'DMV drive test',
          ],
        },
      ],
    },
    {
      title: 'Clovis, Madera, Kerman & Fowler',
      blurb: 'Ten dollars more outside Fresno.',
      features: ['Behind-the-wheel instruction', 'Free pick-up and drop-off', 'Dual-control vehicle', 'DMV drive test'],
      lessonHours: 2,
      packages: [
        {
          name: '2 Hours Behind the Wheel',
          detail: 'One lesson',
          hours: 2,
          price: 130,
          includes: ['Behind-the-wheel instruction', 'Free pick-up and drop-off', 'Dual-control vehicle'],
          featured: true,
        },
        {
          name: 'DMV Drive Test',
          detail: 'The test in their car',
          hours: 1,
          lessonHours: 1,
          price: 130,
          includes: ['Free pick-up and drop-off', 'Dual-control vehicle', 'DMV drive test'],
        },
      ],
    },
  ],

  individualLessons: [
    {
      name: 'Late cancellation or a missed lesson',
      description:
        'Their terms: two business days’ notice is required, weekends and holidays excluded. A no-show, a forgotten permit or forgotten glasses is charged as if the lesson took place, plus this fee.',
      price: 50,
    },
  ],

  vehicles: {
    summary:
      'Instruction vehicles fitted with dual controls, and instructors who have been background-checked and licensed by the California DMV. The school is bonded and insured.',
    features: [
      'Dual controls fitted',
      'Instructors background-checked and DMV-licensed',
      'Bonded and insured',
      'Free door-to-door service, depending on location',
    ],
  },

  rating: { value: '5.0', count: '71', source: 'Google' },

  sourceUrl: 'https://driveacademyca.com',
  internalNotes: [
    'LICENCE RECOVERED — "DMV License No: E0304" is in their footer. The campaign workbook had no number for them. Published on this preview.',
    'STRENGTH — the student and parent debrief. Fifty hours of home practice is the part of learning to drive that nobody supervises, and an instructor telling the parent exactly what to work on is the most useful thing in this entire batch. It is one sentence in the middle of their teen page.',
    'STRENGTH — English, Punjabi and Hindi, with "international students are our specialty" stated outright. Fresno County has a large Punjabi-speaking community; this is a serious local advantage and it is on the adult page only, below the fold.',
    'DEFECT — cash or Zelle only, paid at the start of the lesson. No card payment anywhere. For a $180 purchase from a stranger that is a real barrier, and it is stated as policy rather than apologised for.',
    'DEFECT — their terms are the harshest in either batch of twenty. Two business days’ notice with weekends and holidays excluded means a Monday lesson must be cancelled by the previous Wednesday. Forgetting your glasses is charged as a full lesson. Unused lessons expire after two months with no refund. All of it reproduced plainly here rather than buried, because a parent discovering it afterwards is a complaint, not a customer.',
    'DEFECT — WordPress post dates are printed above the content on every page: "Mar 29,2016", "Apr 14,2024". The prices page says 2024, so the rates are current, but the site reads abandoned. The footer says "Copyright @ 2015".',
    'DEFECT — "Insturction vehicles equipped with dual controls" in the footer of every page. One typo, sitewide.',
    'PHOTOGRAPHY — the car photograph is theirs and is genuinely good (plate blurred, full sun, door sign legible). The rest of their images are stock: `iStock_000009849440Small1.jpg` names its own source, and `OIP.jpg` is a search-engine cache filename. Only the car is used.',
    'No instructors are named anywhere on the site and no testimonials are published, despite a 5.0 from 71 Google reviews.',
  ],
};
