import Image from 'next/image';
import Link from 'next/link';
import type { Client, Program } from '@/lib/types';
import { hrefFor } from '@/lib/routes';
import { formatPrice } from '@/lib/seo';
import { Tick } from '@/components/SiteChrome';
import { PageHeader } from '@/components/pages/PageHeader';
import { DmvRequirements, JourneySteps } from '@/components/Infographic';

export function ProgramPage({ client, program }: { client: Client; program: Program }) {
  const primary = client.phones[0];

  return (
    <>
      <PageHeader
        client={client}
        kicker={program.navLabel ?? 'Program'}
        title={program.title}
        lede={program.summary}
        crumb={program.navLabel ?? program.title}
      />

      {program.image ? (
        <section className="wrap">
          <figure className="photoFrame photoBanner">
            <Image
              src={program.image}
              alt={`${program.title} at ${client.name}`}
              width={1600}
              height={700}
              sizes="100vw"
              priority
            />
          </figure>
        </section>
      ) : null}

      <section className="section">
        <div className="wrap grid-2" style={{ alignItems: 'start', gap: 'var(--space-12)' }}>
          <div className="prose">
            {(program.body ?? []).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            {program.bullets?.length ? (
              <ul className="tickList" style={{ marginTop: 'var(--space-8)' }}>
                {program.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Tick />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <aside className="asideCard">
            {program.price !== undefined ? (
              <>
                <p className="asideLabel">Price</p>
                <p className="asidePrice">{formatPrice(program.price)}</p>
              </>
            ) : null}
            {program.priceNote ? <p className="asideNote">{program.priceNote}</p> : null}

            {program.logistics?.length ? (
              <>
                <p className="asideLabel" style={{ marginTop: 'var(--space-6)' }}>
                  How it runs
                </p>
                <ul className="asideList">
                  {program.logistics.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}

            <div className="asideActions">
              {primary ? (
                <a className="btn btn-accent" href={`tel:${primary.raw}`}>
                  Call {primary.display}
                </a>
              ) : null}
              <Link className="btn btn-ghost" href={`${hrefFor(client, ['contact'])}/`}>
                Ask a question
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* The three-part California requirement, drawn rather than described.
          Only on the driver-education page, where it is the actual question a
          parent arrives with. */}
      {program.slug === 'drivers-ed' ? (
        <section className="section section-alt">
          <div className="wrap">
            <div className="sectionHead">
              <span className="kicker">What California asks for</span>
              <h2 className="sectionTitle">Three requirements, not two.</h2>
            </div>
            <DmvRequirements driverEdPrice={program.price} />
          </div>
        </section>
      ) : null}

      {program.slug === 'behind-the-wheel' ? (
        <section className="section section-alt">
          <div className="wrap">
            <div className="sectionHead">
              <span className="kicker">How a package runs</span>
              <h2 className="sectionTitle">From first lesson to test day.</h2>
            </div>
            <JourneySteps
              steps={[
                { title: 'Book your first two hours', body: 'We pick up from home, school or work. No need to get to us.' },
                { title: 'Streets, then freeway, then canyons', body: 'Each lesson builds on the last, in the order the test asks for.' },
                { title: 'Drive the examiner routes', body: 'The same roads the DMV uses, driven before it counts.' },
                { title: 'Take the test in this car', body: 'The car you learned in, with an instructor who knows the route.' },
              ]}
            />
          </div>
        </section>
      ) : null}
    </>
  );
}
