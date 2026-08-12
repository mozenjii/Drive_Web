'use client';

import { useState } from 'react';
import type { Client } from '@/lib/types';

/**
 * Enquiry form.
 *
 * A static export has no back end, so this validates and shows the success
 * state without transmitting anything — it demonstrates the flow without
 * silently swallowing a real parent's enquiry. The success panel says so
 * plainly rather than pretending a message was sent, because a preview that
 * lies to a visitor is worse than one that has no form at all.
 */
export function EnquiryForm({ client }: { client: Client }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};

    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();

    if (!name) next.name = 'Please tell us your name.';
    if (!phone) next.phone = 'We need a number to call you back on.';
    else if (phone.replace(/\D/g, '').length < 10) next.phone = 'That does not look like a full phone number.';

    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="formCard formDone" role="status">
        <span className="formTick" aria-hidden="true">
          ✓
        </span>
        <h2>That is the flow.</h2>
        <p>
          On the live site this reaches {client.email ? <strong>{client.email}</strong> : 'the office'}{' '}
          and sends an instant text back with a booking link, so an enquiry that arrives during a
          lesson still gets answered.
        </p>
        <p className="formNote">
          Nothing was transmitted just now — this is a preview, and it will not take a real parent&rsquo;s
          details until it is live on your own domain.
        </p>
        <button type="button" className="btn btn-ghost" onClick={() => setSent(false)}>
          Try it again
        </button>
      </div>
    );
  }

  return (
    <form className="formCard" onSubmit={onSubmit} noValidate>
      <h2 className="formTitle">Send a message</h2>

      <label className="field">
        <span>Your name</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'err-name' : undefined}
        />
        {errors.name ? (
          <em id="err-name" className="fieldError">
            {errors.name}
          </em>
        ) : null}
      </label>

      <label className="field">
        <span>Phone number</span>
        {/* type="tel" so a phone shows the numeric keypad — most of these are
            opened on mobile. */}
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'err-phone' : undefined}
        />
        {errors.phone ? (
          <em id="err-phone" className="fieldError">
            {errors.phone}
          </em>
        ) : null}
      </label>

      <label className="field">
        <span>Who is learning?</span>
        <select name="who" defaultValue="teen">
          <option value="teen">A teen with a permit</option>
          <option value="teen-no-permit">A teen without a permit yet</option>
          <option value="adult">An adult learner</option>
          <option value="refresher">A refresher or road-test only</option>
        </select>
      </label>

      <label className="field">
        <span>
          Anything we should know? <em className="optional">Optional</em>
        </span>
        <textarea name="message" rows={4} />
      </label>

      <button type="submit" className="btn btn-accent formSubmit">
        Send message
      </button>
    </form>
  );
}
