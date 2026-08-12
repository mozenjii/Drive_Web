import { describe, expect, it } from 'vitest';
import {
  CAR,
  MANOEUVRES,
  MAX_STEER,
  buildFrames,
  carCorners,
  centreSideslip,
  lerpAngle,
  solids,
  type Manoeuvre,
  type Obstacle,
} from './manoeuvres';

/**
 * A driving school owner will look at this simulator for about four seconds and
 * decide whether we know what we are doing, so "it looked fine when I scrubbed
 * it" is not enough.
 *
 * The previous version of this file skipped the gear change:
 *
 *     if (prev.reverse !== frame.reverse) continue;
 *
 * That one line hid an 88-degree instantaneous rotation in the parallel park and
 * an 80-degree one in the three-point turn — the car spun on the spot at the
 * moment it changed direction. The skip is gone, and `heading is continuous`
 * below is the check it was hiding from.
 */

function overlaps(corners: [number, number][], box: Obstacle): boolean {
  // Separating-axis test between the rotated car and an axis-aligned box.
  const boxCorners: [number, number][] = [
    [box.x, box.y],
    [box.x + box.w, box.y],
    [box.x + box.w, box.y + box.h],
    [box.x, box.y + box.h],
  ];

  const axesFrom = (poly: [number, number][]) =>
    poly.map((p, i) => {
      const q = poly[(i + 1) % poly.length]!;
      const edge = [q[0] - p[0], q[1] - p[1]];
      const len = Math.hypot(edge[0]!, edge[1]!) || 1;
      return [-edge[1]! / len, edge[0]! / len] as [number, number];
    });

  for (const axis of [...axesFrom(corners), ...axesFrom(boxCorners)]) {
    const project = (poly: [number, number][]) => {
      const values = poly.map((p) => p[0] * axis[0] + p[1] * axis[1]);
      return [Math.min(...values), Math.max(...values)];
    };
    const [aMin, aMax] = project(corners);
    const [bMin, bMax] = project(boxCorners);
    if (aMax! < bMin! || bMax! < aMin!) return false; // separating axis found
  }
  return true;
}

/** Smallest gap between the car body and a solid, negative when overlapping. */
function clearance(corners: [number, number][], box: Obstacle): number {
  const boxCorners: [number, number][] = [
    [box.x, box.y],
    [box.x + box.w, box.y],
    [box.x + box.w, box.y + box.h],
    [box.x, box.y + box.h],
  ];
  const axesFrom = (poly: [number, number][]) =>
    poly.map((p, i) => {
      const q = poly[(i + 1) % poly.length]!;
      const edge = [q[0] - p[0], q[1] - p[1]];
      const len = Math.hypot(edge[0]!, edge[1]!) || 1;
      return [-edge[1]! / len, edge[0]! / len] as [number, number];
    });
  let widest = -Infinity;
  for (const axis of [...axesFrom(corners), ...axesFrom(boxCorners)]) {
    const project = (poly: [number, number][]) => {
      const values = poly.map((p) => p[0] * axis[0] + p[1] * axis[1]);
      return [Math.min(...values), Math.max(...values)] as const;
    };
    const [aMin, aMax] = project(corners);
    const [bMin, bMax] = project(boxCorners);
    widest = Math.max(widest, Math.max(bMin - aMax, aMin - bMax));
  }
  return widest;
}

const byId = (id: string): Manoeuvre => MANOEUVRES.find((m) => m.id === id)!;
const angleError = (a: number, b: number) => Math.abs(((a - b + 540) % 360) - 180);

describe.each(MANOEUVRES)('$label', (manoeuvre) => {
  const frames = buildFrames(manoeuvre);

  it('produces a continuous path', () => {
    expect(frames.length).toBeGreaterThan(50);
    for (let i = 1; i < frames.length; i++) {
      const step = Math.hypot(frames[i]!.x - frames[i - 1]!.x, frames[i]!.y - frames[i - 1]!.y);
      expect(step).toBeLessThan(1);
    }
  });

  it('heading is continuous, including across every gear change', () => {
    // The check the old suite skipped. A car cannot rotate without travelling,
    // so a frame-to-frame heading change larger than the arc it drove is a bug
    // no amount of easing in the component will hide.
    for (let i = 1; i < frames.length; i++) {
      expect(angleError(frames[i]!.heading, frames[i - 1]!.heading)).toBeLessThan(2);
    }
  });

  it('never asks for more lock than the car has', () => {
    for (const frame of frames) {
      expect(Math.abs(frame.steer)).toBeLessThanOrEqual(MAX_STEER + 1e-6);
    }
  });

  it('travels exactly where it is pointing', () => {
    // The rear axle moves along the heading by definition of the model. The body
    // centre swings out by a known amount while turning, so this compares against
    // that closed form rather than against a loose tolerance.
    //
    // The chord between two frames is the average direction over the step, so it
    // is compared against the average heading — against the end heading it is
    // out by half the rotation of the step, which is arithmetic, not a defect.
    for (let i = 1; i < frames.length; i++) {
      const prev = frames[i - 1]!;
      const frame = frames[i]!;
      const dx = frame.x - prev.x;
      const dy = frame.y - prev.y;
      if (Math.hypot(dx, dy) < 1e-9) continue;

      const travel = (Math.atan2(dy, dx) * 180) / Math.PI;
      const mean = lerpAngle(prev.heading, frame.heading, 0.5);
      const expected = mean + centreSideslip(frame.steer) + (frame.reverse ? 180 : 0);
      expect(angleError(travel, expected)).toBeLessThan(0.1);
    }
  });

  it('keeps the car on the drivable surface', () => {
    for (const frame of frames) {
      expect(frame.x).toBeGreaterThanOrEqual(manoeuvre.bounds.minX);
      expect(frame.x).toBeLessThanOrEqual(manoeuvre.bounds.maxX);
      expect(frame.y).toBeGreaterThanOrEqual(manoeuvre.bounds.minY);
      expect(frame.y).toBeLessThanOrEqual(manoeuvre.bounds.maxY);
    }
  });

  it('never drives the car body outside the 100x100 scene', () => {
    for (const frame of frames) {
      for (const [x, y] of carCorners(frame)) {
        expect(x).toBeGreaterThan(-2);
        expect(x).toBeLessThan(102);
        expect(y).toBeGreaterThan(-2);
        expect(y).toBeLessThan(102);
      }
    }
  });

  it('never touches a parked car or mounts the kerb', () => {
    for (const frame of frames) {
      const corners = carCorners(frame);
      for (const solid of solids(manoeuvre)) {
        expect(overlaps(corners, solid)).toBe(false);
      }
    }
  });

  it('leaves a visible margin rather than scraping past', () => {
    // Passing the SAT test by a thousandth still reads as a near miss on screen.
    for (const frame of frames) {
      const corners = carCorners(frame);
      for (const solid of solids(manoeuvre)) {
        expect(clearance(corners, solid)).toBeGreaterThan(1);
      }
    }
  });

  it('narrates every leg', () => {
    for (const leg of manoeuvre.legs) {
      expect(leg.note.trim().length).toBeGreaterThan(0);
      expect(leg.drive).not.toBe(0);
    }
    expect(new Set(frames.map((f) => f.leg)).size).toBe(manoeuvre.legs.length);
  });
});

describe('Parallel Park finishes the way an examiner scores it', () => {
  const manoeuvre = byId('parallel');
  const frames = buildFrames(manoeuvre);
  const last = frames[frames.length - 1]!;
  const [rear, front] = manoeuvre.parked as [Obstacle, Obstacle];

  it('ends parallel to the kerb', () => {
    // The whole point of the manoeuvre, and precisely what the hand-drawn path
    // got wrong: it used to finish nose-out at 88 degrees to the kerb.
    expect(angleError(last.heading, 0)).toBeLessThan(0.5);
  });

  it('ends in the bay, not alongside it', () => {
    const xs = carCorners(last).map((c) => c[0]);
    expect(Math.min(...xs)).toBeGreaterThan(rear.x + rear.w);
    expect(Math.max(...xs)).toBeLessThan(front.x);
  });

  it('parks within a car width of the kerb', () => {
    const kerb = manoeuvre.kerbs[0]!;
    const gap = kerb.y - Math.max(...carCorners(last).map((c) => c[1]));
    expect(gap).toBeGreaterThan(0);
    expect(gap).toBeLessThan(CAR.width);
  });

  it('sits centred between the two parked cars', () => {
    const behind = Math.min(...carCorners(last).map((c) => c[0])) - (rear.x + rear.w);
    const ahead = front.x - Math.max(...carCorners(last).map((c) => c[0]));
    expect(Math.abs(behind - ahead)).toBeLessThan(1);
  });

  it('reverses in, rather than driving in forwards', () => {
    const reversed = frames.filter((f) => f.reverse).length;
    expect(reversed / frames.length).toBeGreaterThan(0.4);
  });

  it('swings past 40 degrees and comes back', () => {
    const swing = Math.max(...frames.map((f) => Math.abs(f.heading)));
    expect(swing).toBeGreaterThan(40);
    expect(swing).toBeLessThan(55);
  });
});

describe('Three-Point Turn actually turns around', () => {
  const frames = buildFrames(byId('three-point'));

  it('ends facing the opposite way', () => {
    expect(angleError(frames[frames.length - 1]!.heading, 180)).toBeLessThan(0.5);
  });

  it('uses forward, reverse, forward', () => {
    const order = frames
      .map((f) => f.reverse)
      .filter((v, i, all) => i === 0 || v !== all[i - 1]);
    expect(order).toEqual([false, true, false]);
  });
});

describe('Lane Change lands in the next lane', () => {
  const manoeuvre = byId('lane-change');
  const frames = buildFrames(manoeuvre);

  it('ends straight, one lane over', () => {
    const last = frames[frames.length - 1]!;
    expect(angleError(last.heading, 0)).toBeLessThan(0.5);
    expect(frames[0]!.y - last.y).toBeGreaterThan(CAR.width * 3);
  });

  it('is gentler than a parking manoeuvre', () => {
    const lock = Math.max(...frames.map((f) => Math.abs(f.steer)));
    expect(lock).toBeLessThan(MAX_STEER / 2);
  });
});

describe('lerpAngle', () => {
  it('takes the short way round the circle', () => {
    expect(lerpAngle(350, 10, 0.5)).toBeCloseTo(360, 5);
    expect(lerpAngle(10, 350, 0.5)).toBeCloseTo(0, 5);
  });
});
