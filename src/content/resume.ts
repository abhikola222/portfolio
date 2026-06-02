export const about = `I'm a software engineer with 3 years of experience building backend and platform systems at scale. At GoDaddy, I shipped Go and Python services on AWS (Docker, CDK), improved developer workflows with React and GraphQL, and owned infra end-to-end — from Bedrock batch pipelines to observability standards across the org. Before that, at Amazon, I built large-scale backend systems serving 1M+ employees. Based in Oldenburg, Germany — my German girlfriend and I live together here.`;

export const humanLanguages = [
  { language: "English", level: "Fluent" },
  { language: "Hindi", level: "Fluent" },
  { language: "Telugu", level: "Fluent" },
  {
    language: "German",
    level: "A1 certified · A2 awaiting result · preparing B1",
  },
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
    team: "AI Infrastructure",
    location: "Remote from India",
    period: "Oct 2024 – Jun 2026",
    bullets: [
      "Launched Bedrock Batch processing for offline prompts; ~50% cost reduction (~$200K/year). Stack: Delay SQS, DynamoDB, Lambda, SNS",
      "Built distributed perf testing (k6 + Kubernetes); replaced manual JMeter on EC2; supported 4× traffic spike (Super Bowl)",
      "Integrated in-house Knowledge Base (GoKnowB) with OpenWebUI fork; avoided vector DB migration (~2 weeks + cost savings)",
      "Led running summary, sentiment, intent APIs on ASM (Agent State Memory): DynamoDB, Kinesis, Lambdas, LLM",
      "Owned evaluation framework for Context Management Service: Athena → LLM eval → S3; GitHub Actions pipeline",
      "First engineer under new manager: infra standards, onboarding docs (5 days → 2 days)",
      "Migrated Sceptre → AWS CDK; GitHub Actions diff/deploy pipeline",
      "Backfill pipeline: main DB → search DB for 500K+ conversations",
      "OPEX initiative: mentored interns on Elastic APM across 5 services; first Platinum OPEX badge",
      "Primary contact for infra and monitoring troubleshooting",
    ],
  },
  {
    company: "Amazon",
    href: "https://www.aboutamazon.com",
    logo: {
      light: "/logos/amazon-wordmark.svg",
      dark: "/logos/amazon-wordmark-dark.svg",
    },
    title: "SDE-1",
    team: "Pay Extract",
    location: "Hyderabad, India (on-site)",
    period: "Aug 2022 – Jan 2024",
    bullets: [
      "Built PayAnomalyRoutingService; automated ticketing for upstream data issues; ~15% main-queue ticket reduction",
      "Launched Pay Extract Service for US salaried population (200K+ employees)",
      "New upstream integration: API contract validation, SNS subscription",
      "Step Functions dynamic timeouts; ~80% reduction in related tickets",
      "React UI changes per customer requirements",
    ],
  },
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "Python", "TypeScript", "Go", "C++", "C"],
  },
  {
    label: "Frameworks & tools",
    items: [
      "Node.js",
      "React",
      "GraphQL",
      "REST",
      "JUnit",
      "Mockito",
      "Pytest",
      "Jest",
      "GitHub Actions",
      "CI/CD",
      "Git",
    ],
  },
  {
    label: "AWS & cloud",
    items: [
      "CDK",
      "Lambda",
      "Fargate",
      "DynamoDB",
      "S3",
      "Bedrock",
      "EC2",
      "RDS",
      "Athena",
      "CloudFormation",
      "CloudWatch",
      "SQS",
      "SNS",
      "SES",
      "Step Functions",
      "ELB",
      "VPC",
      "Route 53",
      "API Gateway",
      "IAM",
    ],
  },
  {
    label: "Observability & data",
    items: [
      "Elasticsearch",
      "Kibana",
      "Elastic APM",
      "MongoDB",
      "PostgreSQL",
      "Pinecone",
    ],
  },
] as const;

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
