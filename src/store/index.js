// central store for vuex
import Vue from 'vue';
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const module1 = {
  state: {
    loadingStatus: false,
    teamData: '',
    goalies: 'ken farmer'
  },

  // mutations must be synchronous transactions  ... so can keep track of how state changes
  // if we don't do this, we have state changing in unpredictable ways making the application hard to reason about
  // these mutations can then be tracked by debug tools for time-travel debugging and so on
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status
    },
    SET_TEAM_DATA(state, teamData) {
      state.teamData = teamData
    }
  },

  // actions can be asynchronous but should not change state - commit mutations to effect the actual state changes
  actions: {
    loadTeamData(context) {
      context.commit('SET_LOADING_STATUS', true)
      axios
        .get('http://localhost:8090/drafting/getTeam/Ruiboys')
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
  modules: {
    module1: module1
  }
});
