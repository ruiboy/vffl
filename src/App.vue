<template>
  <div id="app">
    <app-header/>
    <!--
      passing props to component: pass kickers as kickers
      listening for events from component: listen for addPlayer and call addPlayersToKickers
     -->
    <multi-player-list v-bind:kickers="kickers" v-on:addPlayer="addPlayerToKickers($event)"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    'app-header': Header
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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
