<template>
  <div class="player-list">
    <table>
      <tbody>
      <tr class="player"
          v-for="p in players"
          :id="p.id"
          :key="p.id"
          @click="playerSelected(p)"
          :class="{
           'no-position': p.pos.length === 0,
            unavailable: p.priority > 500
          }">
        <td class="name">{{p.name}}</td>
        <td class="afl-club" :title="p.aflClub">{{p.aflClub.substring(0, 4)}}</td>
        <td class="pos">{{p.pos}}</td>
        <td class="paid">{{p.cents / 100}}</td>
        <td class="drafted-ts">{{new Date(p.draftedTs).toLocaleTimeString()}}</td>
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

    methods: {
      playerSelected(player) {
        this.$emit('playerSelected', player);
      }
    }
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
    width: 240px;
    height: 694px;
    overflow: scroll;
  }

  .player td {
    font-size: 0.7em;
  }

  .no-position {
    background-color: #ffd711;
  }

  .unavailable {
    background-color: #777777;
    text-decoration: line-through;
  }
</style>
