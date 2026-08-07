import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const config = await readFile(
  resolve(root, "docs/.vuepress/config.js"),
  "utf8",
);

assert.match(
  config,
  /docsRepo:\s*"https:\/\/github\.com\/AvePhysica\/mysite"/,
  "文章更新日志应链接到本站 GitHub 仓库",
);
assert.match(config, /docsBranch:\s*"main"/, "文档仓库分支应为 main");
assert.match(config, /docsDir:\s*"docs"/, "文档源码目录应为 docs");
assert.match(
  config,
  /changelog:\s*\{[\s\S]*?maxCount:\s*5[\s\S]*?\}/,
  "文章页应显示最近五条真实 Git 更新记录",
);
assert.match(
  config,
  /copyright:\s*\{[\s\S]*?name:\s*"Luminosity"[\s\S]*?url:\s*"https:\/\/github\.com\/AvePhysica"[\s\S]*?license:\s*"CC-BY-NC-SA-4\.0"[\s\S]*?creation:\s*"original"[\s\S]*?\}/,
  "文章页应显示作者、原文链接和 CC BY-NC-SA 4.0 许可信息",
);
assert.match(config, /changelogText:\s*"更新日志"/);
assert.match(config, /changelogButtonText:\s*"查看所有更新日志"/);
assert.match(config, /copyrightText:\s*"版权所有"/);
assert.match(config, /copyrightAuthorText:\s*"版权归属："/);
assert.match(config, /copyrightCreationOriginalText:\s*"本文链接："/);
assert.match(config, /copyrightLicenseText:\s*"许可证："/);
assert.match(
  config,
  /relativePath\.endsWith\("README\.md"\)[\s\S]*?page\.frontmatter\.changelog\s*=\s*false[\s\S]*?page\.frontmatter\.copyright\s*=\s*false/s,
  "分类概览页不应显示文章更新日志和版权卡片",
);

console.log("Article history and copyright configuration checks passed.");
