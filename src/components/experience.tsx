import { CompanyLogo } from "@/components/company-logo";
import { experience } from "@/content/resume";
import { Tag } from "./tag";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {experience.map((job) => (
          <article
            key={job.company + job.period}
            className="rounded-lg border border-hairline bg-canvas p-6 shadow-[var(--shadow-sm)]"
          >
            <header className="mb-5 flex gap-4">
              {"logo" in job && job.logo ? (
                <CompanyLogo
                  logo={job.logo}
                  company={job.company}
                  href={job.href}
                />
              ) : (
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink transition-colors hover:text-link"
                    >
                      {job.company}
                    </a>
                  </h3>
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-secondary text-base">{job.team}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Tag variant="highlight">{job.title}</Tag>
                  <Tag>{job.period}</Tag>
                  <Tag>{job.location}</Tag>
                </div>
              </div>
            </header>
            <ul className="list-disc space-y-2 pl-5 marker:text-hairline-strong">
              {job.bullets.map((bullet) => (
                <li key={bullet.slice(0, 48)} className="text-secondary pl-1">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
