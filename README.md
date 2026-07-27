# Portfolio — Abdoul Hamid COULIBALY

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Bilingual (EN/FR), dark/light mode, static export.

## Features

- 🌓 Dark/Light mode with system preference detection
- 🌍 Internationalization (English/French)
- 📱 Fully responsive
- ⚡ Static export (GitHub Pages)
- 🎨 Smooth animations with Framer Motion
- 📄 LaTeX-generated resume PDFs (EN/FR)
- 🎯 TypeScript throughout

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React, React Icons
- **Animations:** Framer Motion
- **Font:** Space Grotesk
- **Runtime:** Bun
- **Resume:** LaTeX (texlive) + custom TypeScript generator

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) 1.x

### Installation

```bash
git clone git@github.com:dimahc/dimahc.github.io.git
cd dimahc.github.io
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
bun run build
```

Produces a static export in `out/`.

## Docker

```bash
docker build -t portfolio:latest .
docker run -p 3000:3000 portfolio:latest
```

## Environment Variables

Copy `env.example` to `.env` and fill in the values:

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Yes | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Yes | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Yes | EmailJS public key |
| `BASE_PATH` | No | Custom base path (default: `/`) |

## Resume Pipeline

The project includes a LaTeX resume generation pipeline:

1. `scripts/generate-resume.ts` — injects content data into `resume/template.tex`
2. `scripts/compile-resume.sh` — compiles `.tex` → PDF via latexmk

Run manually: `bun run generate-resume` or `bun run compile-resume`.

The pipeline runs automatically in `prebuild`.

## Project Structure

```
src/
  app/              # Next.js App Router (pages, layouts, global styles)
  components/       # React components (common, home, layout, resume, ui)
  content/          # Bilingual structured data (experience, projects, etc.)
  context/          # React context providers (language, navigation)
  hooks/            # Custom React hooks
  lib/              # Utilities (i18n, animations, validators, constants)
  locales/          # JSON translation files (en.json, fr.json)
  types/            # TypeScript type definitions
resume/             # LaTeX template and generated .tex files
scripts/            # Resume generation and compilation scripts
public/             # Static assets (images, PDFs, favicon)
```

## Deployment

Pushing to `main` triggers GitHub Actions to build and deploy to GitHub Pages automatically.

## Author

- Abdoul Hamid COULIBALY
- [LinkedIn](https://linkedin.com/in/abdoul-hamid-coulibaly)
- [GitHub](https://github.com/dimahc)
