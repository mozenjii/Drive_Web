/**
 * Visual regression audit, run in a real browser against the built export.
 *
 * Static analysis and a single screenshot both missed two defects that a
 * prospect saw immediately:
 *
 *   1. White hero text on a light background. The markup was correct, the CSS
 *      resolved to #fff on #F6F4FA, and nothing in the build or the test suite
 *      looks at computed colour against computed background.
 *   2. A card grid mixing photo tiles and plain tiles at three different
 *      heights.
 *
 * So this checks what is actually painted:
 *   - every text node's contrast against its real, alpha-composited background
 *   - anything overflowing its container horizontally
 *   - sibling cards in a grid whose heights disagree
 *
 * Usage: paste into javascript_tool with the preview served, or run via
 * Browser devtools on http://localhost:4311.
 */
(async () => {
  const SLUGS = window.__AUDIT_SLUGS__ || [];
  const PATHS = window.__AUDIT_PATHS__ || ['', 'about/', 'pricing/', 'contact/'];

  const parse = (c) => {
    const m = (c || '').match(/[\d.]+/g);
    if (!m) return null;
    return [ +m[0], +m[1], +m[2], m[3] === undefined ? 1 : +m[3] ];
  };
  const lum = ([r, g, b]) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => {
    const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
    return (l1 + 0.05) / (l2 + 0.05);
  };
  /**
   * Walk ancestors compositing alpha, so a translucent chip resolves properly.
   *
   * Returns **null** when an ancestor paints a gradient or image, because
   * `backgroundColor` reads transparent for those and measuring straight past
   * them is worse than not measuring at all — the first run of this audit
   * reported 49 failures of which 47 were `.finalCta`, `.avatar` and
   * `.brandMark`, all of which are white-on-gradient and perfectly legible.
   * A null means "cannot judge", not "passes".
   */
  const bgOf = (el, win) => {
    let acc = null;
    for (let n = el; n; n = n.parentElement) {
      const cs = win.getComputedStyle(n);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') return null;
      const c = parse(cs.backgroundColor);
      if (!c || c[3] === 0) continue;
      acc = acc === null ? c : acc;
      if (c[3] === 1) {
        if (acc === c) return c;
        const a = acc[3];
        return [0, 1, 2].map((i) => a * acc[i] + (1 - a) * c[i]).concat(1);
      }
    }
    return acc && acc[3] === 1 ? acc : [255, 255, 255, 1];
  };

  const results = { contrast: [], overflow: [], unevenCards: [] };

  for (const slug of SLUGS) {
    for (const p of PATHS) {
      const url = `/${slug}/${p}`;
      const res = await fetch(url);
      if (!res.ok) continue;
      const frame = document.createElement('iframe');
      frame.style.cssText = 'position:fixed;left:-10000px;width:1280px;height:900px;border:0';
      frame.src = url;
      document.body.appendChild(frame);
      await new Promise((r) => { frame.onload = r; setTimeout(r, 4000); });
      const doc = frame.contentDocument;
      if (!doc) { frame.remove(); continue; }

      // --- contrast -----------------------------------------------------
      const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        const text = node.textContent.trim();
        if (text.length < 2) continue;
        const el = node.parentElement;
        if (!el) continue;
        const cs = frame.contentWindow.getComputedStyle(el);
        if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) continue;
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height) continue;
        // Text over a photograph is judged by its scrim, not measurable here.
        if (el.closest('.stage, .pathCard-photo, .photoFrame, .heroPortrait')) continue;

        const fg = parse(cs.color);
        if (!fg || fg[3] === 0) continue;
        const bg = bgOf(el, frame.contentWindow);
        if (!bg) continue; // painted over a gradient — not judgeable here
        const composited = fg[3] === 1 ? fg : [0, 1, 2].map((i) => fg[3] * fg[i] + (1 - fg[3]) * bg[i]);
        const size = parseFloat(cs.fontSize);
        const bold = +cs.fontWeight >= 700;
        const large = size >= 24 || (size >= 18.66 && bold);
        const need = large ? 3 : 4.5;
        const got = ratio(composited, bg);
        if (got < need) {
          results.contrast.push({
            url, text: text.slice(0, 42), cls: el.className && el.className.toString().slice(0, 44),
            got: +got.toFixed(2), need, color: cs.color, on: `rgb(${bg.slice(0, 3).map(Math.round).join(',')})`,
          });
        }
      }

      // --- horizontal overflow -----------------------------------------
      const de = doc.documentElement;
      if (de.scrollWidth > de.clientWidth + 1) {
        for (const el of doc.querySelectorAll('body *')) {
          const r = el.getBoundingClientRect();
          if (r.right > de.clientWidth + 1 && r.width > 0) {
            results.overflow.push({ url, cls: (el.className || '').toString().slice(0, 44), right: Math.round(r.right), vw: de.clientWidth });
            break;
          }
        }
      }

      // --- uneven sibling cards ----------------------------------------
      // Grouped by row top: a grid's second row is legitimately a different
      // height from its first, and comparing across rows only produces noise.
      for (const grid of doc.querySelectorAll('.grid-2, .grid-3, .pathGrid')) {
        // A grid deliberately aligned to the start is not trying to make its
        // children the same height — the About page sets prose beside a short
        // credentials card on purpose. Only stretched grids are judged.
        const align = frame.contentWindow.getComputedStyle(grid).alignItems;
        if (align === 'start' || align === 'flex-start' || align === 'baseline') continue;
        const rows = {};
        for (const k of grid.children) {
          const b = k.getBoundingClientRect();
          if (!b.height) continue;
          (rows[Math.round(b.top)] = rows[Math.round(b.top)] || []).push(Math.round(b.height));
        }
        for (const hs of Object.values(rows)) {
          if (hs.length < 2) continue;
          const spread = Math.max(...hs) - Math.min(...hs);
          if (spread > 24) {
            results.unevenCards.push({ url, cls: (grid.className || '').toString().slice(0, 34), heights: hs, spread });
          }
        }
      }

      frame.remove();
    }
  }
  return results;
})()
