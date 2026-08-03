import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
import { statSync } from "node:fs";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Luminosity",
  description: "Physics · AI · Mathematics · Learning",

  bundler: viteBundler(),

  extendsPage(page) {
    const frontmatterDate = page.frontmatter.date;
    let updatedAt = frontmatterDate
      ? new Date(frontmatterDate).getTime()
      : 0;

    if (!updatedAt && page.filePath) {
      try {
        updatedAt = statSync(page.filePath).mtimeMs;
      } catch {
        updatedAt = 0;
      }
    }

    page.routeMeta.homepage = {
      title: page.title,
      description: page.frontmatter.description ?? "",
      tags: page.frontmatter.tags ?? [],
      updatedAt,
    };
  },

  theme: plumeTheme({
    navbar: [
      { text: "首页", link: "/" },
      { text: "物理", link: "/physics/" },
      { text: "日本語", link: "/japanese/" },
      { text: "计算机科学", link: "/computer-science/" },
    ],

    sidebar: {
      "/physics/": "auto",
      "/japanese/": "auto",
      "/computer-science/": "auto",
    },

    footer: {
      message: "Powered by VuePress and Plume Theme",
      copyright: "Copyright © 2026.08.03 Luminosity",
    },
  }),
});
