import { education, humanLanguages } from "@/content/resume";
import { Section } from "./section";

export function Education() {
  return (
    <Section id="education" title="Education" className="bg-canvas-soft-2/50">
      <div className="rounded-lg border border-hairline bg-canvas p-6 shadow-[var(--shadow-sm)]">
        <h3 className="text-lg font-semibold text-ink">{education.school}</h3>
        <p className="text-secondary mt-1">{education.degree}</p>
        <p className="mt-2 font-mono text-meta">{education.period}</p>
      </div>

      <h3 className="mb-3 mt-10 text-base font-semibold text-ink">Languages</h3>
      <dl className="divide-y divide-hairline rounded-lg border border-hairline bg-canvas">
        {humanLanguages.map(({ language, level }) => (
          <div
            key={language}
            className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:justify-between"
          >
            <dt className="text-base font-medium text-ink">{language}</dt>
            <dd className="font-mono text-meta sm:text-right">{level}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
