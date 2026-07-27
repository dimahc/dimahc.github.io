#!/usr/bin/env bun
/**
 * generate-feed.ts
 *
 * Generates public/feed.xml from MDX articles at build time.
 * Run:  bun run scripts/generate-feed.ts
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const contentDir = join(import.meta.dirname, "..", "src", "content", "writing");
const outputPath = join(import.meta.dirname, "..", "public", "feed.xml");
const siteUrl = "https://dimahc.dev";

function rfc2822(dateStr: string): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return new Date().toUTCString();
  return d.toUTCString();
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

if (!existsSync(contentDir)) {
  console.log("No content/writing directory found, skipping feed generation.");
  process.exit(0);
}

const files = readdirSync(contentDir).filter((f) => f.endsWith(".en.mdx"));

// Deduplicate by slug (prefer English)
const items = files.map((file) => {
  const raw = readFileSync(join(contentDir, file), "utf-8");
  const { data, content } = matter(raw);
  const slug = file.replace(/\.en\.mdx$/, "");
  const description = (data.description || content.slice(0, 300))
    .replace(/\n/g, " ")
    .slice(0, 500);
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    description: escapeXml(description),
    link: `${siteUrl}/writing/${slug}`,
    pubDate: rfc2822(data.date || ""),
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>dimahc.dev</title>
    <link>${siteUrl}</link>
    <description>Notes on distributed systems, observability, and things that broke in production.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items.map((item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${item.description}</description>
      <pubDate>${item.pubDate}</pubDate>
    </item>`).join("\n")}
  </channel>
</rss>`;

writeFileSync(outputPath, feed, "utf-8");
console.log(`✅ RSS feed generated: ${outputPath} (${items.length} items)`);
