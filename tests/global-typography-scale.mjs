import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const styles = await readFile(
  resolve(
    dirname(fileURLToPath(import.meta.url)),
    "../docs/.vuepress/styles/index.scss",
  ),
  "utf8",
);

assert.match(
  styles,
  /html\s*\{[^}]*font-size:\s*18px;/s,
  "桌面端应使用放大后的全局基准字号",
);

assert.match(
  styles,
  /@media\s*\(max-width:\s*719px\)\s*\{\s*html\s*\{[^}]*font-size:\s*17px;/s,
  "窄屏应使用略收敛的全局基准字号",
);

assert.match(
  styles,
  /\.vp-navbar-menu\s+\.navbar-menu-link[\s\S]*?\.vp-navbar-menu-group\s+\.text\s*\{[^}]*font-size:\s*17px;/s,
  "右上角普通链接和下拉菜单标题应使用放大后的统一字号",
);

console.log("Global typography scale checks passed.");
