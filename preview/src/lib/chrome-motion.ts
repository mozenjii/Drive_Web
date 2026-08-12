/**
 * Should the header and the call bar be on screen right now?
 *
 * Split out of the component because this is the part with the edge cases —
 * thumb jitter, rubber-band overscroll, a slow drag that never produces a big
 * enough single step — and none of them are testable through a scroll event. The
 * component owns the listener; this owns the decision.
 */

export type ChromeState = 'shown' | 'hidden';

export type ChromeSample = {
  /** Current scroll offset. Can be negative: iOS rubber-bands past the top. */
  y: number;
  /** Where the last decision was taken, NOT the previous scroll position. */
  anchor: number;
  /** What is on screen now. */
  state: ChromeState;
  /** The assistant panel is open and anchored to the bar. */
  panelOpen: boolean;
};

/**
 * The top of the page. Up here the header is part of the design rather than an
 * obstruction, so it is always shown regardless of direction — this also covers
 * the negative offsets iOS produces when you drag past the top.
 */
export const TOP_ZONE = 120;

/**
 * Movement below this is a thumb resting on the glass, not a decision. The
 * anchor is deliberately NOT moved when a step is ignored, so a slow drag
 * accumulates to the threshold instead of being swallowed one pixel at a time.
 */
export const JITTER = 6;

export function nextChrome({ y, anchor, state, panelOpen }: ChromeSample): {
  state: ChromeState;
  anchor: number;
} {
  if (y < TOP_ZONE) return { state: 'shown', anchor: y };
  // Never pull the bar out from under an open panel.
  if (panelOpen) return { state: 'shown', anchor: y };

  const delta = y - anchor;
  if (Math.abs(delta) < JITTER) return { state, anchor };

  return { state: delta > 0 ? 'hidden' : 'shown', anchor: y };
}
