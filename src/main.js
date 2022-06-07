import Vuetify from "vuetify";
import DefaultLayout from "~/layouts/Default.vue";

import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";

export default function(Vue, { appOptions, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
  });

  const opts = {
    icons: {
      iconfont: "mdi" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    theme: {
      themes: {
        light: {
          primary: colors.red.darken2,
          secondary: "#000",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        }
      }
    }
  };

  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify(opts);
  Vue.component("Layout", DefaultLayout);
  if (isClient) {
    const options = require("vue-countup-directive/src").default;
    Vue.directive('countUp', options);
  }
}
