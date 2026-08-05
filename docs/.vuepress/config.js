import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
import { qftSidebar } from "./qftSidebar.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Luminosity",
  description: "Physics · AI · Mathematics · Learning",

  bundler: viteBundler(),

  extendsPage(page) {
    const relativePath = page.filePathRelative?.replaceAll("\\", "/") ?? "";

    page.routeMeta.homepage = {
      title: page.title,
      description: page.frontmatter.description ?? "",
      tags: page.frontmatter.tags ?? [],
      updatedAt: 0,
      isArticle:
        Boolean(relativePath) &&
        !relativePath.endsWith("README.md") &&
        Boolean(page.title),
    };
  },

  onInitialized(app) {
    for (const page of app.pages) {
      const frontmatterDate = page.frontmatter.date;
      const explicitUpdatedAt = frontmatterDate
        ? new Date(frontmatterDate).getTime()
        : 0;
      const gitUpdatedAt = Number(page.data.git?.updatedTime ?? 0);
      const validExplicitUpdatedAt = Number.isFinite(explicitUpdatedAt)
        ? explicitUpdatedAt
        : 0;

      page.routeMeta.homepage = {
        ...(page.routeMeta.homepage ?? {}),
        updatedAt: Math.max(validExplicitUpdatedAt, gitUpdatedAt),
      };
    }
  },

  theme: plumeTheme({
    logo: "/images/profile_picture.png",

    navbar: [
      { text: "首页", link: "/" },
      {
        text: "物理",
        items: [
          { text: "物理概览", link: "/physics/" },
          {
            text: "Quantum Field Theory",
            link: "/physics/Quantum%20Field%20Theory/",
          },
          {
            text: "Quantum Computation",
            link: "/physics/Quantum%20Computation/",
          },
        ],
      },
      { text: "日本語", link: "/japanese/" },
      { text: "计算机科学", link: "/computer-science/" },
      { text: "About", link: "/about/" },
    ],

    sidebar: {
      "/physics/Quantum Field Theory/": qftSidebar,
      "/physics/Quantum Computation/": "auto",
      "/physics/": [{ text: "Physics", link: "/physics/" }],
      "/japanese/": "auto",
      "/computer-science/": "auto",
    },

    footer: {
      message: "Powered by VuePress and Plume Theme",
      copyright: "Copyright © 2026.08.03 Luminosity",
    },
  }),
});
