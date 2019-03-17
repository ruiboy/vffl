import axios from "axios";

function savePlayer(player) {
  axios
    .post('http://localhost:8090/drafting/updatePlayer',
      player,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
    .catch(error => {
      console.log(error)
    })
}

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

    SET_AFL_CLUB(state, payload) {
      payload.player.aflClub = payload.value
    },

    SET_PLAYER_POSITION(state, payload) {
      payload.player.pos = payload.value
    },

    SET_PLAYER_PRIORITY(state, payload) {
      payload.player.priority = payload.value
    },

    SET_PLAYER_COMMENT(state, payload) {
      payload.player.comment = payload.value
    },

    SET_PLAYER_DRAFTED_BY(state, payload) {
      payload.player.draftedBy = payload.value
      payload.player.draftedTs = payload.player.draftedBy.length > 0 ?  Date.now() : ''
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

    setAflClub(context, payload) {
      context.commit('SET_AFL_CLUB', payload)
      savePlayer(payload.player)
    },

    setPlayerPos(context, payload) {
      context.commit('SET_PLAYER_POSITION', payload)
      savePlayer(payload.player)
    },

    setPlayerPriority(context, payload) {
      context.commit('SET_PLAYER_PRIORITY', payload)
      savePlayer(payload.player)
    },

    setPlayerComment(context, payload) {
      context.commit('SET_PLAYER_COMMENT', payload)
      savePlayer(payload.player)
    },

    setPlayerDraftedBy(context, payload) {
      context.commit('SET_PLAYER_DRAFTED_BY', payload)
      savePlayer(payload.player)
    },

    setPlayerCents(context, payload) {
      context.commit('SET_PLAYER_CENTS', payload)
      savePlayer(payload.player)
    }
  },

  getters: {
    getClubPlayers: (state) => (clubName) => {
      return state.players.filter(a => a.draftedBy === clubName)
        .sort((a, b) => (a.draftedTs < b.draftedTs) ? -1 : (a.draftedTs > b.draftedTs) ? 1 : 0)
    },

    getDraftedPlayers: (state) => {
      return state.players
        .filter(p => p.draftedBy.length > 0)
        .sort((a, b) => (a.draftedTs < b.draftedTs) ? -1 : (a.draftedTs > b.draftedTs) ? 1 : 0)
    }
  }
}

