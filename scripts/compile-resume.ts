#!/usr/bin/env bun
import { existsSync } from "fs";
import { mkdirSync, cpSync, rmSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, "..");

const OUT_EN = join(ROOT_DIR, "public/static/resume/en");
const OUT_FR = join(ROOT_DIR, "public/static/resume/fr");
const TEX_EN = join(ROOT_DIR, "resume/CV_Backend_Eng_Abdoul_Hamid_Coulibaly_EN.tex");
const TEX_FR = join(ROOT_DIR, "resume/CV_Backend_Eng_Abdoul_Hamid_Coulibaly_FR.tex");

mkdirSync(OUT_EN, { recursive: true });
mkdirSync(OUT_FR, { recursive: true });

async function runPdflatex(texFile: string, outputDir: string): Promise<void> {
  const tmpDir = join(outputDir, ".tmp");
  mkdirSync(tmpDir, { recursive: true });

  for (let pass = 0; pass < 2; pass++) {
    const proc = Bun.spawn({
      cmd: ["pdflatex", "-interaction=nonstopmode", `-output-directory=${tmpDir}`, texFile],
      stdout: "pipe",
      stderr: "pipe",
    });

    const stdout = await new Response(proc.stdout).text();
    const stderr = await new Response(proc.stderr).text();
    const exitCode = await proc.exited;

    if (exitCode !== 0) {
      const logMatch = stdout.match(/! .+/);
      const error = logMatch?.[0] ?? stderr.trim() ?? `pdflatex exited with code ${exitCode}`;
      throw new Error(`pdflatex failed for ${texFile}: ${error}`);
    }
  }

  const basename = texFile.replace(/\.tex$/, "");
  const pdfName = basename.split("/").pop() + ".pdf";
  const srcPdf = join(tmpDir, pdfName);
  const dstPdf = join(outputDir, pdfName);

  if (!existsSync(srcPdf)) {
    throw new Error(`PDF not found at ${srcPdf}`);
  }

  cpSync(srcPdf, dstPdf, { overwrite: true });
  rmSync(tmpDir, { recursive: true });
}

async function main() {
  console.log("Compiling resume PDFs...");

  await runPdflatex(TEX_EN, OUT_EN);
  console.log(`  → ${OUT_EN}/CV_Backend_Eng_Abdoul_Hamid_Coulibaly_EN.pdf`);

  await runPdflatex(TEX_FR, OUT_FR);
  console.log(`  → ${OUT_FR}/CV_Backend_Eng_Abdoul_Hamid_Coulibaly_FR.pdf`);

  console.log("Resume PDFs compiled successfully.");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});