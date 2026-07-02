# Abhigyan Kola — Portfolio

Personal portfolio site for job search in Germany (EU Blue Card path). Built with Next.js, Geist fonts, and Vercel design tokens.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com). No extra config required.

## Content

- `src/content/site.ts` — hero, contact, nav
- `src/content/resume.ts` — experience, skills, about
- `src/content/visa.ts` — Germany / Blue Card section
- `design.md` — full specification
- `vercel/DESIGN.md` — color & typography tokens

## Update resume link

Update `site.resume.href` in `src/content/site.ts` with the current Google Drive URL.
