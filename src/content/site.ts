export const site = {
  name: "Abhigyan Kola",
  shortName: "Abhi",
  title: "Abhigyan Kola — Software Engineer · AI Infrastructure",
  description:
    "Platform engineer (ex-GoDaddy, Amazon). Based in Oldenburg, Germany — no visa sponsorship needed. AWS, LLM infra.",
  location: "Oldenburg, Lower Saxony, Germany",
  url: "https://portfolio.vercel.app",
  headline: "Software Engineer — AI Infrastructure & Cloud Platform",
  subline:
    "Platform engineer — AWS, AI infrastructure, and ownership at scale (ex-Amazon, GoDaddy). Already in Germany; no outbound visa sponsorship.",
  heroTags: [
    { label: "No visa sponsorship needed", highlight: true },
    { label: "Already in Germany", highlight: true },
    { label: "EU Blue Card target" },
  ] as const,
  contact: {
    email: "abhikola222@gmail.com",
    phone: "+91 91007 34724",
    linkedin: "https://linkedin.com/in/akola",
    linkedinLabel: "linkedin.com/in/akola",
  },
  resumePath: "/AbhiResume.pdf",
  nav: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
    { href: "#visa", label: "Visa & hiring" },
  ],
} as const;
