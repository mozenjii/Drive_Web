'use client';

import { useEffect, useId, useRef, useState } from 'react';

/**
 * A one-tap explanation for a term that needs defining, and nothing else.
 *
 * The rule this component exists to enforce: anything a parent needs in order
 * to DECIDE stays visible — price, hours, what's included, whether you cover
 * their address. Anything they only need in order to feel SAFE about that
 * decision can be one tap away. Our whole outreach pitch is that these schools
 * hide their prices behind a phone call; hiding the prices behind a tooltip
 * instead would just rebuild the same problem with better styling.
 *
 * So this is deliberately only wired to `featureNotes` — the matrix rows where
 * a bare label ("DMV test day car") genuinely doesn't tell you what you get.
 * No note in the client data means no icon renders at all.
 *
 * Expands inline rather than floating. A popover inside a package card in a
 * CSS grid gets clipped by the card's own bounds and needs collision
 * detection on small screens; pushing the card taller cannot break.
 */
export function InfoHint({ label, children }: { label: string; children: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const wrap = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    function onDown(e: MouseEvent) {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, [open]);

  return (
    <span className="hint" ref={wrap}>
      <button
        type="button"
        className="hintBtn"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true">i</span>
        <span className="srOnly">
          {open ? `Hide what ${label} includes` : `What does ${label} include?`}
        </span>
      </button>
      {/* Collapsed state is display:none, which correctly drops it from the
          accessibility tree — the button is the way in. Google still indexes it. */}
      <span id={id} className={`hintBody${open ? ' is-open' : ''}`} role="note">
        {children}
      </span>
    </span>
  );
}
