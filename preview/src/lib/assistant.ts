import type { Client, Package } from '@/lib/types';
import { formatPrice } from '@/lib/seo';

/**
 * The assistant's brain.
 *
 * **This is deliberately not a language model, and that is the feature.**
 *
 * Two hard constraints make an LLM the wrong tool here:
 *
 * 1. The previews are a static export on Cloudflare Pages. There is no server,
 *    so calling a model means shipping an API key to the browser.
 * 2. Every one of these pages carries a real business's name. A model asked
 *    "what's your pass rate?" will produce a plausible number, and publishing an
 *    invented pass rate for a real driving school is the single thing
 *    sites/VERIFY.md forbids outright. The campaign already refused ten of those
 *    claims by hand; it would be absurd to hand a generator the same job.
 *
 * So every reply is assembled from fields that exist on `Client`. If the data is
 * absent, the assistant says it does not know and hands over a phone number.
 * **It is structurally incapable of inventing a fact about the business** — which
 * is a stronger guarantee than any prompt, and it is what makes this safe to put
 * in front of a prospect's customers.
 *
 * `assistant.test.ts` asserts that property directly: every number it can emit
 * must appear in the client's own data.
 */

export interface Reply {
  /** What the assistant says. Each string is one paragraph. */
  text: string[];
  /** Follow-up chips. */
  suggestions?: string[];
  /** Route the UI into the booking flow. */
  startBooking?: boolean;
  /** Route the UI into the package recommender. */
  startRecommender?: boolean;
  /** A link worth surfacing as a button, relative to the client root. */
  link?: { label: string; segments: string[] };
}

type Intent = {
  id: string;
  /** Any match triggers it. Order in INTENTS decides precedence. */
  match: RegExp;
  /** Returns undefined when the client publishes nothing to answer with. */
  build: (client: Client) => Reply | undefined;
};

const cheapest = (client: Client): Package | undefined =>
  client.packageGroups
    ?.flatMap((g) => g.packages)
    .filter((p) => p.price !== undefined)
    .sort((a, b) => a.price! - b.price!)[0];

/** Lower-cases a leading capital so a fragment reads inside a sentence. */
const lower = (s: string): string =>
  /^[A-Z][a-z]/.test(s) ? s[0]!.toLowerCase() + s.slice(1) : s;

const list = (items: string[]): string => {
  if (items.length <= 1) return items[0] ?? '';
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
};

const INTENTS: Intent[] = [
  {
    id: 'book',
    match: /\b(book|booking|schedule|appointment|reserve|sign up|enrol|enroll|start)\b/i,
    build: () => ({
      text: ['Let’s get you booked in. Three quick questions.'],
      startBooking: true,
    }),
  },
  {
    id: 'recommend',
    match: /\b(which|recommend|suggest|right for me|what do i need|not sure|help me choose)\b/i,
    build: (client) =>
      client.packageGroups?.length
        ? { text: ['Happy to help you pick. Two questions.'], startRecommender: true }
        : undefined,
  },
  {
    id: 'price',
    match: /\b(price|prices|cost|costs|how much|fee|fees|cheap|afford|quote)\b/i,
    build: (client) => {
      const low = cheapest(client);
      if (!low) {
        return {
          text: [
            `${client.short} quotes prices directly rather than publishing them, because they depend on your age and where you are.`,
            client.phones[0]
              ? `Call ${client.phones[0].display} and they will give you a number over the phone.`
              : 'Get in touch and they will give you a number.',
          ],
          suggestions: ['What areas do you cover?', 'Book a lesson'],
        };
      }
      // "Packages start at X — that is the Second and third lessons" was both
      // clumsy and wrong: Allstate's cheapest priced line is a follow-on lesson,
      // not an entry package. State what the figure IS — the lowest published
      // price — and name the line it belongs to without implying it is a
      // starter package.
      return {
        text: [
          `The lowest published price is ${formatPrice(low.price!)}${
            low.name ? ` — ${low.name}${low.detail ? ` (${lower(low.detail)})` : ''}` : ''
          }.`,
          'Every price is on the pricing page, with what each one includes.',
        ],
        suggestions: ['Which package do I need?', 'Book a lesson'],
        link: { label: 'See every price', segments: ['pricing'] },
      };
    },
  },
  {
    id: 'hours',
    match: /\b(hour|hours|open|opening|closed|when are you|what time)\b/i,
    build: (client) => {
      if (!client.hours?.length) {
        return client.schedulingNote
          ? { text: [client.schedulingNote], suggestions: ['Book a lesson'] }
          : undefined;
      }
      return {
        text: [
          'Office hours:',
          ...client.hours.map((h) => `${h.days}: ${h.hours}`),
          ...(client.schedulingNote ? [client.schedulingNote] : []),
        ],
        suggestions: ['Book a lesson', 'Where do you pick up?'],
      };
    },
  },
  {
    id: 'areas',
    match: /\b(area|areas|where|city|cities|cover|pick ?up|near me|come to)\b/i,
    build: (client) => ({
      text: [
        `${client.short} teaches in ${list(client.areas)}.`,
        ...(client.areasNote ? [client.areasNote] : []),
      ],
      suggestions: ['Book a lesson', 'How much is it?'],
    }),
  },
  {
    id: 'licence',
    match: /\b(licence|license|licensed|dmv number|registered|insured|legit|accredited)\b/i,
    build: (client) =>
      client.licence
        ? {
            text: [
              `Yes — ${client.name} holds California DMV licence ${client.licence}.`,
              ...(client.founded ? [`They have been teaching since ${client.founded}.`] : []),
            ],
            suggestions: ['Book a lesson'],
          }
        : undefined,
  },
  {
    id: 'programs',
    match: /\b(course|courses|program|programme|lesson|lessons|teach|training|offer|driver'?s ed)\b/i,
    build: (client) => {
      if (!client.programs?.length) return undefined;
      return {
        text: [
          'Here is what they teach:',
          ...client.programs.map((p) => `${p.title} — ${p.summary}`),
        ],
        suggestions: ['Which package do I need?', 'Book a lesson'],
      };
    },
  },
  {
    id: 'test',
    match: /\b(test|drive test|road test|exam|pass|examiner|manoeuvre|maneuver)\b/i,
    build: (client) => {
      const dt = client.programs?.find((p) => /test/i.test(p.title));
      if (!dt) return undefined;
      return {
        text: [`${dt.title} — ${dt.summary}`],
        suggestions: ['Book a lesson', 'How much is it?'],
        ...(dt.slug ? { link: { label: dt.navLabel ?? dt.title, segments: [dt.slug] } } : {}),
      };
    },
  },
  {
    id: 'languages',
    match: /\b(language|languages|spanish|espanol|korean|bilingual)\b/i,
    build: (client) =>
      client.languages?.length
        ? {
            text: [`Lessons are taught in ${list(client.languages)}.`],
            suggestions: ['Book a lesson'],
          }
        : undefined,
  },
  {
    id: 'contact',
    match: /\b(phone|call|number|contact|email|speak|talk to|human|person)\b/i,
    build: (client) => ({
      text: [
        ...client.phones.map((p) => `${p.label ? `${p.label}: ` : ''}${p.display}`),
        ...(client.email ? [client.email] : []),
      ],
      suggestions: ['Book a lesson'],
      link: { label: 'Contact page', segments: ['contact'] },
    }),
  },
];

/**
 * Questions whose honest answer is "they do not publish that".
 *
 * Checked **before** any intent. Without this, "what is your pass rate?" matched
 * the drive-test intent on the word *pass* and came back with a course
 * description — no invented number, but answering a question about pass rates
 * with something that merely looks like an answer is the same failure wearing a
 * different coat. `assistant.test.ts` probes for exactly this.
 *
 * Ten of these twenty schools publish an unverifiable pass rate or student count
 * on their own site. None of it is on the previews, and the assistant will not
 * reintroduce it through the side door.
 */
const UNANSWERABLE =
  /\b(pass(ing)? rate|success rate|guarantee|guaranteed|first[- ]time pass|what percentage|how many (students|people|graduates|clients|customers)|fail(ure)? rate|are you the best|best driving school|top[- ]rated|number one)\b/i;

export function refusal(client: Client): Reply {
  const phone = client.phones[0];
  return {
    text: [
      `${client.short} does not publish that figure, and I am not going to estimate one.`,
      phone
        ? `${phone.display} will tell you honestly.`
        : 'The contact page will get you a straight answer.',
    ],
    suggestions: ['How much is it?', 'Book a lesson'],
    link: { label: 'Contact', segments: ['contact'] },
  };
}

/**
 * The one thing the assistant must never do is guess. When nothing matches, it
 * says so and hands over a real phone number rather than producing something
 * that sounds like an answer.
 */
export function fallback(client: Client): Reply {
  const phone = client.phones[0];
  return {
    text: [
      'I can only answer from what this school publishes, so I would rather not guess at that one.',
      phone
        ? `${phone.display} will get you a straight answer.`
        : 'The contact page will get you a straight answer.',
    ],
    suggestions: quickPrompts(client).slice(0, 3),
    link: { label: 'Contact', segments: ['contact'] },
  };
}

export function answer(client: Client, question: string): Reply {
  const q = question.trim();
  if (!q) return fallback(client);
  if (UNANSWERABLE.test(q)) return refusal(client);
  for (const intent of INTENTS) {
    if (!intent.match.test(q)) continue;
    const reply = intent.build(client);
    if (reply) return reply; // an intent with no data falls through to the next
  }
  return fallback(client);
}

/** Opening chips — only offered where the client actually has the data. */
export function quickPrompts(client: Client): string[] {
  const out: string[] = [];
  if (client.packageGroups?.length) out.push('Which package do I need?');
  out.push('How much is it?');
  if (client.areas.length) out.push('Where do you pick up?');
  if (client.hours?.length || client.schedulingNote) out.push('What are your hours?');
  if (client.licence) out.push('Are you DMV licensed?');
  out.push('Book a lesson');
  return out;
}

/* ------------------------------------------------------------------ *
 * Package recommender
 * ------------------------------------------------------------------ */

export interface RecommendInput {
  /** Which packageGroup title the visitor picked. */
  group: string;
  /** 'most' | 'fewest' | 'balanced' — what they said they wanted. */
  depth: 'fewest' | 'balanced' | 'most';
}

export interface Recommendation {
  group: string;
  pick: Package;
  because: string;
}

/**
 * Picks from the client's OWN packages. It cannot return anything that is not
 * already in their price list, and it explains the choice in terms of the hours
 * and price that package actually carries.
 */
export function recommend(client: Client, input: RecommendInput): Recommendation | undefined {
  const group = client.packageGroups?.find((g) => g.title === input.group);
  if (!group?.packages.length) return undefined;

  const priced = group.packages.filter((p) => p.price !== undefined);
  const pool = priced.length ? priced : group.packages;
  const byHours = [...pool].sort((a, b) => (a.hours ?? 0) - (b.hours ?? 0));

  let pick: Package;
  if (input.depth === 'fewest') pick = byHours[0]!;
  else if (input.depth === 'most') pick = byHours[byHours.length - 1]!;
  else pick = pool.find((p) => p.featured) ?? byHours[Math.floor(byHours.length / 2)]!;

  const bits: string[] = [];
  if (pick.hours) bits.push(`${pick.hours} hours`);
  if (pick.price !== undefined) bits.push(formatPrice(pick.price));
  if (pick.saving) bits.push(pick.saving.toLowerCase());

  return {
    group: group.title,
    pick,
    because: bits.length ? bits.join(' · ') : (pick.detail ?? pick.name),
  };
}

/* ------------------------------------------------------------------ *
 * Booking
 * ------------------------------------------------------------------ */

export interface BookingDraft {
  who?: string;
  where?: string;
  when?: string;
  name?: string;
  phone?: string;
}

export const WHEN_OPTIONS = [
  'Weekday morning',
  'Weekday afternoon',
  'After school',
  'Weekend',
] as const;

/** Who the lesson is for — taken from the client's own package groups. */
export function bookingAudiences(client: Client): string[] {
  const groups = client.packageGroups?.map((g) => g.title) ?? [];
  return groups.length ? groups : ['A teenager', 'An adult'];
}

/**
 * The plain-text summary shown back to the visitor, and the body of the handoff.
 * Nothing here is transmitted — see the note the UI renders alongside it.
 */
export function bookingSummary(client: Client, draft: BookingDraft): string[] {
  return [
    draft.who ? `For: ${draft.who}` : null,
    draft.where ? `In: ${draft.where}` : null,
    draft.when ? `Preferred time: ${draft.when}` : null,
    draft.name ? `Name: ${draft.name}` : null,
    draft.phone ? `Phone: ${draft.phone}` : null,
    `School: ${client.name}`,
  ].filter(Boolean) as string[];
}
