import type { Client } from '@/lib/types';

/** Pacific Safety Center — San Diego nonprofit founded in 1953. */
export const pacificSafetyCenter: Client = {
  slug: 'pacific-safety-center',
  name: 'Pacific Safety Center',
  short: 'Pacific Safety',
  variant: 'safe-route',
  heroStyle: 'editorial',
  photos: {
    hero: {
      src: '/clients/pacific-safety-center/human-hero.jpg',
      alt: 'An adult learner working through online safety training',
      disclosure: 'Illustrative photography',
    },
  },
  logo: '/clients/pacific-safety-center/logo.webp',
  brand: {
    primary: '#075078', primaryDark: '#04354f', primarySoft: '#e2f2f8',
    accent: '#557d0c', accentDark: '#3e5d08', accentSoft: '#eff8dc', wash: '7, 80, 120',
    bg: '#f6faf9', border: '#78979b', borderSoft: '#d6e5e4', fgDim: '#4e686b',
  },
  sections: [
    { id: 'programs', kicker: 'Four kinds of safety', title: 'On the road, at work, on two wheels and in the back seat.', lede: 'Driver education sits inside a nonprofit safety organization that also trains workplaces, motorcyclists and caregivers.' },
    { id: 'packages', kicker: 'Driver packages', title: 'Build the six required hours around what you need.', lede: 'Behind-the-wheel only, online education included, or the full package with permit-test questions.' },
    { id: 'instructors', kicker: 'The organisation', title: 'A named team with a public board and a safety mission.', lede: 'Pacific Safety Center has served Southern California businesses and communities since 1953.' },
    { id: 'areas', kicker: 'San Diego', title: 'One centre, programmes across the community.' },
    { id: 'cta', title: 'Start with the right safety programme.', lede: 'Call the main office or the driver-education team.' },
  ],
  story: {
    pullQuote: 'Our mission is to educate safety.',
    paragraphs: [
      'Pacific Safety Center was established in 1953 as a private nonprofit educational organisation. Its mission is to deliver safety education and training for business and community — at work, on the road, at home and at play.',
      'For drivers, that means online education, permit-test preparation and behind-the-wheel lessons for teens, adults, seniors and new US residents. Elsewhere in the same organisation, teams teach motorcycle safety, child-passenger safety and workplace compliance.',
      'That broader safety identity is the distinction: this is not a driving-school template with a long history attached, but a community safety centre whose driver programme is one part of the work.',
    ],
  },
  tagline: 'Safety education for road, work, home and play since 1953.',
  headline: 'Learn to drive inside a safety organisation.',
  heroLede: 'Teen, adult and senior driver training from a San Diego nonprofit that has taught safety across the community for more than seventy years.',
  city: 'San Diego',
  county: 'San Diego County',
  address: '9880 Via Pasar, Suite F, San Diego, CA 92126',
  founded: '1953',
  phones: [
    { label: 'Main office', display: '(858) 621-2313', raw: '+18586212313' },
    { label: 'Driver education', display: '(858) 275-2739', raw: '+18582752739' },
    { label: 'Teen scheduling', display: '(760) 440-8337', raw: '+17604408337' },
  ],
  email: 'dep@psc411.com',
  hours: [
    { days: 'Monday – Thursday', hours: '7:00 AM – 5:00 PM' },
    { days: 'Friday', hours: 'By phone' },
  ],
  schedulingNote: 'Behind-the-wheel appointments are two hours. Students are picked up at home, work or school; the six-hour course must be completed within eight months.',
  areas: ['San Diego County', 'Southern California workplace and community organisations'],
  programs: [
    { slug: 'teen-driver-training', title: 'Teen Driver Training', navLabel: 'Teen Drivers', summary: 'Online driver education and three two-hour behind-the-wheel appointments, with pick-up from home, work or school.', body: ['The six-hour course is delivered as three two-hour appointments with a licensed instructor. At completion, the student receives the driver-training completion certificate.', 'Students may take online driver education alone or combine it with behind-the-wheel training and permit-test questions.'], bullets: ['Three 2-hour lessons', 'Home, work or school pick-up', 'Licensed, professionally trained and bonded instructors', 'Complete all three appointments within eight months'] },
    { slug: 'adult-senior-training', title: 'Adult & Senior Training', navLabel: 'Adults & Seniors', summary: 'Two- or six-hour behind-the-wheel options for new drivers, refreshers, seniors and new US residents.', body: ['Adults who are unsure how much training they need can begin with a two-hour evaluation. Lessons are arranged around the student’s needs.', 'New US residents can learn California road laws and practices after obtaining a California permit. Seniors referred for reexamination can train with the appropriate permit.'], bullets: ['Start with a 2-hour evaluation', 'Six-hour course available', 'New US resident support', 'Senior and refresher lessons'] },
    { slug: 'motorcycle-safety', title: 'Motorcycle Safety', navLabel: 'Motorcycle', summary: 'CMSP beginner licensing, one-day and intermediate or advanced courses.', bullets: ['Beginner Motorcyclist Training Course', 'Intermediate and advanced classes', 'DMV DL389 certificate on successful eligible completion'], price: 425, priceNote: 'Published beginner-course price for riders over 21; the site lists $395 for riders under 21.' },
    { slug: 'workplace-car-seat-safety', title: 'Workplace & Car-Seat Safety', navLabel: 'More Safety', summary: 'On-site workplace training and consulting, plus child-passenger programmes and private car-seat installations.', bullets: ['Workplace safety courses and consulting', 'COSS and COSM certificate programmes', 'Private car-seat installation education', 'Keep ’Em Safe community programme'] },
  ],
  packageGroups: [
    {
      title: 'Teen driver packages', lessonHours: 2,
      features: ['6 hours behind the wheel', 'Online driver education', 'Permit-test questions'],
      packages: [
        { name: 'Package 1', detail: '3 × 2-hour lessons', hours: 6, price: 499, includes: ['6 hours behind the wheel'], saving: 'Save $26' },
        { name: 'Package 2', detail: 'Online education + 6 hours', hours: 6, price: 535, featured: true, includes: ['6 hours behind the wheel', 'Online driver education'], saving: 'Save $25.99' },
        { name: 'Package 3', detail: 'Online education + test questions + 6 hours', hours: 6, price: 548, includes: ['6 hours behind the wheel', 'Online driver education', 'Permit-test questions'], saving: 'Save $27.98' },
      ],
    },
  ],
  instructors: [
    { name: 'Darby V.', initials: 'DV', role: 'Executive Director', years: '30+', bio: 'Leads the organisation after more than thirty years with Pacific Safety Center.' },
    { name: 'Lawrence N.', initials: 'LN', role: 'Motorcycle Site Manager', years: 'Since 2018', bio: 'A California Motorcycle Safety Instructor who manages motorcycle-site operations.' },
    { name: 'Noemi D.', initials: 'ND', role: 'Child Passenger Safety Director', years: 'Since 2009', bio: 'Oversees Keep ’Em Safe and child-passenger-safety grants.' },
    { name: 'Cindy S.', initials: 'CS', role: 'Safety Training Coordinator', years: '6+', bio: 'Coordinates and schedules community safety classes.' },
  ],
  rating: { value: '4.2', count: '81', source: 'Google' },
  sourceUrl: 'https://psc411.com/',
  internalNotes: [
    'LICENCE — no DMV driving-school licence number was found. Do not confuse CMSP affiliation or nonprofit status with DMV school licensing.',
    'PHOTOGRAPHY — the site contains abundant generic stock photography. Only the real PSC logo is used; no stock faces are presented as its team or students.',
    'PACKAGE arithmetic is published by PSC and independently checks out: 525−499=26, 560.99−535=25.99, 575.98−548=27.98.',
    'DO NOT REPRODUCE — site counters for people impacted, graduates, courses completed, and an on-page 5/5 claim conflict with the campaign’s verified Google 4.2/81 record.',
  ],
};
