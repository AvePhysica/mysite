import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

async function read(relativePath) {
  return readFile(resolve(root, relativePath), "utf8").catch(() => "");
}

const [config, client, aboutReadme, aboutComponent] = await Promise.all([
  read("docs/.vuepress/config.js"),
  read("docs/.vuepress/client.js"),
  read("docs/about/README.md"),
  read("docs/.vuepress/components/AboutProfile.vue"),
]);

const builtAboutHtml = await read("docs/.vuepress/.verify-dist/about/index.html");
const stylesheetPaths = [
  ...builtAboutHtml.matchAll(/<link rel="stylesheet" href="([^"]+)"/g),
].map((match) => match[1].replace(/^\//, ""));
const builtCss = (
  await Promise.all(
    stylesheetPaths.map((stylesheet) =>
      read(`docs/.vuepress/.verify-dist/${stylesheet}`),
    ),
  )
).join("\n");

assert.match(
  config,
  /logo:\s*"\/images\/profile_picture\.png"/,
  "导航栏站点名左侧应使用个人头像",
);
assert.match(
  config,
  /text:\s*"About"\s*,\s*link:\s*"\/about\/"/,
  "右上角导航栏应提供 About 入口",
);
assert.match(
  client,
  /app\.component\("AboutProfile",\s*AboutProfile\)/,
  "About 个人介绍组件应在客户端注册",
);
assert.match(
  aboutReadme,
  /<AboutProfile\s*\/>/,
  "About 路由应渲染个人介绍组件",
);
assert.match(
  aboutComponent,
  /src="\/images\/profile_picture\.png"/,
  "About 页面应显示个人头像",
);
assert.match(aboutComponent, />Luminosity</, "About 页面应显示用户名");
assert.match(aboutComponent, /About Me/, "About 页面应包含自我介绍标题");
assert.match(aboutComponent, /学习方向/, "About 页面应包含学习方向");
assert.match(
  aboutComponent,
  /https:\/\/github\.com\/AvePhysica/,
  "About 页面应提供 GitHub 主页入口",
);
assert.match(
  aboutComponent,
  /href="https:\/\/www\.zhihu\.com\/people\/78-76-59-95"/,
  "About 页面应提供知乎主页入口",
);
assert.match(
  aboutComponent,
  /class="zhihu-link"[\s\S]*?aria-label="[^"]*知乎主页"/,
  "知乎入口应提供清晰的无障碍说明",
);
assert.match(
  aboutComponent,
  /@media \(max-width: 680px\)/,
  "About 页面应提供手机布局",
);
assert.match(
  aboutComponent,
  /:global\(html\[data-theme="light"\]/,
  "About 页面应提供亮色主题样式",
);

const darkPageBackground =
  aboutComponent.match(/\.about-page\s*\{([\s\S]*?)\n\}/)?.[1] ?? "";
const darkCardBackground =
  aboutComponent.match(/\.profile-cover\s*\{([\s\S]*?)\n\}/)?.[1] ?? "";
const lightPageBackground =
  aboutComponent.match(
    /:global\(html\[data-theme="light"\] \.about-page\)\s*\{([\s\S]*?)\n\}/,
  )?.[1] ?? "";
const lightCardBackground =
  aboutComponent.match(
    /:global\(html\[data-theme="light"\] \.profile-cover\)\s*\{([\s\S]*?)\n\}/,
  )?.[1] ?? "";

assert.match(
  darkPageBackground,
  /url\("\/images\/background\.png"\)/,
  "暗色 About 页面主背景应使用暗色图片",
);
assert.match(
  darkCardBackground,
  /url\("\/images\/background_light\.png"\)/,
  "暗色 About 页面名片横幅应使用亮色图片",
);
assert.match(
  lightPageBackground,
  /url\("\/images\/background_light\.png"\)/,
  "亮色 About 页面主背景应使用亮色图片",
);
assert.match(
  lightCardBackground,
  /url\("\/images\/background\.png"\)/,
  "亮色 About 页面名片横幅应改用暗色图片",
);
assert.match(
  builtCss,
  /html\[data-theme=light\] \.about-page\{[^}]*background:[^}]*background_light\.png/,
  "构建后的亮色主背景规则必须作用于 About 页面元素",
);
assert.match(
  builtCss,
  /html\[data-theme=light\] \.profile-cover\{[^}]*background:[^}]*background\.png/,
  "构建后的亮色名片规则必须作用于名片横幅元素",
);

console.log("About page smoke test passed.");
