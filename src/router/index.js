import Vue from "vue";
import Router from "vue-router";
import Drafting from "../components/Drafting";
import Sandbox from "../components/sandbox/SandboxApp";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/drafting',
      component: Drafting
    },
    {
      path: '/sandbox',
      component: Sandbox
    }
  ]
})
