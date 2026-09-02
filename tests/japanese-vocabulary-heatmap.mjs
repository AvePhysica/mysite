import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { compileStyle, parse } from "@vue/compiler-sfc";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFile(resolve(root, path), "utf8").catch(() => "");

const [home, heatmap, data] = await Promise.all([
  read("docs/.vuepress/components/HomeLanding.vue"),
  read("docs/.vuepress/components/JapaneseVocabularyHeatmap.vue"),
  read("docs/.vuepress/data/japaneseVocabulary.js"),
]);

const heatmapPath = resolve(
  root,
  "docs/.vuepress/components/JapaneseVocabularyHeatmap.vue",
);
const { descriptor } = parse(heatmap, { filename: heatmapPath });
const compiledStyle = compileStyle({
  source: descriptor.styles[0].content,
  filename: heatmapPath,
  id: "data-v-heatmap-test",
  scoped: true,
}).code;

assert.match(
  home,
  /import JapaneseVocabularyHeatmap from "\.\/JapaneseVocabularyHeatmap\.vue"/,
  "首页应导入日语单词热力图组件",
);
assert.match(
  home,
  /<JapaneseVocabularyHeatmap\b[^>]*\/>/s,
  "首页应渲染日语单词热力图",
);
assert.match(heatmap, /class="vocabulary-heatmap"/);
assert.match(heatmap, /v-for="day in calendarDays"/);
assert.match(heatmap, /:data-level="day\.level"/);
assert.match(heatmap, /背诵单词/);
assert.match(heatmap, /全年累计/);
assert.match(heatmap, /学习天数/);
assert.match(heatmap, /最长连续/);
assert.match(
  heatmap,
  /const monthNames\s*=\s*\[\s*"Jan",\s*"Feb",\s*"Mar",\s*"Apr",\s*"May",\s*"Jun",\s*"Jul",\s*"Aug",\s*"Sep",\s*"Oct",\s*"Nov",\s*"Dec",?\s*\]/,
  "月份标签应使用 Jan 至 Dec 的英文缩写",
);
assert.match(
  heatmap,
  /<div class="weekday-labels"[\s\S]*?<span>Mon<\/span>\s*<span>Wed<\/span>\s*<span>Fri<\/span>/,
  "左侧星期标签应使用 Mon、Wed、Fri",
);
assert.match(
  heatmap,
  /grid-template-rows:\s*repeat\(7,\s*var\(--heatmap-cell-size\)\)/,
  "热力图应按 GitHub 风格使用七行星期布局",
);
assert.match(
  heatmap,
  /overflow-x:\s*auto/,
  "小屏幕应能横向滚动查看全年热力图",
);
assert.match(heatmap, /--heatmap-level-1:\s*#(?:[0-9a-fA-F]{6})/);
assert.match(heatmap, /--heatmap-level-4:\s*#(?:[0-9a-fA-F]{6})/);
assert.match(
  heatmap,
  /\.heatmap-heading h2\s*\{[\s\S]*?font-size:\s*clamp\(1\.7rem,\s*3vw,\s*2\.35rem\)/,
  "“日语单词进度”标题应使用较紧凑的响应式字号",
);
assert.match(
  heatmap,
  /--heatmap-empty:\s*#22374d;[\s\S]*?--heatmap-level-1:\s*#22577d;[\s\S]*?--heatmap-level-2:\s*#2b78aa;[\s\S]*?--heatmap-level-3:\s*#36a0d5;[\s\S]*?--heatmap-level-4:\s*#72c9ee;/,
  "暗色主题的蓝色色阶应比原方案更明亮",
);
assert.match(
  heatmap,
  /--heatmap-empty:\s*#edf4f7;[\s\S]*?--heatmap-level-1:\s*#c9e8f8;[\s\S]*?--heatmap-level-2:\s*#84cbee;[\s\S]*?--heatmap-level-3:\s*#3aa4dc;[\s\S]*?--heatmap-level-4:\s*#1d83c1;/,
  "亮色主题应使用明亮且有层次的蓝色色阶",
);
assert.match(
  compiledStyle,
  /html\[data-theme="light"\] \.vocabulary-heatmap/,
  "亮色主题选择器编译后应继续指向热力图组件，而不是退化为 html 本身",
);
assert.match(
  compiledStyle,
  /html\[data-theme="light"\] \.heatmap-card/,
  "亮色主题应能覆盖热力图卡片背景",
);
assert.doesNotMatch(
  heatmap,
  /#(?:0e4429|006d32|26a641|39d353|9be9a8|40c463|30a14e|216e39)/i,
  "热力图色阶不应采用 GitHub 默认绿色",
);
assert.match(
  data,
  /export const japaneseVocabularyProgress\s*=\s*\{/,
  "每日数据应放在独立、易修改的文件中",
);
assert.match(data, /year:\s*2026/);
assert.match(data, /daily:\s*\{/);
assert.match(data, /"2026-09-01":\s*\d+/);

console.log("Japanese vocabulary heatmap checks passed.");
