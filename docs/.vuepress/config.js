import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
import { qftSidebar } from "./qftSidebar.js";

const walineServerURL = process.env.WALINE_SERVER_URL?.trim();

export default defineUserConfig({
  lang: "zh-CN",
  title: "Luminosity",
  description: "Physics · AI · Mathematics · Learning",

  bundler: viteBundler(),

  extendsPage(page) {
    const relativePath = page.filePathRelative?.replaceAll("\\", "/") ?? "";

    if (
      relativePath.endsWith("README.md") &&
      page.frontmatter.comments === undefined
    ) {
      page.frontmatter.comments = false;
    }

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
      {
        text: "日本語",
        items: [
          { text: "日本語概览", link: "/japanese/" },
          {
            text: "全能日语初级下",
            link: "/japanese/全能日语初级下/",
          },
          {
            text: "新标日下册",
            link: "/japanese/新标日下册/",
          },
          {
            text: "新世纪日本语教程",
            link: "/japanese/新世纪日本语教程/",
          },
        ],
      },
      { text: "计算机科学", link: "/computer-science/" },
      { text: "About", link: "/about/" },
    ],

    sidebar: {
      "/physics/Quantum Field Theory/": qftSidebar,
      "/physics/Quantum Computation/": "auto",
      "/physics/": [
        { text: "Physics Overview", link: "/physics/" },
        {
          text: "Quantum Field Theory",
          link: "/physics/Quantum%20Field%20Theory/",
        },
        {
          text: "Quantum Computation",
          link: "/physics/Quantum%20Computation/",
        },
      ],
      "/japanese/全能日语初级下/": "auto",
      "/japanese/新标日下册/": "auto",
      "/japanese/新世纪标准日本语/": "auto",
      "/japanese/": [
        { text: "日本語 Overview", link: "/japanese/" },
        {
          text: "日本地区行政区划",
          link: "/japanese/日本地区行政区划",
        },
        {
          text: "全能日语初级下",
          link: "/japanese/全能日语初级下/",
        },
        {
          text: "新标日下册",
          link: "/japanese/新标日下册/",
        },
      ],
      "/computer-science/": "auto",
    },

    comment: walineServerURL
      ? {
          provider: "Waline",
          serverURL: walineServerURL,
          placeholder: "留下你的评论吧~",
          comment: true,
          meta: ["nick", "mail", "link"],
          requiredMeta: ["nick", "mail"],
          wordLimit: 1000,
          pageSize: 10,
          commentSorting: "latest",
          login: "enable",
          pageview: false,
        }
      : false,

    footer: {
      message: "Powered by VuePress and Plume Theme",
      copyright: "Copyright © 2026.08.03 Luminosity",
    },
  }),
});
