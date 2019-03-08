<template>
  <div class="drafting">
    <h1>gonna do some drafting</h1>
    <div>
      <!--{{$store.getters.getGoalies}}-->
      {{goalies}}
      x
      {{$store.state.module1.goalies}}
      y
      {{getGoaliesPlus}}
    </div>
    <hr/>
    <button @click="loadTeamData">Get Team Data</button>
    <h1 v-if="loadingStatus">Loading</h1>
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
      // make use of mapActions helper and ES6 spread operator to map actions
      ...mapActions([
        'loadTeamData' // map `this.loadTeamData()` to `this.$store.dispatch('loadTeamData')`
      ])
    },

    computed: {
      ...mapGetters([
        'getGoaliesPlus'
      ]),
      ...mapState({
        teamData: state => state.module1.teamData, // map to state in module1
        loadingStatus: state => state.module1.loadingStatus
      })
    }
  }
</script>

<style scoped lang="scss">
</style>
