import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { basename, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const notesRoot = resolve(projectRoot, "docs/physics/Quantum Computation");
const picturesRoot = resolve(notesRoot, "pictures");
const notes = [
  "Color code.md",
  "Essay - Fault-tolerant quantum computation by anyons.md",
  "Essay - Topological quantum memory.md",
  "Note/Note 1. 量子计算原理.md",
  "Note/Note 2. 量子Fourier变换.md",
];

for (const relativePath of notes) {
  const filePath = resolve(notesRoot, relativePath);
  const content = await readFile(filePath, "utf8");
  const title = basename(filePath, ".md");
  const expectedImagePrefix = relativePath.startsWith("Note/")
    ? "../pictures/"
    : "./pictures/";

  assert.match(
    content,
    new RegExp(`^---\\r?\\ntitle: "${title.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}"\\r?\\n---\\r?\\n`),
    `${relativePath} 应包含与文件名一致的标题`,
  );

  for (const match of content.matchAll(/<img\s+src="([^"]+)"/g)) {
    const imagePath = match[1];
    assert.ok(
      imagePath.startsWith(expectedImagePrefix),
      `${relativePath} 的图片应使用 ${expectedImagePrefix} 相对路径：${imagePath}`,
    );
    await access(resolve(picturesRoot, basename(imagePath)));
  }

  assert.doesNotMatch(
    content,
    /^>(?!\s|$)/m,
    `${relativePath} 的 callout 引用符号后应保留空格`,
  );

  for (const line of content.split(/\r?\n/)) {
    if (line.startsWith("> ") && line.includes("$$")) {
      assert.match(
        line,
        /^> \$\$.+\$\$$/,
        `${relativePath} 的 callout 行间公式应完整放在同一引用行中`,
      );
    }
  }
}

console.log("Quantum Computation content validation passed.");
