#!/usr/bin/env bun
/**
 * generate-resume.ts
 *
 * Renders resume/template.tex → resume/CV_..._EN.tex and CV_..._FR.tex
 * by injecting data from the TypeScript content files.
 *
 * Run:  bun run scripts/generate-resume.ts
 *        pnpm generate-resume
 */

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

// ── Imports use relative paths (no @/ alias outside Next.js) ──────────────────
import { educationContent } from "../src/content/education";
import { experienceContent } from "../src/content/experience";
import { getTechsByResumeCategory } from "../src/content/technologies";
import { PERSONAL_INFO } from "../src/lib/constants";

// Inline locale strings needed for the resume (avoids i18n runtime dependency)
const LABELS = {
  en: {
    titlePrimary: "Backend Engineer",
    titleSecondary: "Data Systems \\& Cloud",
    summary:
      "Go and Python backend engineer with 4+ years of experience on distributed data platforms. Real-time ingestion, microservices, event-driven architectures. I've worked on both pipeline design and production operations: on-call duty, incident resolution, observability.",
    sectionExperience: "Professional Experience",
    sectionSkills: "Technical Skills",
    sectionEducation: "Education",
    sectionLanguages: "Languages",
    labelLanguages: "Languages",
    labelCloud: "Cloud \\& DevOps",
    labelData: "Data \\& Messaging",
    labelObs: "Observability",
    spokenLanguages:
      "\\textbf{French} \\textcolor{lighttext}{(native)} \\quad | \\quad\n\\textbf{English} \\textcolor{lighttext}{(fluent)} \\quad | \\quad\n\\textbf{Bambara} \\textcolor{lighttext}{(native)}",
  },
  fr: {
    titlePrimary: "Backend Engineer",
    titleSecondary: "Syst\\`emes Data \\& Cloud",
    summary:
      "Ing\\'enieur backend Go et Python avec 4 ans d'exp\\'erience sur des plateformes de donn\\'ees distribu\\'ees. Ingestion temps r\\'eel, microservices, architectures event-driven. J'ai travaill\\'e aussi bien sur la conception de pipelines que sur leur d\\'eploiement et leur tenue en production~: astreinte, r\\'esolution d'incidents, observabilit\\'e.",
    sectionExperience: "Exp\\'erience Professionnelle",
    sectionSkills: "Comp\\'etences Techniques",
    sectionEducation: "Formation",
    sectionLanguages: "Langues",
    labelLanguages: "Langages",
    labelCloud: "Cloud \\& DevOps",
    labelData: "Data \\& Messaging",
    labelObs: "Observabilit\\'e",
    spokenLanguages:
      "\\textbf{Fran\\c{c}ais} \\textcolor{lighttext}{(natif)} \\quad | \\quad\n\\textbf{Anglais} \\textcolor{lighttext}{(courant)} \\quad | \\quad\n\\textbf{Bambara} \\textcolor{lighttext}{(natif)}",
  },
} as const;

// ── LaTeX escaping ────────────────────────────────────────────────────────────
// Escapes plain-text strings for safe insertion into LaTeX.
// Does NOT escape strings that are already LaTeX (e.g. label strings above).
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
      // Typographic dashes: — → ---, – → --
      .replace(/—/g, "---")
      .replace(/–/g, "--")
  );
}

// ── Experience section builder ────────────────────────────────────────────────
function buildExperience(lang: "en" | "fr"): string {
  const jobs = experienceContent[lang].jobs.filter(
    (j) => j.achievementGroups && j.achievementGroups.length > 0,
  );

  return jobs
    .map((job, idx) => {
      const box = idx === 0 ? "currentjob" : "pastjob";
      const periodStyle =
        idx === 0
          ? `\\colorbox{primary}{\\textcolor{white}{\\small\\bfseries\\textsf{\\ ${esc(job.period)}\\ }}}`
          : `{\\small\\textsf{${esc(job.period)}}}`;

      const skillTags = job.skills
        .split(",")
        .map((s) => s.trim())
        .map((s, i) =>
          i === 0 ? `\\primarytag{${esc(s)}}` : `\\skilltag{${esc(s)}}`,
        )
        .join(" ");

      const groups = job.achievementGroups!.map((group) => {
        const header = group.title
          ? `\\textbf{\\textcolor{secondary}{${esc(group.title)}}}\n`
          : "";
        const items = group.items
          .map((item) => `\\item ${esc(item)}`)
          .join("\n");
        return `${header}\\begin{itemize}\n${items}\n\\end{itemize}`;
      });

      const groupsJoined = groups.join("\n\n\\vspace{6pt}\n");

      return `\\begin{${box}}
\\textbf{\\large\\textcolor{darktext}{${esc(job.title)}}} \\hfill ${periodStyle}\\\\[2pt]
\\textcolor{${idx === 0 ? "primary" : "secondary"}}{\\textbf{${esc(job.company)}}} \\textcolor{lighttext}{| ${esc(job.location)}}

\\vspace{4pt}

${groupsJoined}

\\vspace{3pt}
${skillTags}
\\end{${box}}`;
    })
    .join("\n\n");
}

// ── Education section builder ─────────────────────────────────────────────────
function buildEducation(lang: "en" | "fr"): string {
  const entries = educationContent[lang].entries;

  // Split into main education rows and any supplementary single-entry rows
  // The first row uses a tabularx spanning two columns; subsequent ones too.
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

// ── Skill tags builder ────────────────────────────────────────────────────────
function buildSkillTags(names: string[]): string {
  return names.map((n) => `\\skilltag{${esc(n)}}`).join(" ");
}

// ── Main rendering ────────────────────────────────────────────────────────────
const templatePath = join(import.meta.dir, "../resume/template.tex");
const template = readFileSync(templatePath, "utf-8");
const techCategories = getTechsByResumeCategory();

function render(lang: "en" | "fr"): string {
  const L = LABELS[lang];
  const replacements: Record<string, string> = {
    NAME: esc(PERSONAL_INFO.name.full),
    TITLE_PRIMARY: L.titlePrimary,
    TITLE_SECONDARY: L.titleSecondary,
    LOCATION: esc(PERSONAL_INFO.location.display),
    PHONE: esc(PERSONAL_INFO.phone),
    EMAIL: esc(PERSONAL_INFO.email.professional),
    WEBSITE: "dimahc.dev",
    LINKEDIN: "linkedin.com/in/abdoul-hamid-coulibaly",
    SUMMARY: L.summary,
    SECTION_EXPERIENCE: L.sectionExperience,
    SECTION_SKILLS: L.sectionSkills,
    SECTION_EDUCATION: L.sectionEducation,
    SECTION_LANGUAGES: L.sectionLanguages,
    LABEL_LANGUAGES: L.labelLanguages,
    LABEL_CLOUD: L.labelCloud,
    LABEL_DATA: L.labelData,
    LABEL_OBS: L.labelObs,
    SKILLS_LANGUAGES: buildSkillTags(techCategories["Languages"]),
    SKILLS_CLOUD: buildSkillTags(techCategories["Cloud & DevOps"]),
    SKILLS_DATA: buildSkillTags(techCategories["Data & Messaging"]),
    SKILLS_OBS: buildSkillTags(techCategories["Observability"]),
    EXPERIENCE_CONTENT: buildExperience(lang),
    EDUCATION_CONTENT: buildEducation(lang),
    SPOKEN_LANGUAGES: L.spokenLanguages,
  };

  return Object.entries(replacements).reduce(
    (tpl, [key, value]) => tpl.replaceAll(`{{${key}}}`, value),
    template,
  );
}

const outputDir = join(import.meta.dir, "../resume");

const files: Array<{ lang: "en" | "fr"; name: string }> = [
  { lang: "en", name: "CV_Backend_Eng_Abdoul_Hamid_Coulibaly_EN.tex" },
  { lang: "fr", name: "CV_Backend_Eng_Abdoul_Hamid_Coulibaly_FR.tex" },
];

for (const { lang, name } of files) {
  const output = render(lang);
  const outPath = join(outputDir, name);
  writeFileSync(outPath, output, "utf-8");
  console.log(`✓ Generated ${name}`);
}

console.log("\nDone. Run scripts/compile-resume.sh to produce PDFs.");
