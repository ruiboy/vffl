<template>
  <div class="drafting">
    <h1>gonna do some drafting</h1>
    <div>
      {{goalies}}
      x
      {{$store.state.module1.goalies}}
      y
      {{getGoaliesPlus}}
    </div>
    <hr/>
    <button @click="loadTeamData('Ruiboys')">Get Team Data</button>
    <h1 v-show="loadingStatus">Loading</h1>
    <p> {{teamData}} </p>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        goalies: 'peter carey'
      }
    },

    methods: {
      // make use of mapActions helper and ES6 spread operator to map actions in store to local methods
      // this way, the template can just deal with local stuff, and here we can map the local stuff to whatever...
      // the mapActions call returns functions which get 'spread' (added) in to the containing 'methods' object
      ...mapActions([
        'loadTeamData' // map `this.loadTeamData()` to `this.$store.dispatch('loadTeamData')`
      ])
    },

    // use computed properties to reach out to store and get stuff
    computed: {
      ...mapGetters([
        'getGoaliesPlus'   // map `this.getGoaliesPlus` to `this.$store.getters.getGoaliesPlus`
      ]),
      ...mapState({
        teamData: state => state.module1.teamData,   // map `teamData` to `this.$store.state.module1.teamData`
        loadingStatus: state => state.module1.loadingStatus
      })
    }
  }
</script>

<style scoped lang="scss">
</style>
