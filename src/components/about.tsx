import { about } from "@/content/resume";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" title="About" className="bg-canvas-soft-2/50">
      <div className="rounded-lg border border-hairline bg-canvas p-6 shadow-[var(--shadow-sm)]">
        <p className="text-secondary">{about}</p>
      </div>
    </Section>
  );
}
