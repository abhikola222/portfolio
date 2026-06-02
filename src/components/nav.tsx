"use client";

import { site } from "@/content/site";
import { pageContainer } from "@/lib/layout";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/80 backdrop-blur-md">
      <nav
        className={`${pageContainer} flex h-16 items-center justify-between gap-4`}
        aria-label="Main"
      >
        <a
          href="#hero"
          className="shrink-0 text-base font-medium text-ink transition-colors hover:text-link"
        >
          {site.shortName}
        </a>
        <ul className="hidden items-center gap-1 sm:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3 py-1.5 text-base text-body transition-colors hover:bg-canvas-soft-2 hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`mailto:${site.contact.email}`}
            className="hidden rounded-md bg-primary px-3 py-1.5 text-base font-medium text-on-primary transition-opacity hover:opacity-90 sm:inline-block"
          >
            Email
          </a>
        </div>
      </nav>
    </header>
  );
}
