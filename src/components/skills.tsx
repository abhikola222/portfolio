import { skillGroups } from "@/content/resume";
import { Tag } from "./tag";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" title="Skills" className="bg-canvas-soft-2/50">
      <div className="rounded-lg border border-hairline bg-canvas p-6 shadow-[var(--shadow-sm)]">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-12">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 text-base font-semibold text-ink">{group.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
