<template>
  <div class="player-list">
    <h1>{{ title }}</h1>
    <table>
      <tbody>
      <tr class="player"
          v-for="p in players"
          :id="position + '--' + p.id"
          :key="p.id"
          @click="playerSelected(p)"
          :class="{
            avoid: p.priority > 500,
            want:  p.priority < 500,
            other:  p.draftedBy != '' && p.draftedBy != 'Ruiboys',
            mine: p.draftedBy == 'Ruiboys'
          }">
        <td class="name" :class="{selected: selectedPlayer === p}">{{p.name}}</td>
        <td class="aflClub" :title="p.aflClub">{{p.aflClub.substring(0, 2)}}</td>
        <td class="k" :class="{highlight: position == 'k'}">{{p.kicks / 10}}</td>
        <td class="h" :class="{highlight: position == 'h'}">{{p.handballs / 10}}</td>
        <td class="m" :class="{highlight: position == 'm'}">{{p.marks / 10}}</td>
        <td class="r" :class="{highlight: position == 'r'}">{{p.hitouts / 10}}</td>
        <td class="t" :class="{highlight: position == 't'}">{{p.tackles / 10}}</td>
        <td class="g" :class="{highlight: position == 'g'}">{{p.goals / 10}}</td>
        <td class="s" :class="{highlight: position == 's'}">{{p.star / 10}}</td>
        <td class="games">{{p.played}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    props: {
      title: {
        required: true,
        type: String
      },
      position: {
        required: true,
        type: String
      },
      players: {
        required: true,
        type: Array
      },
      playerToSelect: {
        required: false,
        type: Object
      }
    },

    data () {
      return {
        selectedPlayer: null
      }
    },

    methods: {
      playerSelected(player) {
        this.selectedPlayer = player
        this.$emit('playerSelected', player);
      },

      selectAndScrollToPlayer(player) {
        this.selectedPlayer = player
        // scroll player in to view
        var el = document.getElementById(this.position + '--' + player.id)
        var rect = el.getBoundingClientRect();
        if (rect.bottom > window.innerHeight) {
          el.scrollIntoView(false);
        }
        if (rect.top < 0) {
          el.scrollIntoView();
        }
      }
    },

    watch: {
      playerToSelect (player) {
        this.selectAndScrollToPlayer(player)
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
    width: 300px;
    height: 330px;
    overflow: scroll;
  }

  .player td {
    font-size: 0.6em;
  }

  .highlight {
    font-weight: bold;
    font-size: 1.2em;
  }

  .selected {
    background-color: darkolivegreen;
    color: white;
  }

  .want {
    background-color: gold;
  }

  .mine {
    background-color: royalblue;
    color: yellow;
  }

  .avoid {
    background-color: lightgray;
  }

  .other {
    background-color: darkgray;
  }

  // three selectors below add row numbers at start of each table row
  .player-list table {
    counter-reset: rowNumber;
  }

  .player-list table tr {
    counter-increment: rowNumber;
  }

  .player-list table tr td:first-child::before {
    content: counter(rowNumber);
    min-width: 1em;
    margin-right: 0.5em;
    font-size: 0.5em;
  }
</style>
