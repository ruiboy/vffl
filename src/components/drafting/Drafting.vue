<template>
  <div class="drafting">
    <button @click="loadDraftData">Refresh</button>
    <h1 v-show="loadingStatus">Loading</h1>
    <player-list></player-list>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'
  import PlayerList from './PlayerList.vue'

  export default {
    components: {
      'player-list': PlayerList
    },

    methods: {
      ...mapActions([
        'loadDraftData'
      ])
    },

    computed: {
      ...mapState({
        loadingStatus: state => state.drafting.loadingStatus
      })
    }
  }
</script>

<style scoped lang="scss">
</style>
