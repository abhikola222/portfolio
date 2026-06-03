import { achievements, achievementsSummary } from "@/content/resume";
import { Section } from "./section";

export function Achievements() {
  return (
    <Section id="achievements" title="Background">
      <details className="group rounded-lg border border-hairline bg-canvas shadow-[var(--shadow-sm)]">
        <summary className="cursor-pointer list-none px-6 py-4 text-base marker:content-none [&::-webkit-details-marker]:hidden">
          <span className="flex items-center justify-between gap-2">
            <span>
              <span className="font-medium text-ink">
                Competitive programming &amp; CS
              </span>
              <span className="text-secondary mt-1 block text-base font-normal">
                {achievementsSummary}
              </span>
            </span>
            <span className="shrink-0 text-body transition-transform group-open:rotate-180">
              ▾
            </span>
          </span>
        </summary>
        <ul className="text-secondary list-disc space-y-2 border-t border-hairline px-6 py-4 pl-10 marker:text-hairline-strong">
          {achievements.map((item) => (
            <li key={item} className="pl-1">
              {item}
            </li>
          ))}
        </ul>
      </details>
    </Section>
  );
}
