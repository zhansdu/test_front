import { shallowRef } from "vue";
import type { NavigationHookAfter } from "vue-router";

import router from "../router";

import EmptyLayout from "./EmptyLayout/EmptyLayout.vue";
import DefaultLayout from "./DefaultLayout/DefaultLayout.vue";

const layout = shallowRef();
const layouts = {
  "empty": EmptyLayout,
  "default": DefaultLayout,
};

type routeWithLayout = NavigationHookAfter & {
    meta:{
        layout:"empty"|"default"
    }
};
router.router.afterEach((to)=>{
  layout.value = layouts[(to as unknown as routeWithLayout).meta.layout] ;
});

export default layout;