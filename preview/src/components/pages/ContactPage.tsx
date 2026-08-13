import type { Client } from '@/lib/types';
import { PageHeader } from '@/components/pages/PageHeader';
import { EnquiryForm } from '@/components/EnquiryForm';

export function ContactPage({ client }: { client: Client }) {
  return (
    <>
      <PageHeader
        client={client}
        art="people"
        image={client.photos?.contact?.src}
        imageDisclosure={client.photos?.contact?.disclosure}
        kicker="Contact"
        title="Book a lesson, or just ask."
        lede={client.schedulingNote}
        crumb="Contact"
      />

      <section className="section">
        <div className="wrap grid-2" style={{ alignItems: 'start', gap: 'var(--space-12)' }}>
          <EnquiryForm client={client} />

          <aside className="asideCard">
            <p className="asideLabel">Call</p>
            {client.phones.map((phone) => (
              <p key={phone.raw} className="contactPhone">
                <a href={`tel:${phone.raw}`}>{phone.display}</a>
                {phone.label ? <span className="contactPhoneLabel">{phone.label}</span> : null}
              </p>
            ))}

            {client.email ? (
              <>
                <p className="asideLabel" style={{ marginTop: 'var(--space-6)' }}>
                  Email
                </p>
                <p className="asideNote">
                  <a href={`mailto:${client.email}`} className="linkish">
                    {client.email}
                  </a>
                </p>
              </>
            ) : null}

            {client.address ? (
              <>
                <p className="asideLabel" style={{ marginTop: 'var(--space-6)' }}>
                  Office
                </p>
                <p className="asideNote">{client.address}</p>
              </>
            ) : null}

            {client.hours?.length ? (
              <>
                <p className="asideLabel" style={{ marginTop: 'var(--space-6)' }}>
                  Office hours
                </p>
                <ul className="asideList">
                  {client.hours.map((h) => (
                    <li key={h.days}>
                      {h.days} — {h.hours}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </aside>
        </div>
      </section>
    </>
  );
}
