import {
  hireSteps,
  officialSources,
  recruiterSummary,
  smallerCityPoints,
  visaBadges,
  visaDisclaimer,
  visaFaq,
  visaHeadline,
} from "@/content/visa";
import { ExternalLink } from "lucide-react";
import { Tag } from "./tag";
import { Section } from "./section";

export function VisaSection() {
  return (
    <Section id="visa" title="Visa status & hiring">
      <div className="mb-6 rounded-lg border-2 border-link/30 bg-link-bg-soft p-5 shadow-[var(--shadow-sm)]">
        <p className="text-lg font-semibold text-ink">{visaHeadline.title}</p>
        <p className="text-secondary mt-2">{visaHeadline.detail}</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {visaBadges.map((badge) => (
          <Tag
            key={badge.label}
            variant={"highlight" in badge && badge.highlight ? "highlight" : "default"}
          >
            {badge.label}
          </Tag>
        ))}
      </div>

      <div className="space-y-6 rounded-lg border border-hairline bg-canvas p-6 shadow-[var(--shadow-sm)]">
        {recruiterSummary.map((block, i) => (
          <div key={i} className="space-y-2">
            {block.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-secondary">
                {p}
              </p>
            ))}
            {"link" in block && block.link ? (
              <a
                href={block.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-base text-link hover:text-link-deep"
              >
                {block.link.label}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : null}
          </div>
        ))}
      </div>

      {smallerCityPoints.map((point) => (
        <div
          key={point.title}
          className="mt-10 rounded-lg border border-hairline bg-canvas p-6"
        >
          <h3 className="mb-3 text-lg font-semibold text-ink">{point.title}</h3>
          <p className="text-secondary">{point.detail}</p>
          {"link" in point && point.link ? (
            <a
              href={point.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-base text-link hover:text-link-deep"
            >
              {point.link.label}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          ) : null}
        </div>
      ))}

      <h3 className="mb-4 mt-10 text-lg font-semibold text-ink">FAQ</h3>
      <div className="space-y-2">
        {visaFaq.map((item) => (
          <details
            key={item.q}
            className="group rounded-md border border-hairline bg-canvas"
          >
            <summary className="cursor-pointer list-none px-4 py-3 text-base font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-2">
                {item.q}
                <span className="text-body transition-transform group-open:rotate-180">
                  ▾
                </span>
              </span>
            </summary>
            <div className="text-secondary border-t border-hairline px-4 py-3">
              {item.a}
              {"link" in item && item.link ? (
                <>
                  {" "}
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-link-deep"
                  >
                    {item.link.label}
                  </a>
                </>
              ) : null}
            </div>
          </details>
        ))}
      </div>

      <h3 className="mb-4 mt-10 text-lg font-semibold text-ink">
        How to hire me
      </h3>
      <ol className="text-secondary list-decimal space-y-3 pl-5">
        {hireSteps.map((step) => (
          <li key={step} className="leading-relaxed">
            {step}
          </li>
        ))}
      </ol>

      <h3 className="mb-3 mt-10 text-base font-medium text-ink">
        Official sources
      </h3>
      <ul className="space-y-2">
        {officialSources.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-link hover:text-link-deep"
            >
              {s.label} ↗
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 font-mono text-meta">{visaDisclaimer}</p>
    </Section>
  );
}
