<template>
  <div class="player-list">
    <h1>{{ title }}</h1>
    <table>
      <tbody>
      <tr class="player"
          v-for="p in players"
          :id="position + '--' + p.id"
          :key="p.id"
          :title="(p.draftedBy ? p.draftedBy + ' for ' + p.cents/100 + ' ': '') + p.comment"
          @click="playerSelected(p)"
          :class="{
            'in-position': p.pos && p.pos.toUpperCase() === position.toUpperCase(),
            unavailable: p.priority > 500
          }">
        <td class="name"
            :class="{
              selected: selectedPlayer === p,
              'has-comment': p.comment
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
        // scroll player in to view
        const el = document.getElementById(this.position + '--' + player.id)
        const rect = el.getBoundingClientRect();
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
        if (player !== null) this.selectAndScrollToPlayer(player)
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
    padding: 0 0 0 4px;
    margin: 0;
    background-color: lightgray;
  }

  .player-list tbody {
    // make only the table body scroll within a view port
    display: block;
    width: 280px;
    height: 330px;
    overflow: scroll;
  }

  .player td {
    font-size: 0.7em;
  }

  .aflClub,
  .m,
  .g,
  .s {
    border-right: thin dashed gray;
  }

  .highlight {
    font-weight: bold;
    text-decoration: underline black double;
  }

  .selected {
    background-color: darkolivegreen;
    color: white;
  }

  .in-position {
    background-color: gold;
  }

  .unavailable {
    background-color: gray;
    text-decoration: line-through;
  }

  .has-comment::after {
    content: "≈"
  }
</style>
