import { site } from "@/content/site";
import { Mail, Phone } from "lucide-react";
import { Section } from "./section";

export function Contact() {
  return (
    <Section id="contact" title="Contact" className="bg-canvas-soft-2/50">
      <div className="rounded-lg border border-hairline bg-canvas p-6 shadow-[var(--shadow-sm)]">
        <p className="text-secondary mb-6">
          Reach out with role details, team context, and salary band. Visa and
          hiring timeline are in{" "}
          <a href="#visa" className="text-link hover:text-link-deep">
            Visa &amp; hiring
          </a>
          .
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <a
          href={`mailto:${site.contact.email}`}
          className="inline-flex items-center gap-3 rounded-lg border border-hairline bg-canvas px-5 py-4 text-base transition-colors hover:border-hairline-strong hover:bg-canvas-soft-2"
        >
          <Mail className="h-5 w-5 text-body" aria-hidden />
          <span>
            <span className="block font-medium text-ink">Email</span>
            <span className="text-body">{site.contact.email}</span>
          </span>
        </a>
        <a
          href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-3 rounded-lg border border-hairline bg-canvas px-5 py-4 text-base transition-colors hover:border-hairline-strong hover:bg-canvas-soft-2"
        >
          <Phone className="h-5 w-5 text-body" aria-hidden />
          <span>
            <span className="block font-medium text-ink">Phone</span>
            <span className="text-body">{site.contact.phone}</span>
          </span>
        </a>
        <a
          href={site.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-lg border border-hairline bg-canvas px-5 py-4 text-base transition-colors hover:border-hairline-strong hover:bg-canvas-soft-2"
        >
          <span className="font-medium text-ink">LinkedIn</span>
          <span className="text-link">{site.contact.linkedinLabel}</span>
        </a>
        </div>
      </div>
    </Section>
  );
}
