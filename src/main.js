// this main.js is configured in webpack to be the entry point for all JS in the project
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
