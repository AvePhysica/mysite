import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const styles = await readFile(
  new URL("../docs/.vuepress/styles/index.scss", import.meta.url),
  "utf8",
);

assert.match(
  styles,
  /\.vp-doc:not\(:has\(\.home-dashboard\)\)\s+\.katex\s*\{[^}]*font-size:\s*1em\s*!important;/,
  "article formulas should be smaller than KaTeX's default size",
);

assert.match(
  styles,
  /\.vp-doc:not\(:has\(\.home-dashboard\)\)\s+\.katex-display\s*>\s*\.katex\s*\{[^}]*font-size:\s*0\.95em\s*!important;/,
  "display formulas should be slightly smaller than inline formulas",
);

console.log("Article math-size checks passed.");
