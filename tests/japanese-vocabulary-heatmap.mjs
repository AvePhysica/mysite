import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFile(resolve(root, path), "utf8").catch(() => "");

const [home, heatmap, data] = await Promise.all([
  read("docs/.vuepress/components/HomeLanding.vue"),
  read("docs/.vuepress/components/JapaneseVocabularyHeatmap.vue"),
  read("docs/.vuepress/data/japaneseVocabulary.js"),
]);

assert.match(
  home,
  /import JapaneseVocabularyHeatmap from "\.\/JapaneseVocabularyHeatmap\.vue"/,
  "首页应导入日语单词热力图组件",
);
assert.match(
  home,
  /<JapaneseVocabularyHeatmap\s*\/>/,
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
