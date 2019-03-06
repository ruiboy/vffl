// this main.js is configured in webpack to be the entry point for all JS in the project
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
