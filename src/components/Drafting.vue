<template>
  <div class="drafting">
    <h1>gonna do some drafting</h1>
    <div>
      <!--{{$store.getters.getGoalies}}-->
      {{goalies}}
      x
      {{$store.state.goalies}}
      y
      {{$store.getters.getGoaliesPlus}}
    </div>
    <hr />
    <button @click="$store.dispatch('loadTeamData')">Get Team Data</button>
    <h1 v-if="$store.state.loadingStatus">Loading</h1>
    <p> {{$store.state.teamData}} </p>
    <hr />
    <p> Bitcoin: {{bitcoin}} </p>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data () {
      return {
        teamData: '',
        bitcoin: '',
        goalies: 'peter carey'
      }
    },

    mounted () {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.bitcoin = response))
        .catch(error => console.log(error));
    }
  }
</script>

<style scoped lang="scss">
  .drafting.h1 {
    padding: 3px;
  }
</style>
