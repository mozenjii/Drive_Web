import type { Client } from '@/lib/types';

/** Icon Driving School — Riverside and the Inland Empire. */
export const iconDriving: Client = {
  slug: 'icon-driving-school',
  name: 'Icon Driving School',
  short: 'Icon Driving',
  variant: 'apex',
  heroStyle: 'editorial',
  photos: {
    hero: {
      src: '/clients/icon-driving-school/human-hero.jpg',
      alt: 'A confident adult driver smiling behind the wheel',
      disclosure: 'Illustrative photography',
    },
  },
  brand: {
    primary: '#173f80', primaryDark: '#0d2858', primarySoft: '#e8eef9',
    accent: '#9a241d', accentDark: '#741813', accentSoft: '#fbe9e7', wash: '23, 63, 128',
    bg: '#f7f8fc', border: '#8191ad', borderSoft: '#d9dfeb', fgDim: '#526079',
  },
  sections: [
    { id: 'programs', kicker: 'Behind the wheel', title: 'Six hours for teens. Two-hour sessions for adults.', lede: 'Practical instruction in real traffic, organised around California DMV guidelines.' },
    { id: 'vehicles', kicker: 'Choose your comfort level', title: 'Marked or unmarked, always dual controlled.', lede: 'Late-model training cars are safety inspected, air conditioned and maintained for instruction.' },
    { id: 'road-test', kicker: 'Before the test', title: 'Practise the rules in the traffic where they matter.', lede: 'Pre-examination exercises and proactive, legal driving habits rather than memorising a route.' },
    { id: 'areas', kicker: 'Inland Empire', title: 'Free pickup from home, work or school.', lede: 'Call to confirm current availability in your part of the service area.' },
    { id: 'cta', title: 'Call Icon for current pricing.', lede: 'The school is open seven days a week and prices by area and availability.' },
  ],
  story: {
    pullQuote: 'Be safe, legal and proactive on the road.',
    paragraphs: [
      'Icon focuses exclusively on behind-the-wheel training for minors and adults. The school says its instructors are qualified, experienced and California DMV certified, with more than twenty-five years of teaching experience across the team.',
      'Lessons take place in real traffic and follow DMV guidelines, with pre-examination exercises available. Free pickup and drop-off is offered from home, work or school throughout the Inland Empire.',
      'Students can ask for a marked or unmarked training car. Both are described as late-model, dual controlled, safety inspected, air conditioned and regularly serviced.',
    ],
  },
  tagline: 'Marked or unmarked cars. The same dual-control safety.',
  headline: 'The lesson should fit the driver, not expose them.',
  heroLede: 'Teen and adult behind-the-wheel training across the Inland Empire, with patient instructors, free pickup and a choice of marked or unmarked cars.',
  city: 'Riverside',
  county: 'Riverside County',
  address: '4505 Allstate Dr, Suite 18, Riverside, CA 92501',
  phones: [{ display: '(951) 391-9484', raw: '+19513919484' }],
  email: 'icondrivingschool@outlook.com',
  schedulingNote: 'Open seven days a week. A 24-hour notice is required to cancel behind-the-wheel training; later notice carries a cancellation fee.',
  areas: ['Riverside', 'Inland Empire'],
  areasNote: 'The school describes its service area as all residents of the Inland Empire. Call to confirm pickup and current pricing for a specific city.',
  programs: [
    {
      slug: 'teen-behind-the-wheel',
      title: 'Teen Behind-the-Wheel',
      navLabel: 'Teen Training',
      summary: 'The California six-hour behind-the-wheel course for students under eighteen.',
      body: ['Training is practical and based on California DMV guidelines. After completing the course, the school provides the certification required before the road test.', 'Free pickup and drop-off is available from home, work or school. Call for price and availability in the student’s area.'],
      bullets: ['Six hours behind the wheel', 'DMV completion certification', 'Free home, work or school pickup', 'Call for area pricing'],
    },
    {
      slug: 'adult-behind-the-wheel',
      title: 'Adult Behind-the-Wheel',
      navLabel: 'Adult Training',
      summary: 'Two-hour sessions for adults, overseas students and international students.',
      bullets: ['Two-hour session format', 'Pre-examination exercises', 'Real-traffic practice', 'Overseas and international students welcome'],
    },
  ],
  vehicles: {
    summary: 'Icon offers both marked and unmarked late-model training cars. The school describes every car as dual controlled, DMV safety-inspection approved, air conditioned, regularly maintained and serviced.',
    features: ['Marked or unmarked car', 'Dual controls', 'DMV safety-inspection approved', 'Power steering and air conditioning', 'Regularly maintained'],
  },
  rating: { value: '4.8', count: '64', source: 'Google' },
  sourceUrl: 'https://www.icondrivingschool.com/',
  internalNotes: [
    'LICENCE CONFLICT — the current official-site logo says “State License 4648,” while the campaign directory reports verified California DMV E0672. Neither is rendered until the discrepancy is resolved.',
    'PRICE — both official package entries say to call for pricing and availability. Do not use prices from Reddit or directories.',
    'PHOTOGRAPHY — official-site people images are generic stock. They were inspected and deliberately excluded.',
    'DO NOT REPRODUCE — the official site promises the “best opportunity” to pass on a first attempt and advertises an “excellent pass rate” without data.',
    'ADDRESS — the official site currently publishes Suite 18. Third-party sources show other suite numbers; retain the first-party address.',
  ],
};
