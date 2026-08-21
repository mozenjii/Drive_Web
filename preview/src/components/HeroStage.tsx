'use client';

import { Photo } from '@/components/Photo';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import type { Client } from '@/lib/types';
import { hrefFor } from '@/lib/routes';
import { photoFor } from '@/lib/photos';
import { formatPrice } from '@/lib/seo';

/**
 * The home-page hero, in one of three compositions.
 *
 * A shared palette is not enough to stop twenty previews reading as one
 * template. This used to be a single full-bleed photo layout for every client,
 * with a lede that asserted "pickup at home, school or work" for all twenty
 * whether or not they offered it, over a stock photograph when they had none.
 *
 * - **stage** — the photograph is the stage. For schools whose own photography
 *   is their strongest asset. Requires `photos.hero`.
 * - **editorial** — a named person is the product. Large serif, their words set
 *   as a pull quote, portrait to the side.
 * - **panel** — operations and numbers, with an inset human photograph when the
 *   client has one. This keeps the composition distinct from the full-bleed and
 *   editorial treatments without leaving the most operational schools faceless.
 */

function Proof({ client, years }: { client: Client; years?: number }) {
  return (
    <>
      {client.rating ? (
        <div className="proofRow">
          <span className="proofValue">{client.rating.value}</span>
          <span className="proofLabel">
            from {client.rating.count} {client.rating.source} reviews
          </span>
        </div>
      ) : null}
      {years ? (
        <div className="proofRow">
          <span className="proofValue">{years}</span>
          <span className="proofLabel">years on these roads</span>
        </div>
      ) : null}
      <div className="proofRow">
        <span className="proofValue">{client.areas.length}</span>
        <span className="proofLabel">
          {client.areas.length === 1 ? 'city served' : 'cities picked up in'}
        </span>
      </div>
    </>
  );
}

function Licence({ client }: { client: Client }) {
  return (
    <span className="stageKicker">
      {client.licence ? (
        <>
          <b>DMV</b> Licence {client.licence}
        </>
      ) : (
        <>
          <b>DMV</b> Licensed
        </>
      )}
      {client.founded ? <em>Since {client.founded}</em> : null}
    </span>
  );
}

function Actions({
  client,
  fromPrice,
  ghost,
}: {
  client: Client;
  fromPrice?: number;
  ghost: string;
}) {
  const routed = (segments: string[]) => `${hrefFor(client, segments)}/`;
  return (
    <div className="stageActions">
      <Link className="btn btn-accent" href={routed(['contact'])}>
        Book a lesson
      </Link>
      {fromPrice !== undefined ? (
        <Link className={`btn ${ghost}`} href={routed(['pricing'])}>
          Packages from {formatPrice(fromPrice)}
        </Link>
      ) : null}
    </div>
  );
}

export function HeroStage({
  client,
  years,
  fromPrice,
}: {
  client: Client;
  years?: number;
  fromPrice?: number;
}) {
  const stageRef = useRef<HTMLDivElement>(null);

  // Slow parallax drift on the image plane. Pointer-driven, desktop only, and
  // skipped entirely under reduced-motion — the composition holds without it.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let frame: number | null = null;
    const onMove = (event: PointerEvent) => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const rect = stage.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        stage.style.setProperty('--drift-x', `${(px * -14).toFixed(1)}px`);
        stage.style.setProperty('--drift-y', `${(py * -10).toFixed(1)}px`);
      });
    };
    const onLeave = () => {
      stage.style.setProperty('--drift-x', '0px');
      stage.style.setProperty('--drift-y', '0px');
    };

    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerleave', onLeave);
    return () => {
      stage.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerleave', onLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  const hero = photoFor(client, 'hero');
  const title = client.headline ?? `Learn to drive in ${client.city}.`;
  const lede = client.heroLede ?? client.tagline;

  // `stage` needs a photograph. Without one it degrades to `panel` rather than
  // borrowing somebody else's.
  const style = client.heroStyle === 'stage' && !hero ? 'panel' : client.heroStyle;

  if (style === 'editorial') {
    return (
      <section className="heroEditorial">
        <div className="wrap heroEditorialInner">
          <div className="heroEditorialCopy">
            <Licence client={client} />
            <h1 className="heroSerifTitle">{title}</h1>
            {lede ? <p className="heroEditorialLede">{lede}</p> : null}
            <Actions client={client} fromPrice={fromPrice} ghost="btn-ghost" />
            <dl className="heroEditorialProof">
              <Proof client={client} years={years} />
            </dl>
          </div>
          {hero ? (
            <figure className="heroPortrait">
              <Photo
                src={hero.src}
                alt={hero.alt}
                width={900}
                height={1150}
                priority
                sizes="(max-width: 900px) 100vw, 42vw"
              />
              <figcaption>{hero.disclosure ?? hero.alt}</figcaption>
            </figure>
          ) : null}
        </div>
      </section>
    );
  }

  if (style === 'panel') {
    return (
      <section className={`heroPanel${hero ? ' heroPanelWithPhoto' : ''}`}>
        <div className="wrap heroPanelInner">
          <div className="heroPanelCopy">
            <Licence client={client} />
            <h1 className="heroPanelTitle">{title}</h1>
            {lede ? <p className="heroPanelLede">{lede}</p> : null}
            <Actions client={client} fromPrice={fromPrice} ghost="btn-ghost" />
          </div>
          {hero ? (
            <figure className="heroPanelPhoto">
              <Photo
                src={hero.src}
                alt={hero.alt}
                width={960}
                height={720}
                priority
                sizes="(max-width: 1000px) 100vw, 32vw"
              />
              <figcaption>{hero.disclosure ?? hero.alt}</figcaption>
            </figure>
          ) : null}
          <aside className="heroPanelProof">
            <Proof client={client} years={years} />
          </aside>
        </div>
        <div className="heroPanelRule" aria-hidden="true" />
      </section>
    );
  }

  return (
    <section className="stage" ref={stageRef}>
      <div className="stageMedia">
        <Photo src={hero!.src} alt={hero!.alt} fill priority sizes="100vw" className="stagePhoto" />
        <span className="stageWash" aria-hidden="true" />
        <span className="stageStreaks" aria-hidden="true" />
        {hero!.disclosure ? <span className="stageDisclosure">{hero!.disclosure}</span> : null}
      </div>

      {/* The three vertical "structural rails" that used to sit here are gone.
          They were 1px white lines that faded to nothing at 22% and 78% of the
          hero height, each with a stray 5px dot partway down — lines that start
          and stop for no reason read as a rendering fault, not as composition.
          No professional driving-school site does this. */}

      <div className="wrap stageInner">
        <div className="stageCopy">
          <Licence client={client} />
          <h1 className="stageTitle">{title}</h1>
          {lede ? <p className="stageLede">{lede}</p> : null}
          <Actions client={client} fromPrice={fromPrice} ghost="btn-glass" />
        </div>

        <aside className="stageProof">
          <Proof client={client} years={years} />
        </aside>
      </div>
    </section>
  );
}
