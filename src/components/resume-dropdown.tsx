"use client";

import { site } from "@/content/site";
import { ChevronDown, ExternalLink, FileDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ResumeDropdown() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const options = [
    {
      href: site.resume.pdf.href,
      label: site.resume.pdf.label,
      icon: FileDown,
      download: true,
      external: false,
    },
    {
      href: site.resume.googleDrive.href,
      label: site.resume.googleDrive.label,
      icon: ExternalLink,
      download: false,
      external: true,
    },
  ] as const;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas px-5 py-2.5 text-base font-medium text-ink transition-colors hover:border-hairline-strong hover:bg-canvas-soft-2"
      >
        <FileDown className="h-4 w-4" aria-hidden />
        Resume
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? (
        <ul
          role="menu"
          className="absolute left-0 top-[calc(100%+0.5rem)] z-30 w-max min-w-[15.5rem] overflow-hidden rounded-lg border border-hairline bg-canvas py-1 shadow-[var(--shadow-sm)]"
        >
          {options.map(({ href, label, icon: Icon, download, external }) => (
            <li key={label} role="none">
              <a
                role="menuitem"
                href={href}
                {...(download ? { download: true } : {})}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 whitespace-nowrap px-4 py-2.5 text-base text-ink transition-colors hover:bg-canvas-soft-2"
              >
                <Icon className="h-4 w-4 shrink-0 text-body" aria-hidden />
                {label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
