<template>
  <div class="drafting">
    <h1 v-show="loadingStatus">Loading...</h1>
    <multi-player-list :players="players"></multi-player-list>
  </div>
</template>

<script>
  import MultiPlayerList from '../multiplayerlist/MultiPlayerList.vue'
  import {mapState} from 'vuex'

  export default {
    components: {
      'multi-player-list': MultiPlayerList
    },

    computed: {
      ...mapState({
        loadingStatus: state => state.drafting.loadingStatus,
        players: state => state.drafting.players
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
