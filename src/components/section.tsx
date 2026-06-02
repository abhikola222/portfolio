import { pageContainer } from "@/lib/layout";
import { type ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 md:py-24 ${className}`}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <div className={pageContainer}>
        {title ? (
          <h2
            id={`${id}-heading`}
            className="mb-8 text-xl font-semibold tracking-tight text-ink md:text-2xl"
          >
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
