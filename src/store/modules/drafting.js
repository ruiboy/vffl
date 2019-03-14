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
    },

    SET_PLAYER_POSITION(state, payload) {
      payload.player.pos = payload.value
    },

    SET_PLAYER_PRIORITY(state, payload) {
      payload.player.priority = payload.value
    },

    SET_PLAYER_COMMENTS(state, payload) {
      payload.player.comments = payload.value
    },

    SET_PLAYER_DRAFTED_BY(state, payload) {
      payload.player.draftedBy = payload.value
    },

    SET_PLAYER_CENTS(state, payload) {
      payload.player.cents = payload.value
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

    setPlayerPos(context, payload) {
      context.commit('SET_PLAYER_POSITION', payload)
    },

    setPlayerPriority(context, payload) {
      context.commit('SET_PLAYER_PRIORITY', payload)
    },

    setPlayerComments(context, payload) {
      context.commit('SET_PLAYER_COMMENTS', payload)
    },

    setPlayerDraftedBy(context, payload) {
      context.commit('SET_PLAYER_DRAFTED_BY', payload)
    },

    setPlayerCents(context, payload) {
      context.commit('SET_PLAYER_CENTS', payload)
    },
  },

  getters: {
    getClubPlayers: (state) => (clubName) => {
      return state.players.filter(a => a.draftedBy == clubName)
    }
  }
}
