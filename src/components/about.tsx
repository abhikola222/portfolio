import { aboutPoints } from "@/content/resume";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" title="About" className="bg-canvas-soft-2/50">
      <div className="rounded-lg border border-hairline bg-canvas p-6 shadow-[var(--shadow-sm)]">
        <ul className="space-y-3 font-mono text-secondary">
          {aboutPoints.map((point) => (
            <li key={point} className="flex gap-3">
              <span
                className="shrink-0 font-semibold text-green-700 dark:text-green-400"
                aria-hidden
              >
                &gt;
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
