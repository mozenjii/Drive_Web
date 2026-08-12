import Image from 'next/image';
import type { Client } from '@/lib/types';
import { Tick } from '@/components/SiteChrome';
import { PageHeader } from '@/components/pages/PageHeader';
import { StatBand } from '@/components/Infographic';
import { photoFor } from '@/lib/photos';

/**
 * This page used to open with `/images/students-1.jpg` — hardcoded — so all
 * twenty previews showed the same photograph of the same students, each with alt
 * text naming a different school. Underneath it, template prose asserted that
 * every one of these businesses "has grown from a single instructor with a
 * single car into one of the busiest driving schools in the region", which is an
 * invented claim about a real company and breaks sites/VERIFY.md outright.
 *
 * The banner is now the client's own `support` photograph or nothing, and the
 * history is `client.story` — their words, from their site — or nothing.
 */
export function AboutPage({ client, years }: { client: Client; years?: number }) {
  const banner = photoFor(client, 'support');
  return (
    <>
      <PageHeader
        client={client}
        kicker="About"
        title={
          client.founded
            ? `Teaching ${client.county ?? client.city} to drive since ${client.founded}.`
            : `About ${client.name}`
        }
        lede={
          years
            ? `${years} years, one car at a time, across ${client.areas.length} cities.`
            : undefined
        }
        crumb="About"
      />

      <section className="wrap">
        {banner ? (
          <figure className="photoFrame photoBanner">
            <Image
              src={banner.src}
              alt={banner.alt}
              width={1600}
              height={700}
              sizes="100vw"
              priority
            />
          </figure>
        ) : null}
        <StatBand
          stats={[
            ...(years ? [{ value: `${years}`, label: 'years teaching' }] : []),
            ...(client.founded ? [{ value: client.founded, label: 'founded' }] : []),
            { value: `${client.areas.length}`, label: 'cities served' },
            ...(client.instructors?.length
              ? [{ value: `${client.instructors.length}`, label: 'instructors' }]
              : []),
            ...(client.licence ? [{ value: client.licence, label: 'DMV licence' }] : []),
          ]}
        />
      </section>

      <section className="section">
        <div className="wrap grid-2" style={{ alignItems: 'start', gap: 'var(--space-12)' }}>
          <div className="prose">
            {client.story?.pullQuote ? (
              <blockquote className="storyQuote">{client.story.pullQuote}</blockquote>
            ) : null}
            {client.story?.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <aside className="asideCard">
            <p className="asideLabel">Credentials</p>
            <ul className="tickList" style={{ marginTop: 'var(--space-4)' }}>
              {client.licence ? (
                <li>
                  <Tick />
                  <span>California DMV licence {client.licence}</span>
                </li>
              ) : null}
              <li>
                <Tick />
                <span>Bonded and insured</span>
              </li>
              <li>
                <Tick />
                <span>Instructors DMV-trained and background-checked</span>
              </li>
              {client.languages?.length ? (
                <li>
                  <Tick />
                  <span>Instruction in {client.languages.join(' and ')}</span>
                </li>
              ) : null}
            </ul>

            {client.address ? (
              <>
                <p className="asideLabel" style={{ marginTop: 'var(--space-6)' }}>
                  Office
                </p>
                <p className="asideNote">{client.address}</p>
              </>
            ) : null}
          </aside>
        </div>
      </section>
    </>
  );
}
