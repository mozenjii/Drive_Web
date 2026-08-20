import type { Client } from '@/lib/types';

/**
 * Guardian Angel Driving School — Redlands, CA.
 *
 * Scraped from guardianangeldrivingschool.com on 2026-08-13
 * (research/guardian-angel-driving-school). Twenty-two pages, most of them the
 * chapters of their own online driver education course.
 *
 * Panel hero: their images are course thumbnails rather than photographs of the
 * business. Brand sampled from their logo — the gold darkened past the line
 * (see the note in `brand`).
 *
 * Their price ladder is the clearest in either batch: six rungs from two hours to
 * twelve, each with its lesson count, and a combination package that is genuinely
 * cheaper than buying the two halves separately. That leads the page.
 */
export const guardianAngel: Client = {
  slug: 'guardian-angel-driving-school',
  name: 'Guardian Angel Driving School',
  short: 'Guardian Angel',
  variant: 'atelier',
  heroStyle: 'panel',

  logo: '/clients/guardian-angel-driving-school/logo.png',

  brand: {
    // brand.py sampled #957116 and printed 4.50:1. It actually measures 4.5146,
    // which is the same knife-edge that failed brand.test.ts on Drive Academy.
    // Darkened one step to 4.66:1, hue and saturation untouched.
    primary: '#926F16',
    primaryDark: '#856514',
    primarySoft: '#F8F2E5',
    accent: '#98671D',
    accentDark: '#8A5E1A',
    accentSoft: '#F8F1E7',
    wash: '60, 46, 9',
    bg: '#FCFAF4',
    border: '#EEE3C6',
    borderSoft: '#F5EFDD',
    fgDim: '#6F6A57',
  },

  sections: [
    {
      id: 'packages',
      kicker: 'Driver training',
      title: 'Two hours to twelve, and what each rung costs.',
      lede:
        'Six lengths of course, priced per rung, plus a combination package that costs less than buying the online course and the six hours separately.',
    },
    {
      id: 'programs',
      kicker: 'What we teach',
      title: 'The whole California syllabus, chapter by chapter.',
      lede:
        'Their online course runs from the point count system to pedestrians who are blind — forty-odd topics, not a slideshow.',
    },
    {
      id: 'road-test',
      kicker: 'The examination procedure',
      title: 'Taught, not guessed at.',
      lede: 'Four manoeuvres decide most California drive tests. Press one and watch the route.',
    },
    {
      id: 'areas',
      kicker: 'Cities we service',
      title: 'Eleven towns across the Inland Empire.',
    },
    {
      id: 'cta',
      title: 'Excellence in instruction, integrity in practice.',
      lede: 'Call (909) 335-3053, or start the online course tonight.',
    },
  ],

  story: {
    pullQuote:
      'Our desire is to provide excellence in driving instruction, integrity in all of our business practices, and a fulfilling experience for every single one of our students.',
    paragraphs: [
      'Guardian Angel Driving School teaches from an office on Orange Tree Lane in Redlands, covering eleven towns across the Inland Empire from Banning and Beaumont through to San Bernardino and Yucaipa.',
      'They run both halves of the California requirement — an online driver education course and behind-the-wheel training — and they sell the behind-the-wheel side in six lengths rather than one, so a student who needs eight hours is not made to buy six and improvise.',
      'What they say they enjoy about the business is students coming back to show them their licences. It is a small thing to put on a home page and it is more convincing than a statistic.',
    ],
  },

  tagline: 'Driver education and behind-the-wheel training across the Inland Empire.',
  headline: 'Two hours, or twelve. Priced either way.',
  heroLede:
    'Online driver education and behind-the-wheel training from Redlands, covering eleven Inland Empire towns — with every length of course priced on one page.',

  city: 'Redlands',
  county: 'San Bernardino County',
  address: '1916 Orange Tree Lane, Ste. 450B, Redlands, CA 92374',

  phones: [{ display: '(909) 335-3053', raw: '+19093353053' }],

  schedulingNote:
    'Lessons are booked by phone; the online course can be started at any time. The six-hour package is the one marked on their own price list as the DMV requirement for a minor.',

  areas: [
    'Redlands',
    'San Bernardino',
    'Yucaipa',
    'Highland',
    'Loma Linda',
    'Colton',
    'Grand Terrace',
    'Mentone',
    'Calimesa',
    'Beaumont',
    'Banning',
  ],
  areasNote: 'The eleven cities listed on their own home page, in their own order.',

  programs: [
    {
      slug: 'online-drivers-ed',
      title: 'Online Driver Education',
      navLabel: 'Driver’s Ed',
      summary:
        'The full California syllabus online — from the point count system to right-of-way for pedestrians who are blind.',
      body: [
        'Their online course is not a formality. Its contents run to some forty sections: obtaining a licence, minors’ permit and licence requirements, provisional licence restrictions, laws and rules of the road, following distances, merging in and out of traffic, passing, legal and illegal U-turns, traffic signal lights, pedestrian responsibility, pedestrians who are blind, emergency vehicles, animal-drawn vehicles, slow-moving vehicles, vehicles carrying hazardous loads, driving in various weather and light conditions, drinking and driving, carrying alcohol in a car, possession of firearms, vandalism and habitual truancy, the point count system, and the examination procedure itself.',
        'That breadth is the product. A teen who works through it knows what the written test is going to ask before they sit it.',
      ],
      bullets: [
        'Full California driver education syllabus',
        'Around forty sections, chapter by chapter',
        'Covers the examination procedure itself',
        'Taken online, at your own pace',
        'Satisfies the state requirement for under-18s',
      ],
      price: 35,
    },
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Six lengths of course, from a single two-hour lesson to twelve hours across six lessons.',
      body: [
        'Behind-the-wheel training sold in six rungs: two hours, four, six, eight, ten or twelve, each as two-hour lessons. Six hours is the DMV requirement for a minor and is the rung their own price list marks with an asterisk.',
        'Selling eight and ten and twelve hours matters more than it sounds. A nervous student who needs more than the minimum can buy exactly what they need instead of six hours plus guesswork, and a parent can see the cost before committing.',
      ],
      bullets: [
        'Two-hour lessons',
        'Six lengths: 2, 4, 6, 8, 10 or 12 hours',
        'Six hours meets the DMV requirement for a minor',
        'Eleven cities served',
      ],
      price: 420,
      priceNote:
        'Six hours (three lessons). From $160 for a single two-hour lesson up to $780 for twelve hours.',
    },
    {
      slug: 'combination-package',
      title: 'Driver’s Ed Plus Six Hours',
      navLabel: 'Combination',
      summary:
        'The online course and the six hours of training together, for less than the two bought separately.',
      body: [
        'Their combination package bundles the online driver education course with the six hours of behind-the-wheel training a minor needs.',
        'It is $440. Bought separately the same two come to $455, so the bundle is a real $15 saving rather than a rearranged price — which is worth stating, because plenty of "packages" are not.',
      ],
      bullets: [
        'Online driver education course included',
        'Six hours of behind-the-wheel training',
        'Everything a California minor needs from a school',
        '$15 less than buying the two separately',
      ],
      price: 440,
      priceNote: 'Against $455 for the course and the six hours bought separately.',
    },
  ],

  packageGroups: [
    {
      title: 'Behind-the-wheel training',
      blurb: 'Their published ladder, in their own order. Six hours is the DMV requirement for a minor.',
      features: [
        'Two-hour lessons',
        'Meets the DMV requirement for a minor',
        'Online driver education included',
        'Eleven cities served',
      ],
      featureNotes: {
        'Meets the DMV requirement for a minor':
          'California requires six hours of professional behind-the-wheel training for a driver under 18. Their price list marks that rung with an asterisk.',
      },
      lessonHours: 2,
      packages: [
        { name: '2 Hours', detail: '1 lesson', hours: 2, price: 160, includes: ['Two-hour lessons', 'Eleven cities served'] },
        { name: '4 Hours', detail: '2 lessons', hours: 4, price: 310, includes: ['Two-hour lessons', 'Eleven cities served'] },
        {
          name: '6 Hours',
          detail: '3 lessons — the DMV requirement',
          hours: 6,
          price: 420,
          includes: ['Two-hour lessons', 'Meets the DMV requirement for a minor', 'Eleven cities served'],
        },
        { name: '8 Hours', detail: '4 lessons', hours: 8, price: 550, includes: ['Two-hour lessons', 'Meets the DMV requirement for a minor', 'Eleven cities served'] },
        { name: '10 Hours', detail: '5 lessons', hours: 10, price: 670, includes: ['Two-hour lessons', 'Meets the DMV requirement for a minor', 'Eleven cities served'] },
        { name: '12 Hours', detail: '6 lessons', hours: 12, price: 780, includes: ['Two-hour lessons', 'Meets the DMV requirement for a minor', 'Eleven cities served'] },
        {
          name: 'Combination Package',
          detail: 'Online driver’s ed plus 6 hours',
          hours: 6,
          price: 440,
          saving: '$15 against buying separately',
          includes: [
            'Two-hour lessons',
            'Meets the DMV requirement for a minor',
            'Online driver education included',
            'Eleven cities served',
          ],
          featured: true,
        },
      ],
    },
  ],

  individualLessons: [
    {
      name: 'Online driver education course',
      description: 'The full California syllabus, around forty sections, taken at your own pace.',
      price: 35,
    },
  ],

  rating: { value: '3.6', count: '71', source: 'Google' },

  sourceUrl: 'https://guardianangeldrivingschool.com',
  internalNotes: [
    'LICENCE — no DMV school licence number published anywhere across twenty-two pages. Omitted. First thing to ask for.',
    'RATING — 3.6 from 71 is the lowest in this batch of twenty and the only one under 4. Worth handling carefully in the outreach: the pitch here is not "you are doing well online", it is that a clear, honest page is how you answer a mixed review history. Do not lead with their rating.',
    'DO NOT REPRODUCE — "We\'ve even had some DMV personnel comment on how well our students are trained!" It is an anecdote implying official endorsement, unverifiable by us, and it sits in their first paragraph. Left out; their mission line is used instead.',
    'DO NOT REPRODUCE — enrolment counters reading "729 students" and "911 students" on two course listing pages. Student counts are exactly what sites/VERIFY.md forbids, and these two also contradict each other in a way no visitor can resolve.',
    'STRENGTH — six price rungs from two hours to twelve. Nobody else in either batch sells eight, ten or twelve hours as a priced product, and the student who needs more than the minimum is the student most likely to buy.',
    'STRENGTH — the combination package is a genuine saving: $440 against $455 for the same two products bought separately. Verified by arithmetic from their own price list, which is why the $15 figure is safe to state.',
    'STRENGTH — the online course syllabus is unusually complete: around forty sections including the point count system, hazardous loads, pedestrians who are blind, and the examination procedure. Their site hides it behind a login-protected course viewer, so a prospect cannot see what they are buying. Publishing the contents list is free and would sell it.',
    'DEFECT — every course chapter is a separate indexed page saying only "This content is protected, please [log in] in the course to view this content!". Twenty of their twenty-two crawlable pages are that message. Search engines are indexing a wall of empty pages.',
    'PHOTOGRAPHY — none of the business. Their images are three course thumbnails and two renders of the same online-course graphic. Their own cars and instructors are the ask.',
    'Their site footer credits "Webkeeping Services by Parker Web" — there is an incumbent web supplier, so expect the conversation to involve them.',
  ],
};
