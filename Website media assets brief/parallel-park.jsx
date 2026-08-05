/* parallel-park.jsx — flat top-down parallel-parking loop, 1200×1200.
   Globals from animations-v2.jsx: SceneStage, useScene, interpolate, Easing, clamp. */

const PALETTE = {
  asphalt:  '#131C2F',
  asphalt2: '#0F1727',
  walk:     '#0B1120',
  kerb:     '#25324A',
  kerbTop:  '#33425E',
  parked:   '#5A6B85',
  parkedDk: '#46566E',
  hero:     '#DC2626',
  heroDk:   '#A8151B',
  glass:    '#0B1120',
  dot:      '#EF4444',
  line:     'rgba(255,255,255,.10)'
};

const CAR_L = 273, CAR_W = 110;

function CarTop({ x, y, rot, body, bodyDark, sign, opacity = 1, shadow = true }) {
  const wheel = (left, top) => (
    React.createElement('div', {
      key: left + ':' + top,
      style: {
        position: 'absolute', left, top, width: 44, height: 16,
        background: '#0A0D14', borderRadius: 5
      }
    })
  );
  return React.createElement('div', {
    style: {
      position: 'absolute', left: x, top: y, width: CAR_L, height: CAR_W,
      transform: `translate(-50%,-50%) rotate(${rot}deg)`,
      opacity
    }
  }, [
    React.createElement('div', { key: 'w', style: { position: 'absolute', inset: 0 } }, [
      wheel(38, -7), wheel(38, CAR_W - 9), wheel(CAR_L - 82, -7), wheel(CAR_L - 82, CAR_W - 9)
    ]),
    React.createElement('div', {
      key: 'b',
      style: {
        position: 'absolute', inset: 0, borderRadius: '46px 52px 52px 46px / 50%',
        background: `linear-gradient(180deg, ${body} 0%, ${bodyDark} 100%)`,
        boxShadow: shadow ? '0 18px 34px rgba(0,0,0,.55)' : 'none'
      }
    }),
    React.createElement('div', {
      key: 'ws',
      style: {
        position: 'absolute', left: CAR_L * 0.60, top: 15, width: 40, height: CAR_W - 30,
        borderRadius: '10px 22px 22px 10px', background: PALETTE.glass, opacity: .85
      }
    }),
    React.createElement('div', {
      key: 'rw',
      style: {
        position: 'absolute', left: CAR_L * 0.235, top: 17, width: 32, height: CAR_W - 34,
        borderRadius: '18px 8px 8px 18px', background: PALETTE.glass, opacity: .8
      }
    }),
    React.createElement('div', {
      key: 'roof',
      style: {
        position: 'absolute', left: CAR_L * 0.335, top: 12, width: CAR_L * 0.245, height: CAR_W - 24,
        borderRadius: 12, background: bodyDark
      }
    }),
    sign ? React.createElement('div', {
      key: 'sign',
      style: {
        position: 'absolute', left: CAR_L * 0.385, top: CAR_W / 2 - 11, width: 46, height: 22,
        borderRadius: 4, background: '#F4F5F7', boxShadow: '0 2px 6px rgba(0,0,0,.45)'
      }
    }) : null,
    React.createElement('div', {
      key: 'hl',
      style: {
        position: 'absolute', right: 6, top: 16, width: 10, height: CAR_W - 32,
        borderRadius: 5, background: 'rgba(230,238,247,.55)'
      }
    })
  ]);
}

/* --- the reversing path: keyframes in manoeuvre-progress u ∈ [0,1] --- */
/* The swing-in is held clear of the car in front: at every sample the hero's
   rotated footprint stays outside the parked car's box — no clipping through it. */
const U    = [0.00, 0.08, 0.40, 0.64, 0.82, 0.93, 1.00];
const PX   = [1010, 1010,  900,  750,  665,  618,  632];
const PY   = [ 520,  520,  548,  646,  692,  703,  703];
const PROT = [   0,    0,  -18,  -30,  -13,    0,    0];

let OPTS = { heroColor: '#DC2626', showTrail: true, showGuide: true, showRoofSign: true };

function shade(hex, f) {
  const n = parseInt(hex.replace('#',''), 16);
  const r = Math.round(((n >> 16) & 255) * f), g = Math.round(((n >> 8) & 255) * f), b = Math.round((n & 255) * f);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function ParallelParkScene() {
  const { progress } = useScene();
  const fx  = interpolate(U, PX, Easing.easeInOutSine);
  const fy  = interpolate(U, PY, Easing.easeInOutSine);
  const fr  = interpolate(U, PROT, Easing.easeInOutSine);

  const u        = clamp((progress - 0.06) / 0.79, 0, 1);
  const fadeOut  = clamp((progress - 0.93) / 0.07, 0, 1);
  const live     = 1 - fadeOut;
  const trailOp  = Math.min(1, u * 7) * live;

  const dots = [];
  const N = 44;
  for (let i = 1; i <= N; i++) {
    const ui = i / N;
    if (ui > u) break;
    const age = 1 - (u - ui) / Math.max(u, 0.001);
    dots.push(React.createElement('div', {
      key: i,
      style: {
        position: 'absolute', left: fx(ui), top: fy(ui) + 4,
        width: 9, height: 9, marginLeft: -4.5, marginTop: -4.5, borderRadius: '50%',
        background: OPTS.heroColor,
        opacity: (0.24 + 0.66 * age) * trailOp
      }
    }));
  }

  const laneDashes = [];
  for (let i = 0; i < 9; i++) {
    laneDashes.push(React.createElement('div', {
      key: i,
      style: {
        position: 'absolute', left: 40 + i * 140, top: 292, width: 78, height: 10,
        borderRadius: 5, background: PALETTE.line
      }
    }));
  }

  return React.createElement('div', {
    style: { position: 'absolute', inset: 0, background: PALETTE.asphalt, overflow: 'hidden' }
  }, [
    React.createElement('div', { key: 'grad', style: {
      position: 'absolute', inset: 0,
      background: `radial-gradient(80% 60% at 50% 58%, rgba(94,124,190,.10) 0%, rgba(15,23,39,0) 70%)`
    }}),
    React.createElement('div', { key: 'lanes', style: { position: 'absolute', inset: 0 } }, laneDashes),

    /* kerb + sidewalk */
    React.createElement('div', { key: 'walk', style: {
      position: 'absolute', left: 0, right: 0, top: 800, bottom: 0, background: PALETTE.walk
    }}),
    React.createElement('div', { key: 'kerb', style: {
      position: 'absolute', left: 0, right: 0, top: 782, height: 18, background: PALETTE.kerb,
      borderTop: `3px solid ${PALETTE.kerbTop}`
    }}),

    /* the empty slot */
    OPTS.showGuide ? React.createElement('div', { key: 'slot', style: {
      position: 'absolute', left: 392, top: 641, width: 468, height: 118,
      border: '3px dashed rgba(255,255,255,.16)', borderRadius: 10
    }}) : null,

    /* parked cars */
    React.createElement(CarTop, { key: 'p1', x: 232, y: 700, rot: 0,
      body: PALETTE.parked, bodyDark: PALETTE.parkedDk, sign: false }),
    React.createElement(CarTop, { key: 'p2', x: 1040, y: 700, rot: 0,
      body: PALETTE.parked, bodyDark: PALETTE.parkedDk, sign: false }),

    /* trajectory */
    OPTS.showTrail ? React.createElement('div', { key: 'trail', style: { position: 'absolute', inset: 0 } }, dots) : null,

    /* the learner car — live, then the reset ghost back at the start */
    React.createElement(CarTop, { key: 'hero', x: fx(u), y: fy(u), rot: fr(u),
      body: OPTS.heroColor, bodyDark: shade(OPTS.heroColor, .74), sign: OPTS.showRoofSign, opacity: live }),
    React.createElement(CarTop, { key: 'ghost', x: PX[0], y: PY[0], rot: 0,
      body: OPTS.heroColor, bodyDark: shade(OPTS.heroColor, .74), sign: OPTS.showRoofSign, opacity: fadeOut }),

    React.createElement('div', { key: 'vig', style: {
      position: 'absolute', inset: 0, pointerEvents: 'none',
      background: 'radial-gradient(120% 90% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,.45) 100%)'
    }})
  ]);
}

function ParallelParkPiece(props) {
  OPTS = {
    heroColor:    props.heroColor || '#DC2626',
    showTrail:    props.showTrail !== false && props.showTrail !== 'false',
    showGuide:    props.showGuide !== false && props.showGuide !== 'false',
    showRoofSign: props.showRoofSign !== false && props.showRoofSign !== 'false'
  };
  return React.createElement(SceneStage, {
    width: 1200, height: 1200,
    scenes: window.OM_SCENES,
    playback: window.OM_PLAYBACK,
    bg: PALETTE.asphalt
  }, { 'Parallel park': ParallelParkScene });
}

window.ParallelParkPiece = ParallelParkPiece;
