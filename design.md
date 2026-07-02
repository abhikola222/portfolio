# Portfolio — Design & Build Specification

**Owner:** Abhigyan Kola (Abhi)  
**Purpose:** Personal portfolio for job search in Germany (Chancenkarte visa path), aimed at recruiters and engineering hiring managers.  
**Status:** Implemented (v1) — see `npm run dev` to preview.

---

## 1. Goals

| Goal | Detail |
|------|--------|
| **Primary audience** | German and EU recruiters, engineering managers, and hiring teams evaluating remote or on-site roles |
| **Primary message** | Senior backend / platform engineer with strong AWS, AI infra, and ownership track record — **based in Oldenburg, Germany** (Chancenkarte path), seeking **EU Blue Card** roles that meet salary thresholds |
| **Secondary audience** | Peers, open-source contacts, conference organizers |
| **Tone** | Professional, precise, high-signal — minimal marketing fluff |
| **Success criteria** | Clear CTA to contact; visa section answers recruiter objections in one scroll; experience matches resume; fast, accessible, mobile-friendly |

---

## 2. Framework & Stack — **decision: Next.js**

Aligned with **Vercel’s default stack**, Geist, and **light + dark theme** from day one.

### 2.1 Next.js vs Astro

| | **Next.js (App Router)** ✅ chosen | Astro |
|---|-----------------------------------|--------|
| **Fit for this site** | Single-page portfolio + SEO + theme toggle + `next/font` Geist | Excellent for static content sites |
| **Geist / Vercel skill** | `geist` package, `next-themes`, deploy on Vercel — same stack as `vercel/DESIGN.md` | Works, but more manual font/theme wiring |
| **Dark / light** | `next-themes` + `class="dark"` on `<html>` — standard pattern | Doable (client island or inline script) |
| **Interactivity** | FAQ accordion, theme switcher — native React | Needs React/Vue islands for interactive UI |
| **Complexity** | Slightly heavier than Astro for a 1-pager | Lighter bundle if 100% static |
| **Your stack** | TypeScript, React (Amazon UI experience) | Learn another content model for little gain |

**Verdict:** Use **Next.js 15+ (App Router)**. Astro is a strong choice for a purely static blog; this portfolio needs **recruiter SEO**, **theme switching**, and tight alignment with **`vercel/DESIGN.md`** — Next.js is the better default.

### 2.2 Stack table

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) | SSG for `/`, `next/font` for Geist, `next-themes` for light/dark |
| **Language** | TypeScript | Matches resume stack; type-safe content |
| **Styling** | Tailwind CSS v4 + CSS variables from `vercel/DESIGN.md` | Light/dark via `.dark` class |
| **Theme** | [`next-themes`](https://github.com/pacocoursey/next-themes) | System default + manual toggle; no flash on load |
| **Fonts** | `geist` npm package (`Geist Sans`, `Geist Mono`) | Official Vercel typography |
| **Content** | Typed TS modules (`content/resume.ts`, `content/visa-faq.ts`) | No CMS for v1 |
| **Icons** | Lucide | Minimal stroke; works in both themes |
| **Analytics** | Vercel Analytics (optional) | Lightweight |
| **Deploy** | Vercel | Zero-config Next.js |
| **Contact** | `mailto:` + LinkedIn | Form later if needed |

---

## 3. Design principles (Vercel / Geist)

**Canonical tokens & components:** [`vercel/DESIGN.md`](vercel/DESIGN.md) — Cursor skill `Vercel-design-analysis` with exact hex values, typography scale, spacing, radii, and component recipes (nav, buttons, cards). Implement CSS variables from that file; do not invent parallel colors.

Reference: [Geist Introduction](https://vercel.com/geist/introduction), [Typography](https://vercel.com/geist/typography), [Colors](https://vercel.com/geist/colors).

### 3.1 Visual language

- **Simplicity & minimalism** — Swiss-inspired clarity; every element earns its place
- **High contrast & accessibility** — WCAG AA minimum; respect `prefers-reduced-motion`
- **Hierarchy through typography first** — color and decoration are secondary
- **Restrained weight** — avoid making every heading bold; use size and tracking for hierarchy
- **Calm, developer-native aesthetic** — feels like a product surface, not a generic template

### 3.2 Typography rules

Map to skill tokens in [`vercel/DESIGN.md`](vercel/DESIGN.md):

| Role | Skill token | Spec (summary) |
|------|-------------|----------------|
| Hero name | `display-xl` | 48px / 600 / −2.4px tracking |
| Section titles | `display-sm` or `display-md` | 20–24px / 600 |
| Body | `body-md` / `body-sm` | 16px / 14px / 400 |
| Buttons | `button-lg` / `button-md` | 16px / 14px / 500 |
| Visa dates, thresholds, legal refs | `caption-mono` / `code` | Geist Mono 12–13px |
| Decorative accent (optional) | Geist Pixel | **One** hero moment only; never in body or FAQ |

### 3.3 Color & theme — **light + dark (required)**

Tokens from [`vercel/DESIGN.md`](vercel/DESIGN.md). Implement as CSS variables on `:root` and `.dark` (Tailwind `dark:` variants).

**Behavior**

| Setting | Value |
|---------|--------|
| **Modes** | `light` and `dark` only |
| **Default** | `system` (follow OS `prefers-color-scheme`) |
| **Toggle** | Sun/moon control in nav — persists in `localStorage` via `next-themes` |
| **SSR** | `suppressHydrationWarning` on `<html>`; inline script optional to avoid flash |

**Light theme** (`:root`)

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#ffffff` | Cards, nav |
| `canvas-soft` | `#fafafa` | Page background |
| `canvas-soft-2` | `#f5f5f5` | Inset sections (visa callout) |
| `ink` | `#171717` | Headings |
| `primary` | `#171717` | Primary button background |
| `on-primary` | `#ffffff` | Text on primary button |
| `body` | `#4d4d4d` | Secondary text |
| `mute` | `#888888` | Captions |
| `hairline` | `#ebebeb` | Borders |
| `hairline-strong` | `#a1a1a1` | Strong dividers |
| `link` | `#0070f3` | Links |
| `link-deep` | `#0761d1` | Link hover |
| `link-bg-soft` | `#d3e5ff` | Info pills |
| `selection-bg` | `#171717` | Text selection |
| `selection-fg` | `#f2f2f2` | Selection text |

**Dark theme** (`.dark` — polarity flip per Vercel skill: light surfaces ↔ ink band)

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#0a0a0a` | Cards, nav |
| `canvas-soft` | `#000000` | Page background |
| `canvas-soft-2` | `#171717` | Inset sections |
| `ink` | `#ededed` | Headings |
| `primary` | `#ffffff` | Primary button (inverted CTA on dark) |
| `on-primary` | `#171717` | Text on primary button |
| `body` | `#a1a1a1` | Secondary text |
| `mute` | `#888888` | Captions |
| `hairline` | `#2a2a2a` | Borders |
| `hairline-strong` | `#666666` | Strong dividers |
| `link` | `#3291ff` | Links (slightly brighter on dark) |
| `link-deep` | `#0070f3` | Link hover |
| `link-bg-soft` | `#0d2847` | Info pills |
| `selection-bg` | `#ededed` | Text selection |
| `selection-fg` | `#171717` | Selection text |

**Gradient (optional, both themes):** hero mesh from skill — reduce opacity in **dark** (~40–50%) so it does not blow out contrast.

**Shadows:** light = skill stack (`#00000005` / `0a`); dark = same structure with slightly higher opacity or border-only cards.

**Implementation sketch**

```css
:root { --canvas: #ffffff; --ink: #171717; /* … */ }
.dark { --canvas: #0a0a0a; --ink: #ededed; --primary: #ffffff; /* … */ }
```

```tsx
// layout: ThemeProvider attribute="class" defaultTheme="system" enableSystem
// components: bg-[var(--canvas-soft)] text-[var(--ink)] border-[var(--hairline)]
```

### 3.4 Layout & motion

- Max content width ~`720px`–`960px` for reading; wider only for project grids
- Generous whitespace; section rhythm `py-16`–`py-24`
- Micro-interactions: subtle hover on links/cards; no parallax or heavy animation

### 3.5 Components (Geist-inspired)

- Nav: sticky, minimal — logo/name + anchor links + **theme toggle** + “Contact” + “Visa & hiring”
- Cards: thin border, soft radius, hover border emphasis
- Buttons: primary (solid), secondary (ghost/outline) — label typography only
- FAQ: accordion or `<details>` for Chancenkarte section
- Footer: links, last updated, language note (English primary; German summary optional v2)

---

## 4. Information architecture

### 4.1 Single-page (recommended v1)

One scrollable landing page with anchored sections — best for recruiters skimming on mobile.

```
/  (home — all sections)
```

### 4.2 Sections (top → bottom)

| # | Section ID | Title | Purpose |
|---|------------|-------|---------|
| 1 | `hero` | — | Name, role, one-line value prop, CTAs (Email, LinkedIn, Resume link) |
| 2 | `visa` | Working in Germany | **Recruiter-critical** — Oldenburg base, Anmeldung, EU Blue Card salary & start timeline, FAQ, sources |
| 3 | `about` | About | Short narrative: platform/AI infra focus, relocation intent |
| 4 | `experience` | Experience | GoDaddy, Amazon — bullets from resume |
| 5 | `skills` | Skills | Grouped tags: languages, cloud, observability |
| 6 | `achievements` | Achievements | ICPC, Codeforces, volunteering |
| 7 | `education` | Education | VNR VJIET |
| 8 | `contact` | Contact | Email, phone, LinkedIn, optional Calendly later |

### 4.3 Optional v2 routes

- `/resume` — optional redirect to the externally hosted resume
- `/projects` — case studies if you add write-ups later
- `/de` — German mirror of visa + hero (recruiter convenience)

---

## 5. Content — sourced from resume

**Resume source:** Current Google Drive document linked from `src/content/site.ts`.

### 5.1 Hero copy (draft)

- **Name:** Abhigyan Kola (Abhi)
- **Headline:** Software Engineer — AI Infrastructure & Cloud Platform
- **Subline:** Building scalable systems on AWS · **Available from 18 June 2026** · Based in **Oldenburg, Germany** (Chancenkarte → EU Blue Card)
- **Location line:** **Oldenburg, Niedersachsen** · Registered (**Anmeldung** complete) · Open to on-site / hybrid in Germany and remote-friendly EU roles
- **Availability:** GoDaddy last day **17 June 2026** — actively seeking full-time roles from **18 June 2026**
- **CTAs:** Email · LinkedIn · Open resume

### 5.2 Contact

| Field | Value |
|-------|--------|
| Email | abhikola222@gmail.com |
| Phone | +49 162 800 1821 |
| LinkedIn | linkedin.com/in/akola |

### 5.3 Experience (implement verbatim from resume)

**SDE-2, GoDaddy — AI Infrastructure** · Remote from India · Oct 2024 – **17 Jun 2026** (last day)

- Launched Bedrock Batch processing for offline prompts; ~50% cost reduction (~$200K/year). Stack: Delay SQS, DynamoDB, Lambda, SNS
- Built distributed perf testing (k6 + Kubernetes); replaced manual JMeter on EC2; supported 4× traffic spike (Super Bowl)
- Integrated in-house Knowledge Base (GoKnowB) with OpenWebUI fork; avoided vector DB migration (~2 weeks + cost savings)
- Led running summary, sentiment, intent APIs on ASM (Agent State Memory): DynamoDB, Kinesis, Lambdas, LLM
- Owned evaluation framework for Context Management Service: Athena → LLM eval → S3; GitHub Actions pipeline
- First engineer under new manager: infra standards, onboarding docs (5 days → 2 days)
- Migrated Sceptre → AWS CDK; GitHub Actions diff/deploy pipeline
- Backfill pipeline: main DB → search DB for 500K+ conversations
- OPEX initiative: mentored interns on Elastic APM across 5 services; first Platinum OPEX badge
- Go-to for infra and monitoring troubleshooting

**SDE-1, Amazon — Pay Extract** · Hyderabad, India (on-site) · Aug 2022 – Jan 2024

- Built PayAnomalyRoutingService; automated ticketing for upstream data issues; ~15% main-queue ticket reduction
- Launched Pay Extract Service for US salaried population (200K+ employees)
- New upstream integration: API contract validation, SNS subscription
- Step Functions dynamic timeouts; ~80% reduction in related tickets
- React UI changes per customer requirements

### 5.4 Skills

**Languages:** Java, Python, TypeScript, Go, C++, C  

**Frameworks & tools:** Node.js, React, GraphQL, REST, JUnit, Mockito, Pytest, Jest, GitHub Actions, CI/CD, Git  

**AWS & cloud:** CDK, Lambda, Fargate, DynamoDB, S3, Bedrock, EC2, RDS, Athena, CloudFormation, CloudWatch, SQS, SNS, SES, Step Functions, ELB, VPC, Route 53, API Gateway, IAM  

**Observability & data:** Elasticsearch, Kibana, Elastic APM, MongoDB, PostgreSQL, Pinecone  

### 5.5 Achievements

- ACM ICPC Pune Regionals 2019 (VNR VJIET), rank 92
- Codeforces 1656 (Expert) — `the_pythor`
- CodeChef 2021 (5★) — `the_pythor`
- Programming Head, Turing Hut; taught advanced DSA

### 5.6 Education

**VNR VJIET** — B.Tech Computer Science, 2018–2022

### 5.7 About (narrative draft — refine at build time)

2–3 sentences connecting: platform ownership at scale, AI/LLM infra, competitive programming discipline, and intentional base in **Oldenburg** for a long-term EU career — prioritizing **EU Blue Card** employment with clear salary thresholds and fast local permit processing. Note career arc: **Amazon (Hyderabad, on-site)** → **GoDaddy (remote from India)** → relocating to Germany; **leaving GoDaddy 17 June 2026**, available for new roles from **18 June 2026**.

### 5.8 Languages (human — display in About or Visa section)

| Language | Level / status |
|----------|----------------|
| **English** | Fluent (professional working language) |
| **Hindi** | Fluent |
| **Telugu** | Fluent |
| **German** | **A1** certified (written); **A2** exam taken — **awaiting result**; currently preparing for **B1** |
| **Japanese** | **JLPT N5** |

*Programming languages remain in §5.4 Skills — do not mix with this table on the live site.*

---

## 6. Working in Germany — recruiter section (required)

This section is for **hiring managers and HR**: what permit path applies, what salary is required, and why **Oldenburg** is a deliberate choice for fast administrative processing. **Not** a generic “please interview me” or part-time-job-search pitch.

### 6.1 Placement & visibility

- Immediately **below hero** (or prominent callout in hero linking to `#visa`)
- Visual badge: e.g. “Oldenburg, Germany · Anmeldung complete · EU Blue Card target”
- Lead with **Blue Card salary requirements** and **start-of-work timeline** (Fiktionsbescheinigung), not Chancenkarte part-time limits

### 6.2 Recruiter summary (display copy)

> **I live in Oldenburg, Niedersachsen.** My **Anmeldung** (city registration) is **complete**. I am on Germany’s **Chancenkarte (Opportunity Card)** path and am targeting **full-time employment that qualifies for the EU Blue Card** — that is the outcome I need, and **I handle the permit application myself** once we have a signed contract.

> **What I need from an employer:** A qualified role with a gross salary that meets the **current EU Blue Card minimum** (2026 reference: ~**€50,700/year** standard threshold; ~**€45,934** for shortage occupations including many IT roles — **verify at offer time** on [Make it in Germany](https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card)). Standard employment contract, job description, and company documents for my application at the **Stadt Oldenburg Ausländerbüro**.

> **When can I start working?** I can begin employment **as soon as we agree** — in practice, many employers onboard while my Blue Card application is pending. After I book an appointment with the Ausländerbüro, I typically receive a **Fiktionsbescheinigung** (temporary certificate of lawful stay) that bridges the gap until the electronic residence permit (eAT) is issued. I can work **before** the physical Blue Card card is in hand, subject to what the office confirms at appointment.

> **Why Oldenburg?** I chose a **smaller city** on purpose: the local **Ausländerbüro** serves fewer cases than Berlin, Munich, or Hamburg, which often means **shorter appointment queues and faster processing** (still appointment-based — not walk-in). Oldenburg publishes online booking for eAT collection and structured contact via ServiceCenter — see [Stadt Oldenburg Ausländerbüro](https://www.oldenburg.de/startseite/leben-umwelt/soziales/auslaenderbuero.html).

*Update Chancenkarte card status on site when relevant: valid from [date], permit number optional.*

### 6.3 Why smaller cities (context + community links)

Display as a short callout box in the visa section — helps recruiters understand relocation logistics.

| Point | Detail |
|-------|--------|
| **Administrative reality** | Each `Ausländerbehörde` is municipal; wait times vary enormously by city workload, not by federal rule alone. |
| **Oldenburg advantage** | Mid-size city (~170k); dedicated [Ausländerbüro](https://www.oldenburg.de/startseite/leben-umwelt/soziales/auslaenderbuero/information-zur-vorsprache-im-auslaenderbuero.html) with appointment system and online eAT pickup ([abhol.oldenburg.de](https://abhol.oldenburg.de/)). |
| **Big-city contrast** | Berlin publicly reports tense appointment capacity; Munich/Nuremberg expats often report **months** to get a first slot. |

**Further reading (community & press — not legal advice):**

| Title | Link | Why include |
|-------|------|-------------|
| r/GermanImmigration | https://www.reddit.com/r/GermanImmigration/ | Active Q&A on Blue Card, Fiktionsbescheinigung, and city-specific Ausländerbehörde experiences |
| r/germany | https://www.reddit.com/r/germany/ | Broader expat discussions; search “Ausländerbehörde” + “small city” / “Landkreis” for appointment comparisons |
| The Local — Nuremberg vs nearby towns | https://www.thelocal.de/20240710/just-useless-why-does-it-take-years-to-get-an-appointment-with-nurembergs-immigration-office | Reports residents in **Fürth/Erlangen** (smaller nearby offices) facing far fewer appointment issues than Nuremberg |
| Smaller towns vs metros (overview) | https://www.thetraveler.org/dealing-with-immigration-offices-in-germany/ | Summarizes regional disparity: large cities backlogged; smaller districts often weeks not months |
| City processing comparison | https://immigrationstartguide.com/blog/niederlassungserlaubnis-berlin-munich-hamburg-frankfurt | Documents Munich/Berlin delays vs faster mid-size cities (includes community reports) |

*Optional v2: add a specific Reddit thread permalink once you bookmark one you found useful.*

### 6.4 FAQ (accordion) — Blue Card & work start first

| Question | Answer |
|----------|--------|
| What role are you looking for? | **Full-time software engineering** (platform / backend / AI infrastructure). Target permit: **EU Blue Card** after contract. |
| What salary do you need for a Blue Card? | Gross annual salary must meet the **legal minimum for EU Blue Card** at time of application (~€50,700 general / ~€45,934 shortage occupation in 2026 — **confirm current figures**). IT roles often qualify for the lower threshold when classified as shortage; HR should verify with Make-it-in-Germany. |
| Do you need the employer to run the visa application? | **No.** I apply at my local Ausländerbüro (**Oldenburg**) with your contract and supporting documents. HR provides: signed contract, detailed job description, salary proof, company registration — standard Blue Card packet. |
| Can you work before the Blue Card card arrives? | **Yes, in practice** once employment is agreed and immigration steps are in motion. After filing / appointment, **Fiktionsbescheinigung** usually allows continued lawful stay and employment while the eAT is produced. Exact wording is issued by the Ausländerbüro — I follow their letter. |
| Can you work before you even have the Fiktionsbescheinigung? | With a valid underlying residence title (e.g. Chancenkarte) and a compliant employment arrangement, work may already be permissible depending on permit conditions; **Fiktionsbescheinigung** covers the gap after applying for a new title. I align start date with whatever the office confirms. |
| What is your current immigration status? | Chancenkarte path; **Anmeldung in Oldenburg done**. Transitioning to **EU Blue Card** upon qualifying employment. |
| Where do you live / which office processes you? | **Oldenburg (Niedersachsen)** — [Stadt Oldenburg Ausländerbüro](https://www.oldenburg.de/startseite/leben-umwelt/soziales/auslaenderbuero/kontakt.html), Pferdemarkt 14. Jurisdiction follows **registered address** (Anmeldung). |
| Why not Berlin/Munich? | Strategic: smaller Ausländerbehörde workload → faster appointments and less bureaucratic queue than major metros (see §6.3 links). Open to **employers anywhere in Germany**; permit processing stays in Oldenburg while I am registered here. |
| What is the Chancenkarte (background)? | §20a AufenthG — up to 12 months to seek qualified work in Germany. Official: [chancenkarte.com](https://chancenkarte.com/en/candidates/). **Secondary** on this site; Blue Card employment is the goal. |
| Part-time / 20 h/week / Probearbeit? | Legal options on Chancenkarte exist but **not my focus** on this portfolio. I am not optimizing for part-time or trial-week hiring — **full-time Blue Card role only**. |
| Language skills? | German **A1** (certified written), **A2** (exam done, result pending), preparing **B1**. English, Hindi, Telugu **fluent**. Japanese **N5**. |
| Qualifications? | B.Tech CS + 2+ years (Amazon, GoDaddy). |

### 6.5 “How to hire me” — direct path (no generic interview funnel)

1. **Role & salary** — Share full-time SWE role; confirm gross salary meets **EU Blue Card threshold** (including shortage-occupation check for IT).
2. **Offer** — Signed contract + job description + company docs for my Ausländerbüro application.
3. **Start date** — Align onboarding with permit timeline; I file Blue Card application in **Oldenburg** immediately after contract.
4. **Fiktionsbescheinigung** — After appointment/submission, continue working under temporary certificate until **eAT** is issued.
5. **You’re done on immigration** — No outbound visa sponsorship from abroad; in-country change of purpose. I own follow-ups with the Behörde.

*Deliberately omitted from v1: “reach out to interview,” optional Probearbeit, part-time while searching.*

### 6.6 Official sources (footer of visa section)

| Source | URL |
|--------|-----|
| EU Blue Card (requirements & salary) | https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card |
| Chancenkarte (background) | https://chancenkarte.com/en/candidates/ |
| Make it in Germany — skilled workers | https://www.make-it-in-germany.com/en/ |
| Stadt Oldenburg — Ausländerbüro | https://www.oldenburg.de/startseite/leben-umwelt/soziales/auslaenderbuero.html |
| Oldenburg — appointment info | https://www.oldenburg.de/startseite/leben-umwelt/soziales/auslaenderbuero/information-zur-vorsprache-im-auslaenderbuero.html |
| §20a AufenthG (Chancenkarte legal basis) | Skilled Immigration Act reforms 2024 |

*Disclaimer on site: “This section is informational, not legal advice. Thresholds and office practice change; confirm with official sources or a qualified advisor.”*

### 6.7 Launch checklist (personal facts)

- [x] **City:** Oldenburg, Niedersachsen, Germany
- [x] **Anmeldung:** Complete
- [x] **Languages:** German A1 / A2 pending / B1 prep; English, Hindi, Telugu fluent; Japanese N5
- [x] **Employment:** GoDaddy ends **17 Jun 2026**; available **from 18 Jun 2026**
- [ ] **Chancenkarte:** Card valid from [date] / permit number (add when publishing)
- [ ] **Blue Card thresholds:** Verify exact € figures on go-live month
- [ ] **Optional:** Pin one Reddit thread you personally recommend in §6.3

---

## 7. SEO & metadata

| Field | Value |
|-------|--------|
| Title | Abhigyan Kola — Software Engineer · AI Infrastructure |
| Description | Platform engineer (ex-GoDaddy, Amazon). Available from Jun 2026. Based in Oldenburg, Germany. EU Blue Card target. AWS, LLM infra. |
| OG image | Generate simple OG (name + role) — Geist aesthetic |
| Keywords | software engineer, AWS, AI infrastructure, Germany jobs, Chancenkarte, platform engineer |
| `robots` | index, follow |
| Structured data | `Person` + `ProfilePage` JSON-LD optional |

---

## 8. Accessibility & performance

- Semantic HTML: one `<h1>`, logical heading order
- Skip link to main content
- Focus visible on all interactive elements
- PDF resume link with clear label and file size
- Target: Lighthouse 95+ performance/accessibility on Vercel
- Images: next/image, WebP, no heavy hero video v1

---

## 9. Build phases (after this doc is approved)

### Phase 0 — Setup
- Init Next.js (App Router) + TypeScript + Tailwind + `geist` font + `next-themes`
- Wire CSS variables for light/dark from §3.3; theme toggle in layout
- Configure ESLint, Prettier, basic CI (lint + build)
- Deploy empty shell to Vercel

### Phase 1 — Core page
- Layout, nav, footer, theme tokens (Geist-aligned)
- Hero + Experience + Skills + Education + Achievements from §5
- External resume link from the hero

### Phase 2 — Chancenkarte section
- Recruiter summary, FAQ accordion, hire steps, source links
- Fill checklist §6.6

### Phase 3 — Polish
- SEO metadata, OG image, JSON-LD
- Mobile pass, reduced motion, print stylesheet for resume
- Analytics (optional)

### Phase 4 — v2 (later)
- German `/de` visa summary
- Project case studies
- Contact form, Calendly

---

## 10. File structure (planned)

```
portfolio/
├── design.md                 # this file (content, IA, visa copy)
├── vercel/DESIGN.md          # Vercel-design-analysis skill — colors, type, components
├── public/                   # static site assets
├── src/
│   app/
│   │   layout.tsx            # Geist fonts, metadata
│   │   page.tsx              # single-page sections
│   │   globals.css           # Geist tokens / Tailwind
│   components/
│   │   Hero.tsx
│   │   VisaSection.tsx       # Chancenkarte
│   │   Experience.tsx
│   │   Skills.tsx
│   │   ...
│   content/
│   │   resume.ts             # typed content from §5
│   │   visa-faq.ts           # FAQ from §6
├── package.json
└── README.md                 # dev + deploy instructions
```

---

## 11. Open decisions (your input)

| # | Decision | Options |
|---|----------|---------|
| 1 | Single-page vs multi-page | **Recommend single-page** for v1 |
| 2 | Dark mode | ✅ **Light + dark + system default**; nav toggle (`next-themes`) — see §3.3 |
| 7 | Framework | ✅ **Next.js** (not Astro) — see §2.1 |
| 3 | Domain | `abhikola.dev`, `akola.dev`, Vercel default subdomain |
| 4 | German language | English-only v1 vs bilingual hero |
| 5 | Photo | Include professional headshot or text-only (Vercel often text-only) |
| 6 | Contact form | v1 mailto only vs form |

---

## 12. Approval checklist

Before coding starts, confirm:

- [ ] Section order and IA (§4) approved
- [ ] Framework stack (§2) approved
- [ ] Geist / Vercel design direction (§3 + `vercel/DESIGN.md`) approved
- [ ] Resume content in §5 accurate
- [ ] Visa / Blue Card copy reviewed; §6.7 Chancenkarte dates added when ready
- [ ] Open decisions in §11 resolved

---

*Document version: 1.1 — June 2026 (Next.js + light/dark locked)*
