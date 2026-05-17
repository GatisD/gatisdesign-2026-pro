// Simple SVG-based OG image generator (no canvas dependency required)
// Run: node scripts/generate-og.mjs
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="grain" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F5F1EB"/>
      <stop offset="100%" stop-color="#E8E0D4"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#grain)"/>
  <!-- Top accent strip -->
  <rect x="0" y="0" width="1200" height="14" fill="#B85429"/>
  <!-- Eyebrow -->
  <text x="80" y="120" font-family="'JetBrains Mono', monospace" font-size="20" fill="#5C5448" letter-spacing="4">BRAND IDENTITY · WEB · PRINT</text>
  <!-- Title -->
  <text x="80" y="270" font-family="'Fraunces', Georgia, serif" font-size="108" font-weight="500" fill="#1A1814" letter-spacing="-3">Gatis Daugavietis</text>
  <!-- Italic subtitle -->
  <text x="80" y="355" font-family="'Fraunces', Georgia, serif" font-size="48" font-style="italic" fill="#B85429" font-weight="400">Dizains, kas atrisina problēmu.</text>
  <!-- Bottom info -->
  <text x="80" y="540" font-family="'Inter', sans-serif" font-size="26" fill="#5C5448" font-weight="500">18 gadu pieredze</text>
  <text x="80" y="580" font-family="'Inter', sans-serif" font-size="22" fill="#5C5448">gatisdesign.com · gatis@rois.lv</text>
  <!-- Right side mark -->
  <rect x="1080" y="500" width="60" height="60" fill="#1A1814"/>
  <text x="1110" y="540" font-family="'Fraunces', serif" font-size="36" fill="#F5F1EB" text-anchor="middle" font-weight="600">G</text>
</svg>`;

const outDir = join(__dirname, "..", "public");
await writeFile(join(outDir, "og-image.svg"), svg, "utf8");
console.log("Wrote public/og-image.svg");

// Also write a simple favicon SVG (terracotta dot)
const favicon = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#F5F1EB"/>
  <text x="32" y="46" font-family="Georgia, serif" font-size="42" font-weight="600" fill="#1A1814" text-anchor="middle">G</text>
  <circle cx="50" cy="50" r="6" fill="#B85429"/>
</svg>`;
await writeFile(join(outDir, "favicon.svg"), favicon, "utf8");
console.log("Wrote public/favicon.svg");
