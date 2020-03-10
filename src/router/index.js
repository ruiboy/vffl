import Vue from "vue";
import Router from "vue-router";
import Drafting from "../components/drafting/Drafting";
import DraftOrder from "../components/draftorder/DraftOrder";
import Club from "../components/club/Club";
import AddPlayer from "../components/addplayer/AddPlayer";
import Sandbox from "../components/sandbox/SandboxApp";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/drafting',
      component: Drafting
    },
    {
      path: '/draftorder',
      component: DraftOrder
    },
    {
      path: '/club/:name',
      component: Club
    },
    {
      path: '/addplayer',
      component: AddPlayer
    },
    {
      path: '/sandbox/:param1',
      props: true,
      component: Sandbox
    }
  ]
})
