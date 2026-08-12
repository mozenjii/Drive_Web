'use client';

import { useState } from 'react';
import type { PackageGroup } from '@/lib/types';
import { formatPrice } from '@/lib/seo';
import { HoursBar } from '@/components/Infographic';

/**
 * The packages, as a switchable comparison matrix.
 *
 * Their live pricing page shows three separate stacked tables and makes you
 * scroll past all of them to work out which one applies to you. Here you say
 * who you are once and see only your own prices — which is the same
 * information, minus the work. Prices are theirs, verbatim.
 */
export function PackagePicker({ groups }: { groups: PackageGroup[] }) {
  const [activeIndex, setActiveIndex] = useState(groups.length > 1 ? 0 : 0);
  const group = groups[activeIndex]!;

  return (
    <div className="picker">
      {groups.length > 1 ? (
        <div className="pickerTabs" role="tablist" aria-label="Who is the course for?">
          {groups.map((g, i) => (
            <button
              key={g.title}
              type="button"
              role="tab"
              id={`picker-tab-${i}`}
              aria-selected={i === activeIndex}
              aria-controls={`picker-panel-${i}`}
              tabIndex={i === activeIndex ? 0 : -1}
              className="pickerTab"
              onClick={() => setActiveIndex(i)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') setActiveIndex((i + 1) % groups.length);
                if (e.key === 'ArrowLeft') setActiveIndex((i - 1 + groups.length) % groups.length);
              }}
            >
              {g.title}
            </button>
          ))}
        </div>
      ) : null}

      <div
        role={groups.length > 1 ? 'tabpanel' : undefined}
        id={`picker-panel-${activeIndex}`}
        aria-labelledby={groups.length > 1 ? `picker-tab-${activeIndex}` : undefined}
      >
        {group.blurb ? <p className="pickerBlurb">{group.blurb}</p> : null}

        <div className="pickerGrid">
          {group.packages.map((pkg) => (
            <article key={pkg.name} className={`pkg${pkg.featured ? ' pkg-featured' : ''}`}>
              {pkg.featured ? <span className="pkgFlag">Most chosen</span> : null}
              <h3>{pkg.name}</h3>
              {pkg.detail ? <p className="pkgDetail">{pkg.detail}</p> : null}

              {pkg.price !== undefined ? (
                <p className="pkgPrice">
                  {formatPrice(pkg.price)}
                  {pkg.hours ? <span> · {formatPrice(Math.round(pkg.price / pkg.hours))}/hr</span> : null}
                </p>
              ) : (
                <p className="pkgPrice pkgPriceAsk">Call for pricing</p>
              )}

              {pkg.saving ? <p className="pkgSaving">{pkg.saving}</p> : null}

              {/* The hours drawn to scale. "10 hours" means nothing to a parent
                  until they can see it is five separate afternoons. */}
              {pkg.hours ? (
                <HoursBar
                  hours={pkg.hours}
                  lessonLength={pkg.lessonHours ?? group.lessonHours ?? 2}
                  label="What you get"
                />
              ) : null}

              <ul className="pkgFeatures">
                {group.features.map((feature) => {
                  const included = pkg.includes?.includes(feature) ?? false;
                  return (
                    <li key={feature} className={included ? 'in' : 'out'}>
                      <span aria-hidden="true">{included ? '✓' : '·'}</span>
                      <span>{feature}</span>
                      <span className="srOnly">{included ? ' — included' : ' — not included'}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
