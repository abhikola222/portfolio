export const aboutPoints = [
  "3+ years of software engineering experience",
  "Built internal AI tools and experimentation infrastructure for teams at GoDaddy",
  "Built payroll systems at Amazon supporting 1M+ Amazon employees",
  "Relocated to Oldenburg, Germany after completing my role at GoDaddy",
  "Open to software engineering roles, focused on backend, AI, and cloud",
  "Comfortable building production UIs too",
] as const;

export const humanLanguages = [
  { language: "English", level: "Fluent" },
  { language: "German", level: "A2 waiting for results" },
  { language: "Hindi", level: "Fluent" },
  { language: "Telugu", level: "Fluent" },
  { language: "Japanese", level: "JLPT N5" },
] as const;

export const experience = [
  {
    company: "GoDaddy",
    href: "https://www.godaddy.com",
    logo: {
      light: "/logos/godaddy-wordmark.svg",
      dark: "/logos/godaddy-wordmark-dark.svg",
    },
    title: "SDE-2",
    team: "AI Infrastructure Team",
    location: "Remote from India",
    period: "Oct 2024 – Jun 2026",
    bullets: [
      "Launched Bedrock Batch processing for offline prompts; ~50% cost reduction (~$200K/year). Stack: Delay SQS, DynamoDB, Lambda, SNS",
      "Built distributed k6 perf testing; replaced manual JMeter on EC2; supported 4× traffic spike (Super Bowl)",
      "Migrated Sceptre → AWS CDK; GitHub Actions diff/deploy pipeline",
      "First engineer under new manager: infra standards, onboarding docs (5 days → 2 days)",
      "OPEX initiative: mentored interns on Elastic APM across 5 services; first Platinum OPEX badge",
    ],
  },
  {
    company: "Amazon",
    href: "https://www.amazon.com",
    logo: {
      light: "/logos/amazon-wordmark.svg",
      dark: "/logos/amazon-wordmark-dark.svg",
    },
    title: "SDE-1",
    team: "Pay Extract Team",
    location: "Hyderabad, India (on-site)",
    period: "Aug 2022 – Jan 2024",
    bullets: [
      "Launched Pay Extract Service for US salaried population (200K+ employees)",
      "Built PayAnomalyRoutingService; automated ticketing for upstream data issues; ~15% main-queue ticket reduction",
      "Step Functions dynamic timeouts; ~80% reduction in related tickets",
      "New upstream integration: API contract validation, SNS subscription",
    ],
  },
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "Python", "TypeScript", "Go"],
  },
  {
    label: "Frameworks & tools",
    items: [
      "Node.js",
      "React",
      "GraphQL",
      "REST",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "JUnit",
      "Pytest",
      "Jest",
    ],
  },
  {
    label: "AWS & cloud",
    items: [
      "CDK",
      "Lambda",
      "DynamoDB",
      "S3",
      "Bedrock",
      "SQS",
      "SNS",
      "Step Functions",
      "Athena",
      "Kinesis",
      "EC2",
      "CloudWatch",
    ],
  },
  {
    label: "Observability & data",
    items: [
      "Elastic APM",
      "Elasticsearch",
      "PostgreSQL",
      "MongoDB",
    ],
  },
] as const;

export const achievementsSummary =
  "Competitive programming background — ACM ICPC Pune Regionals 2019 (rank 92), Codeforces Expert (1656), CodeChef 5★.";

export const achievements = [
  "ACM ICPC Pune Regionals 2019 (VNR VJIET), rank 92",
  "Codeforces 1656 (Expert) — the_pythor",
  "CodeChef 2021 (5★) — the_pythor",
  "Programming Head, Turing Hut; taught advanced DSA",
] as const;

export const education = {
  school: "VNR VJIET",
  degree: "B.Tech Computer Science",
  period: "2018–2022",
} as const;
