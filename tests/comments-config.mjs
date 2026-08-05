import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [config, packageJson, styles] = await Promise.all([
  readFile(resolve(root, "docs/.vuepress/config.js"), "utf8"),
  readFile(resolve(root, "package.json"), "utf8"),
  readFile(resolve(root, "docs/.vuepress/styles/index.scss"), "utf8"),
]);

const dependencies = JSON.parse(packageJson).dependencies ?? {};
assert.ok(
  dependencies["@waline/client"],
  "Waline 评论区应安装官方客户端依赖",
);

assert.match(
  config,
  /const walineServerURL\s*=\s*process\.env\.WALINE_SERVER_URL\?\.trim\(\)/,
  "评论服务地址应从 Cloudflare 构建环境变量读取",
);
assert.match(
  config,
  /comment:\s*walineServerURL\s*\?\s*\{[\s\S]*?provider:\s*"Waline"[\s\S]*?serverURL:\s*walineServerURL[\s\S]*?requiredMeta:\s*\["nick",\s*"mail"\][\s\S]*?wordLimit:\s*1000[\s\S]*?\}\s*:\s*false/s,
  "Plume 应按截图配置 Waline，并在缺少服务地址时安全关闭",
);
assert.match(
  config,
  /relativePath\.endsWith\("README\.md"\)[\s\S]*?page\.frontmatter\.comments\s*=\s*false/s,
  "首页和分类目录页默认不应显示评论区",
);
assert.match(
  styles,
  /\.waline-wrapper\s*\{[\s\S]*?--waline-font-size:[\s\S]*?--waline-theme-color:/s,
  "Waline 评论区应适配站点现有视觉样式",
);

console.log("Comment configuration checks passed.");
