#!/usr/bin/env bash
# Renders resume-source/resume.html to public/Sateesh_Kumar_Kollati_Resume.pdf
# using headless Chrome. Run: npm run resume:pdf
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="file://${DIR}/resume-source/resume.html"
OUT="${DIR}/public/Sateesh_Kumar_Kollati_Resume.pdf"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [ ! -x "${CHROME}" ]; then
  CHROME="$(command -v google-chrome || command -v google-chrome-stable || command -v chromium || command -v chromium-browser || true)"
fi
if [ -z "${CHROME}" ] || { [ ! -x "${CHROME}" ] && ! command -v "${CHROME}" >/dev/null 2>&1; }; then
  echo "ERROR: Chrome/Chromium not found. Install Google Chrome to build the resume PDF." >&2
  exit 1
fi

"${CHROME}" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="${OUT}" "${SRC}" >/dev/null 2>&1

echo "Wrote ${OUT}"
