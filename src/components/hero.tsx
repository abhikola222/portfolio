import { ResumeDropdown } from "@/components/resume-dropdown";
import { Tag } from "@/components/tag";
import { site } from "@/content/site";
import { pageContainer } from "@/lib/layout";
import { ArrowDown, Linkedin, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-20 overflow-x-clip border-b border-hairline"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{ background: "var(--gradient-mesh)" }}
        aria-hidden
      />
      <div className={`relative ${pageContainer} pb-20 pt-20 md:pb-28 md:pt-28`}>
        <h1 className="text-4xl font-semibold tracking-[-0.06em] text-ink md:text-5xl md:leading-[1.1] lg:text-6xl">
          {site.name}
          <span className="text-body"> ({site.shortName})</span>
        </h1>
        <div className="mt-4 flex flex-wrap gap-2.5 md:gap-3">
          <Tag variant="pill">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {site.location}
            </span>
          </Tag>
          {site.heroTags.map((tag) => (
            <Tag
              key={tag.label}
              variant={"highlight" in tag && tag.highlight ? "highlight" : "pill"}
            >
              {tag.label}
            </Tag>
          ))}
        </div>
        <p className="mt-4 text-lg font-medium text-ink md:text-xl">
          {site.headline}
        </p>
        <p className="text-secondary mt-4 max-w-4xl text-base leading-relaxed md:mt-5 md:text-lg">
          {site.subline}
        </p>
        <div className="mt-10 flex flex-wrap gap-3 md:mt-12 md:gap-4">
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-base font-medium text-on-primary transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Email
          </a>
          <ResumeDropdown />
          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas px-5 py-2.5 text-base font-medium text-ink transition-colors hover:border-hairline-strong hover:bg-canvas-soft-2"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
            LinkedIn
          </a>
          <a
            href="#visa"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-base font-medium text-on-primary transition-opacity hover:opacity-90"
          >
            Visa &amp; hiring
            <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
