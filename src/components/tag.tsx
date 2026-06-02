import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  variant?: "default" | "pill" | "highlight";
};

const variants = {
  default:
    "rounded-md border border-hairline bg-canvas px-2.5 py-1 font-mono text-meta",
  pill: "rounded-full border border-hairline bg-canvas px-3 py-1 font-mono text-meta",
  highlight:
    "rounded-md border border-link/25 bg-link-bg-soft px-2.5 py-1 font-mono text-meta font-medium text-link",
} as const;

export function Tag({ children, variant = "default" }: TagProps) {
  return <span className={variants[variant]}>{children}</span>;
}
