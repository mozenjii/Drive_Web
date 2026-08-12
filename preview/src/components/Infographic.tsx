import { Tick } from '@/components/SiteChrome';

/**
 * Visual explainers used across every page, so no page is a wall of text.
 *
 * These carry information a parent actually needs — what California requires,
 * how the hours add up, what happens on the day — as diagrams rather than
 * paragraphs. Understanding faster is the thing that closes the sale, so
 * anything that can be shown is shown.
 */

/** The three things California requires of an under-18 driver. */
export function DmvRequirements({ driverEdPrice }: { driverEdPrice?: number }) {
  const steps = [
    {
      hours: '30',
      unit: 'hours',
      title: 'Driver education',
      body: 'Classroom or online. Taken before the permit test.',
      note: driverEdPrice !== undefined ? `From $${driverEdPrice} online` : undefined,
      tone: 'a',
    },
    {
      hours: '6',
      unit: 'hours',
      title: 'Behind-the-wheel training',
      body: 'With a DMV-licensed professional instructor. Three 2-hour lessons minimum.',
      tone: 'b',
    },
    {
      hours: '50',
      unit: 'hours',
      title: 'Supervised practice',
      body: 'With a parent or guardian — 10 of them after dark.',
      tone: 'c',
    },
  ];

  return (
    <div className="reqBoard">
      <p className="reqLead">
        California asks for <strong>three</strong> things before an under-18 driver can take the
        test. Most schools only mention two.
      </p>
      <ol className="reqGrid">
        {steps.map((step, i) => (
          <li key={step.title} className={`reqCard reqCard-${step.tone}`}>
            <span className="reqIndex">{i + 1}</span>
            <span className="reqHours">
              {step.hours}
              <em>{step.unit}</em>
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            {step.note ? <span className="reqNote">{step.note}</span> : null}
          </li>
        ))}
      </ol>
      <p className="reqFoot">
        <Tick />
        <span>
          The 6 hours of professional training and the 50 hours of practice are separate
          requirements — one does not count toward the other.
        </span>
      </p>
    </div>
  );
}

/** How a package's hours break down into lessons, drawn to scale. */
export function HoursBar({
  hours,
  lessonLength = 2,
  label,
}: {
  hours: number;
  lessonLength?: number;
  label?: string;
}) {
  // A package can be shorter than one lesson (Newport sells single hours), so
  // the count floors at one block rather than rounding to zero.
  const lessons = Math.max(1, Math.round(hours / lessonLength));
  const each = +(hours / lessons).toFixed(2);
  const plural = lessons === 1 ? 'lesson' : 'lessons';

  // One segment per lesson, and the duration written ONCE.
  //
  // This used to print a filled chip reading "2h" for every lesson, so a
  // twenty-hour package drew ten identical labelled buttons in a row inside the
  // card. Repeating the same label ten times is not ten times the information —
  // it reads as a control that has been duplicated by mistake. The segments now
  // carry the count visually and the text says what they are, once.
  return (
    <div className="hoursBar">
      {label ? <p className="hoursLabel">{label}</p> : null}
      <div
        className="hoursTrack"
        role="img"
        aria-label={`${lessons} ${plural} of ${each} hours each, ${hours} hours in total`}
      >
        {Array.from({ length: lessons }, (_, i) => (
          <span key={i} className="hoursSeg" />
        ))}
      </div>
      <p className="hoursTotal">
        <b>
          {lessons} {plural}
        </b>{' '}
        of {each} {each === 1 ? 'hour' : 'hours'} · {hours} hours total
      </p>
    </div>
  );
}

/** A numbered journey — permit to licence. */
export function JourneySteps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="journey">
      {steps.map((step, i) => (
        <li key={step.title}>
          <span className="journeyDot">{i + 1}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Big-number proof band. */
export function StatBand({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="statBand">
      {stats.map((stat) => (
        <div key={stat.label} className="statItem">
          <span className="statValue">{stat.value}</span>
          <span className="statLabel">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
