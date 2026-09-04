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
  /\.vp-footer\s*\{[^}]*background-color:\s*#202326;[^}]*background-image:\s*none;/s,
  "暗色文章脚注区应使用纯色背景",
);

assert.match(
  styles,
  /html\[data-theme="light"\]\s+\.vp-footer\s*\{[^}]*background-color:\s*#f5f8f9;[^}]*background-image:\s*none;/s,
  "亮色文章脚注区应使用纯色背景",
);

assert.match(
  styles,
  /body:has\(\.home-dashboard\)\s*\{[^}]*url\("\/images\/background\.png"\)/s,
  "首页暗色模式应在页面共同容器上绘制背景",
);

assert.match(
  styles,
  /html\[data-theme="light"\]\s+body:has\(\.home-dashboard\)\s*\{[^}]*url\("\/images\/background_light\.png"\)/s,
  "首页亮色模式应在页面共同容器上绘制背景",
);

assert.match(
  styles,
  /body:has\(\.about-page\)\s+\.vp-footer\s*\{[^}]*rgb\(8 17 34 \/ 74%\)[^}]*url\("\/images\/background\.png"\)/s,
  "About 暗色脚注应延续主背景的末端遮罩和图片",
);

assert.match(
  styles,
  /html\[data-theme="light"\]\s+body:has\(\.about-page\)\s+\.vp-footer\s*\{[^}]*rgb\(226 238 242 \/ 70%\)[^}]*url\("\/images\/background_light\.png"\)/s,
  "About 亮色脚注应延续主背景的末端遮罩和图片",
);

assert.match(
  styles,
  /body:has\(\.home-dashboard\)\s+:is\(\.home-dashboard,\s*\.vp-footer\)[^{]*\{[^}]*background:\s*transparent;/s,
  "首页主区域与脚注应共享透明背景层",
);

assert.doesNotMatch(
  styles,
  /body:has\(\.about-page\)\s+:is\(\.about-page,\s*\.vp-footer\)[^{]*\{[^}]*background:\s*transparent;/s,
  "About 主区域不能被全局样式强制设为透明",
);

console.log("Footer background checks passed.");
