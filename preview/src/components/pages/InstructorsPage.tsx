import Image from 'next/image';
import type { Client } from '@/lib/types';
import { Reveal } from '@/components/Reveal';
import { Tick } from '@/components/SiteChrome';
import { PageHeader } from '@/components/pages/PageHeader';
import { StatBand } from '@/components/Infographic';

export function InstructorsPage({ client }: { client: Client }) {
  const instructors = client.instructors ?? [];

  return (
    <>
      <PageHeader
        client={client}
        kicker="The team"
        title="Who will be in the car."
        lede="Every instructor completes DMV training, a medical examination, testing and a background check before taking a student out."
        crumb="Instructors"
      />

      <section className="wrap">
        <StatBand
          stats={[
            { value: `${instructors.length}`, label: 'instructors' },
            { value: '1:1', label: 'student to instructor' },
            { value: 'DMV', label: 'trained & checked' },
            ...(client.languages?.length
              ? [{ value: `${client.languages.length}`, label: 'languages taught' }]
              : []),
          ]}
        />
      </section>

      <section className="section">
        <div className="wrap grid-3">
          {instructors.map((instructor, i) => (
            <Reveal key={instructor.name} as="article" delay={(i % 3) * 90} className="card person">
              {instructor.photo ? (
                <Image
                  className="avatar avatarPhoto"
                  src={instructor.photo}
                  alt={`${instructor.name}, ${client.short} driving instructor`}
                  width={160}
                  height={160}
                />
              ) : (
                <span className="avatar" aria-hidden="true">
                  {instructor.initials}
                </span>
              )}
              <h2 className="personName">{instructor.name}</h2>
              {instructor.role ? <p className="personRole">{instructor.role}</p> : null}
              <p className="personMeta">
                {[instructor.years ? `${instructor.years} years teaching` : null, instructor.based]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
              {/* No bio renders when the client does not publish one. It is not
                  invented — see sites/VERIFY.md. */}
              {instructor.bio ? <p className="personBio">{instructor.bio}</p> : null}
              {instructor.languages?.length ? (
                <p className="personLangs">Teaches in {instructor.languages.join(' and ')}</p>
              ) : null}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Renders only for clients who advertise vacancies on their own site.
          Carrying their recruitment over means the preview replaces their whole
          site, not just the parts that sell lessons — but "we are hiring" is a
          claim, so a school that publishes none does not get one. */}
      {client.hiring ? (
        <section className="section section-alt">
          <div className="wrap">
            <div className="sectionHead">
              <span className="kicker">Join the team</span>
              <h2 className="sectionTitle">We are hiring instructors.</h2>
              <p className="sectionLede">
                {client.short} is looking for people who like to teach and drive.
              </p>
            </div>
            <ul className="tickList tickList-inline">
              {client.hiring.requirements.map((requirement) => (
                <li key={requirement}>
                  <Tick />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
            {/* No banner photograph here. It was shared stock, and a picture of
                somebody else's staff under "we are hiring" is worse than none. */}
          </div>
        </section>
      ) : null}
    </>
  );
}
