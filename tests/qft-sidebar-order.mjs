import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const config = await readFile(
  resolve(root, "docs/.vuepress/config.js"),
  "utf8",
);
const sidebarModule = await import(
  `${pathToFileURL(resolve(root, "docs/.vuepress/qftSidebar.js")).href}?test=${Date.now()}`
).catch(() => ({ qftSidebar: [] }));

assert.match(
  config,
  /import \{ qftSidebar \} from "\.\/qftSidebar\.js"/,
  "VuePress 配置应使用 QFT 自然排序侧边栏",
);
assert.match(
  config,
  /"\/physics\/Quantum Field Theory\/":\s*qftSidebar/,
  "QFT 栏目应使用独立的排序结果",
);

const lectures = sidebarModule.qftSidebar.find(
  ({ text }) => text === "Lectures",
)?.items ?? [];
const problems = sidebarModule.qftSidebar.find(
  ({ text }) => text === "Problems",
)?.items ?? [];

const numbersOf = (items, type) =>
  items.map((item) => Number(item.match(new RegExp(`${type} (\\d+)`))?.[1]));

assert.deepEqual(
  numbersOf(lectures, "Lecture"),
  Array.from({ length: 33 }, (_, index) => index + 1),
  "Lectures 应按 1 到 33 的自然数字顺序排列",
);
assert.deepEqual(
  numbersOf(problems, "Problem"),
  Array.from({ length: 15 }, (_, index) => index + 1),
  "Problems 应按 1 到 15 的自然数字顺序排列",
);

console.log("QFT sidebar order test passed.");
