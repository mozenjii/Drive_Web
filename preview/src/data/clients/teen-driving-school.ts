import type { Client } from '@/lib/types';

/**
 * Teen Driving School Inc — Santee, CA.
 *
 * Scraped from teendrivingschool.com on 2026-08-20 (research/teen-driving-school).
 * Nineteen pages of a small, old, hand-built site.
 *
 * This one is NOT a behind-the-wheel school any more, and the preview says so.
 * Their driving-lessons page explains the DMV requirement and then refers the
 * in-car training to two named affiliates. What they run themselves is California-
 * approved online driver education for teens. Building them a page full of lesson
 * packages would be inventing a business they have stopped operating.
 *
 * Panel hero, no photography: their images are stock (`iStock_000000745163`,
 * `TEEN-GIRL.jpg`) plus scans of the DMV certificates and their own licence
 * document. Nothing to sample a brand from either.
 *
 * Two licence numbers, both published, both real: E2083 now, E3048 before 2016.
 */
export const teenDrivingSchool: Client = {
  slug: 'teen-driving-school',
  name: 'Teen Driving School',
  short: 'Teen Driving',
  variant: 'safe-route',
  heroStyle: 'panel',

  sections: [
    {
      id: 'programs',
      kicker: 'Online driver education',
      title: 'California-approved, self-paced, and you can retake it.',
      lede:
        'Immediate access to the reading and testing material, results the moment you finish, and the DMV certificate free.',
    },
    {
      id: 'road-test',
      kicker: 'What comes next',
      title: 'Six hours in a car, and the DL400D.',
      lede:
        'Driver education is the first half. A teen under 18 also needs six hours behind the wheel and the certificate that proves it. Press one manoeuvre and watch the route.',
    },
    {
      id: 'areas',
      kicker: 'Where it is valid',
      title: 'Every DMV office in California.',
    },
    {
      id: 'cta',
      title: 'Enrol tonight, know your result tonight.',
      lede: 'Call or text (619) 500-2855.',
    },
  ],

  story: {
    pullQuote: 'Our courses are specifically designed for California teens.',
    paragraphs: [
      'Teen Driving School Inc is a California DMV licensed, insured and bonded driving school, established in 1992 and operating from Santee. Their licence is E2083, and was E3048 before 2016 — both numbers are published on their own site.',
      'What they run today is online driver education, written specifically for California teens: the course a student under 17½ has to complete before the DMV will issue a permit. It is self-paced, the result is known the moment the test is submitted, and a student who does not pass can retake it.',
      'The certificate is free, there is no shipping charge, and processing is fast — which matters more than it sounds when a teenager is waiting on a document before they can book anything else.',
    ],
  },

  tagline: 'California-approved online driver education, DMV licensed since 1992.',
  headline: 'The course California asks for, done tonight.',
  heroLede:
    'California-approved online driver education for teens — self-paced, retakeable, results known instantly, and the DMV certificate at no extra cost. DMV licence E2083.',

  city: 'Santee',
  county: 'San Diego County',

  licence: 'E2083', // "Our DMV lic. is E2083 (Previous E3048)" on their home page
  founded: '1992',

  phones: [{ label: 'Call or text', display: '(619) 500-2855', raw: '+16195002855' }],
  email: 'teendrivingschool@gmail.com',

  schedulingNote:
    'The online course is available immediately on enrolment and taken at the student’s own pace. Note their refund terms before paying: payments for online courses are non-refundable, and all payments expire ninety days from the payment date.',

  areas: ['Santee', 'El Cajon', 'La Mesa', 'San Diego', 'Lakeside', 'Poway', 'Statewide (online course)'],
  areasNote:
    'The online course is approved by the California DMV and the certificate is valid at every DMV office in the state, so the course itself has no service area. The cities listed are those around their Santee base.',

  programs: [
    {
      slug: 'online-drivers-ed',
      title: 'Online Driver Education',
      navLabel: 'Online Ed',
      summary:
        'The California-approved driver education course for teens — self-paced, retakeable, with the DMV certificate free.',
      body: [
        'California requires driver education before the DMV will issue a permit to anyone under 17½. This is that course, written specifically for California teens and approved by the DMV.',
        'Enrolment gives immediate access to the reading and testing materials. It is self-paced, results are known instantly when the test is submitted, and a student who does not pass first time may retake the course in order to pass — which removes the one thing that makes parents nervous about buying an online course.',
        'The DMV certificate is free, there is no shipping charge and no hidden costs. Their site also shows an example of the course before you buy, which is unusual and worth doing.',
      ],
      bullets: [
        'Approved driver education in California',
        'Immediate internet access on enrolment',
        'Self-paced, results known instantly',
        'Retakes allowed in order to pass',
        'Free DMV certificate, free shipping',
        'Example of the course viewable before enrolling',
      ],
    },
    {
      slug: 'replacement-certificates',
      title: 'Replacement Certificates',
      navLabel: 'Certificates',
      summary:
        'A lost or damaged certificate from one of their courses replaced for $15 — for former students.',
      body: [
        'A DMV certificate is a single sheet of paper that a teenager has to keep safe for months, and they do not always manage it.',
        'If you took one of their courses and the certificate is lost or damaged, they will replace it for $15. This is for their own students only — a certificate from another school has to come from that school.',
      ],
      bullets: ['$15 replacement fee', 'For students who took their courses', 'Lost or damaged certificates'],
      price: 15,
    },
    {
      slug: 'behind-the-wheel-requirement',
      title: 'The Behind-the-Wheel Requirement',
      navLabel: 'Behind the Wheel',
      summary:
        'What a teen still needs after the course — six hours in a car and the DL400D certificate. They refer this to trusted affiliates.',
      body: [
        'Driver education is the first of two requirements. A teen under 18 must also complete six hours of professional behind-the-wheel training and receive the six-hour certificate, form DL400D.',
        'Teen Driving School does not teach the in-car hours themselves. They refer students to affiliates they name on their own site, for San Diego and for North County — so ask them who they currently recommend rather than searching from scratch.',
        'Adults are not held to the six hours: an adult may take any number of lessons, or none.',
      ],
      bullets: [
        'Six hours required for under-18s',
        'Six-hour certificate is DMV form DL400D',
        'In-car training referred to their named affiliates',
        'No minimum for adults',
      ],
    },
  ],

  individualLessons: [
    {
      name: 'Replacement certificate',
      description: 'For a lost or damaged certificate from one of their own courses.',
      price: 15,
    },
    {
      name: 'Late cancellation or no-show',
      description:
        'From their policy page: charged when a lesson is cancelled without 48 hours’ notice, for a no-show, or when a student arrives without their learner’s permit.',
      price: 30,
    },
  ],

  rating: { value: '4.6', count: '63', source: 'Google' },

  sourceUrl: 'http://www.teendrivingschool.com',
  internalNotes: [
    'SUBSTITUTED LEAD — this preview replaces Coastline Academy (workbook row 22) in the Tier A twenty, at the client\'s direction. Coastline holds driving-school licences in eight states, describes itself as America\'s largest provider of driving lessons and runs a "sell your school" page; they acquire driving schools rather than needing one rebuilt. Teen Driving School is workbook row 41.',
    'LICENCE — E2083, with E3048 named as the previous number, both published on their own home page and licence page. Their nav says "NEW E2083 Since 2016", which reconciles the two dates on the site: established 1992, licence renumbered 2016.',
    'THEY NO LONGER TEACH IN-CAR — their driving-lessons page explains the six-hour requirement and then refers the work to two named affiliates (one for all San Diego, one for North County). This preview therefore sells online driver education and explains the behind-the-wheel requirement without pretending they fulfil it. Building them lesson packages would be inventing a business they have stopped running. CONFIRM this is still true before sending — if they have started teaching again, the page needs a different shape.',
    'DEFECT — their policy page still governs behind-the-wheel training they no longer provide: cancellation fees for lessons, permits to be carried at each lesson, students being dropped for repeated cancellations. Either the lessons are back or the policy is years out of date, and a customer reading it cannot tell which.',
    'DEFECT — no price anywhere for the online course. The only figures on the entire site are the $15 replacement certificate and the $30 cancellation fee. Their actual product is unpriced.',
    'DEFECT — /services/ returns a 403 Forbidden from their own server, and it is linked from their navigation.',
    'REFUND TERMS worth surfacing before purchase, not after: online course payments are non-refundable, and ALL payments expire ninety days from the payment date. A family that pays in June for a course started in October has lost the money.',
    'DO NOT REPRODUCE — their nav carries a "5-STAR CUSTOMER REVIEWS" label. Their actual Google rating is 4.6 from 63, which is good and is what this preview publishes, attributed.',
    'PHOTOGRAPHY — none of the business. `iStock_000000745163_Small.jpg` names its own source and TEEN-GIRL.jpg is the same kind of thing. The genuinely theirs images are document scans: the DMV certificates and their own licence. Not used as photography.',
    'STRENGTH — "students may retake the course in order to pass" and a viewable example of the course before enrolling. Both answer the objection to buying an online course sight-unseen, and both are one line each on a page nobody reads.',
  ],
};
