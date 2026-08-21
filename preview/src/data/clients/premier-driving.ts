import type { Client } from '@/lib/types';

/**
 * Premier Driving Institutes — Oceanside and Los Angeles South Bay.
 *
 * Scraped from premierdriving.info on 2026-08-13
 * (research/premier-driving). The site publishes no reusable photography, so
 * this preview leads with the unusually detailed instructor roster instead.
 */
export const premierDriving: Client = {
  slug: 'premier-driving',
  name: 'Premier Driving Institutes',
  short: 'Premier',
  variant: 'atelier',
  heroStyle: 'editorial',

  sections: [
    {
      id: 'programs',
      kicker: 'Lessons',
      title: 'Teens, adults, test preparation and a car for test day.',
      lede: 'Two-hour private lessons across North San Diego, South Bay Los Angeles and South Orange County.',
    },
    {
      id: 'instructors',
      kicker: 'Choose your instructor',
      title: 'Four instructors, with their areas and cars published.',
      lede: 'Book by city or by instructor, including a retired law-enforcement training officer and a second-generation instructor.',
    },
    {
      id: 'packages',
      kicker: 'Published prices',
      title: 'Know the lesson price before you text.',
      lede: 'Teen and adult two-hour lessons, plus an adult drive-test car option with an hour of preparation.',
    },
    {
      id: 'vehicles',
      kicker: 'Training cars',
      title: 'Corolla, Camry or Focus — all with dual brakes.',
    },
    {
      id: 'areas',
      kicker: 'Coverage',
      title: 'From Oceanside to Redondo Beach.',
      lede: 'Twenty-four cities are listed, with scheduling points in five regions.',
    },
    { id: 'cta', title: 'Text Premier to schedule.', lede: 'Seven days a week, 8:00 AM to 8:00 PM.' },
  ],

  story: {
    pullQuote: 'Safe and defensive driving skills and techniques — and drive test preparation.',
    paragraphs: [
      'Premier publishes more about who will teach the lesson than most schools do. Daniel K. brings more than twenty years of teaching experience; Maravic W. serves five North County cities; Carrie Z. is a retired law-enforcement training officer; and Mr. M is a second-generation instructor licensed since 1998.',
      'Students can schedule by city or instructor. Teen permits are signed after the first lesson, and the school asks students to complete all three lessons within six months or sooner before continuing the required supervised practice.',
      'The main office is in Oceanside, with scheduling locations in Vista, San Diego, San Clemente and Redondo Beach. The school publishes both North San Diego and Los Angeles South Bay text lines.',
    ],
  },

  tagline: 'Four named instructors. Three dual-brake cars. Two California regions.',
  headline: 'Choose the instructor before you choose the lesson.',
  heroLede:
    'Private teen and adult training from a team whose backgrounds, cars and service areas are all published before you book.',

  city: 'Oceanside',
  county: 'San Diego County',
  address: '2101 S. El Camino Real, Suite 204 B, Oceanside, CA 92054',
  licence: '4734',
  founded: '1998',
  phones: [
    { label: 'North San Diego', display: '(760) 712-3077', raw: '+17607123077' },
    { label: 'Los Angeles South Bay', display: '(424) 409-1382', raw: '+14244091382' },
  ],
  email: 'PremierDrivingInstitutes@gmail.com',
  hours: [{ days: 'Monday – Sunday', hours: '8:00 AM – 8:00 PM' }],
  schedulingNote: 'Text either published number to schedule by city or instructor. Permit and payment are required at the start of a lesson.',

  areas: [
    'Bonsall', 'Carlsbad', 'Del Mar', 'El Segundo', 'Encinitas', 'Escondido',
    'Fallbrook', 'Gardena', 'Hawthorne', 'Hermosa Beach', 'Inglewood', 'Lawndale',
    'Long Beach', 'Manhattan Beach', 'Oceanside', 'Palos Verdes', 'Redondo Beach',
    'San Clemente', 'San Marcos', 'Santa Monica', 'San Pedro', 'Torrance', 'Vista', 'Wilmington',
  ],
  areasNote: 'The Oceanside address is the main office. Redondo Beach, Vista, San Diego and San Clemente are described as scheduling-only locations.',

  programs: [
    {
      slug: 'teen-driving-lessons',
      title: 'Teen Driving Lessons',
      navLabel: 'Teen Lessons',
      summary: 'Two-hour lessons, with the permit signed and validated after the first session.',
      body: [
        'A teen permit becomes valid for supervised family practice after the first professional lesson is completed and the instructor signs it.',
        'Premier asks students to complete all three professional lessons within six months or sooner. The instructor provides the completion certificate at the end of lesson three.',
      ],
      bullets: ['Two-hour private lesson', 'Permit validation at lesson one', 'Completion certificate after lesson three', 'Safe and defensive driving techniques'],
      price: 140,
      priceNote: 'Published cash price. The site lists $150 when paid by Zelle, check or credit card.',
    },
    {
      slug: 'adult-driving-lessons',
      title: 'Adult Driving Lessons',
      navLabel: 'Adult Lessons',
      summary: 'Two-hour adult lessons for new drivers and drivers preparing for a reexamination.',
      bullets: ['Two-hour private lesson', 'Drive-test preparation available', 'Adults, foreign drivers and seniors taught'],
      price: 150,
      priceNote: 'Published price for a two-hour adult lesson.',
    },
    {
      slug: 'drive-test-car-rental',
      title: 'Drive-Test Car Rental',
      navLabel: 'Test-Day Car',
      summary: 'An adult test-day car package with one hour of drive-test preparation.',
      bullets: ['Training car for the drive test', 'One hour of preparation included', 'Text for availability and final quote'],
      price: 300,
      priceNote: 'Published starting price.',
    },
  ],

  packageGroups: [
    {
      title: 'Published lesson prices',
      blurb: 'Premier prices one lesson at a time on its home page.',
      lessonHours: 2,
      features: ['Private instruction', 'Two-hour lesson', 'Permit or licence required'],
      packages: [
        { name: 'Teen lesson — cash', detail: '2 hours', hours: 2, price: 140, includes: ['Private instruction', 'Two-hour lesson', 'Permit or licence required'] },
        { name: 'Teen lesson — other payment', detail: '2 hours', hours: 2, price: 150, includes: ['Private instruction', 'Two-hour lesson', 'Permit or licence required'] },
        { name: 'Adult lesson', detail: '2 hours', hours: 2, price: 150, featured: true, includes: ['Private instruction', 'Two-hour lesson', 'Permit or licence required'] },
      ],
    },
  ],

  individualLessons: [
    { name: 'Teen two-hour lesson — cash', description: 'Permit and payment required at the start.', price: 140 },
    { name: 'Teen two-hour lesson — Zelle, check or credit card', price: 150 },
    { name: 'Adult two-hour lesson', price: 150 },
    { name: 'Adult drive-test car with one hour of preparation', description: 'Starting price.', price: 300 },
  ],

  instructors: [
    { name: 'Daniel K.', initials: 'DK', role: 'Car and truck driving instructor', years: '20+', based: 'North San Diego, South Bay and Orange County', bio: 'A music professor and parent of three who teaches in a white Toyota Corolla with dual brakes.' },
    { name: 'Maravic W.', initials: 'MW', role: 'Driving instructor', based: 'Oceanside, Vista, Carlsbad, San Marcos and Escondido', bio: 'Provides safe-driving instruction and DMV drive-test preparation in a Ford Focus with dual brakes.' },
    { name: 'Carrie Z.', initials: 'CZ', role: 'Retired law-enforcement training officer', years: '20', based: 'Oceanside, Carlsbad and Vista', bio: 'Brings twenty years in law enforcement to teen, adult and senior lessons in a Toyota Camry with dual brakes.' },
    { name: 'Mr. M', initials: 'MM', role: 'Operator and senior instructor', years: 'Since 1998', based: 'Los Angeles South Bay', bio: 'A second-generation DMV-licensed instructor teaching teens, adults, foreign drivers and seniors in a white Toyota Corolla with dual brakes.' },
  ],

  vehicles: {
    summary: 'The team publishes the instructor-to-car match: two Toyota Corollas, one Toyota Camry and one Ford Focus, all described as equipped with dual brakes.',
    features: ['Dual-brake training vehicles', 'Instructor and vehicle shown before booking', 'Drive-test car rental available'],
  },

  hiring: {
    requirements: ['Licensed instructors with a qualifying dual-brake vehicle, or use of a company vehicle', 'Unlicensed candidates may ask about school sponsorship and the required instructor-training process'],
  },

  rating: { value: '4.8', count: '85', source: 'Google' },
  sourceUrl: 'https://www.premierdriving.info/',
  internalNotes: [
    'LICENCE — 4734 is published in the home-page footer.',
    'DO NOT REPRODUCE — the page title claims a Google #1 customer-satisfaction ranking. No methodology or award source is supplied.',
    'PHOTOGRAPHY — no reusable site assets were captured. Keep the editorial, instructor-led hero rather than adding stock.',
    'PRICE — teen cash is $140; Zelle, check and credit card are $150. Adult two-hour lessons are $150. Test-day car rental starts at $300 with one preparation hour.',
    'LOCATION — only Oceanside is called the main office. Four other published addresses are scheduling-only.',
  ],
};
