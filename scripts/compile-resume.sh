#!/usr/bin/env bash
# Compile LaTeX resume files to PDF and place them in public/static/resume/
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

OUT_EN="$ROOT_DIR/public/static/resume/en"
OUT_FR="$ROOT_DIR/public/static/resume/fr"
TEX_EN="$ROOT_DIR/resume/CV_Backend_Eng_Abdoul_Hamid_Coulibaly_EN.tex"
TEX_FR="$ROOT_DIR/resume/CV_Backend_Eng_Abdoul_Hamid_Coulibaly_FR.tex"

mkdir -p "$OUT_EN" "$OUT_FR"

TMPDIR="$(mktemp -d)"
trap 'rm -rf "$TMPDIR"' EXIT

compile() {
  local tex_file="$1"
  local out_dir="$2"
  local basename
  basename="$(basename "$tex_file" .tex)"

  echo "Compiling $basename..."
  latexmk -pdf -interaction=nonstopmode -output-directory="$TMPDIR" "$tex_file" 2>&1

  cp "$TMPDIR/${basename}.pdf" "$out_dir/${basename}.pdf"
  echo "  → $out_dir/${basename}.pdf"
}

compile "$TEX_EN" "$OUT_EN"
compile "$TEX_FR" "$OUT_FR"

echo "Resume PDFs compiled successfully."
