import type { Client } from '@/lib/types';

/**
 * Fast Learning Driving School — Modesto and Tracy, CA.
 *
 * Scraped from fastlearningdrivingschool.com on 2026-08-13
 * (research/fast-learning-driving-school). Eleven pages on a GoDaddy site builder,
 * most of them the shop and cart.
 *
 * Panel hero. They publish no image the crawler could keep — no logo, no
 * photograph, no car — so there is nothing to sample a brand from either and the
 * template palette stands.
 *
 * The one thing they have that almost nobody else in this campaign does is
 * genuinely useful and sits in a banner nobody reads: their instructors sign off a
 * teen's permit after the FIRST lesson, so the parent can start practising
 * immediately rather than after all six hours.
 */
export const fastLearning: Client = {
  slug: 'fast-learning-driving-school',
  name: 'Fast Learning Driving School',
  short: 'Fast Learning',
  variant: 'apex',
  heroStyle: 'panel',

  sections: [
    {
      id: 'programs',
      kicker: 'Behind the wheel',
      title: 'Signed off after the first lesson, not the sixth.',
      lede:
        'Their instructors sign a teen’s permit after the first behind-the-wheel class, so practice with a parent can start that week.',
    },
    {
      id: 'road-test',
      kicker: 'Getting ready',
      title: 'Six hours, then the certificate.',
      lede: 'Four manoeuvres decide most California drive tests. Press one and watch the route.',
    },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'Dual gas and brake, instructor’s side.',
      lede:
        'Every car has a second set of controls, and every behind-the-wheel lesson includes free pick-up and drop-off.',
    },
    {
      id: 'areas',
      kicker: 'Two locations',
      title: 'Modesto and Tracy, and the cities around them.',
    },
    {
      id: 'cta',
      title: 'Open seven days, 6am to 9pm.',
      lede: 'Call, text or email — (209) 600-1190.',
    },
  ],

  story: {
    pullQuote: 'Become a confident and safe driver.',
    paragraphs: [
      'Fast Learning Driving School runs from McHenry Avenue in Modesto with a second location on West Linne Road in Tracy, teaching teenagers, adults and seniors across the northern Central Valley.',
      'Their instructors are licensed by the State of California, and every car carries dual gas and brake controls on the instructor’s side.',
      'The detail worth knowing is in their registration rules: a teenager completes the first behind-the-wheel class, has their permit signed off by the instructor there and then, and can begin practising with a parent immediately — rather than waiting until all six hours are done. After the full six hours the certificate follows.',
    ],
  },

  tagline: 'Two locations, seven days a week, 6am to 9pm.',
  headline: 'Get your permit signed off on day one.',
  heroLede:
    'Behind-the-wheel training for teenagers, adults and seniors from Modesto and Tracy — dual-control cars, free pick-up and drop-off, and lessons from six in the morning to nine at night.',

  city: 'Modesto',
  county: 'Stanislaus County',
  address: '901 McHenry Avenue, Modesto, CA 95350',

  phones: [{ display: '(209) 600-1190', raw: '+12096001190' }],

  hours: [
    { days: 'Every day (Modesto)', hours: '6:00 AM – 9:00 PM' },
    { days: 'Every day (Tracy)', hours: '7:00 AM – 9:00 PM' },
    { days: 'Class and session hours', hours: '8:00 AM – 7:00 PM' },
  ],
  schedulingNote:
    'Open seven days a week except major holidays. Registration and payment can be done on their site, or by phone, email or text. A driving permit is required before behind-the-wheel training can be booked.',

  areas: ['Modesto', 'Tracy', 'Ceres', 'Riverbank', 'Salida', 'Turlock', 'Manteca', 'Lathrop'],
  areasNote:
    'Their headquarters is Modesto with a second location in Tracy; their own wording is that they serve all major cities nearby. The list here is those cities — confirm the exact coverage before this goes out.',

  programs: [
    {
      slug: 'behind-the-wheel',
      title: 'Behind-the-Wheel Training',
      navLabel: 'Behind the Wheel',
      summary:
        'Six hours with a state-licensed instructor in a dual-control car, with the permit signed off after the first class.',
      body: [
        'Behind-the-wheel training for teenagers, adults and seniors, taught by instructors licensed by the State of California in cars fitted with dual gas and brake systems on the instructor’s side.',
        'A driving permit and eligibility to drive are required before booking. For a teenager, the first class matters more than the rest: the instructor signs off the permit at the end of it, which is what allows a parent to start supervising practice at home.',
        'After the full six hours the student is eligible for their certificate. Free pick-up and drop-off is included with every lesson.',
      ],
      bullets: [
        'Instructors licensed by the State of California',
        'Dual gas and brake controls',
        'Permit signed off after the first class',
        'Six hours for the certificate',
        'Free pick-up and drop-off',
        'Teenagers, adults and seniors',
      ],
      logistics: [
        'A driving permit is required before booking',
        'Registration and payment online, or by phone, email or text',
        'Open seven days a week except major holidays',
      ],
    },
    {
      slug: 'online-drivers-ed',
      title: 'Driver Education Online',
      navLabel: 'Driver’s Ed',
      summary: 'Their online driver education course, taken at your own pace.',
      bullets: ['Taken online', 'Register and pay on their site'],
      price: 59,
      priceNote: 'Their published price for the online course.',
    },
  ],

  individualLessons: [
    {
      name: 'Driver education online',
      description: 'Their online course, bookable and payable on their site.',
      price: 59,
    },
  ],

  vehicles: {
    summary:
      'Every car is fitted with a dual gas and brake system on the instructor’s side, and every behind-the-wheel lesson includes free pick-up and drop-off.',
    features: [
      'Dual gas and brake, instructor’s side',
      'Free pick-up and drop-off on every lesson',
      'Instructors licensed by the State of California',
      'Teenagers, adults and seniors taught',
    ],
  },

  rating: { value: '4.8', count: '107', source: 'Google' },

  sourceUrl: 'https://fastlearningdrivingschool.com',
  internalNotes: [
    'DEFECT, AND IT IS EMBARRASSING — the email address published across their site is "filler@godaddy.com". It is the GoDaddy site-builder placeholder, it appears in their account header on every page, and it means any enquiry sent to the address on their website goes to GoDaddy. No email is published on this preview because they do not actually have one published. This is the first thing to tell them and it takes them two minutes to fix.',
    'LICENCE — no DMV school licence number published. They say their instructors are "licensed with the state of California as a driving instructors", which is an instructor claim rather than a school licence. Omitted; ask for it.',
    'STRENGTH — the permit being signed off after the FIRST behind-the-wheel class. That is the difference between a parent starting the fifty hours of supervised practice this week or in a month, and it is the most useful thing on their site. It is currently one clause inside a paragraph about registration requirements.',
    'STRENGTH — 6am to 9pm, seven days a week, at the Modesto location. Nobody else in either batch opens at six in the morning. For a shift worker or a student before school that is the entire proposition, and it is only visible on the contact page.',
    'DEFECT — their banner is cut off mid-sentence on every page: "All of our behind the wheel lessons include FREE pick up and drop offs & no certifica". It has been truncated by the template and never noticed.',
    'DEFECT — no behind-the-wheel prices anywhere. The only price on the site is $59 for the online course. Their whole in-car business is unpriced.',
    'DEFECT — typos in their own copy: "Inorder" twice, "for teenage" for teenagers, "as a driving instructors".',
    'PHOTOGRAPHY — none at all. Not a logo, not a car, not a classroom; the crawler kept zero images from eleven pages. Everything visual on the page is type. Their own cars and instructors are the ask, and with two locations they should have them.',
    'NO BRAND — nothing to sample, so the template palette stands rather than a colour being invented for them.',
    'Their Tracy location page gives an address and hours and nothing else — no phone, no local content. It will never rank for Tracy.',
  ],
};
