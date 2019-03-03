// this main.js is configured in webpack to be the entry point for all JS in the project
import Vue from 'vue'
import App from './App.vue'
import MultiPlayerList from './components/MultiPlayerList.vue'

// register 'global' components - can be used in any Vue instance
// (slight drawback: all global components will be included in the distribution whether they are being used or not)
Vue.component('multi-player-list', MultiPlayerList)

new Vue({
  el: '#app',
  render: h => h(App)
})
