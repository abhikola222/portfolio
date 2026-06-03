import { site } from "@/content/site";
import { Section } from "./section";

export function RecruiterSnapshot() {
  return (
    <Section id="snapshot" title="At a glance">
      <div className="rounded-lg border border-hairline bg-canvas p-6 shadow-[var(--shadow-sm)]">
        <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {site.recruiterSnapshot.map(({ label, value }) => (
            <div key={label}>
              <dt className="text-secondary text-base">{label}</dt>
              <dd className="mt-0.5 text-base text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
