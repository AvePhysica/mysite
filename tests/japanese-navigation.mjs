import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [config, overview, zennouOverview, shinHyoujitsuOverview] =
  await Promise.all([
    readFile(resolve(root, "docs/.vuepress/config.js"), "utf8"),
    readFile(resolve(root, "docs/japanese/README.md"), "utf8"),
    readFile(resolve(root, "docs/japanese/全能日语初级下/README.md"), "utf8"),
    readFile(resolve(root, "docs/japanese/新标日下册/README.md"), "utf8"),
  ]);

assert.match(
  config,
  /text:\s*"日本語"\s*,\s*items:\s*\[[\s\S]*?日本語概览[\s\S]*?全能日语初级下[\s\S]*?新标日下册[\s\S]*?\]/,
  "右上角日本語导航应按教材提供下拉菜单",
);

assert.match(
  config,
  /"\/japanese\/全能日语初级下\/":\s*"auto"/,
  "全能日语初级下页面应只生成本文件夹侧边栏",
);
assert.match(
  config,
  /"\/japanese\/新标日下册\/":\s*"auto"/,
  "新标日下册页面应只生成本文件夹侧边栏",
);

assert.match(overview, /\/japanese\/全能日语初级下\//);
assert.match(overview, /\/japanese\/新标日下册\//);
assert.match(overview, /\/japanese\/日本地区行政区划/);
assert.match(zennouOverview, /title:\s*全能日语初级下/);
assert.match(shinHyoujitsuOverview, /title:\s*新标日下册/);

console.log("Japanese navigation checks passed.");
