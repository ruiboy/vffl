import Vue from "vue";
import Router from "vue-router";
import Drafting from "../components/drafting/Drafting";
import Club from "../components/club/Club";
import Sandbox from "../components/sandbox/SandboxApp";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/drafting',
      component: Drafting
    },
    {
      path: '/club/:name',
      component: Club
    },
    {
      path: '/sandbox/:param1',
      props: true,
      component: Sandbox
    }
  ]
})
