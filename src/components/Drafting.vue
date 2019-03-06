<template>
  <div class="drafting">
    <h1>gonna do some drafting</h1>
    <p> Ruiboys: {{ruiboys}} </p>
    <p> Bitcoin: {{bitcoin}} </p>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data () {
      return {
        ruiboys: '',
        bitcoin: ''
      }
    },

    mounted () {
      axios
        .get('http://localhost:8090/drafting/getTeam/Ruiboys')
        .then(response => (this.ruiboys = response))
        .catch(error => console.log(error));
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
