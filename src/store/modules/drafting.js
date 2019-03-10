import axios from "axios";

export const drafting = {
  state: {
    loadingStatus: false,
    teamData: '',
    goalies: 'ken farmer'
  },

  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status
    },
    SET_TEAM_DATA(state, teamData) {
      state.teamData = teamData
    }
  },

  actions: {
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
