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
    phone: "+91 91007 34724",
    phoneNote: "India number · WhatsApp OK · based in Oldenburg (CET)",
    linkedin: "https://linkedin.com/in/akola",
    linkedinLabel: "linkedin.com/in/akola",
  },
  resume: {
    pdf: {
      href: "/AbhiResume.pdf",
      label: "Download PDF",
    },
    googleDrive: {
      href: "https://drive.google.com/file/d/1REPLACE_WITH_YOUR_FILE_ID/view?usp=sharing",
      label: "Open in Google Drive",
    },
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
    { href: "#visa", label: "Visa & hiring" },
  ],
} as const;
