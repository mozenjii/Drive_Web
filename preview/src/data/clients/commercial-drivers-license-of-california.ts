import type { Client } from '@/lib/types';

/** Commercial Drivers License of California — San Bernardino. */
export const cdlCalifornia: Client = {
  slug: 'commercial-drivers-license-of-california',
  name: 'Commercial Drivers License of California',
  short: 'CDL California',
  variant: 'apex',
  heroStyle: 'stage',
  brand: {
    primary: '#12458f', primaryDark: '#0a2c61', primarySoft: '#e8f0fb',
    accent: '#9b5b0b', accentDark: '#754306', accentSoft: '#fff1dc', wash: '18, 69, 143',
    bg: '#f7f9fc', border: '#8094ae', borderSoft: '#d8e1ec', fgDim: '#526278',
  },
  photos: {
    hero: { src: '/clients/commercial-drivers-license-of-california/team-and-truck.jpg', alt: 'The CDL of California team standing beside the school’s branded training trailer' },
    contact: { src: '/clients/commercial-drivers-license-of-california/graduate-and-truck.jpg', alt: 'A CDL of California student holding a certificate beside the training truck' },
    vehicle: { src: '/clients/commercial-drivers-license-of-california/student-and-truck.jpg', alt: 'A CDL of California student standing beside the school’s training tractor' },
  },
  sections: [
    { id: 'programs', kicker: 'Commercial training', title: 'Class A, Class B, theory and experienced-driver training.', lede: 'Start after receiving a Class A or B learner’s permit, then train through inspection, yard manoeuvres and on-road driving.' },
    { id: 'packages', kicker: 'Four published routes', title: 'Choose the time and DMV support you need.', lede: 'Simple, Standard and Premium contracts publish their duration, daily training access and included DMV visits.' },
    { id: 'vehicles', kicker: 'The equipment', title: 'Learn in the truck you will take to the DMV.', lede: 'Published packages include DMV appointments with school equipment.' },
    { id: 'areas', kicker: 'San Bernardino', title: 'One yard, one direct line.', lede: 'Training is based at 1641 E Baseline Street.' },
    { id: 'cta', title: 'Your future starts now.', lede: 'Call for permit questions, availability and payment-plan details.' },
  ],
  story: {
    pullQuote: 'Your future starts now.',
    paragraphs: [
      'CDL of California is built around practical career training for adults. Its curriculum follows the commercial test itself: pre-trip inspection, four combination-vehicle manoeuvres, then one-to-one on-road driving.',
      'Class A and Class B students can choose a shorter contract or more time and DMV appointments. Experienced drivers start with an in-yard evaluation, while the online theory program covers the ELDT theory requirement.',
      'The school publishes its truck, yard and students rather than generic highway imagery. It also offers payment plans and service in Spanish.',
    ],
  },
  tagline: 'Inspection. Manoeuvres. On-road confidence.',
  headline: 'Train for the whole commercial driving test.',
  heroLede: 'Hands-on Class A and Class B training in San Bernardino, with school equipment and DMV visits built into the published programs.',
  city: 'San Bernardino',
  county: 'San Bernardino County',
  address: '1641 E Baseline St, San Bernardino, CA 92410',
  phones: [{ display: '(909) 848-6116', raw: '+19098486116' }],
  email: 'cdlofcalif@gmail.com',
  hours: [
    { days: 'Monday – Friday', hours: '8:00 AM – 5:00 PM' },
    { days: 'Saturday', hours: '8:00 AM – 12:00 PM' },
  ],
  schedulingNote: 'A Class A or B learner’s permit is required before hands-on training begins. Payment plans are offered; call for current terms.',
  areas: ['San Bernardino'],
  languages: ['English', 'Spanish'],
  programs: [
    { slug: 'class-a-training', title: 'Class A Training', navLabel: 'Class A', summary: 'Pre-trip inspection, combination-vehicle manoeuvres and on-road driving, with school equipment for included DMV visits.', body: ['Training starts once the Class A learner’s permit is in hand. Students learn the three-part pre-trip inspection, all four required manoeuvres and the on-road portion of the commercial test.', 'Simple, Standard and Premium contracts differ by duration and number of DMV visits. The school publishes unlimited daily training access for its Class A contracts.'], bullets: ['Three-part pre-trip inspection', 'Four combination-vehicle manoeuvres', 'One-to-one on-road instruction', 'School equipment at included DMV visits'] },
    { slug: 'class-b-training', title: 'Class B Training', navLabel: 'Class B', summary: 'Three- or six-week published routes with daily training and DMV visits.', bullets: ['Permit required before training', 'Four hours per day on the Simple contract', 'Unlimited daily access on Standard', 'School equipment for included DMV visits'] },
    { slug: 'eldt-theory', title: 'Online Theory', navLabel: 'Theory', summary: 'An online program provided at enrolment to complete the ELDT theory requirement.', bullets: ['Online theory program', 'Information needed for ELDT requirements', 'Complete before the driving test'] },
    { slug: 'experienced-training', title: 'Experienced Driver Training', navLabel: 'Experienced', summary: 'An in-yard evaluation for drivers who already have semi-truck reversing experience.', bullets: ['In-yard skill assessment', 'Training requirements set from current ability', 'DMV visits matched to permit availability'] },
  ],
  packageGroups: [
    {
      title: 'Class A training',
      blurb: 'All three publish unlimited training hours per day; the contract length and DMV support change.',
      features: ['Unlimited daily training', 'School equipment at DMV', 'Permit support time'],
      packages: [
        { name: 'Simple', detail: '1-month contract · 2 DMV visits', price: 2500, includes: ['Unlimited daily training', 'School equipment at DMV'] },
        { name: 'Standard', detail: '10 weeks · 3 DMV visits', price: 3500, featured: true, includes: ['Unlimited daily training', 'School equipment at DMV', 'Permit support time'] },
        { name: 'Premium', detail: '6-month contract · up to 3 DMV visits', price: 4500, includes: ['Unlimited daily training', 'School equipment at DMV'] },
      ],
    },
    {
      title: 'Class B training',
      features: ['Daily hands-on training', 'School equipment at DMV', 'Permit study help'],
      packages: [
        { name: 'Simple', detail: '3 weeks · 4 hours/day · 2 DMV visits', price: 2000, includes: ['Daily hands-on training', 'School equipment at DMV'] },
        { name: 'Standard', detail: '6 weeks · 3 DMV visits', price: 2500, featured: true, includes: ['Daily hands-on training', 'School equipment at DMV', 'Permit study help'] },
      ],
    },
  ],
  vehicles: { summary: 'Training progresses from inspection around the tractor and trailer to yard manoeuvres and on-road driving. Package descriptions state that the school supplies the same equipment for the included DMV visits.', features: ['Commercial tractor and trailer', 'Pre-trip inspection training', 'Yard manoeuvre practice', 'Equipment included at eligible DMV appointments'] },
  rating: { value: '5.0', count: '113', source: 'Google' },
  sourceUrl: 'https://www.cdlofcalifornia.net/',
  internalNotes: [
    'NAME — the home-page title says Trinity Truck Driving School, while every page masthead and contact section use Commercial Drivers License of California. Keep the latter, which matches the lead record and truck branding.',
    'LICENCE — no California school or BPPE approval number was found on the site. CA 555237 and USDOT 335396 appear on a photographed truck but are carrier identifiers, not school licences; omitted.',
    'PRICE — package figures and durations are transcribed from the Programs page. The site says payment plans are offered but publishes no terms.',
    'DO NOT REPRODUCE — “pass on the first try,” “countless individuals,” and other unverified outcome language.',
  ],
};
