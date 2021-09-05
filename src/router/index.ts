import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import NotFound from '../fallback-view/NotFound.vue';
import { allRoutes } from '../modules/all.routes';
Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: '*',
    component: NotFound,
  },

  ...allRoutes,
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
