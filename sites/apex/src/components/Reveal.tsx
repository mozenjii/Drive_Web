'use client';

import { useEffect } from 'react';

/**
 * Adds the `.in` class to every `.reveal` element as it scrolls into view.
 * One observer for the whole page rather than one per component.
 */
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    els.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${(i % 3) * 70}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
