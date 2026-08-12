import Link from 'next/link';
import { clients } from '@/data';
import { routesFor } from '@/lib/routes';
import { NOINDEX } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preview index — Epoches',
  robots: NOINDEX,
};

/**
 * Internal index. Never linked from a client preview and never sent to a
 * prospect — it exists so the operator can see every build in one place and
 * check a page before the link goes out.
 */
export default function Index() {
  return (
    <main className="opsIndex">
      <header>
        <p className="opsKicker">Epoches · internal</p>
        <h1>Client previews</h1>
        <p className="opsLede">
          {clients.length} {clients.length === 1 ? 'client' : 'clients'} in the current build. Every
          page is <code>noindex</code>. Removing a client from <code>src/data/index.ts</code> and
          pushing takes their preview down — that is how the 14-day expiry is enforced.
        </p>
      </header>

      <div className="opsGrid">
        {clients.map((client) => {
          const routes = routesFor(client);
          return (
            <article key={client.slug} className="opsCard">
              <div className="opsCardHead">
                <h2>
                  <Link href={`/${client.slug}/`}>{client.name}</Link>
                </h2>
                <span className="opsChip">{client.variant}</span>
              </div>
              <p className="opsMeta">
                {client.city}
                {client.county ? `, ${client.county}` : ''} · {routes.length} pages
                {client.licence ? ` · DMV ${client.licence}` : ''}
              </p>
              <p className="opsMeta">
                Source:{' '}
                <a href={client.sourceUrl} target="_blank" rel="noreferrer noopener">
                  {client.sourceUrl.replace(/^https?:\/\//, '')}
                </a>
              </p>
              <ul className="opsRoutes">
                {routes.map((route) => (
                  <li key={route.segments.join('/') || 'home'}>
                    <Link href={`/${[client.slug, ...route.segments].join('/')}/`}>
                      /{[client.slug, ...route.segments].join('/')}/
                    </Link>
                  </li>
                ))}
              </ul>
              {client.internalNotes?.length ? (
                <details className="opsNotes">
                  <summary>Operator notes ({client.internalNotes.length})</summary>
                  <ul>
                    {client.internalNotes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </details>
              ) : null}
            </article>
          );
        })}
      </div>
    </main>
  );
}
