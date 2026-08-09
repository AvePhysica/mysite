import assert from "node:assert/strict";
import { test } from "node:test";
import { access, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const articlePath = resolve(
  projectRoot,
  "docs/computer-science/Machine Learning/第三讲：支持向量机.md",
);
const configPath = resolve(projectRoot, "docs/.vuepress/config.js");

test("第三讲使用简化标题、GPT-5.6-sol 署名且不保留参考材料", async () => {
  const article = await readFile(articlePath, "utf8");

  assert.match(
    article,
    /^title: "第三讲：支持向量机、对偶优化与核方法"$/m,
  );
  assert.match(article, /本文由 GPT-5\.6-sol (?:完成|整理完成)。/);
  assert.doesNotMatch(article, /^## 参考材料$/m);
  assert.doesNotMatch(article, /lec3-svm-v2\.5\.pdf|`ML\.pdf`/);
});

test("计算机科学导航以下拉菜单提供三个可访问的子栏目", async () => {
  const config = await readFile(configPath, "utf8");
  const computerScienceMenu =
    config.match(/text:\s*"计算机科学"[\s\S]*?items:\s*\[([\s\S]*?)\n\s*\],/)?.[1] ??
    "";

  assert.match(computerScienceMenu, /text:\s*"机器学习"/);
  assert.match(computerScienceMenu, /text:\s*"深度学习"/);
  assert.match(computerScienceMenu, /text:\s*"人工智能导论"/);
  assert.match(computerScienceMenu, /\/computer-science\/Machine%20Learning\//);
  assert.match(computerScienceMenu, /\/computer-science\/Deep%20Learning\//);
  assert.match(
    computerScienceMenu,
    /\/computer-science\/Introduction%20to%20Artificial%20Intelligence\//,
  );

  await Promise.all([
    access(resolve(projectRoot, "docs/computer-science/Machine Learning/README.md")),
    access(resolve(projectRoot, "docs/computer-science/Deep Learning/README.md")),
    access(
      resolve(
        projectRoot,
        "docs/computer-science/Introduction to Artificial Intelligence/README.md",
      ),
    ),
  ]);
});

