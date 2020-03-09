<template>
  <div class="player-count">
    <span class="club">Adel</span><span class="count">{{playerCount['Adelaide']}}</span>
    <span class="club">Bris</span><span class="count">{{playerCount['Brisbane Lions']}}</span>
    <span class="club">Carl</span><span class="count">{{playerCount['Carlton']}}</span>
    <span class="club">Coll</span><span class="count">{{playerCount['Collingwood']}}</span>
    <span class="club">Ess</span><span class="count">{{playerCount['Essendon']}}</span>
    <span class="club">Fre</span><span class="count">{{playerCount['Fremantle']}}</span>
    <span class="club">Geel</span><span class="count">{{playerCount['Geelong']}}</span>
    <span class="club">GCS</span><span class="count">{{playerCount['Gold Coast Suns']}}</span>
    <span class="club">GWS</span><span class="count">{{playerCount['Greater Western Sydney']}}</span>
    <span class="club">Haw</span><span class="count">{{playerCount['Hawthorn']}}</span>
    <span class="club">NM</span><span class="count">{{playerCount['Kangaroos']}}</span>
    <span class="club">Melb</span><span class="count">{{playerCount['Melbourne']}}</span>
    <span class="club">Port</span><span class="count">{{playerCount['Port Adelaide']}}</span>
    <span class="club">Rich</span><span class="count">{{playerCount['Richmond']}}</span>
    <span class="club">SK</span><span class="count">{{playerCount['St Kilda']}}</span>
    <span class="club">Syd</span><span class="count">{{playerCount['Sydney Swans']}}</span>
    <span class="club">WCE</span><span class="count">{{playerCount['West Coast Eagles']}}</span>
    <span class="club">WB</span><span class="count">{{playerCount['Western Bulldogs']}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      players: {
        required: true,
        type: Array
      }
    },

    computed: {
      playerCount () {
        let ar = [];
        this.players.forEach(p => ar[p.aflClub] ? ar[p.aflClub]++ : ar[p.aflClub] = 1);
        return ar;
      }
    }
  }
</script>

<style scoped lang="scss">
  .player-count {
    margin: 1px 1px 1px 1px;
    font-size: 0.9em;
  }
  
  .club {
    padding-right: 3px;
  }

  .count {
    padding-right: 10px;
    font-weight: bold;
  }
</style>
