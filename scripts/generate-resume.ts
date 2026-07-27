#!/usr/bin/env bun
/**
 * generate-resume.ts
 *
 * Renders resume/template.tex → resume/CV_..._EN.tex and CV_..._FR.tex
 * by injecting data from the TypeScript content files.
 *
 * Run:  bun run scripts/generate-resume.ts
 *        pnpm generate-resume
 *
 * Flags:
 *   --dry-run   Preview output without writing files
 *   --verbose   Log detailed information
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

// ── CLI flags ────────────────────────────────────────────────
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const verbose = args.includes("--verbose");

// ── Imports use relative paths (no @/ alias outside Next.js) ──
import { educationContent } from "../src/content/education";
import { experienceContent } from "../src/content/experience";
import { getTechsByResumeCategory } from "../src/content/technologies";
import { PERSONAL_INFO } from "../src/lib/constants";

type Lang = "en" | "fr";

// ── Inline locale strings needed for the resume ──────────────
const LABELS = {
  en: {
    titlePrimary: "Backend Engineer",
    titleSecondary: "Data Systems \\& Cloud",
    summaryTitle: "About",
    summary:
      "Software engineer working at the intersection of data, cloud infrastructure, and distributed systems. After several years building large-scale data processing architectures (IoT, telecom, renewable energy), I now focus on Infrastructure as Code components around Terraform, with a growing contribution to open source projects.",
    sectionExperience: "Professional Experience",
    sectionSkills: "Technical Skills",
    sectionEducation: "Education",
    sectionLanguages: "Languages",
    labelLanguages: "Languages",
    labelCloud: "Cloud \\& DevOps",
    labelData: "Data \\& Messaging",
    labelObs: "Observability",
    spokenLanguages:
      "\\textbf{French} \\textcolor{lighttext}{(native)} \\quad |\n\\textbf{English} \\textcolor{lighttext}{(fluent)} \\quad |\n\\textbf{Bambara} \\textcolor{lighttext}{(native)}",
  },
  fr: {
    titlePrimary: "Backend Engineer",
    titleSecondary: "Syst\\`emes Data \\& Cloud",
    summaryTitle: "À propos",
    summary:
      "Ing\\'enieur logiciel \\'evoluant \\`a l'intersection de la data, des infrastructures cloud et des syst\\`emes distribu\\'es. Apr\\`es plusieurs ann\\'ees sur des architectures de traitement de donn\\'ees \\`a grande \\'echelle (IoT, t\\'el\\'ecoms, \\'energies renouvelables), je travaille aujourd'hui sur des composants d'Infrastructure as Code autour de Terraform, avec une contribution progressive \\`a des projets open source.",
    sectionExperience: "Exp\\'erience Professionnelle",
    sectionSkills: "Comp\\'etences Techniques",
    sectionEducation: "Formation",
    sectionLanguages: "Langues",
    labelLanguages: "Langages",
    labelCloud: "Cloud \\& DevOps",
    labelData: "Data \\& Messaging",
    labelObs: "Observabilit\\'e",
    spokenLanguages:
      "\\textbf{Fran\\c{c}ais} \\textcolor{lighttext}{(natif)} \\quad |\n\\textbf{Anglais} \\textcolor{lighttext}{(courant)} \\quad |\n\\textbf{Bambara} \\textcolor{lighttext}{(natif)}",
  },
} as const;

// ── LaTeX escaping ────────────────────────────────────────────
function esc(text: string): string {
  return (
    text
      .replace(/\\/g, "\\textbackslash{}")
      .replace(/&/g, "\\&")
      .replace(/%/g, "\\%")
      .replace(/\$/g, "\\$")
      .replace(/#/g, "\\#")
      .replace(/_/g, "\\_")
      .replace(/\{/g, "\\{")
      .replace(/\}/g, "\\}")
      .replace(/~/g, "\\textasciitilde{}")
      .replace(/\^/g, "\\textasciicircum{}")
      .replace(/—/g, "---")
      .replace(/–/g, "--")
  );
}

// ── Skill tags builder ────────────────────────────────────────
function buildSkillTags(names: string[]): string {
  return names
    .map((name) => `\\skilltag{${esc(name)}}`)
    .join("\\hspace{4pt}");
}

// ── Achievement groups builder ────────────────────────────────
function buildAchievementGroups(
  groups: Array<{ title: string; items: string[] }>,
): string {
  return groups
    .map((group) => {
      const header = group.title
        ? `\\textbf{\\textcolor{secondary}{${esc(group.title)}}}\n`
        : "";
      const items = group.items
        .map((item) => `\\item ${esc(item)}`)
        .join("\n");
      return `${header}\\begin{itemize}\n${items}\n\\end{itemize}`;
    })
    .join("\n\n\\vspace{6pt}\n");
}

// ── Experience card builder ───────────────────────────────────
function renderJob(job: {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  skills: string[];
  achievementGroups: Array<{ title: string; items: string[] }>;
}): string {
  const cardType = job.current ? "current" : "default";
  const periodStyle = job.current
    ? `\\colorbox{primary}{\\textcolor{white}{\\small\\bfseries\\textsf{\\ ${esc(job.period)}\\ }}}`
    : `{\\small\\textsf{${esc(job.period)}}}`;

  const skillTags = job.skills
    .map((s, i) =>
      i === 0 ? `\\primarytag{${esc(s)}}` : `\\skilltag{${esc(s)}}`,
    )
    .join("");

  const groupsContent = buildAchievementGroups(job.achievementGroups);

  return `\\begin{experiencecard}{${cardType}}
\\jobtitle{${esc(job.title)}}
\\jobcompany{${esc(job.company)}}
\\jobdate{${esc(job.period)}}
\\joblocation{${esc(job.location)}}

${groupsContent}

${skillTags}

\\end{experiencecard}`;
}

// ── Experience section builder ────────────────────────────────
function buildExperience(lang: Lang): string {
  return experienceContent[lang]
    .jobs.filter((j) => j.achievementGroups && j.achievementGroups.length > 0)
    .map((job) => renderJob(job))
    .join("\n\n");
}

// ── Education section builder ─────────────────────────────────
function buildEducation(lang: Lang): string {
  const entries = educationContent[lang].entries;

  const rows = entries
    .map(
      (edu) =>
        `\\textbf{${esc(edu.degree)}} \\textcolor{lighttext}{| ${esc(edu.school)}} & \\textcolor{lighttext}{${esc(edu.period)}} \\\\\n` +
        `\\multicolumn{2}{@{}p{\\textwidth}@{}}{\\textcolor{lighttext}{\\small ${esc(edu.description)}}}`,
    )
    .join(" \\\\[4pt]\n");

  return `\\begin{tabularx}{\\textwidth}{@{}X r@{}}
${rows}
\\end{tabularx}`;
}

// ── Validate that all template placeholders are replaced ──────
function findUnreplacedPlaceholders(
  template: string,
  rendered: string,
): string[] {
  const matches = rendered.match(/\{\{[A-Z_]+\}\}/g);
  return matches || [];
}

// ── Template renderer ─────────────────────────────────────────
function renderTemplate(
  template: string,
  vars: Record<string, string>,
): string {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replaceAll(`{{${key}}}`, value);
  }
  return result;
}

// ── Main rendering ────────────────────────────────────────────
const templatePath = join(import.meta.dirname, "../resume/template.tex");

if (!existsSync(templatePath)) {
  console.error(`Error: Template file not found at ${templatePath}`);
  process.exit(1);
}

const template = readFileSync(templatePath, "utf-8");

function render(lang: Lang): string {
  const L = LABELS[lang];
  const replacements: Record<string, string> = {
    NAME: esc(PERSONAL_INFO.name.full),
    TITLE_PRIMARY: L.titlePrimary,
    TITLE_SECONDARY: L.titleSecondary,
    LOCATION: esc(PERSONAL_INFO.location.display),
    PHONE: esc(PERSONAL_INFO.phone),
    EMAIL: esc(PERSONAL_INFO.email.professional),
    WEBSITE: "dimahc.dev",
    LINKEDIN: PERSONAL_INFO.social.linkedin.replace("https://", ""),
    GITHUB: PERSONAL_INFO.social.github.replace("https://github.com/", ""),
    SUMMARY: L.summary,
    SECTION_EXPERIENCE: L.sectionExperience,
    SECTION_SKILLS: L.sectionSkills,
    SECTION_EDUCATION: L.sectionEducation,
    SECTION_LANGUAGES: L.sectionLanguages,
    EDUCATION_CONTENT: buildEducation(lang),
    SPOKEN_LANGUAGES: L.spokenLanguages,
  };

  return renderTemplate(template, replacements);
}

const outputDir = join(import.meta.dirname, "../resume");

const files: Array<{ lang: Lang; name: string }> = [
  { lang: "en", name: "CV_Backend_Eng_Abdoul_Hamid_Coulibaly_EN.tex" },
  { lang: "fr", name: "CV_Backend_Eng_Abdoul_Hamid_Coulibaly_FR.tex" },
];

let success = true;

for (const { lang, name } of files) {
  try {
    const output = render(lang);

    const unreplaced = findUnreplacedPlaceholders(template, output);
    if (unreplaced.length > 0) {
      console.error(
        `Error: Unreplaced placeholders in ${name}: ${unreplaced.join(", ")}`,
      );
      success = false;
      continue;
    }

    if (dryRun) {
      console.log(`[dry-run] Would write ${name} (${output.length} bytes)`);
      if (verbose) {
        console.log(output);
      }
      continue;
    }

    const outPath = join(outputDir, name);
    writeFileSync(outPath, output, "utf-8");
    console.log(`✓ Generated ${name}`);
  } catch (err) {
    console.error(`Error generating ${name}: ${err}`);
    success = false;
  }
}

if (dryRun) {
  console.log("\n[dry-run] No files written.");
}

if (!success) {
  console.error("\nDone with errors.");
  process.exit(1);
}

console.log("\nDone. Run scripts/compile-resume.sh to produce PDFs.");