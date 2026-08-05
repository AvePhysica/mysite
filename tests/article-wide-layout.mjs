import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const styles = await readFile(
  new URL("../docs/.vuepress/styles/index.scss", import.meta.url),
  "utf8",
);

assert.match(
  styles,
  /@media\s*\(min-width:\s*1600px\)[\s\S]*?--vp-layout-max-width:\s*1600px;/,
  "wide screens should use a wider layout so both sidebars move outward",
);

assert.match(
  styles,
  /\.vp-doc-container\.has-aside\s+\.content-container\s*\{[^}]*max-width:\s*920px\s*!important;/,
  "articles with an outline should provide a 920px reading column",
);

assert.match(
  styles,
  /\.vp-doc-container:not\(\.has-aside\)\s+\.content-container\s*\{[^}]*max-width:\s*1040px\s*!important;/,
  "articles without an outline should use the additional available width",
);

console.log("Article wide-layout checks passed.");
