import { defineClientConfig } from "vuepress/client";
import HomeLanding from "./components/HomeLanding.vue";
import "./styles/index.scss";

export default defineClientConfig({
  enhance({ app }) {
    app.component("HomeLanding", HomeLanding);
  },
});
