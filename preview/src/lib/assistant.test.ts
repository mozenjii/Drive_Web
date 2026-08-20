import { describe, expect, it } from 'vitest';
import { clients } from '@/data';
import {
  answer,
  bookingAudiences,
  bookingSummary,
  fallback,
  quickPrompts,
  recommend,
  refusal,
} from './assistant';
import type { Client } from './types';

/**
 * The assistant sits on a page carrying a real business's name and talks to that
 * business's customers. sites/VERIFY.md forbids publishing an unverified pass
 * rate, price, rating or licence number about a real company.
 *
 * These tests exist to prove the assistant cannot break that rule — not to check
 * that it currently happens not to. The load-bearing one is
 * "never states a number the client does not publish".
 */

/** Every number that legitimately appears in a client's own data. */
function publishedNumbers(client: Client): Set<string> {
  const out = new Set<string>();
  const add = (v: unknown) => {
    if (v === undefined || v === null) return;
    for (const m of String(v).matchAll(/\d+(?:[.,]\d+)*/g)) {
      out.add(m[0].replace(/,/g, ''));
    }
  };

  add(client.licence);
  add(client.founded);
  add(client.address);
  // The email is published data too, and some of them carry digits:
  // actiondriving888@gmail.com made this test fail on "888" the first time a
  // client's address had a number in it. The reply was quoting their own contact
  // details, which is the one thing the assistant is unambiguously allowed to do.
  add(client.email);
  add(client.areasNote);
  add(client.schedulingNote);
  client.phones.forEach((p) => { add(p.display); add(p.raw); add(p.label); });
  client.hours?.forEach((h) => { add(h.days); add(h.hours); });
  client.areas.forEach(add);
  client.languages?.forEach(add);
  client.programs?.forEach((p) => {
    add(p.title); add(p.summary); add(p.price); add(p.priceNote);
    p.body?.forEach(add); p.bullets?.forEach(add); p.logistics?.forEach(add);
  });
  client.packageGroups?.forEach((g) => {
    add(g.title); add(g.blurb); add(g.lessonHours); g.features.forEach(add);
    g.packages.forEach((p) => {
      add(p.name); add(p.detail); add(p.hours); add(p.price); add(p.saving);
      add(p.lessonHours); p.includes?.forEach(add);
    });
  });
  client.individualLessons?.forEach((l) => { add(l.name); add(l.description); add(l.price); });
  client.vehicles && [client.vehicles.summary, ...client.vehicles.features].forEach(add);
  client.sections.forEach((s) => { add(s.title); add(s.kicker); add(s.lede); });
  client.story?.paragraphs.forEach(add);
  add(client.story?.pullQuote);
  add(client.rating?.value); add(client.rating?.count);
  add(client.name); add(client.short); add(client.city); add(client.county);

  // Prices are rendered by formatPrice, which may drop a trailing ".00".
  for (const n of [...out]) if (n.endsWith('.00')) out.add(n.slice(0, -3));
  return out;
}

/** Questions a real visitor asks, including ones designed to bait a guess. */
const PROBES = [
  'how much is it?', 'what are your prices', 'book a lesson', 'which package do I need?',
  'what areas do you cover', 'where do you pick up', 'what are your hours', 'when are you open',
  'are you DMV licensed', 'are you insured', 'what courses do you offer', 'do you teach driver\'s ed',
  'tell me about the road test', 'do you speak spanish', 'what is your phone number', 'contact',
  // Bait: none of these should ever produce a confident figure.
  'what is your pass rate?', 'how many students have you taught?',
  'what is your rating?', 'are you the best driving school?',
  'how many people fail?', 'what percentage pass first time?',
  'do you guarantee I will pass?', 'asdfgh', '', '???',
];

describe.each(clients)('assistant for $short', (client) => {
  const allowed = publishedNumbers(client);

  it('never states a number the client does not publish', () => {
    for (const probe of PROBES) {
      const reply = answer(client, probe);
      for (const line of reply.text) {
        for (const m of line.matchAll(/\d+(?:[.,]\d+)*/g)) {
          const n = m[0].replace(/,/g, '');
          expect(
            allowed.has(n),
            `"${n}" in reply to "${probe}" is not in ${client.short}'s published data:\n  ${line}`,
          ).toBe(true);
        }
      }
    }
  });

  it('never claims a pass rate, guarantee or superlative', () => {
    const banned = /\b(pass rate|guarantee|guaranteed|best in|number one|#1|top[- ]rated|most popular)\b/i;
    for (const probe of PROBES) {
      for (const line of answer(client, probe).text) {
        expect(banned.test(line), `"${line}" answers "${probe}"`).toBe(false);
      }
    }
  });

  it('refuses claim questions outright instead of deflecting to a course', () => {
    // "what is your pass rate?" used to match the drive-test intent on the word
    // "pass" and reply with a course description.
    for (const probe of [
      'what is your pass rate?',
      'do you guarantee I will pass?',
      'how many students have you taught?',
      'are you the best driving school?',
      'what percentage pass first time?',
    ]) {
      expect(answer(client, probe).text.join(' '), probe).toBe(refusal(client).text.join(' '));
    }
  });

  it('admits ignorance rather than inventing an answer', () => {
    for (const probe of ['asdfgh', '', '???']) {
      expect(answer(client, probe).text.join(' ')).toBe(fallback(client).text.join(' '));
    }
  });

  it('always leaves the visitor a way to reach a human', () => {
    const reply = fallback(client);
    const joined = reply.text.join(' ');
    const hasPhone = client.phones.some((p) => joined.includes(p.display));
    expect(hasPhone || reply.link?.segments[0] === 'contact').toBe(true);
  });

  it('offers only prompts it can actually answer', () => {
    for (const prompt of quickPrompts(client)) {
      const reply = answer(client, prompt);
      expect(
        reply.text.join(' '),
        `"${prompt}" is offered but falls through to the fallback`,
      ).not.toBe(fallback(client).text.join(' '));
    }
  });

  it('recommends only packages the client actually sells', () => {
    for (const group of client.packageGroups ?? []) {
      for (const depth of ['fewest', 'balanced', 'most'] as const) {
        const rec = recommend(client, { group: group.title, depth });
        expect(rec).toBeDefined();
        expect(group.packages).toContain(rec!.pick);
      }
    }
  });

  it('offers booking audiences drawn from its own package groups', () => {
    const audiences = bookingAudiences(client);
    expect(audiences.length).toBeGreaterThan(0);
    if (client.packageGroups?.length) {
      expect(audiences).toEqual(client.packageGroups.map((g) => g.title));
    }
  });

  it('summarises a booking without inventing a confirmation', () => {
    const lines = bookingSummary(client, {
      who: 'Teens with a Permit', where: client.areas[0], when: 'Weekend',
      name: 'Sam', phone: '555 0100',
    });
    expect(lines.join(' ')).toContain(client.name);
    expect(lines.join(' ')).not.toMatch(/confirm|booked|reserved|scheduled/i);
  });
});
