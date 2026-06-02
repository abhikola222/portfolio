import { site } from "@/content/site";
import { pageContainer } from "@/lib/layout";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline py-10">
      <div
        className={`${pageContainer} flex flex-col gap-4 text-secondary sm:flex-row sm:items-center sm:justify-between`}
      >
        <p>
          © {year} {site.name}. Built with Next.js · Geist design tokens.
        </p>
        <p className="font-mono text-meta">Last updated June 2026</p>
      </div>
    </footer>
  );
}
