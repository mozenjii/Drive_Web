import type { Client } from '@/lib/types';

/**
 * Driving School For You — Chula Vista, CA.
 *
 * Scraped from drivingschoolforyou.com on 2026-08-09
 * (research/driving-school-for-you).
 *
 * Atelier. This is one man's reputation with a driving school attached: Dr.
 * Brian Polte, a college professor with a Class B commercial passenger licence
 * who has driven Britney Spears, Pete Townshend and the Foo Fighters. That is
 * an editorial page or it is nothing.
 *
 * No brand override and no photography — their site serves no images the
 * scraper could recover, which is itself the finding.
 */
export const drivingSchoolForYou: Client = {
  slug: 'driving-school-for-you',
  name: 'Driving School For You',
  short: 'DSFY',
  variant: 'atelier',

  heroStyle: 'editorial',

  /**
   * Two things here are unique in the whole set of twenty: lessons taught in an
   * all-electric 2024 Toyota bZ4X, and a DMV-approved 60-hour course that trains
   * people to become driving instructors. Both are buried on their own site
   * among the special offers. Both lead here.
   *
   * Not reproduced: third-party directory rankings.
   */
  sections: [
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'Learn in an electric car, or a petrol one.',
      lede:
        'Three two-hour lessons in a 2024 Toyota bZ4X, or the same in a gas-powered car. Almost nobody else offers the choice.',
    },
    {
      id: 'programs',
      kicker: 'Courses',
      title: 'Including how to become an instructor.',
      lede:
        'Alongside driver training and 30 hours of online driver’s ed, a DMV-approved 60-hour certification programme for people who want to teach.',
    },
    {
      id: 'packages',
      kicker: 'Pricing',
      title: 'Petrol $349. Electric $449.',
      lede: 'Registration form first, then payment — as their own booking flow requires.',
    },
    {
      id: 'instructors',
      kicker: 'Who teaches you',
      title: 'Taught by people we certified ourselves.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'Test-ready, petrol or electric.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'Across San Diego County.',
    },
    {
      id: 'cta',
      title: 'Fill in the registration form to book.',
    },
  ],

  story: {
    paragraphs: [
      'Driving School For You is a DMV-approved school teaching across San Diego County.',
      'Behind-the-wheel lessons are offered in a gas-powered car or in a 2024 Toyota bZ4X, and the school also runs a DMV-approved 60-hour certification programme for people training to become driving instructors.',
    ],
  },

  tagline: 'If those celebrities trusted Brian, so should you.',
  headline: 'Taught by the man who drove Britney Spears and the Foo Fighters.',

  city: 'Chula Vista',
  county: 'San Diego County',

  licence: 'E0109',

  phones: [{ display: '(619) 863-3283', raw: '+16198633283' }],
  email: 'drivingschoolforyou@gmail.com',

  hours: [
    { days: 'Monday – Saturday', hours: '8:00 AM – 5:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  schedulingNote:
    'Lesson time starts when Brian or one of the team collects your teen and ends when they drop them back. Fill in the registration form before purchasing.',

  areas: ['Chula Vista', 'San Diego', 'Bonita', 'National City', 'Imperial Beach'],
  areasNote: 'Chula Vista and San Diego County. Ranked in the top three driving schools in Chula Vista.',

  packageGroups: [
    {
      title: 'Behind-the-wheel training',
      blurb:
        'Every minor in California needs six hours of instruction — that is three lessons. Buy one or buy all three.',
      features: [
        'Two-hour lessons, customised to the student',
        'Pick-up and drop-off, timed door to door',
        'Certification form on completion',
        'Taught by Dr. Brian or his team',
      ],
      packages: [
        {
          name: 'Three lessons',
          detail: 'Six hours in a petrol vehicle — the DMV requirement',
          hours: 6,
          price: 349,
          featured: true,
          saving: 'Back to School special — while it lasts',
          includes: [
            'Two-hour lessons, customised to the student',
            'Pick-up and drop-off, timed door to door',
            'Certification form on completion',
            'Taught by Dr. Brian or his team',
          ],
        },
        {
          name: 'Three lessons — electric',
          detail: 'Six hours in a 2024 Toyota bZ4X, all-electric',
          hours: 6,
          price: 449,
          includes: [
            'Two-hour lessons, customised to the student',
            'Pick-up and drop-off, timed door to door',
            'Certification form on completion',
            'Taught by Dr. Brian or his team',
          ],
        },
      ],
    },
  ],

  individualLessons: [
    { name: 'Three lessons — six hours, petrol vehicle', price: 349 },
    { name: 'Three lessons — six hours, all-electric', description: 'In a 2024 Toyota bZ4X.', price: 449 },
    { name: '30 Hours Driver Education, online', description: 'The DMV-required course for under-18s.' },
    {
      name: '60-Hour Driving Instructor Certification',
      description: 'DMV-approved programme for people who want to teach driving for a living.',
    },
  ],

  programs: [
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Two-hour lessons built around the student in front of us, not around a script — for teens meeting the requirement and adults who want it done properly.',
      body: [
        'Every minor in California needs six hours of instruction with a licensed instructor, which is three two-hour lessons. Each one is customised to your teen’s needs and skill level, and the clock starts when they are collected and stops when they are dropped home.',
        'Adults are equally welcome. Personalised training behind the wheel is the whole offer — there is no group class here to be lost inside.',
      ],
      bullets: [
        'Two hours per lesson',
        'Customised to the student’s skill level',
        'Timed from pick-up to drop-off',
        'Certification form for under-18s',
        'Teens and adults',
      ],
      price: 349,
      priceNote: '$349 for the three lessons, or $449 in the all-electric car.',
    },
    {
      slug: 'electric-vehicle-training',
      title: 'All-Electric Training',
      navLabel: 'Electric',
      summary:
        'Learn in a 2024 Toyota bZ4X — quieter, quicker off the mark, and the car most new drivers will actually own.',
      bullets: [
        'A 2024 Toyota bZ4X, all-electric',
        'Regenerative braking and one-pedal driving',
        'Advanced safety systems',
        'Six hours, same three-lesson structure',
      ],
      price: 449,
    },
    {
      slug: 'instructor-certification',
      title: 'Driving Instructor Certification',
      navLabel: 'Instructor Course',
      summary:
        'A DMV-approved 60-hour programme for people who want to do this for a living.',
      bullets: [
        'DMV-approved 60-hour certification',
        'Taught by a working instructor with a Class B commercial licence',
        'A route into the trade, not just a certificate',
      ],
    },
  ],

  vehicles: {
    summary:
      'A petrol car and a 2024 Toyota bZ4X, so a student can learn in whichever they are actually going to drive.',
    features: [
      'A 2024 all-electric Toyota bZ4X',
      'A petrol vehicle for students who prefer one',
      'Pick-up and drop-off included in the lesson time',
      'Taught by an instructor with a Class B passenger endorsement',
    ],
  },

  instructors: [
    {
      name: 'Dr. Brian Polte',
      initials: 'BP',
      role: 'Owner and instructor',
      years: '15+',
      bio: 'A college professor of fifteen years, a California-licensed real estate agent, and the holder of a Class B commercial licence with passenger endorsement — which means his background has been checked about as thoroughly as it is possible to check one. Winner of the National Limousine Association Safety and Service Award, and has driven Britney Spears, Pete Townshend, Steve Irwin, the Foo Fighters and Julio César Chávez.',
    },
  ],

  rating: { value: '4.9', count: '154', source: 'Google' },

  sourceUrl: 'https://drivingschoolforyou.com',
  internalNotes: [
    'Two licences on their own site: E0109 for the driving school, E1779 for traffic school.',
    'Dr. Brian Polte\'s celebrity driving history and his National Limousine Association award are the best differentiators in this campaign after Allstate\'s ex-DMV-examiner founder. Both are buried below the fold.',
    'DEFECT — the site serves no photographs at all that a crawler can retrieve. For a school selling one man\'s personal reputation, there is not a single picture of him.',
    'DEFECT — the workbook flags unrelated real-estate and cross-promotional links competing with driving-school conversion. Confirmed: Brian is also a licensed real estate agent and both businesses share the page.',
    'DEFECT — a $95 non-negotiable refund processing fee and a $35 late-cancellation fee are on the homepage, directly under the pricing. Moved off the preview; these belong in the terms.',
    'The "Back to School Special" framing on $349 has no stated end date. Ask before quoting it as permanent.',
    'They advertise a 60-hour DMV-approved instructor certification course — a completely different customer from driving lessons, and it shares one page with them.',
    'They claim "Top Driving School in San Diego County for 2025" and a #1 Chula Vista ranking from a third-party directory. Not reproduced — directory rankings are pay-to-list often enough that it is not worth the risk.',
  ],
};
