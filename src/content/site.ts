export const site = {
  name: "Abhigyan Kola",
  shortName: "Abhi",
  title: "Abhigyan Kola — Software Engineer · Backend, Fullstack & AI Infra",
  description:
    "Mid-level software engineer (~3 YOE, ex-GoDaddy SDE-2, ex-Amazon). Backend, fullstack & AI infra · AWS · Oldenburg, Germany · no visa sponsorship needed.",
  location: "Oldenburg, Lower Saxony, Germany",
  url: "https://portfolio.vercel.app",
  headline: "Software Engineer · ~3 years · Backend, Fullstack & AI Infra",
  subline:
    "AWS, distributed systems, and AI infrastructure — ex-Amazon, ex-GoDaddy. Open to backend, fullstack, and AI infrastructure roles across Germany.",
  heroTags: [
    { label: "In Germany · no sponsorship needed", highlight: true },
  ] as const,
  recruiterSnapshot: [
    { label: "Level", value: "Mid-level (~3 YOE, ex-SDE-2)" },
    {
      label: "Stack",
      value: "Java, Python, Go, TypeScript · AWS · Docker",
    },
    { label: "Target roles", value: "Backend · Fullstack · AI infrastructure" },
    {
      label: "Work model",
      value: "Remote · hybrid · onsite · relocation within Germany OK",
    },
  ] as const,
  contact: {
    email: "abhikola222@gmail.com",
    phone: "+49 162 800 1821",
    phoneNote: "German number · based in Oldenburg (CET)",
    linkedin: "https://linkedin.com/in/akola",
    linkedinLabel: "linkedin.com/in/akola",
    github: "https://github.com/abhikola222",
    githubLabel: "github.com/abhikola222",
  },
  resume: {
    href: "https://drive.google.com/file/d/1y80Zzgkp5FCF5RgzOk58mWoSm4qo92QP/view?usp=sharing",
    label: "Resume",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
    { href: "#visa", label: "Visa & hiring" },
  ],
} as const;
