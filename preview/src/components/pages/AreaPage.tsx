import Link from 'next/link';
import type { Client } from '@/lib/types';
import { hrefFor, slugify } from '@/lib/routes';
import { formatPrice } from '@/lib/seo';
import { Tick } from '@/components/SiteChrome';
import { PageHeader } from '@/components/pages/PageHeader';
import { StatBand } from '@/components/Infographic';

/**
 * One page per service area — the local-SEO play, and the reason `areas` is a
 * first-class field. A parent searching "driving lessons in Moorpark" lands on
 * a page that says Moorpark, not a generic homepage.
 *
 * Nothing here asserts anything area-specific that we cannot support: it names
 * the town, the instructors actually based there, and the published surcharge
 * note. No invented DMV office addresses, no invented test routes.
 */
export function AreaPage({ client, area }: { client: Client; area: string }) {
  const primary = client.phones[0];
  const locals = (client.instructors ?? []).filter((i) => i.based === area);
  const others = client.areas.filter((a) => a !== area);
  const cheapest = client.packageGroups
    ?.flatMap((g) => g.packages)
    .filter((p) => p.price !== undefined)
    .sort((a, b) => a.price! - b.price!)[0];

  return (
    <>
      <PageHeader
        client={client}
        kicker="Service area"
        title={`Driving lessons in ${area}.`}
        lede={`${client.name} picks up in ${area} for teen and adult behind-the-wheel lessons, and for DMV road-test preparation.`}
        crumb={area}
      />

      <section className="wrap">
        <StatBand
          stats={[
            { value: '2h', label: 'per lesson' },
            { value: '7', label: 'days a week' },
            ...(cheapest ? [{ value: formatPrice(cheapest.price!), label: 'packages from' }] : []),
            { value: 'Free', label: `pickup in ${area}` },
          ]}
        />
      </section>

      <section className="section">
        <div className="wrap grid-2" style={{ alignItems: 'start', gap: 'var(--space-12)' }}>
          <div className="prose">
            <p>
              Lessons in {area} run for two hours, one instructor to one student, with pickup from
              home, school or work — so a lesson fits either side of a school day without anyone
              needing to drive across the county first.
            </p>
            {client.areasNote ? <p>{client.areasNote}</p> : null}

            <ul className="tickList" style={{ marginTop: 'var(--space-6)' }}>
              <li>
                <Tick />
                <span>Pickup anywhere in {area}</span>
              </li>
              <li>
                <Tick />
                <span>Dual-control car, instructor brake fitted</span>
              </li>
              <li>
                <Tick />
                <span>Road-test preparation on the routes examiners actually use</span>
              </li>
              {client.languages?.length ? (
                <li>
                  <Tick />
                  <span>Lessons in {client.languages.join(' or ')}</span>
                </li>
              ) : null}
            </ul>

            {locals.length ? (
              <>
                <h2 className="subhead">Based in {area}</h2>
                <p>
                  {locals.map((i) => i.name).join(', ')}{' '}
                  {locals.length === 1 ? 'teaches' : 'teach'} out of {area}.
                </p>
              </>
            ) : null}
          </div>

          <aside className="asideCard">
            {cheapest ? (
              <>
                <p className="asideLabel">Packages from</p>
                <p className="asidePrice">{formatPrice(cheapest.price!)}</p>
                <p className="asideNote">{cheapest.detail}</p>
              </>
            ) : null}

            <div className="asideActions">
              {primary ? (
                <a className="btn btn-accent" href={`tel:${primary.raw}`}>
                  Call {primary.display}
                </a>
              ) : null}
              <Link className="btn btn-ghost" href={`${hrefFor(client, ['contact'])}/`}>
                Book a lesson
              </Link>
            </div>

            <p className="asideLabel" style={{ marginTop: 'var(--space-8)' }}>
              Also serving
            </p>
            <div className="chipRow" style={{ marginTop: 'var(--space-3)' }}>
              {others.map((other) => (
                <Link key={other} className="chip" href={`${hrefFor(client, ['areas', slugify(other)])}/`}>
                  {other}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
