import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/normalize.css";
import "@/assets/css/tailwind.css";
import "@/assets/css/global.css";
import { projectAuth } from "./configs/firebase";

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.mount("#app");
  }
});

router.beforeEach((to, from, next) => {
  // Add Dynamic Title for Pages
  document.title = `${to.meta.title}`;
  next();
});
