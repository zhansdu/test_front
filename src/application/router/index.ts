import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: ()=>import("../pages/NotFound.vue"),
      meta: {
        layout: "empty",
        no_permission_needed: true
      }
    }
  ]
});


export const addRoutes = (routes:Array<RouteRecordRaw>) => {
  routes.forEach(route=>router.addRoute(route));
};

export default {
  router, 
  addRoutes
};
