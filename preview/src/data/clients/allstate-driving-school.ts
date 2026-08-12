import type { Client } from '@/lib/types';

/**
 * Allstate Driving School, Inc. — San Diego, CA.
 *
 * Scraped from allstatedrivered.com on 2026-08-09
 * (research/allstate-driving-school).
 *
 * Atelier, and it earns it: a founder who spent five years as a DMV licensing
 * examiner before starting the school, six named instructors with bios and the
 * make of car each one teaches in, and a business their own about page says has
 * grown through referrals. That is the Atelier signal almost verbatim.
 */
export const allstateDriving: Client = {
  slug: 'allstate-driving-school',
  name: 'Allstate Driving School',
  short: 'Allstate',
  variant: 'atelier',

  /** Dee Amanda Wu spent five years as a DMV examiner before opening this. That
   *  is the strongest single fact in the whole set, and six instructor
   *  photographs back it up. Editorial. */
  heroStyle: 'editorial',

  /**
   * Their own navigation is by audience — Teens/Parents, Adults/Foreigners,
   * Seniors — which is unusual and genuinely useful, so it leads. "Activate Your
   * Permit ASAP" is theirs.
   */
  sections: [
    {
      id: 'programs',
      kicker: 'Who it is for',
      title: 'Teens and parents. Adults and foreigners. Seniors.',
      lede:
        'Three different problems. A first licence, a licence transferred from another country, and staying on the road safely later on.',
    },
    {
      id: 'instructors',
      kicker: 'Instructors',
      title: 'Taught by a former DMV examiner.',
      lede:
        'The founder spent five years examining drive tests at the Clairemont DMV office before opening the school.',
    },
    {
      id: 'packages',
      kicker: 'Pricing',
      title: 'Priced by who you are, not by the hour.',
    },
    {
      id: 'road-test',
      kicker: 'The drive test',
      title: 'Marked by someone who used to do the marking.',
      lede:
        'Four manoeuvres decide most California drive tests. Press one and watch the route taught in every lesson.',
    },
    { id: 'reviews', kicker: 'In their words', title: 'Teens, transfers and seniors.' },
    {
      id: 'vehicles',
      kicker: 'The cars',
      title: 'The car, set up for the test.',
    },
    {
      id: 'areas',
      kicker: 'Where we pick up',
      title: 'San Diego and La Jolla.',
    },
    {
      id: 'cta',
      title: 'Activate your permit as soon as you can.',
      lede: 'Call (619) 850-1245.',
    },
  ],

  story: {
    pullQuote: 'Achieve driving confidence with us.',
    paragraphs: [
      'Allstate Driving School Inc. has taught in San Diego and La Jolla for over 25 years.',
      'Its founder spent five years as an examiner at the Clairemont DMV office before opening the school, and the teaching is organised around three separate audiences: teenagers and their parents, adults and drivers transferring a licence from another country, and seniors.',
    ],
  },

  /**
   * Their stylesheet is almost entirely Bootstrap default; the one colour that
   * is theirs is the deep navy #012356, at 15.26:1. It is paired with the
   * Atelier brass, which is documented in variants.css as already corrected
   * from #B4823C to clear AA.
   */
  brand: {
    primary: '#012356',
    primaryDark: '#011430',
    primarySoft: '#E5EDF8',
    accent: '#8A6124',
    accentDark: '#7A5620',
    accentSoft: '#F8F1E7',
    wash: '1, 35, 86',
    bg: '#F7F6F2',
    border: '#CAD9F0',
    borderSoft: '#E1EAF6',
    fgDim: '#48536B',
  },

  photos: {
    hero: {
      src: '/clients/allstate-driving-school/hero.jpg',
      alt: 'A parent and teenage driver together beside the car',
    },
    roadTest: {
      src: '/clients/allstate-driving-school/about.jpg',
      alt: 'An Allstate instructor with a student before the DMV appointment',
    },
    vehicle: {
      src: '/clients/allstate-driving-school/car.png',
      alt: 'The Allstate training car',
    },
    support: {
      src: '/clients/allstate-driving-school/seniors.jpg',
      alt: 'A senior driver during a brush-up lesson',
    },
  },

  tagline: 'Founded by a former DMV licensing examiner.',
  headline: 'The person who wrote your test for five years now teaches it.',

  city: 'San Diego',
  county: 'San Diego County',
  address: '7677 Ronson Road #108, San Diego, CA 92111',

  licence: 'E0200',
  founded: '1998', // their instructor page: "since the school was established in 1998"

  phones: [
    { display: '(619) 850-1245', raw: '+16198501245' },
    { display: '(858) 565-0088', raw: '+18585650088' },
    { display: '(858) 499-0088', raw: '+18584990088' },
  ],

  schedulingNote:
    'Driver training runs seven days a week, after school and at weekends, so lessons fit around school and work rather than the other way round.',

  areas: [
    'San Diego', 'La Jolla', 'UCSD', 'Rancho Peñasquitos', 'Poway',
    'Carmel Valley', 'Clairemont',
  ],
  areasNote:
    'Pick-up and drop-off at your address. Instructors know the local examiner routes — including which DMV office suits which student.',
  languages: ['English', 'Spanish', 'Dari', 'Farsi'],

  packageGroups: [
    {
      title: 'Teens with a permit',
      blurb:
        'Three lessons, spaced the way we actually recommend spacing them, ending with the DL400D completion certificate.',
      features: [
        'Two-hour behind-the-wheel lessons',
        'Pick-up and drop-off at your address',
        'Male or female instructor on request',
        'DL400D completion certificate',
        'Freeway, traffic law and parking manoeuvres',
      ],
      packages: [
        {
          name: 'First lesson',
          detail: 'Activate the permit as soon as it arrives',
          hours: 2,
          price: 188,
          includes: [
            'Two-hour behind-the-wheel lessons',
            'Pick-up and drop-off at your address',
            'Male or female instructor on request',
          ],
        },
        {
          name: 'Second and third lessons',
          detail: 'Each, booked about a month apart',
          hours: 2,
          price: 168,
          featured: true,
          includes: [
            'Two-hour behind-the-wheel lessons',
            'Pick-up and drop-off at your address',
            'Freeway, traffic law and parking manoeuvres',
            'DL400D completion certificate',
          ],
        },
        {
          name: 'DMV Drive Test Service',
          detail: 'Car, registration, insurance and instructor at the exam',
          price: 300,
          includes: [
            'Male or female instructor on request',
            'Pick-up and drop-off at your address',
          ],
        },
      ],
    },
    {
      title: 'Adults and new arrivals',
      blurb:
        'For beginners, for drivers who have failed the test more than once, for nervous drivers, and for anyone who avoids the freeway.',
      features: [
        'Two-hour lessons',
        'Pick-up and drop-off at your address',
        'Freeway work',
        'Instructors in English, Spanish, Dari and Farsi',
        'DMV drive test service available',
      ],
      packages: [
        {
          name: 'One lesson',
          detail: 'Two hours',
          hours: 2,
          price: 188,
          includes: ['Two-hour lessons', 'Pick-up and drop-off at your address'],
        },
        {
          name: 'Three lessons',
          detail: 'Six hours',
          hours: 6,
          price: 548,
          featured: true,
          // $188 x 3 = $564 against $548.
          saving: 'Saves $16 against three separate lessons',
          includes: [
            'Two-hour lessons', 'Pick-up and drop-off at your address', 'Freeway work',
            'Instructors in English, Spanish, Dari and Farsi',
          ],
        },
        {
          name: 'Five lessons',
          detail: 'Ten hours',
          hours: 10,
          price: 868,
          // $188 x 5 = $940 against $868.
          saving: 'Saves $72 against five separate lessons',
          includes: [
            'Two-hour lessons', 'Pick-up and drop-off at your address', 'Freeway work',
            'Instructors in English, Spanish, Dari and Farsi',
          ],
        },
      ],
    },
    {
      title: 'Seniors',
      lessonHours: 1.5,
      blurb:
        'Shorter lessons — 90 minutes rather than two hours — for drivers facing a medical re-examination, a licence suspension, or simply a brush-up.',
      features: [
        '90-minute lessons',
        'Pick-up and drop-off at your address',
        'Preparation for the DMV special drive test',
        'Instructors trained for the Driver Safety Unit exam',
      ],
      packages: [
        { name: 'One lesson', detail: '1½ hours', price: 188, includes: ['90-minute lessons'] },
        {
          name: 'Three lessons',
          detail: '4½ hours',
          price: 548,
          featured: true,
          includes: [
            '90-minute lessons', 'Pick-up and drop-off at your address',
            'Preparation for the DMV special drive test',
          ],
        },
        {
          name: 'Five lessons',
          detail: '7½ hours',
          price: 868,
          includes: [
            '90-minute lessons', 'Pick-up and drop-off at your address',
            'Preparation for the DMV special drive test',
            'Instructors trained for the Driver Safety Unit exam',
          ],
        },
      ],
    },
  ],

  individualLessons: [
    {
      name: 'Online Driver’s Education',
      description:
        'Start at 15, finish at your own pace from home, and receive the DL400C completion certificate.',
      price: 168,
    },
    { name: 'Behind the wheel — first lesson', price: 188 },
    { name: 'Behind the wheel — second and third lessons, each', price: 168 },
    {
      name: 'DMV Drive Test Service',
      description:
        'Car, registration, insurance and a licensed instructor with you at the exam. Drop-off afterwards if the appointment finishes inside three hours.',
      price: 300,
    },
  ],

  programs: [
    {
      slug: 'teens',
      image: '/clients/allstate-driving-school/hero.jpg',
      title: 'Teens & Parents',
      navLabel: 'Teens',
      summary:
        'Activate the permit straight away, then two more lessons timed around the six-month wait — not crammed into the fortnight before the test.',
      body: [
        'Book the first lesson as soon as the permit arrives; the permit is not active until a licensed instructor has signed it. The second lesson goes about a month later and covers traffic law, freeway driving and parking manoeuvres. The third goes seven to ten days before the DMV drive test, and the DL400D completion certificate is issued at that appointment.',
        'A student must be 16, must have practised 50 hours with a parent, and must have held the permit for six months before the DMV will test them. Spacing three lessons across those six months is worth more than three lessons in one week.',
        'Lessons run after school and at weekends, and a male or female instructor is available on request.',
      ],
      bullets: [
        'Activate the permit as soon as it arrives',
        'Traffic law, freeway and parking manoeuvres',
        'A final lesson 7–10 days before the DMV test',
        'DL400D certificate issued at the last appointment',
        'After school and weekend slots',
        'Male or female instructor on request',
      ],
      price: 188,
    },
    {
      slug: 'adults',
      image: '/clients/allstate-driving-school/adults.jpg',
      title: 'Adults & New Arrivals',
      navLabel: 'Adults',
      summary:
        'Beginners, nervous drivers, people who have failed the test more than once, and drivers who need the freeway.',
      body: [
        'Adults arrive here for four reasons: they have never driven, they have failed the DMV test repeatedly, they are anxious behind the wheel, or they can drive perfectly well on surface streets and avoid the freeway entirely. All four are routine.',
        'Between them the instructors teach in English, Spanish, Dari and Farsi.',
      ],
      bullets: [
        'First-time adult learners',
        'Repeat DMV test failures',
        'Nervous and anxious drivers',
        'Freeway confidence',
        'Instruction in four languages',
      ],
      price: 188,
      priceNote: 'One lesson $188, three for $548, five for $868.',
    },
    {
      slug: 'seniors',
      image: '/clients/allstate-driving-school/seniors.jpg',
      title: 'Seniors',
      navLabel: 'Seniors',
      summary:
        'For vision problems, medical suspensions, and referrals from a physician or police officer — including the DMV special drive test.',
      body: [
        'The DMV Driver Safety Unit administers a different exam from the standard drive test, and both the founder and the school operator hold the specific training needed to prepare senior drivers for it.',
        'Lessons are 90 minutes rather than two hours, which for most older drivers is the right length.',
      ],
      bullets: [
        'Vision-related re-examination',
        'Licence suspended or revoked for medical reasons',
        'Referred by a physician or police officer',
        'Brush-up lessons with no test in mind',
        'Special drive test preparation',
      ],
      price: 188,
    },
    {
      slug: 'drive-test-service',
      title: 'DMV Drive Test Service',
      navLabel: 'Drive Test',
      summary:
        'Car, registration, insurance and a licensed instructor at the exam — everything the DMV asks you to bring, brought for you.',
      bullets: [
        'Vehicle, registration and insurance provided',
        'A licensed instructor accompanies you',
        'Drop-off afterwards inside the three-hour window',
        'For teens, adults and the senior special drive test',
      ],
      price: 300,
    },
  ],

  vehicles: {
    summary:
      'Each instructor teaches in their own named car — a Honda Civic, a Scion tC — and it is the same car for every lesson and for the DMV test.',
    features: [
      'The car, registration and insurance for the DMV test',
      'Same instructor, same car, every lesson',
      'Pick-up and drop-off at your address',
      'Drop-off after testing within the three-hour window',
    ],
  },

  instructors: [
    {
      name: 'Dee Amanda Wu',
      initials: 'DW',
      role: 'Founder',
      years: '30+',
      bio: 'Spent five years as a licensing Registration Examiner at the Clairemont DMV, where she issued over 10,000 California driver licences, before founding the school. A BSc in Mathematics from San Diego State. Trained for the DMV Driver Safety Unit special exam for senior drivers with particular needs.',
    },
    {
      name: 'Joshua Ly Watts',
      initials: 'JW',
      role: 'School Operator and Office Manager',
      years: '18+',
      bio: 'San Diego born and raised, with Allstate since 2006. Has taught classroom driver education, trains the school’s new instructors, and speaks several languages well enough to run a lesson in them.',
    },
    {
      name: 'Kelly L. Nguyen',
      initials: 'KN',
      role: 'Driving instructor',
      photo: '/clients/allstate-driving-school/kelly.jpg',
      years: '25+',
      bio: 'Here since the school was established in 1998. Speaks very softly, and her speciality is preparing students to pass the DMV drive test. Teaches in a Honda Civic.',
    },
    {
      name: 'Mayela Stuart',
      initials: 'MS',
      role: 'Driving instructor',
      photo: '/clients/allstate-driving-school/mayela.gif',
      years: '10',
      bio: 'Ten years with Allstate. Easy going, gives clear instructions and stays calm in high-stress situations — which on a freeway is the whole job.',
      languages: ['English', 'Spanish'],
    },
    {
      name: 'Thomas J. Kinzer',
      initials: 'TK',
      role: 'Part-time driving instructor',
      photo: '/clients/allstate-driving-school/thomas.jpg',
      years: '6',
      bio: 'Eighteen years in education teaching Special Ed students before this, one to one and in groups. Plays the drums. Teaches in a Honda Civic.',
    },
    {
      name: 'Santiago W. Villanueva',
      initials: 'SV',
      role: 'Driving instructor',
      photo: '/clients/allstate-driving-school/santiago.jpg',
      bio: 'A former law enforcement officer in Peru, and a driving instructor in Virginia since 2013. Teaches in a Scion tC.',
      languages: ['English', 'Spanish'],
    },
    {
      name: 'Lorena Quevedo de Rosas',
      initials: 'LQ',
      role: 'Driving instructor',
      photo: '/clients/allstate-driving-school/lorena.gif',
      bio: 'Taught in Los Angeles and Pasadena before moving to San Diego. Heavy emphasis on the rules of the road, and on the fact that skill comes from practice. Teaches in a Honda Civic.',
      languages: ['English', 'Spanish'],
    },
    {
      name: 'Solaiman M. Saifi',
      initials: 'SS',
      role: 'Driving instructor',
      photo: '/clients/allstate-driving-school/solaiman.jpg',
      bio: 'A former competitive soccer coach, which is where the patience comes from. Over forty years of driving experience.',
      languages: ['English', 'Dari', 'Farsi'],
    },
  ],

  testimonials: [
    {
      name: 'Eric J.',
      quote:
        'Took a training session right before the test. Amanda gave many useful tips not only for the test but also for daily driving. Passed the test with 0 errors.',
    },
    {
      name: 'Samantha J.',
      quote:
        'I had a lesson with Kelly. She was very kind and had great advice to help me prepare for the behind the wheel test. I passed this Friday and got my license.',
    },
    {
      name: 'Patrick A.',
      quote:
        'Easy to schedule. Very convenient with the pick-up and drop off by your address. The teacher was very knowledgeable about the area and gave great tips that helped me pass on the first try.',
    },
    {
      name: 'Amaris R.',
      quote:
        'I took my lessons with Thomas, a really nice guy, who lets you know what you’re doing wrong and right. Practiced in Clairemont, took my exam in Bell Gardens, passed on my first try.',
    },
    {
      name: 'Leianna Y.',
      location: 'San Diego',
      quote:
        'My instructor, Mayela, was extremely helpful and kind. She made me feel comfortable driving for the first time and was able to answer all of my questions.',
    },
    {
      name: 'Payel R.',
      quote:
        'Josh is truly amazing. It would have been impossible for me to gain full confidence in such a short time without his experienced help and support.',
    },
  ],

  rating: { value: '4.5', count: '220', source: 'Google' },

  sourceUrl: 'https://allstatedrivered.com',
  internalNotes: [
    'Licence E0200 confirmed in their own footer.',
    'Founding year: their instructor page says the school was established in 1998; the homepage says "25+ Years in Business", which would be 2001 or earlier. 1998 is the more specific claim and is used here. Confirm with the owner.',
    'Dee Amanda Wu was a DMV licensing Registration Examiner at Clairemont for five years and issued over 10,000 licences. That is the single best fact in this entire campaign and it is on page four of their site.',
    'Three phone numbers, no explanation of which one to call. Worth consolidating.',
    'They already run city landing pages for UCSD/La Jolla, Rancho Peñasquitos and Carmel Valley — they understand local SEO. The preview extends the same idea.',
    'Their 4.5 rating is the lowest in the campaign and the only one below 4.8. Do not raise it in the first email.',
    'Instructor photographs are theirs, small and inconsistent (two are GIFs). Reshoot before production.',
  ],
};
