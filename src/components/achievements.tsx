import { achievements } from "@/content/resume";
import { Section } from "./section";

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="rounded-lg border border-hairline bg-canvas p-6 shadow-[var(--shadow-sm)]">
        <ul className="list-disc space-y-2 pl-5 marker:text-hairline-strong">
          {achievements.map((item) => (
            <li key={item} className="text-secondary pl-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
