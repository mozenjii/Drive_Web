'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AXLE_TO_CENTRE,
  CAR,
  MANOEUVRES,
  buildFrames,
  lerpAngle,
  type Manoeuvre,
  type Obstacle,
  type Frame,
} from '@/lib/manoeuvres';

/**
 * Road-test manoeuvre simulator.
 *
 * Every position on screen comes from `@/lib/manoeuvres` — the kerbs, the parked
 * cars and the bay markings included. This file used to keep its own copy of
 * where the parked cars were, which is how the drawing and the collision test
 * ended up disagreeing about the same scene. Nothing here is a second source of
 * truth any more; it only decides how the numbers look.
 */

/** Wheels, in body-local coordinates. The rear axle is where the car pivots. */
const REAR_AXLE_X = -AXLE_TO_CENTRE;
const FRONT_AXLE_X = REAR_AXLE_X + CAR.wheelbase;
const TRACK_Y = CAR.width / 2 - 0.45;

function Pavement({ box }: { box: Obstacle }) {
  return (
    <>
      <rect x={box.x} y={box.y} width={box.w} height={box.h} fill="var(--sim-kerb)" />
      {/* Kerb face on the side the road is on. */}
      <rect
        x={box.x}
        y={box.y === 0 ? box.y + box.h - 0.7 : box.y}
        width={box.w}
        height="0.7"
        fill="var(--sim-kerb-edge)"
      />
    </>
  );
}

function ParkedCar({ box }: { box: Obstacle }) {
  return (
    <g>
      <rect x={box.x} y={box.y} width={box.w} height={box.h} rx="1.6" fill="var(--sim-parked)" />
      <rect
        x={box.x + 3.4}
        y={box.y + 0.9}
        width={box.w - 7}
        height={box.h - 1.8}
        rx="0.9"
        fill="var(--sim-parked-glass)"
      />
    </g>
  );
}

function Wheel({ x, steer = 0 }: { x: number; steer?: number }) {
  return (
    <g transform={`translate(${x} 0)`}>
      {[-TRACK_Y, TRACK_Y].map((y) => (
        <rect
          key={y}
          x="-1.15"
          y="-0.5"
          width="2.3"
          height="1"
          rx="0.5"
          fill="var(--sim-tyre)"
          transform={`translate(0 ${y}) rotate(${steer})`}
        />
      ))}
    </g>
  );
}

/**
 * Road furniture derived from the manoeuvre rather than authored per scene:
 * a bay outline wherever there are parked cars, and a centre line wherever the
 * road has two kerbs. The hill has neither, so it brings its own.
 */
function Scene({ manoeuvre }: { manoeuvre: Manoeuvre }) {
  const [rear, front] = manoeuvre.parked;
  const [top, bottom] = manoeuvre.kerbs;

  return (
    <>
      {manoeuvre.id === 'hill-start' ? (
        <>
          <path d="M-19 81 L102 11 L118 39 L-2 109 Z" fill="var(--sim-road)" />
          <line
            x1="2" y1="88" x2="98" y2="32"
            stroke="var(--sim-line)" strokeWidth="0.7" strokeDasharray="4 3"
          />
        </>
      ) : null}

      {manoeuvre.kerbs.map((box) => (
        <Pavement key={`${box.x}-${box.y}`} box={box} />
      ))}

      {rear && front ? (
        <rect
          x={rear.x + rear.w}
          y={rear.y - 0.6}
          width={front.x - (rear.x + rear.w)}
          height={rear.h + 1.2}
          rx="1.2"
          fill="none"
          stroke="var(--sim-bay)"
          strokeWidth="0.6"
          strokeDasharray="2.2 1.8"
        />
      ) : null}

      {manoeuvre.parked.map((box) => (
        <ParkedCar key={`${box.x}-${box.y}`} box={box} />
      ))}

      {top && bottom ? (
        <line
          x1="0" y1={(top.y + top.h + bottom.y) / 2}
          x2="100" y2={(top.y + top.h + bottom.y) / 2}
          stroke="var(--sim-line)" strokeWidth="0.7" strokeDasharray="5 4"
        />
      ) : null}
    </>
  );
}

export function ManoeuvreSimulator({ county }: { county?: string }) {
  const [activeId, setActiveId] = useState(MANOEUVRES[0]!.id);
  const [progress, setProgress] = useState(1);
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<number | null>(null);
  const reducedRef = useRef(false);

  const active = MANOEUVRES.find((m) => m.id === activeId)!;
  const frames = useMemo(() => buildFrames(active), [active]);

  useEffect(() => {
    reducedRef.current =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(
    () => () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  function run(id: string) {
    setActiveId(id);
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);

    // Under reduced motion the car is placed at the end of the route rather than
    // driven along it. Same information, no movement.
    if (reducedRef.current) {
      setProgress(1);
      setPlaying(false);
      return;
    }

    setPlaying(true);
    const start = performance.now();
    const duration = MANOEUVRES.find((m) => m.id === id)!.duration;

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(t);
      if (t < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setPlaying(false);
        frameRef.current = null;
      }
    };
    frameRef.current = requestAnimationFrame(step);
  }

  const exact = progress * (frames.length - 1);
  const index = Math.min(frames.length - 2, Math.max(0, Math.floor(exact)));
  const frac = exact - index;
  const a = frames[index]!;
  const b = frames[index + 1]!;
  const car: Frame = {
    x: a.x + (b.x - a.x) * frac,
    y: a.y + (b.y - a.y) * frac,
    heading: lerpAngle(a.heading, b.heading, frac),
    steer: a.steer + (b.steer - a.steer) * frac,
    reverse: b.reverse,
    leg: b.leg,
  };

  const trail = frames
    .slice(0, index + 1)
    .concat([car])
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(' ');

  return (
    <div className="sim">
      <div className="simControls" role="group" aria-label="Choose a manoeuvre">
        {MANOEUVRES.map((m) => (
          <button
            key={m.id}
            type="button"
            className="simBtn"
            aria-pressed={m.id === activeId}
            onClick={() => run(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="simStage">
        <svg viewBox="0 0 100 100" role="img" aria-label={`${active.label} — the route an examiner expects`}>
          <rect width="100" height="100" fill={active.id === 'hill-start' ? 'var(--sim-kerb)' : 'var(--sim-road)'} />
          <Scene manoeuvre={active} />

          <path
            d={trail}
            fill="none"
            stroke="var(--sim-trail)"
            strokeWidth="0.9"
            strokeDasharray="2.2 1.7"
            strokeLinecap="round"
          />

          <g transform={`translate(${car.x} ${car.y}) rotate(${car.heading})`}>
            {/* Wheels first, so the body sits over them. The front pair carries
                the actual steering angle the model used for this frame — if the
                path and the lock ever disagreed it would be visible here. */}
            <Wheel x={REAR_AXLE_X} />
            <Wheel x={FRONT_AXLE_X} steer={car.steer} />
            <rect
              x={-CAR.length / 2} y={-CAR.width / 2}
              width={CAR.length} height={CAR.width}
              rx="1.7" fill="var(--sim-car)"
            />
            <rect
              x={-CAR.length / 2 + 3.2} y={-CAR.width / 2 + 0.9}
              width={CAR.length - 6.6} height={CAR.width - 1.8}
              rx="0.9" fill="var(--sim-glass)"
            />
            {/* Headlights lead, so the car visibly faces its direction of travel. */}
            <rect x={CAR.length / 2 - 1.7} y={-CAR.width / 2 + 0.7} width="1.2" height="1.3" rx="0.4" fill="#FDE68A" />
            <rect x={CAR.length / 2 - 1.7} y={CAR.width / 2 - 2} width="1.2" height="1.3" rx="0.4" fill="#FDE68A" />
            {car.reverse ? (
              <rect x={-CAR.length / 2 + 0.5} y={-1} width="1.4" height="2" rx="0.4" fill="#FFFFFF" />
            ) : null}
          </g>
        </svg>

        <span className={`simBadge${car.reverse ? ' simBadge-rev' : ''}`} aria-live="polite">
          {playing ? (car.reverse ? 'Reversing' : 'Driving') : 'Press a manoeuvre'}
        </span>
      </div>

      <div className="simCopy">
        <h3>{active.label}</h3>
        <p>{active.blurb}</p>
        <ol className="simSteps">
          {active.legs.map((leg, i) => (
            <li key={leg.note} aria-current={playing && i === car.leg ? 'step' : undefined}>
              {leg.note}
            </li>
          ))}
        </ol>
        <p className="simFoot">
          Every instructor here has driven the examiner routes
          {county ? ` in ${county}` : ''} more times than they can count.
        </p>
      </div>
    </div>
  );
}
