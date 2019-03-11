<template>
  <div class="player-list">
    <h1>{{ title }}</h1>
    <table>
      <tbody>
      <tr class="player"
          v-for="p in players"
          :id="highlightPosition + '--' + p.id"
          :key="p.id"
          @click="selectPlayer(p)">
        <td class="name" :class="{selected: selectedPlayer === p}">{{p.name}}</td>
        <td class="aflClub">({{p.aflClub.substring(0, 4)}})</td>
        <td class="k" :class="{highlight: highlightPosition == 'k'}">{{p.kicks / 10}}</td>
        <td class="h" :class="{highlight: highlightPosition == 'h'}">{{p.handballs / 10}}</td>
        <td class="m" :class="{highlight: highlightPosition == 'm'}">{{p.marks / 10}}</td>
        <td class="r" :class="{highlight: highlightPosition == 'r'}">{{p.hitouts / 10}}</td>
        <td class="t" :class="{highlight: highlightPosition == 't'}">{{p.tackles / 10}}</td>
        <td class="g" :class="{highlight: highlightPosition == 'g'}">{{p.goals / 10}}</td>
        <td class="s" :class="{highlight: highlightPosition == 's'}">{{p.star / 10}}</td>
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
      highlightPosition: {
        required: true,
        type: String
      },
      players: {
        required: true,
        type: Array
      }
    },

    methods: {
      selectPlayer(payload)
      {
        this.$store.dispatch('selectPlayer', payload)
      }
    },

    computed: {
      ...mapState({
        selectedPlayer: state => state.drafting.selectedPlayer,
      })
    },

    mounted () {
      // scroll selected players in to view, but only if neede
      this.$store.subscribe((mutation, state) => {
        if (mutation.type == 'SET_SELECTED_PLAYER') {
          var el = document.getElementById(this.highlightPosition + '--' + state.drafting.selectedPlayer.id)
          var rect = el.getBoundingClientRect();
          console.log(this.highlightPosition + ' ' + rect.top + ' '  + rect.y)
          if (rect.bottom > window.innerHeight) {
            el.scrollIntoView(false);
          }
          if (rect.top < 0) {
            el.scrollIntoView();
          }
        }
      })
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
    background-color: crimson;
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
