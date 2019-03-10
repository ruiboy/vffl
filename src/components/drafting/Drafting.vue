<template>
  <div class="drafting">
    <button @click="loadDraftData">Refresh</button>
    <h1 v-show="loadingStatus">Loading</h1>
    <player-list v-on:selectPlayer="selectPlayer($event)" v-bind:selPlayer="selPlayer"></player-list>
    <player-list-2 v-bind:selPlayer="selPlayer"></player-list-2>
    <player v-show="selPlayer != null" v-bind:player="selPlayer"></player>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'
  import PlayerList from './PlayerList.vue'
  import PlayerList2 from './PlayerList2.vue' // temp
  import Player from './Player.vue'

  export default {
    components: {
      'player-list': PlayerList,
      'player-list-2': PlayerList2,
      'player': Player
    },

    data () {
      return {
        selPlayer: null
      }
    },

    methods: {
      ...mapActions([
        'loadDraftData'
      ]),
      selectPlayer(player) {
        this.selPlayer = player;
      }
    },

    computed: {
      ...mapState({
        loadingStatus: state => state.drafting.loadingStatus
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
