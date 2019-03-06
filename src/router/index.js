import Vue from 'vue'
import Router from 'vue-router'
import Drafting from '../components/Drafting'
import MultiPlayerList from '../components/MultiPlayerList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Drafting
    },
    {
      path: '/mpl',
      component: MultiPlayerList
    }
  ]
})
