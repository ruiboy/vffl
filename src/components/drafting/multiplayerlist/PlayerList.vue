<template>
  <div class="player-list">
    <h1>{{ title }}</h1>
    <table>
      <tbody :id="position + '-tbody'">
      <tr class="player"
          v-for="p in players"
          :id="position + '--' + p.id"
          :key="p.id"
          :title="(p.draftedBy.length > 0 ? p.draftedBy + ' for ' + p.cents/100 + ' ': '') + p.comment"
          @click="playerSelected(p)"
          :class="{
            avoid: p.priority > 500,
            want1: p.priority === 1,
            want2: p.priority === 2,
            want3: p.priority === 3,
            want4: p.priority === 4,
            want5: p.priority === 5,
            mine:  p.draftedBy === 'Ruiboys',
            other: p.draftedBy !== 'Ruiboys' && p.draftedBy !== ''
          }">
        <td class="name"
            :class="{
              selected: selectedPlayer === p,
              'has-comment': p.comment.length > 0
            }">
          {{p.name}}
        </td>
        <td class="aflClub" :title="p.aflClub">{{p.aflClub.substring(0, 2)}}</td>
        <td class="k" :class="{highlight: position === 'k'}">{{p.kicks / 10}}</td>
        <td class="h" :class="{highlight: position === 'h'}">{{p.handballs / 10}}</td>
        <td class="m" :class="{highlight: position === 'm'}">{{p.marks / 10}}</td>
        <td class="r" :class="{highlight: position === 'r'}">{{p.hitouts / 10}}</td>
        <td class="t" :class="{highlight: position === 't'}">{{p.tackles / 10}}</td>
        <td class="g" :class="{highlight: position === 'g'}">{{p.goals / 10}}</td>
        <td class="s" :class="{highlight: position === 's'}">{{p.star / 10}}</td>
        <td class="games">{{p.played}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
        if (player !== null) {
          // scroll player in to view
          const el = document.getElementById(this.position + '--' + player.id)
          const rect = el.getBoundingClientRect();
          if (rect.bottom > window.innerHeight) {
            el.scrollIntoView(false);
          }
          if (rect.top < 0) {
            el.scrollIntoView();
          }
        } else {
          // scroll to top
          document.getElementById(this.position + '-tbody').scrollTop = 0
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
    font-size: 0.8em;
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
    font-size: 0.7em;
  }

  .highlight {
    font-weight: bold;
  }

  .selected {
    background-color: darkolivegreen;
    color: yellow;
  }

  .want1 {
    background-color: #ffd711;
  }

  .want2 {
    background-color: #ffe411;
  }

  .want3 {
    background-color: #ffec44;
  }

  .want4 {
    background-color: #ffef77;
  }

  .want5 {
    background-color: #fff699;;
  }

  .mine {
    background-color: royalblue;
    color: gold;
  }

  .avoid {
    background-color: gray;
    text-decoration: line-through;
  }

  .other {
    background-color: darkgray;
  }

  .has-comment::after {
    content: "≈"
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
    font-size: 0.6em;
  }
</style>
