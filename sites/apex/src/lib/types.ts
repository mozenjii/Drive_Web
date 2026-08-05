/**
 * The single source of truth for a prospect. Adding a driving school to the
 * campaign means adding one object to src/data/prospects.ts — the static page,
 * metadata, OG tags and LocalBusiness structured data are all derived from it.
 */
export interface Instructor {
  /** Full name as it should appear publicly. */
  name: string;
  /** Two-letter monogram used by the placeholder avatar. */
  initials: string;
  /** e.g. "Head Instructor", "Road-Test Lead". */
  role: string;
  /** Years teaching, as a string so "20+" is allowed. */
  years: string;
  /** One or two sentences. Specific beats generic. */
  bio: string;
  /** Optional real photo, relative to /public. Falls back to the monogram. */
  photo?: string;
}

export interface Prospect {
  /** URL segment: /riverside-meridian. Lowercase, hyphenated, stable. */
  slug: string;
  /** Full legal-ish business name. */
  name: string;
  /** Short name for nav, roof sign and tight spaces. Keep under ~12 chars. */
  short: string;
  city: string;
  county: string;
  /** Display format, e.g. "(951) 555-0164". */
  phone: string;
  /** E.164 for tel: links, e.g. "+19515550164". */
  phoneRaw: string;

  /**
   * California DMV school licence number.
   * MUST be the school's real number or omitted entirely — never invented.
   * See VERIFY.md.
   */
  licence?: string;

  /** Years in business. Drives the "serving since" calculation. */
  years: string;

  /* --- Claims. Every field below is a factual assertion about a real
         business. Omit rather than estimate. --- */
  students?: string;
  rating?: string;
  reviews?: string;
  passRate?: string;


  /** Hourly rate used by the price calculator. */
  hourly: number;

  /* ---------------- offerings ----------------
     California minors need 30 hours of driver education (classroom or online)
     AND 6 hours of professional behind-the-wheel training AND 50 hours of
     supervised practice. Most CA schools sell the 30-hour course too, often
     bundled. Omit `driverEd` if this school only does behind-the-wheel. */

  /** The DMV-required 30-hour driver education course, if they offer it. */
  driverEd?: { format: 'online' | 'classroom' | 'both'; price: number };
  /** e.g. ['English', 'Spanish']. Spanish matters a lot in most CA markets. */
  languages?: string[];
  /** Show the gift-certificate call to action. */
  giftCertificates?: boolean;
  /** Enquiry-form destination. Omit to hide the form. */
  email?: string;
  /** Service-area towns. Any length; the layout reflows. */
  areas: string[];
  instructors: Instructor[];

  /** Optional override for the hero headline. */
  headline?: string;
}
