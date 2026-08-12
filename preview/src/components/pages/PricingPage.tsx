import Link from 'next/link';
import type { Client } from '@/lib/types';
import { hrefFor } from '@/lib/routes';
import { formatPrice } from '@/lib/seo';
import { PackagePicker } from '@/components/PackagePicker';
import { PageHeader } from '@/components/pages/PageHeader';
import { StatBand } from '@/components/Infographic';

export function PricingPage({ client }: { client: Client }) {
  const primary = client.phones[0];

  return (
    <>
      <PageHeader
        client={client}
        kicker="Packages & pricing"
        title="Every price, in one place."
        lede="Buy a package or a single lesson. No quote form, no callback needed to find out what it costs."
        crumb="Pricing"
      />

      <section className="wrap">
        <StatBand
          stats={[
            { value: '2h', label: 'every lesson' },
            { value: '1:1', label: 'student to instructor' },
            { value: 'No', label: 'quote form needed' },
            ...(client.languages?.length ? [{ value: client.languages.length > 1 ? 'EN/ES' : 'EN', label: 'lessons taught in' }] : []),
          ]}
        />
      </section>

      {client.packageGroups?.length ? (
        <section className="section">
          <div className="wrap">
            <PackagePicker groups={client.packageGroups} />
          </div>
        </section>
      ) : null}

      {client.individualLessons?.length ? (
        <section className="section section-alt">
          <div className="wrap">
            <div className="sectionHead">
              <span className="kicker">One at a time</span>
              <h2 className="sectionTitle">Individual lessons</h2>
              <p className="sectionLede">
                Buying a package works out cheaper per hour, but single lessons are here if you only
                need one thing.
              </p>
            </div>

            <div className="priceTable">
              {client.individualLessons.map((item) => (
                <div key={item.name} className="priceRow">
                  <div>
                    <p className="priceName">{item.name}</p>
                    {item.description ? <p className="priceDesc">{item.description}</p> : null}
                  </div>
                  <p className="priceValue">
                    {item.price !== undefined ? formatPrice(item.price) : 'Call'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="wrap finalCta">
          <h2>Not sure which one you need?</h2>
          <p>Tell us the age and whether there is a permit yet, and we will point at the right one.</p>
          <div className="heroActions" style={{ justifyContent: 'center' }}>
            {primary ? (
              <a className="btn btn-accent" href={`tel:${primary.raw}`}>
                Call {primary.display}
              </a>
            ) : null}
            <Link className="btn btn-ghost" href={`${hrefFor(client, ['contact'])}/`}>
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
