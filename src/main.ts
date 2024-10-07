import { createApp } from "vue";
import { createPinia } from "pinia";
import VueAxios from "vue-axios";
import PrimeVue from "primevue/config";

import App from "./App.vue";
import router from "./application/router";
import domain_routes from "./domains/routes";
import my_axios from "./application/services/ApiService";
import "primevue/resources/themes/aura-light-green/theme.css";

import "bootstrap";
import "./application/assets/styles/main.scss";


const app = createApp(App);
const pinia = createPinia();

router.addRoutes(domain_routes);

app.use(pinia);
app.use(router.router);
app.use(VueAxios,my_axios);
app.use(PrimeVue,{
  zIndex: {
    modal: 2100, //dialog, sidebar
    overlay: 2000, //dropdown, overlaypanel
    menu: 2000, //overlay menus
    tooltip: 2100 //tooltip
  }
});
app.mount("#app");