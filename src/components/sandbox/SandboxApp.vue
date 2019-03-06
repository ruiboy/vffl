<template>
  <div class="sandbox">
    <!--
      passing props to component: pass kickers as kickers
      listening for events from component: listen for addPlayer and call addPlayersToKickers
    -->
    <sandbox-multi-player-list v-bind:kickers="kickers" v-on:addPlayer="addPlayerToKickers($event)"/>
  </div>
</template>

<script>
  import SandboxMultiPlayerList from './SandboxMultiPlayerList.vue'

  export default {
    components: {
      'sandbox-multi-player-list': SandboxMultiPlayerList
    },

    data () {
      return {
        kickers: [
          {
            id: 1,
            name: 'jo',
            stat: 16.7
          },
          {
            id: 2,
            name: 'jen',
            stat: 15.3
          }
        ]
      }
    },

    methods: {
      addPlayerToKickers(name) {
        this.kickers.push({
          id: this.kickers.length + 1,
          name: name,
          stat: 12.1
        })
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
