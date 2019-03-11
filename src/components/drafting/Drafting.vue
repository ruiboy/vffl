<template>
  <div class="drafting">
    <h1 v-show="loadingStatus">Loading...</h1>
    <player-list
      :title="'Kicks'"
      :highlightPosition="'k'"
      :players="this.$store.getters.getKickers">
    </player-list>
    <player-list
      :title="'Handballs'"
      :highlightPosition="'h'"
      :players="this.$store.getters.getHandballers">
    </player-list>
    <player-list
      :title="'Marks'"
      :highlightPosition="'m'"
      :players="this.$store.getters.getMarkers">
    </player-list>
    <player-list
      :title="'Hitouts'"
      :highlightPosition="'r'"
      :players="this.$store.getters.getRuckmen">
    </player-list>
    <player-list
      :title="'Tackles'"
      :highlightPosition="'t'"
      :players="this.$store.getters.getTacklers">
    </player-list>
    <player-list
      :title="'Goals'"
      :highlightPosition="'g'"
      :players="this.$store.getters.getGoalKickers">
    </player-list>
    <player-list
      :title="'Stars'"
      :highlightPosition="'s'"
      :players="this.$store.getters.getStars">
    </player-list>
    <player
      v-if="selectedPlayer != null"
      :player="selectedPlayer">
    </player>
  </div>
</template>

<script>
  import PlayerList from './PlayerList.vue'
  import Player from './Player.vue'
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'

  export default {
    components: {
      'player-list': PlayerList,
      'player': Player
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
