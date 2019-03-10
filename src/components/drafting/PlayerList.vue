<template>
  <div class="player-list">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="p in players" :key="p.id" class="player" @click="selectPlayer(p)">
        <span class="name" v-bind:class="{selected: selPlayer === p}">{{p.name}}</span>
        <span class="aflClub">({{p.aflClub.substring(0, 4)}})</span>
        <span class="stats">
          <span class="k highlight">{{p.kicks / 10}}</span>
          <span class="h">{{p.handballs / 10}}</span>
          <span class="m">{{p.marks / 10}}</span>
          <span class="h">{{p.hitouts / 10}}</span>
          <span class="t">{{p.tackles / 10}}</span>
          <span class="g">{{p.goals / 10}}</span>
          <span class="s">{{p.star / 10}}</span>
          <span class="games">{{p.played}}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    props: {
      selPlayer: {
        required: false,
        type: Object
      }
    },

    data () {
      return {
        title: 'Kicks'
      }
    },

    methods: {
      selectPlayer(payload)
      {
        // emit an event up to the parent
        this.$emit('selectPlayer', payload);
      }
    },

    computed: {
      ...mapGetters({
        players: 'getKickers'
      })
    }
  }
</script>

<style scoped lang="scss">
  .player-list {
  }

  .player-list h1 {
    font-size: 1em;
    margin: 0;
  }

  .player-list ul {
    list-style-type: none;
    width: 300px;
    margin: 0px;
    padding: 0px;
    height: 300px;
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
  }

  .games {
    font-weight: bold;
  }

  .selected {
    background-color: crimson;
  }
</style>
