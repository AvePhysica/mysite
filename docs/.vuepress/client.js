import { defineClientConfig } from "vuepress/client";
import AboutProfile from "./components/AboutProfile.vue";
import HomeLanding from "./components/HomeLanding.vue";
import "./styles/index.scss";

export default defineClientConfig({
  enhance({ app }) {
    app.component("AboutProfile", AboutProfile);
    app.component("HomeLanding", HomeLanding);
  },
});
