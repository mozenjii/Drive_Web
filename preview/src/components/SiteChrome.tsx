import Image from 'next/image';
import Link from 'next/link';
import type { Client } from '@/lib/types';
import { hrefFor, navRoutesFor, slugify } from '@/lib/routes';
import { yearsInBusiness } from '@/lib/seo';
import { Assistant } from '@/components/Assistant';

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('');
}

export function SiteChrome({
  client,
  activePath,
  children,
}: {
  client: Client;
  activePath: string[];
  children: React.ReactNode;
}) {
  const nav = navRoutesFor(client);
  const active = activePath.join('/');
  const primary = client.phones[0];
  const years = yearsInBusiness(client);
  const home = hrefFor(client, []);

  /**
   * The variant sets the template palette; the client's own scraped brand
   * overrides it where we have one. Both are plain custom properties, so every
   * component downstream themes itself without knowing either exists.
   */
  const brandVars = client.brand
    ? ({
        '--primary': client.brand.primary,
        '--primary-dark': client.brand.primaryDark,
        '--primary-soft': client.brand.primarySoft,
        '--secondary': client.brand.primary,
        '--accent': client.brand.accent,
        '--accent-dark': client.brand.accentDark,
        '--accent-soft': client.brand.accentSoft,
        '--ring': client.brand.primary,
        ...(client.brand.wash ? { '--wash': client.brand.wash } : {}),
        ...(client.brand.bg ? { '--bg': client.brand.bg } : {}),
        ...(client.brand.border ? { '--border': client.brand.border } : {}),
        ...(client.brand.borderSoft ? { '--border-soft': client.brand.borderSoft } : {}),
        ...(client.brand.fgDim ? { '--fg-dim': client.brand.fgDim } : {}),
      } as React.CSSProperties)
    : undefined;

  return (
    <div className="themed" data-variant={client.variant} style={brandVars}>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="header">
        <div className="wrap headerInner">
          <Link href={`${home}/`} className="brand" aria-label={`${client.name} home`}>
            {/* Their own logo when we have scraped it — a preview that wears the
                client's real mark reads as their site, upgraded. Falls back to a
                monogram for clients whose logo we could not obtain. */}
            {client.logo ? (
              <Image
                className="brandLogo"
                src={client.logo}
                alt={client.name}
                width={200}
                height={122}
                priority
              />
            ) : (
              <>
                <span className="brandMark" aria-hidden="true">
                  {initialsOf(client.name)}
                </span>
                <span className="brandText">
                  <span className="brandName">{client.short}</span>
                  <span className="brandSub">Driving School</span>
                </span>
              </>
            )}
          </Link>

          <nav className="nav" aria-label="Main">
            {nav.map((route) => {
              const href = `${hrefFor(client, route.segments)}/`;
              const isActive = route.segments.join('/') === active;
              return (
                <Link
                  key={href}
                  href={href}
                  className="navLink"
                  aria-current={isActive ? 'page' : undefined}
                >
                  {route.label}
                </Link>
              );
            })}
            {primary ? (
              <a className="btn btn-primary" href={`tel:${primary.raw}`} style={{ marginLeft: '0.5rem' }}>
                <PhoneIcon />
                {primary.display}
              </a>
            ) : null}
          </nav>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="footer">
        <div className="wrap">
          <div className="footerGrid">
            <div>
              {client.logo ? (
                <Image
                  className="footerLogo"
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={122}
                />
              ) : null}
              <h3>{client.name}</h3>
              {client.address ? (
                <p style={{ fontSize: '0.92rem', marginBottom: 'var(--space-4)' }}>{client.address}</p>
              ) : null}
              {client.phones.map((phone) => (
                <p key={phone.raw} style={{ fontSize: '0.92rem', marginBottom: 'var(--space-2)' }}>
                  <a href={`tel:${phone.raw}`}>{phone.display}</a>
                  {phone.label ? <span style={{ color: '#93a7d4' }}> · {phone.label}</span> : null}
                </p>
              ))}
              {client.email ? (
                <p style={{ fontSize: '0.92rem' }}>
                  <a href={`mailto:${client.email}`}>{client.email}</a>
                </p>
              ) : null}
              {client.licence ? (
                <p style={{ fontSize: '0.85rem', marginTop: 'var(--space-4)', color: '#93a7d4' }}>
                  California DMV licence {client.licence}
                </p>
              ) : null}
            </div>

            <div>
              <h3>Pages</h3>
              <ul className="footerLinks">
                <li>
                  <Link href={`${home}/`}>Home</Link>
                </li>
                {nav.map((route) => (
                  <li key={route.segments.join('/')}>
                    <Link href={`${hrefFor(client, route.segments)}/`}>{route.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Hours</h3>
              <ul className="footerLinks">
                {(client.hours ?? []).map((h) => (
                  <li key={h.days}>
                    {h.days}
                    <br />
                    <span style={{ color: '#93a7d4' }}>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Service area</h3>
              <ul className="footerLinks">
                {client.areas.map((area) => (
                  <li key={area}>
                    <Link href={`${hrefFor(client, ['areas', slugify(area)])}/`}>
                      Driving lessons in {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footerBottom">
            <p>
              &copy; {new Date().getFullYear()} {client.name}
              {years ? ` · Serving ${client.county ?? client.city} since ${client.founded}` : ''}
            </p>
            {client.social ? (
              <p style={{ display: 'flex', gap: 'var(--space-4)' }}>
                {client.social.facebook ? (
                  <a href={client.social.facebook} rel="noreferrer noopener">
                    Facebook
                  </a>
                ) : null}
                {client.social.instagram ? (
                  <a href={client.social.instagram} rel="noreferrer noopener">
                    Instagram
                  </a>
                ) : null}
                {client.social.twitter ? (
                  <a href={client.social.twitter} rel="noreferrer noopener">
                    Twitter
                  </a>
                ) : null}
              </p>
            ) : null}
          </div>
        </div>
      </footer>

      {/* Sits above the mobile call bar; both are fixed, see components.css. */}
      <Assistant client={client} />

      {primary ? (
        <div className="mobileBar">
          <a className="btn btn-ghost" href={`tel:${primary.raw}`}>
            <PhoneIcon />
            Call
          </a>
          <Link className="btn btn-accent" href={`${hrefFor(client, ['contact'])}/`}>
            Book a lesson
          </Link>
        </div>
      ) : null}
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function Tick() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}
