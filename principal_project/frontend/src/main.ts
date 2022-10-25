import { createApp } from "vue";
import App from "./App.vue";
import Item from "./entities/Item";
import AxiosAdapter from "./infra/AxiosAdapter";
import FetchAdapter from "./infra/FetchAdapter";
import ItemHttpService from "./services/ItemHttpService";
import ItemService from "./services/ItemService";
import { createRouter, createWebHistory } from "vue-router";
import CheckoutView from "./views/CheckoutView.vue";

const app = createApp(App);
const httpClient = new AxiosAdapter();
const baseUrl = "http://localhost:3004";
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/checkout", component: CheckoutView }],
});
const itemService = new ItemHttpService(httpClient, baseUrl);
app.use(router);
app.provide("itemService", itemService);
app.mount("#app");
