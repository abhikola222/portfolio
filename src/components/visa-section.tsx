import {
  chancenkarteSection,
  hireSteps,
  oldenburgTimeline,
  officialSources,
  visaDisclaimer,
  visaFaq,
  visaHeadline,
} from "@/content/visa";
import { ExternalLink } from "lucide-react";
import { Section } from "./section";

export function VisaSection() {
  return (
    <Section id="visa" title="Visa & hiring (for HR)">
      <div className="mb-8 rounded-lg border-2 border-link/30 bg-link-bg-soft p-5 shadow-[var(--shadow-sm)]">
        <p className="text-lg font-semibold text-ink">{visaHeadline.title}</p>
        <p className="text-secondary mt-2">{visaHeadline.detail}</p>
      </div>

      <div className="rounded-lg border border-hairline bg-canvas p-6 shadow-[var(--shadow-sm)]">
        <h3 className="mb-4 text-base font-semibold text-ink">
          {chancenkarteSection.title}
        </h3>
        <div className="space-y-3">
          {chancenkarteSection.paragraphs.map((p) => (
            <p key={p.slice(0, 48)} className="text-secondary leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-hairline bg-canvas p-6 shadow-[var(--shadow-sm)]">
        <h3 className="mb-2 text-base font-semibold text-ink">
          {oldenburgTimeline.title}
        </h3>
        <p className="mb-3 rounded-md border border-link/30 bg-link-bg-soft px-3 py-2 text-base font-semibold text-ink">
          {oldenburgTimeline.highlight}
        </p>
        <p className="text-secondary mb-5 text-base leading-relaxed">
          {oldenburgTimeline.intro}
        </p>
        <ol className="space-y-4">
          {oldenburgTimeline.steps.map((step, i) => (
            <li key={step.phase} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline bg-canvas-soft-2 font-mono text-meta text-ink">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-ink">{step.phase}</p>
                {"highlight" in step && step.highlight ? (
                  <p className="mt-2 rounded-md border border-link/30 bg-link-bg-soft px-3 py-2 text-base font-semibold text-ink">
                    {step.highlight}
                  </p>
                ) : null}
                <p className="text-secondary mt-2 leading-relaxed">
                  {step.detail}
                </p>
                <dl className="mt-3 grid grid-cols-3 gap-2 rounded-md border border-hairline bg-canvas-soft-2/50 p-3">
                  <div>
                    <dt className="font-mono text-meta text-body">Best</dt>
                    <dd className="mt-0.5 font-mono text-sm text-ink">
                      {step.scenarios.best}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-meta text-body">Average</dt>
                    <dd className="mt-0.5 font-mono text-sm text-ink">
                      {step.scenarios.average}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-meta text-body">Worst</dt>
                    <dd className="mt-0.5 font-mono text-sm text-ink">
                      {step.scenarios.worst}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-secondary mt-5 border-t border-hairline pt-4 text-base leading-relaxed">
          {oldenburgTimeline.note}
        </p>
        <a
          href={oldenburgTimeline.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-base text-link hover:text-link-deep"
        >
          {oldenburgTimeline.link.label}
          <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
        </a>
      </div>

      <h3 className="mb-4 mt-8 text-base font-semibold text-ink">
        Common HR questions
      </h3>
      <div className="space-y-2">
        {visaFaq.map((item) => (
          <details
            key={item.q}
            className="group rounded-lg border border-hairline bg-canvas shadow-[var(--shadow-sm)]"
          >
            <summary className="cursor-pointer list-none px-5 py-4 text-base font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-2">
                {item.q}
                <span className="text-body transition-transform group-open:rotate-180">
                  ▾
                </span>
              </span>
            </summary>
            <div className="text-secondary border-t border-hairline px-5 py-4 leading-relaxed">
              {item.a}
            </div>
          </details>
        ))}
      </div>

      <h3 className="mb-3 mt-8 text-base font-semibold text-ink">
        How to hire me
      </h3>
      <ol className="text-secondary list-decimal space-y-2 pl-5">
        {hireSteps.map((step) => (
          <li key={step} className="leading-relaxed">
            {step}
          </li>
        ))}
      </ol>

      <h3 className="mb-3 mt-8 text-base font-medium text-ink">
        Official sources
      </h3>
      <ul className="space-y-2">
        {officialSources.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-base text-link hover:text-link-deep"
            >
              {source.label}
              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-mono text-meta">{visaDisclaimer}</p>
    </Section>
  );
}
