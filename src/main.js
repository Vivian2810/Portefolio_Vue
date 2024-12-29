import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import fr from "./locales/fr.json";
import "./style.css";
import App from "./App.vue";

const i18n = createI18n({
  legacy: false,
  locale: "fr",
  messages: {
    fr: fr,
  }
});

// App.config.globalProperties.$t = i18n.t;
// App.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("app-");
// compilerOptions.isCustomElement = (tag) => tag.startsWith("app-");

createApp(App).use(i18n).mount("#app");
