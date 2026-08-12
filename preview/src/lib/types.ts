/**
 * The client data model for a personalised preview.
 *
 * ONE RULE, inherited from sites/VERIFY.md: every field here is a factual
 * assertion about a real business. If it is not published on the client's own
 * site or another source you can point at, OMIT IT. Every claim-bearing field
 * is optional and every component degrades cleanly when it is missing, so the
 * honest option is also the least work.
 */

export interface Phone {
  /** e.g. "Ventura County" when a school runs more than one line. */
  label?: string;
  /** Display format, e.g. "(805) 374-2393". */
  display: string;
  /** E.164 for tel: links, e.g. "+18053742393". */
  raw: string;
}

export interface OpeningHours {
  /** e.g. "Monday – Friday". */
  days: string;
  /** e.g. "11:00 AM – 6:00 PM", or "Closed". */
  hours: string;
}

export interface Instructor {
  name: string;
  /** Two-letter monogram for the fallback avatar. */
  initials: string;
  /** e.g. "Full-time senior instructor". */
  role?: string;
  /** Where they are based, if published. */
  based?: string;
  /** As a string so "30+" is allowed. */
  years?: string;
  bio?: string;
  languages?: string[];
  /** Real photo path relative to /public. Falls back to the monogram. */
  photo?: string;
}

/** One purchasable package inside a group. */
export interface Package {
  name: string;
  /** e.g. "6 hours", "3 × 2hr lessons". */
  detail?: string;
  hours?: number;
  /**
   * How long one lesson is, in hours. Defaults to the group's `lessonHours`,
   * then to 2. Schools do not agree on this — Sanctified teaches 1½-hour
   * lessons, Newport sells single hours — and the hours bar draws one block per
   * lesson, so getting it wrong draws a diagram that contradicts the copy.
   */
  lessonHours?: number;
  /** Whole dollars or cents — rendered verbatim. Omit if not published. */
  price?: number;
  /** Which lesson components this package includes (indexes into group.features). */
  includes?: string[];
  /** Surface a genuine saving. Only set when it is arithmetically true. */
  saving?: string;
  featured?: boolean;
}

export interface PackageGroup {
  /** e.g. "Teens with a Permit". */
  title: string;
  blurb?: string;
  /** The comparison matrix rows shown against every package in this group. */
  features: string[];
  /** Default lesson length in hours for this group. Falls back to 2. */
  lessonHours?: number;
  packages: Package[];
}

export interface LineItem {
  name: string;
  description?: string;
  price?: number;
}

/** A program gets its own sub-page when `slug` is set. */
export interface Program {
  /** URL segment beneath the client, e.g. "behind-the-wheel". Omit for a section-only program. */
  slug?: string;
  title: string;
  /** Nav label if shorter than the title. */
  navLabel?: string;
  summary: string;
  /** Body paragraphs, in order. */
  body?: string[];
  bullets?: string[];
  /** Illustrative photo for this program. Path relative to /public. */
  image?: string;
  price?: number;
  priceNote?: string;
  /** Scheduling / logistics detail published by the client. */
  logistics?: string[];
}

export interface Testimonial {
  name: string;
  location?: string;
  quote: string;
}

export interface Vehicles {
  summary: string;
  features: string[];
  /**
   * The client's own cars, where they photograph them. Some schools name their
   * vehicles and their students recognise them on the road — that is worth more
   * than any stock interior shot, so it gets its own row rather than being
   * squeezed into the single `photos.vehicle` slot.
   */
  gallery?: Array<Photo & { label?: string }>;
}

export type Variant = 'safe-route' | 'apex' | 'atelier';

/**
 * How the home page opens.
 *
 * The palette alone does not stop twenty previews reading as one template with
 * the nouns swapped — the composition has to differ too. Pick from what the
 * client's own site does well: a school whose photography is its strongest asset
 * gets `stage`; one whose founder is the product gets `editorial`; one selling
 * on operations and numbers gets `panel`.
 */
export type HeroStyle = 'stage' | 'editorial' | 'panel';

/** Home-page sections, referenced by id from `Client.sections`. */
export type SectionId =
  | 'programs'
  | 'packages'
  | 'road-test'
  | 'instructors'
  | 'vehicles'
  | 'reviews'
  | 'areas'
  | 'cta';

/**
 * One home-page section, in this client's order and this client's words.
 *
 * Every heading used to be hardcoded in `HomePage.tsx` — "Tell us who you are.",
 * "Every price, on one page.", "Dual controls, every lesson." — identical across
 * all twenty previews, in a fixed order, with ledes that asserted things about
 * businesses nobody had checked. That is what made every preview read the same.
 *
 * The array is the render order, and a section absent from the array is not
 * rendered at all. Write the copy from the client's own site: their register,
 * their emphasis, their claims and nobody else's.
 */
export interface Section {
  id: SectionId;
  /** Small label above the title. */
  kicker?: string;
  /** The heading. */
  title: string;
  /** Supporting line. Must be true of THIS business — omit rather than pad. */
  lede?: string;
}

/**
 * The client's own history, in their words rather than the template's.
 *
 * The About page used to assert that every one of these businesses "has grown
 * from a single instructor with a single car into one of the busiest driving
 * schools in the region". That is an invented claim about a real company. If a
 * client publishes no history, this is omitted and the page shows what is known.
 */
export interface Story {
  paragraphs: string[];
  /** A line from their own site worth setting large. Their words, verbatim. */
  pullQuote?: string;
}

/**
 * The photographs the layout asks for, per client.
 *
 * There is deliberately **no fallback**. A missing photo means the section
 * composes without one; it never means another school's photograph. Twenty
 * previews sharing one picture of one set of students — with alt text naming a
 * different business on each — is exactly the tell that says "template".
 */
export interface Photo {
  /** Path relative to /public. */
  src: string;
  /**
   * Required, not optional. A supplied photo almost never depicts what the
   * default alt text describes, and a confidently wrong alt is worse for a
   * screen-reader user than a generic one.
   */
  alt: string;
}

export interface Photos {
  /** Full-bleed hero. Wants people, not a car park. */
  hero?: Photo;
  /** Beside the drive-test section. */
  roadTest?: Photo;
  /** Beside the vehicles block. Their own car if they publish one. */
  vehicle?: Photo;
  /** Secondary supporting image used on program pages that set none. */
  support?: Photo;
}

export interface Client {
  /** URL prefix. Everything for this client lives beneath /<slug>/. */
  slug: string;
  name: string;
  /** Short name for nav and tight spaces. Under ~14 chars. */
  short: string;
  /** Which of the three light templates to render. */
  variant: Variant;
  /** How the home page opens. See HeroStyle. */
  heroStyle: HeroStyle;
  /**
   * Home-page sections, in this client's order and this client's words.
   * Required, not optional — an omitted section list is how twenty previews
   * ended up sharing one set of headings. See Section.
   */
  sections: Section[];
  /** Their own history, for the About page. See Story. */
  story?: Story;

  tagline?: string;
  /** Overrides the generated hero headline. Prefer the client's own words. */
  headline?: string;
  /**
   * The paragraph under the hero headline. Falls back to `tagline`.
   *
   * This used to be generated: "One-to-one lessons for teens and adults across
   * <county>, with pickup at home, school or work." — asserted for all twenty,
   * including the ones that do not offer pickup.
   */
  heroLede?: string;
  /** The client's OWN logo, scraped from their site. Path relative to /public. */
  logo?: string;
  /**
   * The client's OWN brand colours, sampled from their logo or site. These
   * override the variant palette — a preview wearing the client's real mark and
   * real colours reads as their site rebuilt, not as a template with their name
   * dropped in. Every value must still clear WCAG AA against surface/bg; darken
   * rather than ship the raw brand hex if it does not.
   */
  brand?: {
    primary: string;
    primaryDark: string;
    primarySoft: string;
    accent: string;
    accentDark: string;
    accentSoft: string;
    /** rgb triplet, unquoted, for gradient washes e.g. "58, 44, 92". */
    wash?: string;
    /* Optional neutrals, tinted toward the brand hue. Leaving blue borders
       around a purple brand is the tell that a template was reskinned rather
       than designed. All must still clear AA where they carry text. */
    bg?: string;
    border?: string;
    borderSoft?: string;
    fgDim?: string;
  };

  /** The client's own photography, where they publish any. See Photos. */
  photos?: Photos;

  city: string;
  county?: string;
  /** Full street address as they publish it. */
  address?: string;

  /** California DMV school licence. Their REAL number or omitted. Never invented. */
  licence?: string;
  /** Four-digit year, e.g. "1995". Drives "serving since" and the years count. */
  founded?: string;

  phones: Phone[];
  email?: string;
  hours?: OpeningHours[];
  /** e.g. "Lessons scheduled 7 days a week, 7am–10pm." */
  schedulingNote?: string;

  areas: string[];
  /** Areas that carry a surcharge, as published. */
  areasNote?: string;
  languages?: string[];

  social?: { facebook?: string; instagram?: string; twitter?: string };

  /**
   * Only set when the client actually advertises instructor vacancies on their
   * own site. "We are hiring" is a claim about their business, and inventing it
   * for a school that is fully staffed is exactly the kind of error that ends a
   * conversation before it starts.
   */
  hiring?: { requirements: string[] };

  packageGroups?: PackageGroup[];
  individualLessons?: LineItem[];
  programs?: Program[];
  instructors?: Instructor[];
  vehicles?: Vehicles;
  testimonials?: Testimonial[];

  /** Aggregate rating. MUST carry its source — never present a Google rating as an on-site one. */
  rating?: { value: string; count: string; source: string };

  /** Where every claim above came from. Shown on the internal index, never on the preview. */
  sourceUrl: string;
  /** Internal notes for the operator. Never rendered. */
  internalNotes?: string[];
}
