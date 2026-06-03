"use client";

import Image from "next/image";
import { useState } from "react";

type LogoSources = { light: string; dark: string };

export function CompanyLogo({
  logo,
  company,
  href,
}: {
  logo: LogoSources;
  company: string;
  href: string;
}) {
  const [lightError, setLightError] = useState(false);
  const [darkError, setDarkError] = useState(false);
  const imageClass = "h-7 w-auto max-w-full object-contain";
  const textFallbackClass = "text-center text-sm font-semibold leading-tight text-ink";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-11 w-36 shrink-0 items-center justify-center rounded-md border border-hairline bg-white px-3 transition-colors hover:border-hairline-strong hover:bg-canvas-soft-2 dark:border-hairline dark:bg-canvas-soft-2 dark:hover:border-hairline-strong"
      aria-label={`${company} (opens in new tab)`}
    >
      {lightError ? (
        <span className={`${textFallbackClass} dark:hidden`}>{company}</span>
      ) : (
        <Image
          src={logo.light}
          alt=""
          width={128}
          height={28}
          className={`${imageClass} dark:hidden`}
          onError={() => setLightError(true)}
        />
      )}
      {darkError ? (
        <span className={`${textFallbackClass} hidden dark:inline`}>{company}</span>
      ) : (
        <Image
          src={logo.dark}
          alt=""
          width={128}
          height={28}
          aria-hidden
          className={`${imageClass} hidden dark:block`}
          onError={() => setDarkError(true)}
        />
      )}
    </a>
  );
}
