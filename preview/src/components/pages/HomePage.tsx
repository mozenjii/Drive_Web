import { Photo } from '@/components/Photo';
import Link from 'next/link';
import type { Client, Section } from '@/lib/types';
import { hrefFor, slugify } from '@/lib/routes';
import { photoFor } from '@/lib/photos';
import { formatPrice } from '@/lib/seo';
import { Reveal } from '@/components/Reveal';
import { Tick } from '@/components/SiteChrome';
import { ManoeuvreSimulator } from '@/components/ManoeuvreSimulator';
import { PackagePicker } from '@/components/PackagePicker';
import { HeroStage } from '@/components/HeroStage';

/**
 * The home page renders `client.sections` — in the client's order, in the
 * client's words.
 *
 * It used to render a fixed list of sections with every heading and lede
 * hardcoded here: "Tell us who you are.", "Every price, on one page.", "Dual
 * controls, every lesson.", "Where we pick up." Twenty businesses, one page,
 * with the nouns swapped. Worse, the ledes made claims — "Every instructor is
 * DMV-trained, medically examined and background-checked" — about businesses
 * nobody had checked that against.
 *
 * Nothing in this file writes copy any more. If a heading is wrong, it is wrong
 * in that client's data file, where it can be fixed against their own site.
 */

function Head({ section }: { section: Section }) {
  return (
    <div className="sectionHead">
      {section.kicker ? <span className="kicker">{section.kicker}</span> : null}
      <h2 className="sectionTitle">{section.title}</h2>
      {section.lede ? <p className="sectionLede">{section.lede}</p> : null}
    </div>
  );
}

export function HomePage({ client, years }: { client: Client; years?: number }) {
  const primary = client.phones[0];
  const cheapest = client.packageGroups
    ?.flatMap((g) => g.packages)
    .filter((p) => p.price !== undefined)
    .sort((a, b) => a.price! - b.price!)[0];

  const routed = (segments: string[]) => `${hrefFor(client, segments)}/`;
  const programsWithPages = (client.programs ?? []).filter((p) => p.slug);
  const roadTest = photoFor(client, 'roadTest');
  const vehicle = photoFor(client, 'vehicle');
  /** Enough programme photography to be worth composing around. */
  const imageCards = programsWithPages.filter((p) => p.image).length >= 2;
  const photoCards = programsWithPages.slice(0, imageCards ? 4 : 3);

  /**
   * Alternating surfaces, decided by position among the sections that actually
   * RENDER — not by index into `client.sections`.
   *
   * With the index, a section that dropped out for want of data took its shade
   * with it and left its neighbours matching: Academic publishes no packages and
   * no instructors, so `programs` and `road-test` both came out `section-alt` and
   * ran together as one undifferentiated block. Every case below calls this after
   * its own guard, so only rendered sections consume a turn.
   */
  let surfaces = 0;
  const surface = () => `section${surfaces++ % 2 === 0 ? ' section-alt' : ''}`;

  function render(section: Section) {

    switch (section.id) {
      case 'programs':
        if (!programsWithPages.length) return null;
        return (
          <section className={surface()} id="programs" key={section.id}>
            <div className="wrap">
              <Head section={section} />
              {/* Photo-backed where the client has photography for the
                  programme, plain where they do not — never a borrowed picture.
                  Two-up when the cards carry images, so the photograph is big
                  enough to be worth having. */}
              {/* Column count follows the card count. Three photo tiles in a
                  two-column grid left the third one stranded beside a hole. */}
              <div
                className={
                  imageCards
                    ? `pathGrid ${photoCards.length === 3 ? 'grid-3' : 'grid-2'}`
                    : 'grid-3'
                }
              >
                {photoCards.map((program, i) => (
                  <Reveal
                    key={program.slug}
                    as="article"
                    delay={i * 90}
                    className={
                      // Within a photo grid EVERY tile gets the photo treatment.
                      // A programme with no image gets the brand fill rather than
                      // a plain white card — mixing the two in one grid produced
                      // three image tiles beside one short white one, at three
                      // different heights.
                      imageCards
                        ? `pathCard pathCard-photo${program.image ? '' : ' pathCard-solid'}`
                        : 'card pathCard'
                    }
                  >
                    {program.image ? (
                      <Photo
                        className="pathPhoto"
                        src={program.image}
                        alt=""
                        width={900}
                        height={620}
                        sizes="(max-width: 900px) 100vw, 46vw"
                      />
                    ) : null}
                    <div className="pathBody">
                      <h3>{program.title}</h3>
                      <p>{program.summary}</p>
                      {program.price !== undefined ? (
                        <p className="pathPrice">from {formatPrice(program.price)}</p>
                      ) : null}
                      <Link className="pathLink" href={routed([program.slug!])}>
                        {program.navLabel ?? program.title} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );

      case 'packages':
        if (!client.packageGroups?.length) return null;
        return (
          <section className={surface()} id="packages" key={section.id}>
            <div className="wrap">
              <Head section={section} />
              <PackagePicker groups={client.packageGroups} />
              {client.individualLessons?.length ? (
                <p className="pickerFoot">
                  Prefer to buy lessons one at a time?{' '}
                  <Link href={routed(['pricing'])}>See individual lesson prices</Link>.
                </p>
              ) : null}
            </div>
          </section>
        );

      case 'road-test':
        return (
          <section className={surface()} id="road-test" key={section.id}>
            <div className="wrap">
              {roadTest ? (
                <div className="splitHead">
                  <Head section={section} />
                  <figure className="photoFrame photoFrame-tall">
                    <Photo
                      src={roadTest.src}
                      alt={roadTest.alt}
                      width={1200}
                      height={900}
                      sizes="(max-width: 900px) 100vw, 40vw"
                    />
                  </figure>
                </div>
              ) : (
                <Head section={section} />
              )}
              <ManoeuvreSimulator county={client.county} />
            </div>
          </section>
        );

      case 'instructors':
        if (!client.instructors?.length) return null;
        return (
          <section className={surface()} id="instructors" key={section.id}>
            <div className="wrap">
              <Head section={section} />
              <div className="grid-3">
                {client.instructors.slice(0, 3).map((instructor, i) => (
                  <Reveal key={instructor.name} as="article" delay={i * 90} className="card person">
                    {instructor.photo ? (
                      <Photo
                        className="avatar avatarPhoto"
                        src={instructor.photo}
                        alt={`${instructor.name}, ${client.short} driving instructor`}
                        width={160}
                        height={160}
                        sizes="92px"
                      />
                    ) : (
                      <span className="avatar" aria-hidden="true">
                        {instructor.initials}
                      </span>
                    )}
                    <h3>{instructor.name}</h3>
                    {instructor.role ? <p className="personRole">{instructor.role}</p> : null}
                    <p className="personMeta">
                      {[instructor.years ? `${instructor.years} years` : null, instructor.based]
                        .filter(Boolean)
                        .join(' · ')}
                    </p>
                    {instructor.bio ? <p className="personBio">{instructor.bio}</p> : null}
                  </Reveal>
                ))}
              </div>
              {client.instructors.length > 3 ? (
                <p className="pickerFoot">
                  <Link href={routed(['instructors'])}>
                    Meet all {client.instructors.length} instructors →
                  </Link>
                </p>
              ) : null}
            </div>
          </section>
        );

      case 'vehicles': {
        if (!client.vehicles) return null;
        const gallery = client.vehicles.gallery ?? [];
        return (
          <section className={surface()} key={section.id}>
            <div className={`wrap${vehicle ? ' grid-2 vehicleBlock' : ''}`}>
              <div>
                <Head section={section} />
                <p className="sectionLede">{client.vehicles.summary}</p>
                <ul className="tickList" style={{ marginTop: 'var(--space-6)' }}>
                  {client.vehicles.features.map((feature) => (
                    <li key={feature}>
                      <Tick />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {vehicle ? (
                <figure className="photoFrame">
                  <Photo
                    src={vehicle.src}
                    alt={vehicle.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <figcaption>{vehicle.alt}</figcaption>
                </figure>
              ) : null}
            </div>

            {gallery.length ? (
              <div className="wrap fleetRow">
                {gallery.map((car, i) => (
                  <Reveal key={car.src} as="figure" delay={i * 80} className="fleetCar">
                    <Photo
                      src={car.src}
                      alt={car.alt}
                      width={500}
                      height={375}
                      sizes="(max-width: 700px) 50vw, 25vw"
                    />
                    {car.label ? <figcaption>{car.label}</figcaption> : null}
                  </Reveal>
                ))}
              </div>
            ) : null}
          </section>
        );
      }

      case 'reviews':
        if (!client.testimonials?.length) return null;
        return (
          <section className={surface()} id="reviews" key={section.id}>
            <div className="wrap">
              <Head section={section} />
              <div className="grid-3">
                {client.testimonials.slice(0, 6).map((t, i) => (
                  <Reveal key={t.name + i} as="article" delay={(i % 3) * 80} className="card quote">
                    <p className="quoteBody">&ldquo;{t.quote}&rdquo;</p>
                    <p className="quoteName">
                      {t.name}
                      {t.location ? <span> · {t.location}</span> : null}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );

      case 'areas':
        return (
          <section className={surface()} id="areas" key={section.id}>
            <div className="wrap">
              <Head section={section} />
              <div className="chipRow">
                {client.areas.map((area) => (
                  <Link key={area} className="chip" href={routed(['areas', slugify(area)])}>
                    {area}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );

      case 'cta':
        return (
          <section className={surface()} key={section.id}>
            <div className="wrap finalCta">
              <h2>{section.title}</h2>
              {section.lede ? <p>{section.lede}</p> : null}
              <div className="heroActions" style={{ justifyContent: 'center' }}>
                {primary ? (
                  <a className="btn btn-accent" href={`tel:${primary.raw}`}>
                    Call {primary.display}
                  </a>
                ) : null}
                <Link className="btn btn-ghost" href={routed(['contact'])}>
                  Send a message
                </Link>
              </div>
            </div>
          </section>
        );
    }
  }

  return (
    <>
      <HeroStage client={client} years={years} fromPrice={cheapest?.price} />
      {client.sections.map(render)}
    </>
  );
}
