export const visaHeadline = {
  title: "No visa sponsorship needed",
  detail:
    "I'm already in Germany with Anmeldung complete. My German girlfriend and I live together in Oldenburg. You provide standard employment documents — I handle the Blue Card application locally.",
} as const;

export const visaBadges = [
  { label: "No visa sponsorship", highlight: true },
  { label: "Already in Germany", highlight: true },
  { label: "Anmeldung complete" },
  { label: "EU Blue Card target" },
] as const;

export const recruiterSummary = [
  {
    paragraphs: [
      "I'm on the Chancenkarte path and looking for full-time work that qualifies for an EU Blue Card. No outbound sponsorship — this is an in-country permit change once we have a signed contract.",
    ],
  },
  {
    paragraphs: [
      "Salary must meet the EU Blue Card minimum at offer time (2026 reference: ~€50,700/year standard; ~€45,934 for shortage occupations, including many IT roles). The gross salary on the contract must qualify — I'll only proceed if it clearly meets the eligible threshold for your job classification.",
    ],
    link: {
      href: "https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card",
      label: "Make it in Germany — EU Blue Card",
    },
  },
  {
    paragraphs: [
      "Start date: we can onboard while my Blue Card application is pending. After filing at the Ausländerbüro, I usually get a Fiktionsbescheinigung that covers lawful stay and work until the electronic permit (eAT) arrives.",
    ],
  },
] as const;

export const smallerCityPoints = [
  {
    title: "Why Oldenburg",
    detail:
      "Permit processing follows my registered address — the Stadt Oldenburg Ausländerbüro, not a big-city office. Smaller cities often have shorter appointment waits than Berlin or Munich. I'm open to employers anywhere in Germany, but only if the contract gross salary qualifies for an EU Blue Card.",
    link: {
      href: "https://www.oldenburg.de/startseite/leben-umwelt/soziales/auslaenderbuero.html",
      label: "Stadt Oldenburg Ausländerbüro",
    },
  },
] as const;

export const visaFaq = [
  {
    q: "Do you need visa sponsorship?",
    a: "No. I'm already in Germany with a valid residence title. You provide a signed contract and standard company documents; I apply for the Blue Card at my local Ausländerbüro in Oldenburg.",
  },
  {
    q: "What role are you looking for?",
    a: "Full-time software engineering — platform, backend, or AI infrastructure. Goal: EU Blue Card after contract.",
  },
  {
    q: "Open to IT shortage-occupation classification?",
    a: "Yes — but only if the contract gross salary clearly meets the eligible Blue Card minimum for that classification at offer time (~€45,934 shortage / ~€50,700 standard in 2026). HR should confirm with Make it in Germany before we proceed.",
    link: {
      href: "https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card",
      label: "Make it in Germany — EU Blue Card",
    },
  },
  {
    q: "What does the employer need to provide?",
    a: "Standard employment documents: signed contract, detailed job description, salary proof, and company registration. I submit the Blue Card application locally.",
  },
  {
    q: "What is the Chancenkarte?",
    a: "Germany's Opportunity Card (§20a AufenthG) — up to 12 months to find qualified work. Blue Card employment is the goal.",
    link: {
      href: "https://chancenkarte.com/en/candidates/",
      label: "chancenkarte.com",
    },
  },
  {
    q: "Part-time or trial work?",
    a: "Not my focus. I'm looking for a full-time Blue Card role only.",
  },
] as const;

export const hireSteps = [
  "Share the role and confirm gross salary meets the EU Blue Card threshold.",
  "Sign the contract and provide job description + company documents.",
  "Align a start date — I file the Blue Card application in Oldenburg immediately.",
] as const;

export const officialSources = [
  {
    label: "EU Blue Card (requirements & salary)",
    href: "https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card",
  },
  {
    label: "Chancenkarte (background)",
    href: "https://chancenkarte.com/en/candidates/",
  },
  {
    label: "Make it in Germany — skilled workers",
    href: "https://www.make-it-in-germany.com/en/",
  },
  {
    label: "Stadt Oldenburg — Ausländerbüro",
    href: "https://www.oldenburg.de/startseite/leben-umwelt/soziales/auslaenderbuero.html",
  },
] as const;

export const visaDisclaimer =
  "Informational only — not legal advice. Thresholds and office practice change; confirm with official sources or a qualified advisor.";
