#!/usr/bin/env bun

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const contentDir = join(import.meta.dirname, "..", "src", "content", "writing");
const outputDir = join(import.meta.dirname, "..", "public", "og");

if (!existsSync(contentDir)) {
  console.log("No content/writing directory found, skipping OG image generation.");
  process.exit(0);
}

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function generateOgSvg(title: string, description: string, date: string): string {
  const truncatedTitle = title.length > 80 ? title.slice(0, 77) + "..." : title;
  const truncatedDesc = description.length > 120 ? description.slice(0, 117) + "..." : description;
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
    : "";

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#17191c"/>
      <stop offset="100%" stop-color="#1e2124"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Accent bar on the left -->
  <rect x="0" y="0" width="8" height="630" fill="#d98c4a"/>

  <!-- Subtle accent diagonal lines -->
  <line x1="0" y1="630" x2="400" y2="0" stroke="#24282c" stroke-width="2"/>
  <line x1="200" y1="630" x2="600" y2="0" stroke="#24282c" stroke-width="1.5"/>

  <!-- Title -->
  <text x="80" y="260" font-family="system-ui, -apple-system, sans-serif" font-size="42" font-weight="700" fill="#ece9e2" letter-spacing="-0.01">
    ${escapeXml(truncatedTitle)}
  </text>

  <!-- Description -->
  <text x="80" y="320" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="#a2a29a" letter-spacing="0">
    ${escapeXml(truncatedDesc)}
  </text>

  <!-- Date -->
  ${formattedDate ? `<text x="80" y="380" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="#66675f">
    ${escapeXml(formattedDate)}
  </text>` : ""}

  <!-- Brand -->
  <text x="80" y="520" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" fill="#d98c4a">
    dimahc.dev
  </text>

  <!-- Decorative dots -->
  <circle cx="1100" cy="100" r="4" fill="#d98c4a" opacity="0.3"/>
  <circle cx="1080" cy="150" r="2" fill="#d98c4a" opacity="0.2"/>
  <circle cx="1130" cy="500" r="3" fill="#d98c4a" opacity="0.25"/>
  <circle cx="1050" cy="550" r="2" fill="#7fa39d" opacity="0.2"/>
</svg>`;
}

const files = readdirSync(contentDir).filter((f) => f.endsWith(".en.mdx"));

let generated = 0;
for (const file of files) {
  const raw = readFileSync(join(contentDir, file), "utf-8");
  const { data } = matter(raw);
  const slug = file.replace(/\.en\.mdx$/, "");
  const title = data.title || slug;
  const description = data.description || "";
  const date = data.date || "";

  const svg = generateOgSvg(title, description, date);
  const outputPath = join(outputDir, `${slug}.svg`);
  writeFileSync(outputPath, svg, "utf-8");
  generated++;
}

console.log(`\u2705 OG images generated: ${outputDir} (${generated} images)`);
