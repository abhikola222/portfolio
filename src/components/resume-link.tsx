import { site } from "@/content/site";
import { ExternalLink } from "lucide-react";

export function ResumeLink() {
  return (
    <a
      href={site.resume.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas px-5 py-2.5 text-base font-medium text-ink transition-colors hover:border-hairline-strong hover:bg-canvas-soft-2"
    >
      <ExternalLink className="h-4 w-4" aria-hidden />
      {site.resume.label}
    </a>
  );
}
