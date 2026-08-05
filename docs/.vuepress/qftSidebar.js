import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const qftDirectory = fileURLToPath(
  new URL("../physics/Quantum Field Theory/", import.meta.url),
);

function numberedItems(fileNames, type) {
  const pattern = new RegExp(`^Coleman QFT - ${type} (\\d+)`);

  return fileNames
    .map((fileName) => ({
      fileName,
      number: Number(fileName.match(pattern)?.[1] ?? Number.NaN),
    }))
    .filter(({ number }) => Number.isFinite(number))
    .sort((left, right) => left.number - right.number)
    .map(({ fileName }) => fileName.replace(/\.md$/i, ""));
}

export function createQftSidebar(fileNames) {
  return [
    {
      text: "Lectures",
      collapsed: false,
      items: numberedItems(fileNames, "Lecture"),
    },
    {
      text: "Problems",
      collapsed: false,
      items: numberedItems(fileNames, "Problem"),
    },
  ];
}

export const qftSidebar = createQftSidebar(
  readdirSync(qftDirectory).filter(
    (fileName) => fileName.endsWith(".md") && fileName !== "README.md",
  ),
);
