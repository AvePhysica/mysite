import "D:/VuePress_mysite/node_modules/@vuepress/highlighter-helper/dist/client/styles/base.css"
import "D:/VuePress_mysite/node_modules/@vuepress/plugin-shiki/dist/client/styles/shiki.css"
import "D:/VuePress_mysite/node_modules/@vuepress/highlighter-helper/dist/client/styles/line-numbers.css"
import "D:/VuePress_mysite/node_modules/@vuepress/highlighter-helper/dist/client/styles/notation-highlight.css"
import "D:/VuePress_mysite/node_modules/@vuepress/highlighter-helper/dist/client/styles/notation-diff.css"
import "D:/VuePress_mysite/node_modules/@vuepress/highlighter-helper/dist/client/styles/notation-error-level.css"
import "D:/VuePress_mysite/node_modules/@vuepress/highlighter-helper/dist/client/styles/notation-focus.css"
import "D:/VuePress_mysite/node_modules/@vuepress/highlighter-helper/dist/client/styles/notation-highlight.css"
import "D:/VuePress_mysite/node_modules/@vuepress/highlighter-helper/dist/client/styles/notation-word-highlight.css"
import "D:/VuePress_mysite/node_modules/@vuepress/highlighter-helper/dist/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "D:/VuePress_mysite/node_modules/@vuepress/highlighter-helper/dist/client/index.js"
import "D:/VuePress_mysite/node_modules/@vuepress/highlighter-helper/dist/client/styles/code-block-title.css"
export default {
  setup() {
    setupCollapsedLines()
  },
}
