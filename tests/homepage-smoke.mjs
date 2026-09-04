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
const stylesSource = await readFile(
  resolve(
    dirname(fileURLToPath(import.meta.url)),
    "../docs/.vuepress/styles/index.scss",
  ),
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
  homeComponent,
  /aria-controls="vocabulary-heatmap-panel recent-update-panel"/,
  "专注模式按钮应同时关联热力图和最近更新面板",
);
assert.match(
  homeComponent,
  /<JapaneseVocabularyHeatmap\s+v-if="showUpdates"\s+id="vocabulary-heatmap-panel"\s*\/>/,
  "专注模式应收起日语单词热力图",
);
assert.match(
  homeComponent,
  /showUpdates \? "专注模式" : "显示内容"/,
  "收起后按钮应提示恢复全部内容",
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
  /"\/physics\/Quantum Field Theory\/":\s*qftSidebar/,
  "QFT 页面应使用独立的自然排序侧边栏",
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
  stylesSource,
  /body:has\(\.vp-doc\):not\(:has\(\.home-dashboard\)\):not\(:has\(\.about-page\)\)\s*\{[^}]*background-color:\s*#202326;[^}]*background-image:\s*none;/s,
  "文章页暗色背景应为纯色且不影响首页与 About 页面",
);
assert.match(
  stylesSource,
  /html\[data-theme="light"\]\s+body:has\(\.vp-doc\):not\(:has\(\.home-dashboard\)\):not\(:has\(\.about-page\)\)\s*\{[^}]*background-color:\s*#f5f8f9;[^}]*background-image:\s*none;/s,
  "文章页亮色背景应使用对应的纯色",
);
assert.match(
  stylesSource,
  /body:has\(\.vp-doc\):not\(:has\(\.home-dashboard\)\):not\(:has\(\.about-page\)\)\s+\.vp-sidebar\s*\{[^}]*background-color:\s*#202326;[^}]*background-image:\s*none;/s,
  "文章侧栏暗色背景应与正文使用一致的纯色",
);
assert.match(
  stylesSource,
  /html\[data-theme="light"\][\s\S]*?body:has\(\.vp-doc\):not\(:has\(\.home-dashboard\)\):not\(:has\(\.about-page\)\)[\s\S]*?\.vp-sidebar\s*\{[^}]*background-color:\s*#f5f8f9;[^}]*background-image:\s*none;/s,
  "文章侧栏亮色背景应与正文使用一致的纯色",
);
assert.match(
  stylesSource,
  /body:has\(\.vp-doc\):not\(:has\(\.home-dashboard\)\):not\(:has\(\.about-page\)\)\s+\.vp-navbar\s*\{[^}]*--vp-nav-bg-color:\s*#191c1f;[^}]*background-color:\s*#191c1f\s*!important;[^}]*border-bottom:\s*1px solid/s,
  "文章页暗色顶栏应使用比正文略深的统一纯色",
);
assert.match(
  stylesSource,
  /html\[data-theme="light"\][\s\S]*?body:has\(\.vp-doc\):not\(:has\(\.home-dashboard\)\):not\(:has\(\.about-page\)\)\s+\.vp-navbar\s*\{[^}]*--vp-nav-bg-color:\s*#e8eef0;[^}]*background-color:\s*#e8eef0\s*!important;[^}]*border-bottom:\s*1px solid/s,
  "文章页亮色顶栏应使用比正文略深的统一纯色",
);
assert.match(
  stylesSource,
  /body:has\(\.vp-doc\):not\(:has\(\.home-dashboard\)\):not\(:has\(\.about-page\)\)\s+\.vp-navbar\s+:is\(\.vp-navbar-title\.has-sidebar \.title, \.divider-line\)\s*\{[^}]*border-bottom-color:\s*transparent\s*!important;[^}]*background-color:\s*transparent\s*!important;/s,
  "文章顶栏内部的分段线应被统一的整栏分隔线替代",
);

const navbarTitleRule =
  css.match(/\.vp-navbar-title \.title\{[^}]*\}/)?.[0] ?? "";
const navbarMenuRule = css.match(/\.vp-navbar-menu\{[^}]*\}/)?.[0] ?? "";
const footerRule = css.match(/\.vp-footer\{[^}]*\}/)?.[0] ?? "";

assert.match(
  navbarTitleRule,
  /font-family:Times New Roman,serif/,
  "左上角 Luminosity 应使用 Times New Roman",
);
assert.match(
  navbarMenuRule,
  /霞鹜文楷等宽[^}]*LXGW WenKai Mono/,
  "右上角导航选项应使用霞鹜文楷等宽",
);
assert.match(
  footerRule,
  /font-family:Times New Roman,Noto Serif SC,serif/,
  "所有页面的页脚应使用首页的字体",
);
assert.match(footerRule, /font-style:italic/, "所有页面的页脚应使用首页的斜体形式");
assert.match(
  footerRule,
  /background(?:-color)?:#202326/,
  "所有页面应使用首页的深色页脚背景",
);
assert.match(
  css,
  /\.vp-footer \.message,\.vp-footer \.copyright\{[^}]*font:inherit[^}]*color:inherit/,
  "页脚内部文字应继承统一后的全站页脚样式",
);
assert.match(
  stylesSource,
  /html\[data-theme="light"\]\s+\.vp-footer\s*\{[^}]*background-color:\s*#f5f8f9;/s,
  "所有页面的页脚应使用首页的亮色形式",
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
