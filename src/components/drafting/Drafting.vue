<template>
  <div class="drafting">
    <button @click="loadDraftData">Refresh</button>
    <h1 v-show="loadingStatus">Loading</h1>
    <player-list></player-list>
    <player-list-2></player-list-2>
    <player
      v-if="selectedPlayer != null"
      :player="selectedPlayer"></player>
  </div>
</template>

<script>
  import PlayerList from './PlayerList.vue'
  import PlayerList2 from './PlayerList2.vue' // temp
  import Player from './Player.vue'
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'

  export default {
    components: {
      'player-list': PlayerList,
      'player-list-2': PlayerList2,
      'player': Player
    },

    methods: {
      ...mapActions([
        'loadDraftData'
      ])
    },

    computed: {
      ...mapState({
        loadingStatus: state => state.drafting.loadingStatus,
        selectedPlayer: state => state.drafting.selectedPlayer
      })
    },

    mounted () {
      this.$store.dispatch('loadDraftData')
    }
  }
</script>

<style scoped lang="scss">
  .drafting div {
    float: left;
  }
</style>
