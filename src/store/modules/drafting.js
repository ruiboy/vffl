import axios from "axios";

export const drafting = {
  state: {
    loadingStatus: false,
    players: [],
    selectedPlayer: null
  },

  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status
    },
    SET_PLAYERS(state, players) {
      state.players = players
    },
    SET_SELECTED_PLAYER(state, player) {
      state.selectedPlayer = player
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
    },

    selectPlayer(context, player) {
      context.commit('SET_SELECTED_PLAYER', player)
    }
  },

  getters: {
    getKickers(state) {
      return [...state.players].sort((a, b) => (a.kicks > b.kicks) ? -1 : (a.kicks < b.kicks) ? 1 : 0);
    },
    getHandballers(state) {
      return [...state.players].sort((a, b) => (a.handballs > b.handballs) ? -1 : (a.handballs < b.handballs) ? 1 : 0);
    },
    getMarkers(state) {
      return [...state.players].sort((a, b) => (a.marks > b.marks) ? -1 : (a.marks < b.marks) ? 1 : 0);
    },
    getRuckmen(state) {
      return [...state.players].sort((a, b) => (a.hitouts > b.hitouts) ? -1 : (a.hitouts < b.hitouts) ? 1 : 0);
    },
    getTacklers(state) {
      return [...state.players].sort((a, b) => (a.tackles > b.tackles) ? -1 : (a.tackles < b.tackles) ? 1 : 0);
    },
    getGoalKickers(state) {
      return [...state.players].sort((a, b) => (a.goals > b.goals) ? -1 : (a.goals < b.goals) ? 1 : 0);
    },
    getStars(state) {
      return [...state.players].sort((a, b) => (a.star > b.star) ? -1 : (a.star < b.star) ? 1 : 0);
    }
  }
}
