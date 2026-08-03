import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const docsRoot = resolve(projectRoot, "docs");

async function findMarkdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve(directory, entry.name);
      return entry.isDirectory()
        ? findMarkdownFiles(entryPath)
        : entry.name.endsWith(".md")
          ? [entryPath]
          : [];
    }),
  );
  return files.flat();
}

for (const filePath of await findMarkdownFiles(docsRoot)) {
  const content = await readFile(filePath, "utf8");

  assert.doesNotMatch(
    content,
    /!?\[\[[^\]\n]+\]\]/,
    `${filePath} should not contain Obsidian wikilinks`,
  );

  for (const match of content.matchAll(/(?<!!)\[[^\]]*\]\(([^)]+\.md(?:#[^)]*)?)\)/g)) {
    const encodedTarget = match[1].split("#", 1)[0];
    const targetPath = resolve(dirname(filePath), decodeURIComponent(encodedTarget));
    await access(targetPath);
  }
}

console.log("Internal Markdown link validation passed.");
