<template>
  <div class="player-list">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="p in players" :key="p.id" class="player" @click="selectPlayer(p)">
        <span class="name" v-bind:class="{selected: selectedPlayer === p}">{{p.name}}</span>
        <span class="aflClub">({{p.aflClub.substring(0, 4)}})</span>
        <span class="stats">
          <span class="k" v-bind:class="{highlight: highlightPosition == 'k'}">{{p.kicks / 10}}</span>
          <span class="h" v-bind:class="{highlight: highlightPosition == 'h'}">{{p.handballs / 10}}</span>
          <span class="m" v-bind:class="{highlight: highlightPosition == 'm'}">{{p.marks / 10}}</span>
          <span class="r" v-bind:class="{highlight: highlightPosition == 'r'}">{{p.hitouts / 10}}</span>
          <span class="t" v-bind:class="{highlight: highlightPosition == 't'}">{{p.tackles / 10}}</span>
          <span class="g" v-bind:class="{highlight: highlightPosition == 'g'}">{{p.goals / 10}}</span>
          <span class="s" v-bind:class="{highlight: highlightPosition == 's'}">{{p.star / 10}}</span>
          <span class="games">{{p.played}}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    props: {
      title: {
        required: true,
        type: Object
      },
      highlightPosition: {
        required: true,
        type: Object
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

  .player-list ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    width: 300px;
    height: 330px;
    overflow: scroll;
  }

  .name {
    font-size: 0.7em;
  }

  .aflClub {
    font-size: 0.6em;
  }

  .stats {
    font-size: 0.5em;
  }

  .highlight {
    font-weight: bold;
    font-size: 1.2em;
  }

  .games {
    font-weight: bold;
  }

  .selected {
    background-color: crimson;
  }
</style>
