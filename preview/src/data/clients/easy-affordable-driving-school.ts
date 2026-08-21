import type { Client } from '@/lib/types';

/**
 * Easy & Affordable Driving School, Inc — Sacramento, CA, and five other counties.
 *
 * Scraped from eadrivingschool.com on 2026-08-13
 * (research/easy-affordable-driving-school). Nine pages, previously trading as
 * Best N' Affordable Driving School.
 *
 * Panel hero, no photography and no brand: the crawler kept zero images from nine
 * pages. What they do have is thirty years, six county phone lines, a real
 * classroom course and the plainest promise in this campaign — "Nervous students
 * are WELCOME!" — which is on their site in capitals and deserves to be.
 */
export const easyAffordable: Client = {
  slug: 'easy-affordable-driving-school',
  name: 'Easy & Affordable Driving School',
  short: 'E&A Driving',
  variant: 'safe-route',
  heroStyle: 'panel',

  photos: {
    hero: {
      src: '/clients/easy-affordable-driving-school/human-hero.jpg',
      alt: 'A student smiling during an online lesson with notes and a laptop',
      disclosure: 'Illustrative photography',
    },
  },

  sections: [
    {
      id: 'programs',
      kicker: 'Courses',
      title: 'Classroom, online, in the car — and the written test too.',
      lede:
        'Driver education in a real classroom over four days or online at $48, behind-the-wheel training, and preparation for the written test.',
    },
    {
      id: 'road-test',
      kicker: 'Driving test preparation',
      title: 'We don’t just teach you how to pass the test.',
      lede:
        'Their words. Eleven topics from parallel parking to freeway driving. Press one manoeuvre and watch the route.',
    },
    {
      id: 'vehicles',
      kicker: 'How lessons work',
      title: 'Nervous students are welcome.',
      lede:
        'Free pick-up and drop-off, instructors licensed by the DMV, and the permit validated at your first session so a parent can start practising.',
    },
    {
      id: 'reviews',
      kicker: 'Students',
      title: 'What they say afterwards.',
    },
    {
      id: 'areas',
      kicker: 'Six counties',
      title: 'Sacramento to Santa Clara, each with its own line.',
    },
    {
      id: 'cta',
      title: 'Call the county you are in.',
      lede: 'Toll free 1-800-992-6002, or the local number for your county.',
    },
  ],

  story: {
    pullQuote: 'Our goal is simple: to create learning success stories, one student at a time.',
    paragraphs: [
      'The founder of Easy & Affordable Driving School started teaching drivers training and drivers education thirty years ago; the school traded as Best N’ Affordable Driving School before it took its current name.',
      'They teach across six counties — Sacramento, Alameda, San Francisco and Marin, San Mateo, Contra Costa and Santa Clara — each with its own local number, and their instructors are all licensed as professional driving instructors by the DMV.',
      'Their position on safe driving is worth quoting because it explains the teaching: safe and defensive driving is not something you can inherit, it needs to be taught. And nervous students are welcome, said in capitals on their own site, which for an anxious adult learner is the only sentence on the page that matters.',
    ],
  },

  tagline: 'Thirty years, six counties, and nervous students welcome.',
  headline: 'Safe driving is not inherited. It is taught.',
  heroLede:
    'Driver education and behind-the-wheel training across six Northern California counties — classroom or online, free pick-up and drop-off, and instructors who expect a nervous first lesson.',

  city: 'Sacramento',
  county: 'Sacramento County',

  phones: [
    { label: 'Toll free', display: '1-800-992-6002', raw: '+18009926002' },
    { label: 'Sacramento', display: '(916) 744-8300', raw: '+19167448300' },
    { label: 'Alameda', display: '(510) 646-1900', raw: '+15106461900' },
    { label: 'San Francisco & Marin', display: '(415) 665-8000', raw: '+14156658000' },
    { label: 'San Mateo', display: '(650) 502-3800', raw: '+16505023800' },
    { label: 'Contra Costa', display: '(925) 471-7000', raw: '+19254717000' },
    { label: 'Santa Clara', display: '(408) 600-1200', raw: '+14086001200' },
  ],

  hours: [{ days: 'Classroom driver education', hours: 'Around 9:00 AM – 4:00 PM, with a lunch break' }],
  schedulingNote:
    'The classroom course runs as four Saturdays or four consecutive weekdays. Behind-the-wheel lessons are booked by phone on your county’s line, and free pick-up and drop-off is included.',

  areas: [
    'Sacramento',
    'Alameda County',
    'San Francisco',
    'Marin County',
    'San Mateo County',
    'Contra Costa County',
    'Santa Clara County',
  ],
  areasNote:
    'Six county operations, each with its own phone line, listed here as they list them. Confirm which counties are actively staffed before this goes out — six numbers on one page is a lot of coverage for one school.',

  programs: [
    {
      slug: 'drivers-education-classroom',
      title: 'Drivers Education — In Class',
      navLabel: 'Classroom Ed',
      summary:
        'Four days in a real classroom with a DMV-licensed instructor, 9am to 4pm, finishing with practice tests for the written exam.',
      body: [
        'The same setting as a classroom at a high school: a DMV-licensed instructor explaining each chapter in detail with examples, and safety and defensive driving videos alongside.',
        'The course runs four days — either four Saturdays or four consecutive weekdays — starting around 9am and finishing around 4pm with a lunch break. You finish in four days.',
        'They provide a lot of practice test samples, and their advice at the end is to book the DMV written test straight away while it is fresh.',
      ],
      bullets: [
        'Four days: four Saturdays or four weekdays',
        'Around 9am to 4pm with a lunch break',
        'DMV-licensed instructor teaching in person',
        'Safety and defensive driving videos',
        'Practice test samples provided',
        'Best for students who want a teacher, not a screen',
      ],
    },
    {
      slug: 'drivers-education-online',
      title: 'Drivers Education — Online',
      navLabel: 'Online Ed',
      summary:
        'DMV-approved online driver education at $48, taken when and where it suits.',
      body: [
        'Their online course is approved by the DMV and covers the same requirement as the classroom course, taken at your own convenience.',
        'Required for anyone under 17½ before the DMV will issue a permit, and at $48 it is among the cheaper approved courses in this campaign.',
      ],
      bullets: ['DMV-approved', 'Learn at your own convenience', 'Required for under-17½s'],
      price: 48,
      priceNote: 'Their published price for the online course.',
    },
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'In-car training across eleven topics, from parallel parking to the freeway, with the permit validated at your first session.',
      body: [
        'Their in-car course covers eleven named topics: orientation to the vehicle, driving responsibility, driving straight and turns, rules and regulations of the road, driving in traffic, changing lanes in traffic, pedestrian and bicyclist rights, backing up, parking including parallel parking, U-turns and turnabouts, and freeway or highway driving.',
        'By law a student must hold a permit, temporary licence or licence before training can start. For under-18s, one session with them has to be completed before practising with a parent — and they validate the permit at that first session.',
        'Free pick-up and drop-off. Adult and senior training is offered on the same basis, and nervous students are explicitly welcomed.',
      ],
      bullets: [
        'Eleven topics including freeway and parallel parking',
        'Permit validated at your first session',
        'Free pick-up and drop-off',
        'Adults and seniors taught',
        'Nervous students welcome',
        'Instructors licensed by the DMV',
      ],
      logistics: [
        'A permit, temporary licence or licence is required by law before training',
        'Under-18s must complete one session before practising with a parent',
        'Teens six-hour package available — call for the current price',
      ],
    },
    {
      slug: 'written-test-preparation',
      title: 'Written Test Preparation',
      navLabel: 'Written Test',
      summary: 'DMV practice tests and the driver handbook, for the written exam.',
      bullets: ['DMV practice tests', 'Driver handbook material', 'Additional preparation for the written test'],
    },
  ],

  individualLessons: [
    {
      name: 'Online drivers education',
      description: 'DMV-approved, taken at your own convenience.',
      price: 48,
    },
  ],

  vehicles: {
    summary:
      'Instructors licensed as professional driving instructors by the DMV, all of whom have taken the instructor courses and hold the certification. Free pick-up and drop-off, and an explicit welcome for nervous students.',
    features: [
      'All instructors DMV-licensed and certified',
      'Free pick-up and drop-off',
      'Nervous students welcome',
      'Adults and seniors taught',
    ],
  },

  /** Published on their own site, first name and initial as they show them. */
  testimonials: [
    {
      name: 'Mary W.',
      quote:
        'Being an adult learning for the first time, I thought that it would be hard to learn how to drive for my age. My instructor was so patient with me and taught me a lot. He doesn’t yell or scream like my husband when he tries to teach me.',
    },
    {
      name: 'Steven L.',
      quote:
        'My instructor taught me so much about the safe driving practice. He explains a lot of useful stuff to look out for when driving.',
    },
    {
      name: 'Derick C.',
      quote:
        'She was so helpful. Gave me a lot of tips and prepared me for the driving test. I took the rental car service for the driving test too. Everything was quick and smooth.',
    },
  ],

  rating: { value: '5.0', count: '81', source: 'Google' },

  sourceUrl: 'http://www.eadrivingschool.com',
  internalNotes: [
    'LICENCE — no DMV school licence number published, despite "DMV Approved Drivers Education" appearing throughout and instructors described as DMV-licensed. Omitted. First thing to ask for, and with six county operations there may be more than one number.',
    'STRENGTH — "Nervous students are WELCOME!" in capitals on their own site. Along with GNC, they are one of only two schools in forty previews to name anxiety as something they handle, and for adult learners it is the deciding factor.',
    'STRENGTH — a real four-day classroom course, 9am to 4pm, as four Saturdays or four consecutive weekdays. Most of this campaign has abandoned classroom teaching for online courses; a parent who wants a teacher in a room has almost nowhere else to go.',
    'STRENGTH — a rental car service for the driving test. It appears only inside a customer testimonial, is never listed as a service and is never priced. Selling it properly is free money.',
    'DEFECT — no behind-the-wheel prices anywhere. Their nav advertises "Teens 6 Hours Special" and "BIG SALES!!" with no figure attached to either. The only price on the site is $48 for the online course.',
    'DEFECT — the classroom page says "The course is about days long" — a number is missing from their own sentence. It also says "It\'s start aroud 9am".',
    'DEFECT — six county phone numbers on every page with no addresses for any of them. A visitor cannot tell whether there is an office in their county or a car that drives there.',
    'DO NOT REPRODUCE — "helping thousand of students getting their driver license" (a student count) and the "BIG SALES!!" banner. Their thirty years and their county coverage carry the page instead.',
    'NAME HISTORY — previously Best N\' Affordable Driving School, stated on their own About page. Worth knowing: old reviews and citations may sit under the former name.',
    'PHOTOGRAPHY — none at all across nine pages. Their instructors, their classroom and their cars are the ask, and with a classroom course they have a room worth photographing.',
  ],
};
