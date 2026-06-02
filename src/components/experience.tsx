import { experience } from "@/content/resume";
import Image from "next/image";
import { Tag } from "./tag";
import { Section } from "./section";

type LogoSources = { light: string; dark: string };

function CompanyLogo({
  logo,
  company,
  href,
}: {
  logo: LogoSources;
  company: string;
  href: string;
}) {
  const imageClass = "h-7 w-auto max-w-full object-contain";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-11 w-36 shrink-0 items-center justify-center rounded-md border border-hairline bg-white px-3 transition-colors hover:border-hairline-strong hover:bg-canvas-soft-2 dark:border-hairline dark:bg-canvas-soft-2 dark:hover:border-hairline-strong"
      aria-label={`${company} (opens in new tab)`}
    >
      <Image
        src={logo.light}
        alt=""
        width={128}
        height={28}
        className={`${imageClass} dark:hidden`}
      />
      <Image
        src={logo.dark}
        alt=""
        width={128}
        height={28}
        aria-hidden
        className={`${imageClass} hidden dark:block`}
      />
    </a>
  );
}

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
              ) : null}
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
                <p className="text-secondary mt-0.5 text-base">{job.team}</p>
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
