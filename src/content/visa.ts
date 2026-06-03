export const visaHeadline = {
  title: "No visa sponsorship needed",
  detail:
    "Already in Germany (Oldenburg, Anmeldung complete) on the Chancenkarte path. Full-time employment converts to an EU Blue Card via in-country application — no outbound sponsorship from your side.",
} as const;

export const chancenkarteSection = {
  title: "Chancenkarte → EU Blue Card",
  paragraphs: [
    "The Chancenkarte (Opportunity Card, §20a AufenthG) lets qualified professionals live in Germany while searching for work that matches their qualifications. Its main purpose is conversion to a work-based permit — for skilled IT roles, that means an EU Blue Card once a signed contract meets the salary threshold (~€45,934 shortage / ~€50,700 standard in 2026).",
    "Conversion is in-country: you provide standard employment documents; I file at the Ausländerbüro in Oldenburg. Until the Blue Card application is filed, the Chancenkarte allows limited employment (~20 hrs/week) if needed; full-time work starts once the Fiktionsbescheinigung is issued.",
  ],
} as const;

export const oldenburgTimeline = {
  title: "Estimated timeline — Stadt Oldenburg Ausländerbüro",
  highlight:
    "I handle all Ausländerbüro steps myself — your HR only provides standard employment documents.",
  intro:
    "Typical ranges after signed employment. Actual dates depend on caseload and whether my application is complete at filing.",
  steps: [
    {
      phase: "Appointment",
      detail:
        "I book via the Stadt Oldenburg service portal once the contract and employer documents are ready.",
      scenarios: {
        best: "~3–5 days",
        average: "~1–2 weeks",
        worst: "~4 weeks",
      },
    },
    {
      phase: "Fiktionsbescheinigung",
      detail:
        "Issued at or shortly after in-person filing — same day in most cases. The Chancenkarte alone only allows ~20 hrs/week until then.",
      highlight: "Once in hand, I can start full-time work.",
      scenarios: {
        best: "Same day",
        average: "~3–5 days",
        worst: "~2 weeks",
      },
    },
    {
      phase: "EU Blue Card (eAT)",
      detail:
        "Electronic permit after biometrics at the Ausländerbüro. The Fiktionsbescheinigung covers lawful stay and work until this arrives.",
      scenarios: {
        best: "~3–4 weeks",
        average: "~6–8 weeks",
        worst: "~12 weeks",
      },
    },
  ],
  note: "Oldenburg often has shorter appointment waits than Berlin or Munich, but times are not guaranteed — file as early as possible once the contract is signed.",
  link: {
    href: "https://www.oldenburg.de/startseite/leben-umwelt/soziales/auslaenderbuero.html",
    label: "Stadt Oldenburg — Ausländerbüro",
  },
} as const;

export const visaFaq = [
  {
    q: "Do you need visa sponsorship?",
    a: "No outbound sponsorship. You provide a signed contract and standard company documents; I handle the Blue Card application locally.",
  },
  {
    q: "Can you start before the Blue Card is issued?",
    a: "Yes. On the Chancenkarte alone, employment is limited to ~20 hrs/week until the Blue Card application is filed. Once the Ausländerbüro issues a Fiktionsbescheinigung (same day in most cases), I can start full-time work while the eAT is processed. See estimated timeline above for best / average / worst case.",
  },
  {
    q: "Why move to Oldenburg without a job and leave GoDaddy?",
    a: "My girlfriend is German and lives in Oldenburg — that's where I'm based. Although my GoDaddy role was remote, working remotely for an employer in another country while residing in Germany on the Chancenkarte is not permitted. I left to relocate, comply with residence rules, and pursue full-time employment in Germany (EU Blue Card path).",
  },
  {
    q: "What does the employer need to provide?",
    a: "Signed contract, detailed job description, salary proof, and company registration.",
  },
  {
    q: "Open to employers outside Oldenburg?",
    a: "Yes — anywhere in Germany, as long as the contract gross salary qualifies for an EU Blue Card.",
  },
] as const;

export const hireSteps = [
  "Share the role and confirm gross salary meets the EU Blue Card threshold.",
  "Sign the contract and provide job description + company documents.",
  "Align a start date — I file the Blue Card application in Oldenburg.",
] as const;

export const visaDisclaimer =
  "Informational only — not legal advice. Thresholds and office practice change; confirm with official sources or a qualified advisor.";

export const officialSources = [
  {
    label: "Opportunity Card (Chancenkarte)",
    href: "https://www.make-it-in-germany.com/en/visa-residence/types/opportunity-card",
  },
  {
    label: "EU Blue Card (requirements & salary)",
    href: "https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card",
  },
  {
    label: "Chancenkarte — candidate information",
    href: "https://chancenkarte.com/en/candidates/",
  },
  {
    label: "Stadt Oldenburg — Ausländerbüro",
    href: "https://www.oldenburg.de/startseite/leben-umwelt/soziales/auslaenderbuero.html",
  },
  {
    label: "Make it in Germany — skilled workers",
    href: "https://www.make-it-in-germany.com/en/",
  },
] as const;
