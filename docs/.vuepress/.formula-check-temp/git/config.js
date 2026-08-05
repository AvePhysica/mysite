import { GitContributors } from "D:/VuePress_mysite/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
  },
};
