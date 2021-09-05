import { RouteConfig } from "vue-router";
import Home from "./views/Home.vue";


export const allRoutes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: {
      name: "home",
    },
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];