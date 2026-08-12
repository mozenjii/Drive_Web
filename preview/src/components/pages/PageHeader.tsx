import Link from 'next/link';
import type { Client } from '@/lib/types';
import { hrefFor } from '@/lib/routes';

export function PageHeader({
  client,
  kicker,
  title,
  lede,
  crumb,
}: {
  client: Client;
  kicker: string;
  title: string;
  lede?: string;
  crumb: string;
}) {
  return (
    <section className="pageHead">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={`${hrefFor(client, [])}/`}>{client.short}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <span className="kicker" style={{ marginTop: 'var(--space-6)' }}>
          {kicker}
        </span>
        <h1 className="pageTitle">{title}</h1>
        {lede ? <p className="pageLede">{lede}</p> : null}
      </div>
    </section>
  );
}
