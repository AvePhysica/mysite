import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [config, physicsOverview] = await Promise.all([
  readFile(resolve(root, "docs/.vuepress/config.js"), "utf8"),
  readFile(resolve(root, "docs/physics/README.md"), "utf8"),
]);

assert.match(
  config,
  /"\/physics\/":\s*\[[\s\S]*?Quantum Field Theory[\s\S]*?Quantum Computation[\s\S]*?\]/,
  "物理概览页的侧边栏应提供两个物理子栏目的入口",
);

assert.match(
  physicsOverview,
  /\/physics\/Quantum%20Field%20Theory\//,
  "物理概览正文应链接到 Quantum Field Theory",
);
assert.match(
  physicsOverview,
  /\/physics\/Quantum%20Computation\//,
  "物理概览正文应链接到 Quantum Computation",
);

console.log("Physics navigation checks passed.");
