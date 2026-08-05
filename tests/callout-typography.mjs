import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const styles = await readFile(
  new URL("../docs/.vuepress/styles/index.scss", import.meta.url),
  "utf8",
);

assert.match(
  styles,
  /\.vp-doc:not\(:has\(\.home-dashboard\)\)\s+\.hint-container\s*\{[^}]*--vp-hint-container-font-size:\s*1em;[^}]*--vp-custom-block-font-size:\s*1em;/,
  "callouts should inherit the same font size as the surrounding article",
);

console.log("Callout typography checks passed.");
