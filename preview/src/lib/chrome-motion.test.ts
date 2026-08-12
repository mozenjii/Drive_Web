import { describe, expect, it } from 'vitest';
import { JITTER, TOP_ZONE, nextChrome, type ChromeSample } from './chrome-motion';

/**
 * The header and the call bar hide on the way down and come back on the way up.
 * Everything that makes that feel right or wrong on an actual phone is in here:
 * a resting thumb must not flicker the header, a slow drag must still count, the
 * top of the page must always show it, and iOS's negative overscroll must not
 * read as "scrolling up from 0".
 */

const sample = (over: Partial<ChromeSample> = {}): ChromeSample => ({
  y: 800,
  anchor: 800,
  state: 'shown',
  panelOpen: false,
  ...over,
});

describe('nextChrome', () => {
  it('shows the chrome anywhere in the top zone, whichever way you are going', () => {
    expect(nextChrome(sample({ y: 0, anchor: 0 })).state).toBe('shown');
    expect(nextChrome(sample({ y: TOP_ZONE - 1, anchor: 0, state: 'hidden' })).state).toBe('shown');
  });

  it('treats iOS rubber-band overscroll as the top, not as scrolling up', () => {
    const decision = nextChrome(sample({ y: -60, anchor: 0 }));
    expect(decision.state).toBe('shown');
    expect(decision.anchor).toBe(-60);
  });

  it('hides on the way down and shows on the way up', () => {
    expect(nextChrome(sample({ y: 900, anchor: 800 })).state).toBe('hidden');
    expect(nextChrome(sample({ y: 700, anchor: 800, state: 'hidden' })).state).toBe('shown');
  });

  it('ignores a resting thumb', () => {
    for (const drift of [-JITTER + 1, -1, 0, 1, JITTER - 1]) {
      const decision = nextChrome(sample({ y: 800 + drift, anchor: 800, state: 'shown' }));
      expect(decision.state, `drift ${drift}`).toBe('shown');
      // The anchor must not move, or the next small step is measured from here.
      expect(decision.anchor, `drift ${drift}`).toBe(800);
    }
  });

  it('lets a slow drag accumulate to a decision instead of swallowing it', () => {
    let state = sample({ y: 800, anchor: 800, state: 'shown' });
    // Five 2px steps: no single step crosses the threshold, the total does.
    for (let i = 1; i <= 5; i++) {
      const decision = nextChrome({ ...state, y: 800 + i * 2 });
      state = { ...state, y: 800 + i * 2, ...decision };
    }
    expect(state.state).toBe('hidden');
  });

  it('re-anchors after every real decision, so a reversal is measured from there', () => {
    const down = nextChrome(sample({ y: 900, anchor: 800 }));
    expect(down).toEqual({ state: 'hidden', anchor: 900 });
    const nudge = nextChrome(sample({ y: 896, anchor: down.anchor, state: down.state }));
    expect(nudge.state, 'a 4px reversal is not a decision').toBe('hidden');
    const up = nextChrome(sample({ y: 890, anchor: down.anchor, state: down.state }));
    expect(up.state, 'a 10px reversal is').toBe('shown');
  });

  it('keeps the chrome while the assistant panel is open', () => {
    const decision = nextChrome(sample({ y: 2000, anchor: 800, state: 'hidden', panelOpen: true }));
    expect(decision.state).toBe('shown');
    expect(decision.anchor).toBe(2000);
  });
});
