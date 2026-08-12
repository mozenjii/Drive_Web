'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import type { Client } from '@/lib/types';
import { hrefFor } from '@/lib/routes';
import { formatPrice } from '@/lib/seo';
import {
  WHEN_OPTIONS,
  answer,
  bookingAudiences,
  bookingSummary,
  quickPrompts,
  recommend,
  type BookingDraft,
  type Reply,
} from '@/lib/assistant';

/**
 * The assistant, booking flow and package finder.
 *
 * All of the reasoning lives in `@/lib/assistant`, which answers only from this
 * client's published data and is covered by `assistant.test.ts`. This file draws
 * it and manages the conversation.
 *
 * Two things it deliberately does NOT do:
 *
 * - **Claim to have booked anything.** A static export has no back end and we
 *   have no access to the school's diary. It collects a request and hands over,
 *   the same way `EnquiryForm` does, and says so.
 * - **Answer from a model.** See the note at the top of `lib/assistant.ts`.
 */

type Turn = { role: 'you' | 'bot'; text: string[]; reply?: Reply };
type Mode = 'chat' | 'recommend' | 'booking';

export function Assistant({ client }: { client: Client }) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>('chat');
  const [draft, setDraft] = useState<BookingDraft>({});
  const [step, setStep] = useState(0);
  const [pickedGroup, setPickedGroup] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [turns, setTurns] = useState<Turn[]>([]);

  const panelId = useId();
  const logRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const routed = (segments: string[]) => `${hrefFor(client, segments)}/`;
  const phone = client.phones[0];

  // Greeting is built once, from whatever this client actually publishes.
  useEffect(() => {
    if (!open || turns.length) return;
    setTurns([
      {
        role: 'bot',
        text: [
          `Hello — I can answer questions about ${client.short} from what they publish, and get you booked in.`,
          'I will not guess at anything they have not put in writing.',
        ],
        reply: { text: [], suggestions: quickPrompts(client) },
      },
    ]);
  }, [open, turns.length, client]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [turns, mode, step]);

  // Escape closes and returns focus to the launcher, which is where it came from.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (open && mode === 'chat') inputRef.current?.focus();
  }, [open, mode]);

  function say(text: string) {
    const reply = answer(client, text);
    setTurns((t) => [...t, { role: 'you', text: [text] }, { role: 'bot', text: reply.text, reply }]);
    if (reply.startBooking) { setMode('booking'); setStep(0); }
    if (reply.startRecommender) { setMode('recommend'); setStep(0); setPickedGroup(null); }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;
    setInput('');
    say(q);
  }

  const audiences = bookingAudiences(client);
  const groups = client.packageGroups ?? [];
  const rec =
    pickedGroup && step === 2
      ? recommend(client, { group: pickedGroup, depth: draft.when as never })
      : undefined;

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        className="aiLauncher"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close the assistant' : `Ask ${client.short} a question`}
        title={open ? 'Close' : 'Ask a question'}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <CloseGlyph /> : <ChatGlyph />}
        {open ? null : <span className="aiLauncherDot" aria-hidden="true" />}
        <span className="aiLauncherLabel" aria-hidden="true">
          {open ? 'Close' : 'Ask a question'}
        </span>
      </button>

      {open ? (
        <section className="aiPanel" id={panelId} aria-label={`${client.short} assistant`}>
          <header className="aiHead">
            <div>
              <p className="aiTitle">{client.short} assistant</p>
              <p className="aiSub">Answers only from what this school publishes</p>
            </div>
            <button
              type="button"
              className="aiClose"
              onClick={() => { setOpen(false); launcherRef.current?.focus(); }}
              aria-label="Close the assistant"
            >
              ✕
            </button>
          </header>

          <div className="aiLog" ref={logRef} role="log" aria-live="polite" aria-atomic="false">
            {turns.map((turn, i) => (
              <div key={i} className={`aiTurn aiTurn-${turn.role}`}>
                {turn.text.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
                {turn.reply?.link ? (
                  <Link className="aiInlineLink" href={routed(turn.reply.link.segments)}>
                    {turn.reply.link.label} <span aria-hidden="true">→</span>
                  </Link>
                ) : null}
              </div>
            ))}

            {/* ---------- package finder ---------- */}
            {mode === 'recommend' ? (
              <div className="aiFlow">
                {step === 0 ? (
                  <>
                    <p className="aiAsk">Who are the lessons for?</p>
                    <div className="aiChips">
                      {groups.map((g) => (
                        <button
                          key={g.title}
                          type="button"
                          className="aiChip"
                          onClick={() => { setPickedGroup(g.title); setStep(1); }}
                        >
                          {g.title}
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}

                {step === 1 ? (
                  <>
                    <p className="aiAsk">How much practice do you want?</p>
                    <div className="aiChips">
                      {[
                        ['fewest', 'Just the required minimum'],
                        ['balanced', 'A solid amount'],
                        ['most', 'As much as possible'],
                      ].map(([value, label]) => (
                        <button
                          key={value}
                          type="button"
                          className="aiChip"
                          onClick={() => { setDraft((d) => ({ ...d, when: value })); setStep(2); }}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}

                {step === 2 ? (
                  rec ? (
                    <div className="aiCard">
                      <p className="aiCardKicker">{rec.group}</p>
                      <p className="aiCardTitle">{rec.pick.name}</p>
                      <p className="aiCardMeta">{rec.because}</p>
                      {rec.pick.includes?.length ? (
                        <ul className="aiCardList">
                          {rec.pick.includes.map((inc) => (
                            <li key={inc}>{inc}</li>
                          ))}
                        </ul>
                      ) : null}
                      <div className="aiFlowActions">
                        <button
                          type="button"
                          className="btn btn-accent aiBtnSm"
                          onClick={() => { setMode('booking'); setStep(0); setDraft({ who: rec.group }); }}
                        >
                          Book this
                        </button>
                        <Link className="btn btn-ghost aiBtnSm" href={routed(['pricing'])}>
                          Compare all
                        </Link>
                      </div>
                      <p className="aiNote">
                        Picked from {client.short}&rsquo;s own published packages — nothing here is
                        estimated.
                      </p>
                    </div>
                  ) : (
                    <p className="aiAsk">Let&rsquo;s go through it on the phone instead.</p>
                  )
                ) : null}
              </div>
            ) : null}

            {/* ---------- booking ---------- */}
            {mode === 'booking' ? (
              <div className="aiFlow">
                {step === 0 ? (
                  <>
                    <p className="aiAsk">Who is the lesson for?</p>
                    <div className="aiChips">
                      {audiences.map((a) => (
                        <button
                          key={a}
                          type="button"
                          className="aiChip"
                          onClick={() => { setDraft((d) => ({ ...d, who: a })); setStep(1); }}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}

                {step === 1 ? (
                  <>
                    <p className="aiAsk">Which area?</p>
                    <div className="aiChips">
                      {client.areas.slice(0, 8).map((a) => (
                        <button
                          key={a}
                          type="button"
                          className="aiChip"
                          onClick={() => { setDraft((d) => ({ ...d, where: a })); setStep(2); }}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}

                {step === 2 ? (
                  <>
                    <p className="aiAsk">When suits?</p>
                    <div className="aiChips">
                      {WHEN_OPTIONS.map((w) => (
                        <button
                          key={w}
                          type="button"
                          className="aiChip"
                          onClick={() => { setDraft((d) => ({ ...d, when: w })); setStep(3); }}
                        >
                          {w}
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}

                {step === 3 ? (
                  <form
                    className="aiForm"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const f = new FormData(e.currentTarget);
                      setDraft((d) => ({
                        ...d,
                        name: String(f.get('name') ?? '').trim(),
                        phone: String(f.get('phone') ?? '').trim(),
                      }));
                      setStep(4);
                    }}
                  >
                    <p className="aiAsk">And who should they call back?</p>
                    <label className="aiField">
                      <span>Name</span>
                      <input name="name" required autoComplete="name" />
                    </label>
                    <label className="aiField">
                      <span>Phone</span>
                      <input name="phone" required inputMode="tel" autoComplete="tel" />
                    </label>
                    <button type="submit" className="btn btn-accent aiBtnSm">
                      Request this slot
                    </button>
                  </form>
                ) : null}

                {step === 4 ? (
                  <div className="aiCard">
                    <p className="aiCardKicker">Lesson request</p>
                    <ul className="aiCardList">
                      {bookingSummary(client, draft).map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <p className="aiNote aiNote-strong">
                      Nothing was sent just now. This is a preview, so it will not take a real
                      person&rsquo;s details until it is live on {client.short}&rsquo;s own domain — on the
                      live site this drops straight into the diary and texts back a confirmation.
                    </p>
                    <div className="aiFlowActions">
                      {phone ? (
                        <a className="btn btn-accent aiBtnSm" href={`tel:${phone.raw}`}>
                          Call {phone.display}
                        </a>
                      ) : null}
                      <Link className="btn btn-ghost aiBtnSm" href={routed(['contact'])}>
                        Send it instead
                      </Link>
                    </div>
                  </div>
                ) : null}

                {step < 4 ? (
                  <button
                    type="button"
                    className="aiBack"
                    onClick={() => (step === 0 ? setMode('chat') : setStep((s) => s - 1))}
                  >
                    ← Back
                  </button>
                ) : null}
              </div>
            ) : null}

            {/* ---------- suggestions ---------- */}
            {mode === 'chat' && turns.length ? (
              <div className="aiChips">
                {(turns[turns.length - 1]?.reply?.suggestions ?? []).map((s) => (
                  <button key={s} type="button" className="aiChip" onClick={() => say(s)}>
                    {s}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {mode === 'chat' ? (
            <form className="aiInputRow" onSubmit={onSubmit}>
              <input
                ref={inputRef}
                className="aiInput"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Ask about lessons, prices or areas`}
                aria-label="Ask a question"
              />
              <button type="submit" className="aiSend" aria-label="Send">
                →
              </button>
            </form>
          ) : (
            <div className="aiInputRow">
              <button
                type="button"
                className="aiBack"
                onClick={() => { setMode('chat'); setStep(0); }}
              >
                Ask something else
              </button>
            </div>
          )}

          <p className="aiFoot">
            Demo assistant built by Epoches. It answers from {client.short}&rsquo;s published
            information only.
            {cheapestNote(client)}
          </p>
        </section>
      ) : null}
    </>
  );
}

/** A single honest price anchor in the footer, when one exists. */
function cheapestNote(client: Client) {
  const low = client.packageGroups
    ?.flatMap((g) => g.packages)
    .filter((p) => p.price !== undefined)
    .sort((a, b) => a.price! - b.price!)[0];
  return low ? ` Packages from ${formatPrice(low.price!)}.` : '';
}

/**
 * The launcher's icon. A speech bubble with three dots — the one shape that
 * reads as "talk to someone" without a caption, on a 58px circle, at arm's
 * length, in sunlight.
 */
function ChatGlyph() {
  return (
    <svg
      className="aiLauncherIcon"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
      <circle cx="8.75" cy="11.75" r="1.05" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="11.75" r="1.05" fill="currentColor" stroke="none" />
      <circle cx="16.25" cy="11.75" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CloseGlyph() {
  return (
    <svg
      className="aiLauncherIcon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
