import { Providers } from "@/components/providers";
import { site } from "@/content/site";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  keywords: [
    "software engineer",
    "backend engineer",
    "fullstack engineer",
    "AI infrastructure",
    "mid-level engineer",
    "AWS",
    "Germany jobs",
    "no visa sponsorship",
    "EU Blue Card",
    "Oldenburg",
  ],
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
