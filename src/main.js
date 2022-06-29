import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/todos";

import "./index.css";

const app = createApp(App);

app.provide("store", store);

app.mount("#app");
