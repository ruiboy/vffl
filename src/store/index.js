// central store for vuex
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// use a plugin
Vue.use(Vuex);

// modules would usually be in their own files
const module1 = {
  state: {
    loadingStatus: false,
    teamData: '',
    goalies: 'ken farmer'
  },

  // mutations must be synchronous transactions - so can keep track of how state changes
  // if we don't do this, we have state changing from unpredictable sources making the application hard to reason about
  // mutations can be tracked by debug tools for time-travel debugging and so on
  // mutations should never be called by components; they should 'dispatch' actions which in turn 'commit' mutations
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status
    },
    SET_TEAM_DATA(state, teamData) {
      state.teamData = teamData
    }
  },

  // actions can be asynchronous but should not change state; instead commit mutations to effect the actual state changes
  // actions are the front door for components; they should dispatch actions, never commit mutations
  actions: {
    // actions can have payloads, eg a scalar or object containing the action parameters - in this case a team name
    loadTeamData(context, payload) {
      context.commit('SET_LOADING_STATUS', true)
      axios
        .get('http://localhost:8090/drafting/getTeam/' + payload)
        .then(response => {
          context.commit('SET_LOADING_STATUS', false)
          context.commit('SET_TEAM_DATA', response)
        })
        .catch(error => {
          context.commit('SET_LOADING_STATUS', false)
          context.commit('SET_TEAM_DATA', 'error loading data')
          console.log(error)
        })
    }
  },

  getters: {
    getGoaliesPlus(state) {
      return state.goalies + " for the win"
    }
  }
}

export default new Vuex.Store({
  // strict: will make sure that we don't change state except via mutations
  // eg if an 'action' changes state we will get a runtime error slapping us on the wrist
  // however, this is quite expensive (a synchronous deep watcher on the state tree), so only enable in develop
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    module1: module1
  }
});
