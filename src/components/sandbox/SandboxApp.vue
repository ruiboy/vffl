<template>
  <div class="sandbox">
    <!--
      Can receive params from the router ... see router/index.js for where this is passed.
      They can also become props, with attendant validation and so on, as long as the route (in router/index.js)
      defines   props: true   and this component defines to receive them below.
      and they are
    -->
    <p>Route params: {{$route.params.param1}} ... also appearing as props: {{param1}}</p>
    <!--
      passing props to child component: pass kickers as kickers
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

    // receive route params as props (see above)
    props: {
      'param1': {
        required: true,
        type: String
      }
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
