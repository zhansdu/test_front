import type { RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw> =[
  {
    path: "/",
    name: "Home",
    children: [
      {
        path: "",
        name: "HomePage",
        component: ()=>import("./pages/home/HomePage.vue"),
        meta: {
          layout: "default"
        }
      },
      {
        path: "/product/:id",
        name: "ProductPage",
        component: ()=>import("./pages/product/ProductPage.vue"),
        meta: {
          layout: "default"
        }
      }
    ]
  }
]; 

export default routes;