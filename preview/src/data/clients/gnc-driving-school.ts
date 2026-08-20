import type { Client } from '@/lib/types';

/**
 * GNC Driving School — Orange, CA.
 *
 * Scraped from gncdrivingschool.com on 2026-08-13 (research/gnc-driving-school).
 * Fourteen pages crawled — and five of them are not their content at all. See the
 * first internalNote: their course pages are serving injected casino spam.
 *
 * Stage hero, on their own photograph of an entire class standing outside their
 * office under their own sign. It is the most human image in either batch of
 * twenty and it also did some research for us: the sign reads "EST. 1997 —
 * Serving the OC for 15 Years", which dates the photo to about 2012 and gives a
 * founding year their site text never states.
 *
 * Brand sampled from their logo shield: the blue darkened to 4.52:1 with the gold
 * as accent.
 */
export const gncDriving: Client = {
  slug: 'gnc-driving-school',
  name: 'GNC Driving School',
  short: 'GNC',
  variant: 'safe-route',
  heroStyle: 'stage',

  logo: '/clients/gnc-driving-school/logo.png',

  brand: {
    // brand.py printed 4.52:1 for #4F7C99; it measures 4.4915 and fails
    // brand.test.ts. Darkened one step, hue and saturation untouched: 4.74:1.
    primary: '#4D7894',
    primaryDark: '#466D87',
    primarySoft: '#E9F0F4',
    accent: '#866B44',
    accentDark: '#715A3A',
    accentSoft: '#F5F1EB',
    wash: '32, 50, 62',
    bg: '#F6F8FA',
    border: '#CEDCE6',
    borderSoft: '#E2EBF0',
    fgDim: '#61717C',
  },

  photos: {
    hero: {
      src: '/clients/gnc-driving-school/class.jpg',
      alt: 'A GNC Driving School class outside the school’s office in Orange, under the GNC sign',
    },
    support: {
      src: '/clients/gnc-driving-school/classroom.jpg',
      alt: 'A GNC Driving School instructor teaching a written-test class in their classroom',
    },
  },

  sections: [
    {
      id: 'programs',
      kicker: 'Courses',
      title: 'Behind the wheel, and the written test that comes first.',
      lede:
        'Six hours in the car across three days, and Saturday classes for the written test — taught in English and Spanish.',
    },
    {
      id: 'road-test',
      kicker: 'Defensive driving',
      title: 'Residential streets, freeway, heavy traffic.',
      lede:
        'Their lessons deliberately cover all three, to build awareness rather than to scrape a pass. Press one manoeuvre and watch the route.',
    },
    {
      id: 'vehicles',
      kicker: 'How we teach',
      title: 'Extra attention for nervous drivers.',
      lede:
        'One-to-one training with instructors who specialise by student need, and patience as an explicit method rather than a slogan.',
    },
    {
      id: 'areas',
      kicker: 'Where we teach',
      title: 'Central, Inland and coastal Orange County.',
    },
    {
      id: 'cta',
      title: 'One lesson with us is a lifetime investment.',
      lede: 'Call (714) 973-6369 — flexible class and car times.',
    },
  ],

  story: {
    pullQuote:
      'Our fine service is an expression of the genuine care we have for our students.',
    paragraphs: [
      'GNC Driving School is a family owned and operated state-licensed school on North Tustin Street in Orange, serving central, inland and coastal Orange County. Their own signage says est. 1997.',
      'They have specialised from the start in two things: defensive driving instruction, and nervous individuals. Instructors specialise by student need, with extra attention paid to drivers who are anxious behind the wheel — which is a real speciality rather than a line, and the reason a family with a frightened teenager picks one school over another.',
      'Their teaching runs from residential streets to freeway to heavy traffic zones on purpose, to maximise awareness and confidence rather than to rehearse a test route. Their own framing: the skills and habits acquired exceed the requirements of the driving test.',
    ],
  },

  tagline: 'Defensive driving and nervous drivers, in Orange County since 1997.',
  headline: 'Patience, and a freeway.',
  heroLede:
    'Family owned driver training across Orange County — six hours behind the wheel, Saturday written-test classes in English and Spanish, and extra attention for nervous drivers.',

  city: 'Orange',
  county: 'Orange County',
  address: '172 North Tustin Street, Suite 305, Orange, CA 92867',

  founded: '1997', // "EST. 1997" on their own office sign, in their own photograph

  phones: [{ display: '(714) 973-6369', raw: '+17149736369' }],
  email: 'gncdrive@msn.com',
  languages: ['English', 'Spanish'],

  hours: [{ days: 'Written-test classes', hours: 'Saturdays, 8:00 AM – 2:00 PM' }],
  schedulingNote:
    'Written-test classes run for four consecutive Saturdays, 8am to 2pm, with week-long courses in the summer, spring break and winter break. Behind-the-wheel lessons are booked around the student — their class and car times are flexible.',

  areas: [
    'Orange',
    'Santa Ana',
    'Tustin',
    'Anaheim',
    'Villa Park',
    'Garden Grove',
    'Irvine',
    'Costa Mesa',
    'Huntington Beach',
  ],
  areasNote:
    'Their own description is central, inland and coastal Orange County. The cities listed here are the ones inside that description around their Orange office; confirm the exact coverage before this goes out.',

  programs: [
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Lessons',
      navLabel: 'Behind the Wheel',
      summary:
        'Six hours with a patient, highly trained instructor — residential streets, freeway and heavy traffic, two hours at a time.',
      body: [
        'Six hours of behind-the-wheel instruction, taught as three days of two hours. Each lesson is defensive and advanced driving skills rather than laps of a quiet street.',
        'The route is the point: residential areas, then freeway, then heavy traffic zones, deliberately, to challenge and maximise awareness and confidence behind the wheel.',
        'For under-18s who have completed driver education, the same six hours is the DMV requirement, and free pick-up and drop-off is included.',
      ],
      bullets: [
        'Six hours as three days of two hours',
        'Residential, freeway and heavy traffic',
        'Defensive and advanced driving skills',
        'One-to-one with a trained instructor',
        'Free pick-up and drop-off for teens',
        'Extra attention for nervous drivers',
      ],
      logistics: [
        'For under-18s, driver education must be completed first',
        'Class and car times are flexible',
        'Completing their course may qualify you for an insurance reduction — check with your insurer',
      ],
    },
    {
      slug: 'written-test-lessons',
      title: 'Written Test Classes',
      navLabel: 'Written Test',
      summary:
        'Four consecutive Saturdays, 8am to 2pm, in English or Spanish — plus week-long courses in the school holidays.',
      body: [
        'Classes for the DMV written test, taught in English and Spanish, for all ages from beginners to advanced. Their instructors are trained both in the classroom and on the road, which is not always true of a school that teaches theory.',
        'The regular schedule is four consecutive Saturdays, 8am to 2pm. Week-long courses run in the summer, at spring break and over winter break — which is when a teenager actually has the time.',
      ],
      bullets: [
        'Four consecutive Saturdays, 8am – 2pm',
        'Taught in English and Spanish',
        'All ages, beginners to advanced',
        'Week-long courses in summer, spring and winter breaks',
      ],
      image: '/clients/gnc-driving-school/classroom.jpg',
    },
    {
      slug: 'for-teens',
      title: 'For Teens',
      navLabel: 'For Teens',
      summary:
        'The six hours a under-18 needs after driver education — three days, two hours a day, pick-up and drop-off included free.',
      bullets: [
        'Six hours across three days',
        'For under-18s who have completed driver education',
        'Free pick-up and drop-off',
        'Two hours per day',
      ],
    },
  ],

  vehicles: {
    summary:
      'One-to-one training with certified supervising instructors, on a route that runs from residential streets to the freeway to heavy traffic. Instructors specialise by student need, with extra attention for nervous drivers.',
    features: [
      'One-to-one instruction',
      'Certified supervising instructors',
      'Residential, freeway and heavy traffic training',
      'Extra attention for nervous drivers',
      'Free pick-up and drop-off for teen lessons',
    ],
  },

  rating: { value: '4.7', count: '65', source: 'Google' },

  sourceUrl: 'https://www.gncdrivingschool.com',
  internalNotes: [
    'URGENT — THEIR SITE IS COMPROMISED. As scraped on 2026-08-13, five of their fourteen crawlable pages serve injected spam instead of their own content: behind-the-wheel-lesson.php, written-test-lessons.php and for-teens.php all returned an Indonesian online-casino page ("MATA11", "SLOT ONLINE", "DAFTAR", mahjong slots) with scraped Etsy help-centre text mixed in. The home page was still clean. Evidence is in research/gnc-driving-school/pages/. A follow-up request a few hours later got no response from the host at all, so this needs re-checking before contact — but if it is still live, every one of their three course pages is selling gambling to parents, and Google will de-index the domain for it. This is not a marketing conversation, it is a "your site has been hacked" phone call, and it should be made today.',
    'FOUNDED 1997 — recovered from their own photograph: the office sign in img5.jpg reads "GNC Driving School, EST. 1997, Serving the OC for 15 Years". Their site text never gives a founding year.',
    'DEFECT — that same recovery exposes a contradiction. Their home page says "For 19 years we have specialized in defensive driving instruction" in one paragraph and "We have been training drivers of all ages for more than 10 years" two paragraphs later. From est. 1997 the true figure in 2026 is twenty-nine years. The "19 years" line was written around 2016 and never touched since, so their headline credential is nine years out of date and understates them by a decade.',
    'DO NOT REPRODUCE — "over thousands of safe stuent drivers have graduated" (their spelling). A student count, unverifiable, and left out.',
    'PHOTO PERMISSION — both photographs show identifiable students, and they date to around 2012 judging by the sign in one and the whiteboard date (12.22.11) in the other. Those students are adults now. Acceptable for a noindex preview of their own published images; written permission is required before a production rebuild, and given the age of the photos, new ones are the better answer (memory/005).',
    'STRENGTH — "nervous individuals" as a stated speciality, with extra attention paid to nervous drivers, appearing three times on their home page. That is the single most saleable thing in this batch and it is buried in the middle of long paragraphs.',
    'STRENGTH — written-test classes in Spanish, and week-long courses timed to school holidays. Both are practical and both are hard to find.',
    'DEFECT — their site publishes no prices at all. "Choose Your Package" is a heading with no packages under it, and the three course pages that would have carried detail are the hijacked ones.',
    'DEFECT — typos in their own copy: "proffessional", "stuent", "efficently". Minor next to the hijack.',
    'Their nav lists Testimonials and a Gallery. Neither was reachable in the crawl, so nothing from them is used here.',
  ],
};
