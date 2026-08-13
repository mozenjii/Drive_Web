import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Client } from '@/lib/types';
import { hrefFor } from '@/lib/routes';

export function PageHeader({
  client,
  kicker,
  title,
  lede,
  crumb,
  art = 'road',
  image,
  imageDisclosure,
}: {
  client: Client;
  kicker: string;
  title: string;
  lede?: string;
  crumb: string;
  art?: 'road' | 'people';
  image?: string;
  imageDisclosure?: string;
}) {
  const imageStyle = image
    ? ({ '--page-head-custom-image': `url("${image}")` } as CSSProperties)
    : undefined;

  return (
    <section
      className="pageHead"
      data-art={art}
      data-custom-image={image ? '' : undefined}
      style={imageStyle}
    >
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
      {imageDisclosure ? <span className="pageHeadDisclosure">{imageDisclosure}</span> : null}
    </section>
  );
}
