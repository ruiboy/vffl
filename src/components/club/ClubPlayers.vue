<template>
  <div class="player-list">
    <table>
      <tbody>
      <tr class="player"
          v-for="p in players"
          :id="p.id"
          :key="p.id">
        <td class="name">{{p.name}}</td>
        <td class="aflClub" :title="p.aflClub">{{p.aflClub.substring(0, 2)}}</td>
        <td class="pos">{{p.pos}}</td>
        <td class="paid">{{p.cents / 100}}</td>
      </tr>
      </tbody>
    </table>
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
  }
</script>

<style scoped lang="scss">
  .player-list {
    border: thin gray solid;
  }

  .player-list h1 {
    font-size: 0.6em;
    margin: 0;
  }

  .player-list tbody {
    // make only the table body scroll within a view port
    display: block;
    width: 150px;
    height: 694px;
    overflow: scroll;
  }

  .player td {
    font-size: 0.7em;
  }
</style>
