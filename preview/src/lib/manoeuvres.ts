/**
 * Manoeuvre geometry for the road-test simulator.
 *
 * This used to be hand-drawn waypoints with the heading derived from the path
 * tangent. That fixed the car crabbing sideways, but it could not fix the real
 * problem: **a hand-drawn path is not necessarily drivable.** The parallel park
 * reversed in perpendicular to the kerb and then snapped 88 degrees round in a
 * single frame at the gear change, because nothing forced the end of the
 * reverse leg to agree with the start of the forward one. The three-point turn
 * did the same thing, 80 degrees. The old test skipped exactly that frame
 * (`if (prev.reverse !== frame.reverse) continue`), so it never saw either.
 *
 * So the path is no longer authored at all. Each manoeuvre is a list of driving
 * inputs — how far, and how much lock — integrated through a kinematic bicycle
 * model at the rear axle:
 *
 *     dx/ds = cos θ      dy/ds = sin θ      dθ/ds = tan δ / wheelbase
 *
 * Heading is a state variable, so it is continuous by construction: a gear
 * change reverses `ds` and leaves θ untouched. The car cannot pivot on the spot,
 * cannot exceed its own steering lock, and cannot travel in a direction it is
 * not pointing. Those are now properties of the model rather than things a test
 * hopes to catch.
 *
 * All coordinates share one 100x100 space with the road furniture, which is
 * drawn from this file too — so "mounted the kerb" is expressible in the same
 * numbers the tests check.
 */

export const CAR = {
  length: 13,
  width: 6.4,
  wheelbase: 8,
  /** Rear axle to rear bumper. Sets where the car pivots when reversing. */
  rearOverhang: 2.8,
};

/** Rear axle to the centre of the body. Frames report the centre; the model
 *  integrates the axle, and everything visual hangs off this offset. */
export const AXLE_TO_CENTRE = CAR.length / 2 - CAR.rearOverhang;

/** Tightest circle the car can hold, measured at the rear axle. Scaled from a
 *  real hatchback: 5.5 m kerb-to-kerb against a 4.5 m body is 1.22 car lengths,
 *  which is what makes a parallel park come out at roughly 45 degrees. */
export const MIN_RADIUS = 1.2 * CAR.length;

/** Steering lock implied by that radius. Nothing may exceed it. */
export const MAX_STEER = (Math.atan(CAR.wheelbase / MIN_RADIUS) * 180) / Math.PI;

/** Reversing is slower per unit travelled, and the reverse legs are the ones
 *  worth watching. Purely a pacing figure — it changes time, never geometry. */
const REVERSE_PACE = 2;

/** Axis-aligned solid in the shared 100x100 space. */
export interface Obstacle {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** One continuous application of throttle and lock. */
export interface Leg {
  /** Signed arc length at the rear axle. Negative reverses. */
  drive: number;
  /** Heading change over the leg, in degrees. Omitted or 0 is straight ahead. */
  turn?: number;
  /** Shown in the step list beside the diagram. */
  note: string;
}

export interface Manoeuvre {
  id: string;
  label: string;
  blurb: string;
  /** Pose of the body centre before the first leg. */
  start: { x: number; y: number; heading: number };
  legs: Leg[];
  /** Coarse envelope for the body centre — a sanity net, not the real check. */
  bounds: { minX: number; maxX: number; minY: number; maxY: number };
  /** Parked cars. Drawn as cars, and solid. */
  parked: Obstacle[];
  /** Kerbs and pavements. Drawn as pavement, and solid. */
  kerbs: Obstacle[];
  /** Animation length in ms. A parallel park earns more time than a lane change. */
  duration: number;
}

const rad = (deg: number) => (deg * Math.PI) / 180;

/** Arc length needed to turn `deg` degrees at a given radius. */
const arc = (deg: number, radius = MIN_RADIUS) => Math.abs(rad(deg)) * radius;

/**
 * Two equal opposite arcs move a car sideways by `2R(1 - cos φ)` while leaving
 * it parallel to where it started. That is the whole of a parallel park, and it
 * is why the swing angle comes out where it does rather than being picked.
 */
function swingFor(offset: number, radius = MIN_RADIUS): number {
  const cos = 1 - offset / (2 * radius);
  if (cos <= -1 || cos >= 1) throw new Error(`offset ${offset} is unreachable at radius ${radius}`);
  return (Math.acos(cos) * 180) / Math.PI;
}

/** Forward reach of those two arcs, so the bay can be placed against it. */
const swingReach = (swing: number, radius = MIN_RADIUS) => 2 * radius * Math.sin(rad(swing));

// ---------------------------------------------------------------------------
// Parallel park
//
// Laid out from the kerb outwards rather than by eye. The parked cars sit
// against the kerb, the bay is 1.7 car lengths (a DMV box is 25 ft for a car
// most of the way to 20), and the setup position is one car width plus about a
// metre off the parked cars — which is what fixes the swing angle below.
// ---------------------------------------------------------------------------

const KERB_Y = 80;
/** Parked cars, and the finished car, rest here. */
const PARK_Y = KERB_Y - 2.6 - CAR.width / 2;
/** Waiting alongside, before reversing. */
const SETUP_Y = PARK_Y - (CAR.width + 3.2);
const BAY = { from: 34, to: 58.5 };
/** The reverse deliberately stops short of centre, so the manoeuvre finishes
 *  with the small forward correction every examiner expects to see. One
 *  constant, used both to place the arcs and to drive the correction — they
 *  were separate numbers once, and the car came to rest a unit off centre. */
const PARK_NUDGE = 3;
const REST_X = (BAY.from + BAY.to) / 2 - PARK_NUDGE;

const PARK_SWING = swingFor(PARK_Y - SETUP_Y);
const PARK_ARC = arc(PARK_SWING);

// ---------------------------------------------------------------------------
// Lane change. Same two-arc construction, but a lane change is a gentle thing —
// it uses a radius three times the parking lock, so the swing comes out under
// ten degrees of steering rather than at the stop.
// ---------------------------------------------------------------------------

const LANE_NEAR = 63;
const LANE_FAR = 37;
const LANE_RADIUS = 45.9;
const LANE_SWING = swingFor(LANE_NEAR - LANE_FAR, LANE_RADIUS);

export const MANOEUVRES: Manoeuvre[] = [
  {
    id: 'parallel',
    label: 'Parallel Park',
    blurb:
      'Pull level with the car in front of the space and sit about a metre off it. Reverse on full lock until you are round 45 degrees, straighten, then opposite lock brings the tail in and the car comes out parallel. The examiner is marking your mirror and blind-spot checks at least as closely as the car.',
    start: { x: REST_X + swingReach(PARK_SWING) - 39.5, y: SETUP_Y, heading: 0 },
    legs: [
      { drive: 39.5, note: 'Pull alongside the car in front of the space.' },
      { drive: -PARK_ARC, turn: -PARK_SWING, note: `Reverse on full lock to ${Math.round(PARK_SWING)}°.` },
      { drive: -PARK_ARC, turn: PARK_SWING, note: 'Opposite lock swings the tail in.' },
      { drive: PARK_NUDGE, note: 'Straighten up and centre in the space.' },
    ],
    bounds: { minX: 24, maxX: 68, minY: 62, maxY: 76 },
    parked: [
      { x: BAY.from - CAR.length, y: PARK_Y - CAR.width / 2, w: CAR.length, h: CAR.width },
      { x: BAY.to, y: PARK_Y - CAR.width / 2, w: CAR.length, h: CAR.width },
    ],
    kerbs: [{ x: 0, y: KERB_Y, w: 100, h: 100 - KERB_Y }],
    duration: 5200,
  },
  {
    id: 'three-point',
    label: 'Three-Point Turn',
    blurb:
      'Full lock forward to the far kerb, reverse on opposite lock, then straighten out facing the other way. Marks come off for touching a kerb — not for needing five points instead of three.',
    start: { x: 34, y: 66, heading: 0 },
    legs: [
      { drive: 10, note: 'Check both ways, then move off.' },
      { drive: arc(88), turn: -88, note: 'Full lock across to the far kerb.' },
      { drive: -arc(64), turn: -64, note: 'Reverse on opposite lock, watching the kerb behind.' },
      { drive: arc(28), turn: -28, note: 'Forward again to straighten onto the new heading.' },
      { drive: 30, note: 'Away in the opposite direction.' },
    ],
    bounds: { minX: 20, maxX: 62, minY: 45, maxY: 68 },
    parked: [],
    // A 36-unit carriageway. Any narrower and the car physically cannot turn
    // inside its own lock, which is the point of the manoeuvre existing.
    kerbs: [
      { x: 0, y: 0, w: 100, h: 36 },
      { x: 0, y: 72, w: 100, h: 28 },
    ],
    duration: 5000,
  },
  {
    id: 'lane-change',
    label: 'Lane Change',
    blurb:
      'Mirror, signal, blind spot, move — and the blind-spot check has to be visible from the passenger seat. It is the most commonly failed single item on the California drive test.',
    start: { x: 8, y: LANE_NEAR, heading: 0 },
    legs: [
      { drive: 8, note: 'Mirror, signal, blind spot.' },
      { drive: arc(LANE_SWING, LANE_RADIUS), turn: -LANE_SWING, note: 'Ease across — no more lock than the gap needs.' },
      { drive: arc(LANE_SWING, LANE_RADIUS), turn: LANE_SWING, note: 'Straighten in the new lane.' },
      { drive: 6, note: 'Signal off, settle at the lane centre.' },
    ],
    bounds: { minX: 6, maxX: 88, minY: 34, maxY: 66 },
    parked: [],
    kerbs: [
      { x: 0, y: 0, w: 100, h: 24 },
      { x: 0, y: 76, w: 100, h: 24 },
    ],
    duration: 3600,
  },
  {
    id: 'hill-start',
    label: 'Hill Start',
    blurb:
      'Hold on the brake, find the bite, release without rolling back. On a canyon road with a queue behind you, this is the manoeuvre that decides whether a new driver stays calm.',
    start: { x: 16, y: 73, heading: -30.1 },
    legs: [{ drive: 84, note: 'Bite point, handbrake down, away without a roll.' }],
    bounds: { minX: 14, maxX: 92, minY: 28, maxY: 75 },
    parked: [],
    kerbs: [],
    duration: 3200,
  },
];

export interface Frame {
  /** Body centre. */
  x: number;
  y: number;
  /** Degrees. Integrated, never derived from the path. */
  heading: number;
  /** Steering angle in degrees, signed. Drives the front wheels on screen. */
  steer: number;
  reverse: boolean;
  /** Index into `manoeuvre.legs`, so the caption can follow the car. */
  leg: number;
}

/**
 * Integrate the legs into per-frame poses.
 *
 * Midpoint stepping, which is second order — at this step count the arcs come
 * out exact to well under a tenth of a unit, and the closed-form checks in
 * `manoeuvres.test.ts` hold it to that.
 */
export function buildFrames(manoeuvre: Manoeuvre, total = 280): Frame[] {
  const costs = manoeuvre.legs.map((l) => Math.abs(l.drive) * (l.drive < 0 ? REVERSE_PACE : 1));
  const totalCost = costs.reduce((sum, c) => sum + c, 0);

  let heading = rad(manoeuvre.start.heading);
  let rx = manoeuvre.start.x - AXLE_TO_CENTRE * Math.cos(heading);
  let ry = manoeuvre.start.y - AXLE_TO_CENTRE * Math.sin(heading);

  const frames: Frame[] = [];
  const capture = (leg: number, reverse: boolean, steer: number) => {
    frames.push({
      x: rx + AXLE_TO_CENTRE * Math.cos(heading),
      y: ry + AXLE_TO_CENTRE * Math.sin(heading),
      heading: (heading * 180) / Math.PI,
      steer,
      reverse,
      leg,
    });
  };

  manoeuvre.legs.forEach((leg, index) => {
    const curvature = leg.turn ? rad(leg.turn) / leg.drive : 0;
    const steer = (Math.atan(CAR.wheelbase * curvature) * 180) / Math.PI;
    const steps = Math.max(2, Math.round((costs[index]! / totalCost) * total));
    const ds = leg.drive / steps;

    if (index === 0) capture(0, leg.drive < 0, steer);
    for (let s = 0; s < steps; s++) {
      const mid = heading + (curvature * ds) / 2;
      rx += Math.cos(mid) * ds;
      ry += Math.sin(mid) * ds;
      heading += curvature * ds;
      capture(index, leg.drive < 0, steer);
    }
  });

  return frames;
}

/** Shortest-way angle interpolation, so the car never spins the long way round. */
export function lerpAngle(a: number, b: number, t: number): number {
  const delta = ((b - a + 540) % 360) - 180;
  return a + delta * t;
}

/** The four corners of the car body at a given frame, in world space. */
export function carCorners(frame: Frame): [number, number][] {
  const r = rad(frame.heading);
  const cos = Math.cos(r);
  const sin = Math.sin(r);
  const hx = CAR.length / 2;
  const hy = CAR.width / 2;
  return ([[hx, hy], [hx, -hy], [-hx, -hy], [-hx, hy]] as [number, number][]).map(
    ([dx, dy]) => [frame.x + dx * cos - dy * sin, frame.y + dx * sin + dy * cos] as [number, number],
  );
}

/**
 * Angle between the body centre's travel and the way the car points.
 *
 * The rear axle always moves exactly along the heading — that is the definition
 * of the model. The *centre* does not: while the car is turning it swings out
 * by `atan(d · tan δ / wheelbase)`. That offset is geometry, not error, so the
 * test compares against this rather than against a tolerance.
 */
export function centreSideslip(steer: number): number {
  return (Math.atan((AXLE_TO_CENTRE * Math.tan(rad(steer))) / CAR.wheelbase) * 180) / Math.PI;
}

/** Everything solid, for collision checks and for drawing. */
export function solids(manoeuvre: Manoeuvre): Obstacle[] {
  return [...manoeuvre.parked, ...manoeuvre.kerbs];
}
