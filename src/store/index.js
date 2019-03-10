// central store for vuex
import Vue from "vue";
import Vuex from "vuex";
import {drafting} from "./modules/drafting"

// use a plugin
Vue.use(Vuex);

export default new Vuex.Store({
  // strict: will make sure that we don't change state except via mutations; but is expensive, so only for dev model
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    drafting: drafting
  }
});
