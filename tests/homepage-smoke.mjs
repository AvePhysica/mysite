import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../docs/.vuepress/.verify-dist",
);
const html = await readFile(resolve(outputDir, "index.html"), "utf8").catch(
  () => "",
);
const homeComponent = await readFile(
  resolve(
    dirname(fileURLToPath(import.meta.url)),
    "../docs/.vuepress/components/HomeLanding.vue",
  ),
  "utf8",
);
const config = await readFile(
  resolve(dirname(fileURLToPath(import.meta.url)), "../docs/.vuepress/config.js"),
  "utf8",
);

assert.match(
  homeComponent,
  /\.home-hero h1\s*\{[^}]*margin-top:\s*18px;/s,
  "首页两行标题之间应保留较宽的垂直间距",
);

assert.match(
  html,
  /class="home-kicker"[^>]*>[^<]+<\/p>/,
  "首页应显示站点名称",
);
assert.match(
  html,
  /Study &amp; Research|Study & Research/,
  "首页应显示主标题",
);
assert.match(html, /Recent Update/, "首页应包含最近更新区域");
assert.match(html, /home-dashboard/, "首页应渲染自定义仪表盘组件");
assert.match(html, /class="home-view-toggle"/, "首页应提供内容显示切换按钮");
assert.match(
  html,
  /aria-controls="recent-update-panel"/,
  "切换按钮应关联最近更新面板",
);
assert.match(html, /aria-expanded="true"/, "最近更新面板默认应为展开状态");
assert.match(html, /id="recent-update-panel"/, "最近更新面板应提供稳定标识");
assert.match(html, /href="\/physics\/"/, "首页应提供物理笔记入口");
assert.match(html, /href="\/japanese\/"/, "首页应提供日语笔记入口");
assert.match(html, /href="\/computer-science\/"/, "首页应提供计算机科学入口");

assert.doesNotMatch(
  html,
  /Untitled note/,
  "Recent Update should not include structural or untitled pages",
);
assert.match(
  html,
  /class="recent-grid"[\s\S]*?href="\/physics\/Quantum%20Computation\//,
  "Recent Update should include the newly added Quantum Computation notes",
);
assert.match(
  config,
  /page\.data\.git\?\.updatedTime/,
  "Recent Update should use Git commit times so deployment does not reset the order",
);
assert.doesNotMatch(
  config,
  /statSync/,
  "Recent Update should not use filesystem modification times",
);
assert.match(
  homeComponent,
  /filter\(\(\{ isArticle, updatedAt \}\) => isArticle && updatedAt > 0\)/,
  "Recent Update should exclude structural and untitled pages",
);

const stylesheetPaths = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)]
  .map((match) => match[1].replace(/^\//, ""));
const css = (
  await Promise.all(
    stylesheetPaths.map((stylesheet) =>
      readFile(resolve(outputDir, stylesheet), "utf8"),
    ),
  )
).join("\n");

assert.match(
  css,
  /\.vp-doc:not\(:has\(\.home-dashboard\)\)\{[^}]*霞鹜文楷等宽[^}]*font-family:var\(--vp-font-family-base\)/,
  "Article pages should use the LXGW WenKai Mono font family",
);

assert.match(
  css,
  /html\[data-theme=light\] \.home-dashboard/,
  "首页应为亮色主题提供独立配色",
);
assert.match(
  css,
  /html\[data-theme=light\] body:has\(\.home-dashboard\) \.vp-navbar/,
  "首页导航栏应跟随亮色主题",
);
assert.match(
  css,
  /\.home-dashboard(?:\[[^\]]+\])?\{[^}]*url\(\/images\/background\.png\)/,
  "深色首页应使用指定背景图片",
);
assert.match(
  css,
  /html\[data-theme=light\] \.home-dashboard\{[^}]*url\(\/images\/background_light\.png\)/,
  "亮色首页应使用指定背景图片",
);

const darkBackgroundRule = css.match(
  /\.home-dashboard(?:\[[^\]]+\])?\{([^}]*)\}/,
)?.[1] ?? "";
const lightBackgroundRule = css.match(
  /html\[data-theme=light\] \.home-dashboard\{([^}]*)\}/,
)?.[1] ?? "";

assert.doesNotMatch(darkBackgroundRule, /32px 32px/, "深色首页不应显示网格");
assert.doesNotMatch(lightBackgroundRule, /32px 32px/, "亮色首页不应显示网格");

console.log("Homepage smoke test passed.");
