

import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import About from "@/views/about.vue";
import NotFound from "@/views/404.vue";

const routes = [
{
  path: "/:catchAll(.*)",
  component: NotFound,
},
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;