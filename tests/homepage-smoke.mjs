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
  /\.home-copy h1\s*\{[^}]*margin-top:\s*26px;/s,
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
assert.match(html, /Recent Notes/, "首页应包含最近更新区域");
assert.match(html, /home-dashboard/, "首页应渲染自定义仪表盘组件");
assert.match(html, /class="home-stage"/, "首页首屏应使用非对称双栏工作台布局");
assert.match(html, /class="research-index"/, "首页应在首屏显示研究分类索引");
assert.match(html, /class="featured-note"/, "首页应突出展示最新文章");
assert.match(html, /class="recent-list"/, "首页应以时间列表展示其余最近文章");
assert.match(html, /class="focus-toggle"/, "首页应提供专注模式切换按钮");
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
assert.doesNotMatch(html, /class="stats-grid"/, "首页不应继续使用横向统计卡片栏");
assert.doesNotMatch(html, /class="recent-grid"/, "首页不应继续使用等权双列文章卡片");

const sectionConfig =
  homeComponent.match(/const sections = \[([\s\S]*?)\n\];/)?.[1] ?? "";
assert.deepEqual(
  [...sectionConfig.matchAll(/label: "([^"]+)"/g)].map((match) => match[1]),
  ["Physics", "Japanese", "Computer Science"],
  "研究索引应只显示三个一级目录",
);

assert.doesNotMatch(
  html,
  /Untitled note/,
  "Recent Update should not include structural or untitled pages",
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
  config,
  /text:\s*"物理"[\s\S]*?items:\s*\[/,
  "物理导航应使用下拉分类菜单",
);
assert.match(
  config,
  /\/physics\/Quantum%20Field%20Theory\//,
  "物理下拉菜单应包含 QFT 分类入口",
);
assert.match(
  config,
  /\/physics\/Quantum%20Computation\//,
  "物理下拉菜单应包含 Quantum Computation 分类入口",
);
assert.match(
  config,
  /"\/physics\/Quantum Field Theory\/":\s*"auto"/,
  "QFT 页面应使用独立自动侧边栏",
);
assert.match(
  config,
  /"\/physics\/Quantum Computation\/":\s*"auto"/,
  "Quantum Computation 页面应使用独立自动侧边栏",
);
assert.doesNotMatch(
  config,
  /"\/physics\/":\s*"auto"/,
  "Physics 根侧边栏不应再聚合所有子分类",
);
assert.doesNotMatch(
  config,
  /\/physics\/(?:non-Hermitian|green-function)/,
  "Physics 根侧边栏不应引用已删除的零散笔记",
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
  /\.vp-doc:not\(:has\(\.home-dashboard\)\)\{[^}]*font-size:1\.05rem[^}]*line-height:1\.85/,
  "Article body text should use the enlarged readable size and line height",
);
assert.match(
  css,
  /body:has\(\.vp-doc\):not\(:has\(\.home-dashboard\)\)\{[^}]*background-image:[^}]*background-size:32px 32px/,
  "Article pages should display the grid background without affecting the homepage",
);
assert.match(
  css,
  /html\[data-theme=light\] body:has\(\.vp-doc\):not\(:has\(\.home-dashboard\)\)\{[^}]*background-image:/,
  "Article grid should provide a light-theme color",
);
assert.match(
  css,
  /body:has\(\.vp-doc\):not\(:has\(\.home-dashboard\)\) \.vp-sidebar\{[^}]*background-image:[^}]*background-size:32px 32px/,
  "The article sidebar should continue the grid background",
);
assert.match(
  css,
  /html\[data-theme=light\] body:has\(\.vp-doc\):not\(:has\(\.home-dashboard\)\) \.vp-sidebar\{[^}]*background-image:/,
  "The article sidebar grid should support the light theme",
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

assert.match(
  css,
  /\.home-stage(?:\[[^\]]+\])?\{[^}]*grid-template-columns:/,
  "桌面首页应使用双栏首屏布局",
);
assert.match(
  css,
  /\.recent-layout(?:\[[^\]]+\])?\{[^}]*grid-template-columns:/,
  "最近更新应使用重点文章与时间列表组成的非对称布局",
);

console.log("Homepage smoke test passed.");
