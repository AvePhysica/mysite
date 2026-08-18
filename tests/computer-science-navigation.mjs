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
const computerScienceOverviewPath = resolve(
  projectRoot,
  "docs/computer-science/README.md",
);

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

test("计算机科学下拉菜单以概览开头且概览页链接三个栏目", async () => {
  const [config, overview] = await Promise.all([
    readFile(configPath, "utf8"),
    readFile(computerScienceOverviewPath, "utf8"),
  ]);
  const computerScienceMenu =
    config.match(/text:\s*"计算机科学"[\s\S]*?items:\s*\[([\s\S]*?)\n\s*\],/)?.[1] ??
    "";
  const overviewPosition = computerScienceMenu.indexOf('text: "计算机科学概览"');
  const machineLearningPosition = computerScienceMenu.indexOf('text: "机器学习"');

  assert.ok(overviewPosition >= 0, "下拉菜单应包含计算机科学概览");
  assert.ok(
    overviewPosition < machineLearningPosition,
    "计算机科学概览应位于三个子栏目之前",
  );
  assert.match(
    computerScienceMenu,
    /text:\s*"计算机科学概览",\s*link:\s*"\/computer-science\/"/,
  );

  assert.match(overview, /^title: 计算机科学$/m);
  assert.match(overview, /\/computer-science\/Machine%20Learning\//);
  assert.match(overview, /\/computer-science\/Deep%20Learning\//);
  assert.match(
    overview,
    /\/computer-science\/Introduction%20to%20Artificial%20Intelligence\//,
  );
});

test("机器学习侧边栏按照讲次顺序排列", async () => {
  const config = await readFile(configPath, "utf8");
  const sidebarDefinition =
    config.match(
      /const machineLearningSidebar\s*=\s*\[([\s\S]*?)\n\];/,
    )?.[1] ?? "";
  const expectedOrder = [
    "第二讲：",
    "第三讲：",
    "第四讲：",
    "第五讲：",
    "第六讲：",
    "第七讲：",
    "第八讲：",
    "第九讲：",
  ];

  assert.notEqual(sidebarDefinition, "", "应显式定义机器学习侧边栏顺序");

  const positions = expectedOrder.map((title) => sidebarDefinition.indexOf(title));
  assert.ok(
    positions.every((position) => position >= 0),
    "侧边栏应包含当前已有的全部机器学习讲次",
  );
  assert.deepEqual(
    positions,
    [...positions].sort((a, b) => a - b),
    "侧边栏项目应按第二讲至第九讲递增排列",
  );
  assert.match(
    config,
    /"\/computer-science\/Machine Learning\/":\s*machineLearningSidebar/,
  );
});

test("机器学习侧边栏使用主题可解析的内部页面项", async () => {
  const config = await readFile(configPath, "utf8");
  const sidebarDefinition =
    config.match(
      /const machineLearningSidebar\s*=\s*\[([\s\S]*?)\n\];/,
    )?.[1] ?? "";
  const pageNames = [
    "第二讲：线性模型",
    "第三讲：支持向量机",
    "第四讲：学习理论",
    "第五讲：决策树与随机森林",
    "第六讲：集成学习与 Boosting",
    "第七讲：无监督学习",
    "第八讲：强化学习 I",
    "第九讲：强化学习 II",
  ];

  assert.doesNotMatch(
    sidebarDefinition,
    /\blink\s*:/,
    "内部文章应交给主题解析，避免无效路由被标记为外部链接",
  );
  for (const pageName of pageNames) {
    assert.match(sidebarDefinition, new RegExp(`"${pageName}",`));
  }
});
