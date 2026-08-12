import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { clients, getClient } from '@/data';
import { findRoute, routesFor } from '@/lib/routes';
import { drivingSchoolJsonLd, pageMetadata, yearsInBusiness } from '@/lib/seo';
import { SiteChrome } from '@/components/SiteChrome';
import { HomePage } from '@/components/pages/HomePage';
import { ProgramPage } from '@/components/pages/ProgramPage';
import { PricingPage } from '@/components/pages/PricingPage';
import { InstructorsPage } from '@/components/pages/InstructorsPage';
import { AboutPage } from '@/components/pages/AboutPage';
import { ContactPage } from '@/components/pages/ContactPage';
import { AreaPage } from '@/components/pages/AreaPage';

/**
 * One route renders every page of every client.
 *
 * `[client]` is the path prefix that namespaces a business; `[[...path]]` is
 * everything beneath it. This is the structural answer to "if a client's site
 * has several pages, where do the other pages go?" — they are directories
 * under the client's own prefix, so two clients can both own /pricing/ without
 * colliding, and adding a page to one client cannot affect another.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return clients.flatMap((client) =>
    routesFor(client).map((route) => ({
      client: client.slug,
      // An empty catch-all must be undefined, not [], or the export writes the
      // homepage to the wrong path.
      path: route.segments.length ? route.segments : undefined,
    })),
  );
}

type Params = { client: string; path?: string[] };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { client: slug, path = [] } = await params;
  const client = getClient(slug);
  if (!client) return {};
  const route = findRoute(client, path);
  if (!route) return {};

  const where = `${client.city}, CA`;
  const suffix = `${client.name} — ${where}`;

  const titles: Record<string, string> = {
    home: `${client.name} — Driving Lessons in ${where}`,
    pricing: `Packages & Pricing — ${suffix}`,
    instructors: `Our Instructors — ${suffix}`,
    about: `About Us — ${suffix}`,
    contact: `Contact — ${suffix}`,
    program: `${route.label} — ${suffix}`,
    area: `Driving Lessons in ${route.key} — ${client.name}`,
  };

  const descriptions: Record<string, string> = {
    home: `${client.name} teaches teen and adult drivers across ${client.county ?? where}. Behind-the-wheel lessons, driver education and DMV road-test preparation.`,
    pricing: `Every package and individual lesson from ${client.name}, with prices.`,
    instructors: `Meet the instructors at ${client.name}.`,
    about: `${client.name} has been teaching drivers in ${where}${client.founded ? ` since ${client.founded}` : ''}.`,
    contact: `Call, email or visit ${client.name} in ${where}.`,
    program: `${route.label} at ${client.name} in ${where}.`,
    area: `${client.name} teaches learner and adult drivers in ${route.key}. Lessons with pickup, and DMV road-test preparation.`,
  };

  return pageMetadata(client, {
    title: titles[route.kind] ?? titles.home,
    description: descriptions[route.kind] ?? descriptions.home,
    path: path.length ? `/${path.join('/')}/` : '/',
  });
}

export default async function ClientPage({ params }: { params: Promise<Params> }) {
  const { client: slug, path = [] } = await params;
  const client = getClient(slug);
  if (!client) notFound();

  const route = findRoute(client, path);
  if (!route) notFound();

  const years = yearsInBusiness(client);

  let body: React.ReactNode;
  switch (route.kind) {
    case 'home':
      body = <HomePage client={client} years={years} />;
      break;
    case 'program': {
      const program = client.programs?.find((p) => p.slug === route.key);
      if (!program) notFound();
      body = <ProgramPage client={client} program={program} />;
      break;
    }
    case 'pricing':
      body = <PricingPage client={client} />;
      break;
    case 'instructors':
      body = <InstructorsPage client={client} />;
      break;
    case 'about':
      body = <AboutPage client={client} years={years} />;
      break;
    case 'contact':
      body = <ContactPage client={client} />;
      break;
    case 'area':
      body = <AreaPage client={client} area={route.key!} />;
      break;
    default:
      notFound();
  }

  return (
    <SiteChrome client={client} activePath={path}>
      <script
        type="application/ld+json"
        // Structured data only. The object is built from typed client fields, so
        // there is no user input in it to escape.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(drivingSchoolJsonLd(client)) }}
      />
      {body}
    </SiteChrome>
  );
}
