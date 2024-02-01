import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import termekek from "../views/Terrmekek.vue";
import elerhetosegek from "../views/Elerhetosegek.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/termekek",
      name: "termekek",
      component: termekek,
    },
    {
      path: "/elerhetosegek",
      name: "elerhetosegek",
      component: elerhetosegek,
    },
  ],
});

export default router;
