import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const styles = await readFile(
  new URL("../docs/.vuepress/styles/index.scss", import.meta.url),
  "utf8",
);

assert.match(
  styles,
  /\.vp-doc:not\(:has\(\.home-dashboard\)\)\s+table\s+:is\(th,\s*td\)\s*\{[^}]*font-size:\s*inherit;/,
  "article table headers and cells should inherit the surrounding text size",
);

console.log("Article table typography checks passed.");
