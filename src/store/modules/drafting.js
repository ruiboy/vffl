import axios from "axios";

export const drafting = {
  state: {
    loadingStatus: false,
    players: []
  },

  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status
    },
    SET_PLAYERS(state, players) {
      state.players = players
    }
  },

  actions: {
    loadDraftData(context) {
      context.commit('SET_LOADING_STATUS', true)
      axios
        .get('http://localhost:8090/drafting/getAllPlayers')
        .then(response => {
          context.commit('SET_LOADING_STATUS', false)
          context.commit('SET_PLAYERS', response.data)
        })
        .catch(error => {
          context.commit('SET_LOADING_STATUS', false)
          context.commit('SET_PLAYERS', [])
          console.log(error)
        })
    }
  }
}
