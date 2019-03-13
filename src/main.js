// this main.js is configured in webpack to be the entry point for all JS in the project
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// semantic-ui
import SuiVue from 'semantic-ui-vue';
import '../node_modules/semantic-ui-css/semantic.min.css'

Vue.use(SuiVue);

new Vue({
  el: '#app',
  // defining these things here mean they get passed to all child components, accessible as $router or $store...
  router,
  store,
  render: h => h(App)
})
