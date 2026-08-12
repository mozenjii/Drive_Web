'use client';

import { useEffect } from 'react';
import { nextChrome, type ChromeState } from '@/lib/chrome-motion';

/**
 * Gives the phone its screen back.
 *
 * The header is sticky, and on a phone it carries the call and book actions as
 * well as the logo — so it is 68px held at the top of the screen for as long as
 * the page is open. It now slides out of the way as soon as you scroll *down*,
 * and comes straight back the moment you scroll *up*, which is the behaviour a
 * reader already expects: the controls are gone while you read and one flick
 * away when you want them.
 *
 * This sets `data-chrome` on the document element; everything else is CSS (see
 * `globals.css`, "chrome motion"). Nothing here measures or writes layout, so it
 * cannot cause a reflow on scroll.
 *
 * Deliberate details:
 *
 * - A 6px threshold, because a thumb resting on a phone produces a stream of
 *   1-2px scroll events and the header would otherwise flicker.
 * - `last` is only updated once the threshold is crossed, so slow drags still
 *   accumulate into a decision rather than being swallowed.
 * - The top 120px always shows the chrome: at the top of a page the header is
 *   part of the design, not an obstruction.
 * - Nothing hides while the assistant panel is open.
 */
export function ChromeMotion() {
  useEffect(() => {
    const root = document.documentElement;
    let anchor = window.scrollY;
    let state: ChromeState = 'shown';
    let queued = false;

    const settle = () => {
      queued = false;
      const decision = nextChrome({
        y: window.scrollY,
        anchor,
        state,
        panelOpen: document.querySelector('.aiPanel') !== null,
      });
      anchor = decision.anchor;
      if (decision.state !== state) {
        state = decision.state;
        root.dataset.chrome = state;
      }
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(settle);
    };

    root.dataset.chrome = state;
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      delete root.dataset.chrome;
    };
  }, []);

  return null;
}
