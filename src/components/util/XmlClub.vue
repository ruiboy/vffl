<template>
  <div class="club">
    <h1>{{name}}</h1>
    <h2>XML for exaflstats:</h2>
    <div class="xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;year name="{{new Date().getFullYear()}}"&gt;
  &lt;club name="{{name}}"&gt;<template v-for="p in players">
    &lt;player name="{{p.name}}" club="{{p.aflClub}}" cost="{{p.cents}}"&gt;&lt;comment&gt;{{p.comment}}&lt;/comment&gt;&lt;/player&gt;</template>
  &lt;/club&gt;
&lt;/year&gt;</div>
  </div>

</template>

<script>
  export default {
    props: {
      name: {
        required: true,
        type: String
      },
      players: {
        required: true,
        type: Array
      }
    },

    computed: {
    },

    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .club {
    font-size: 0.8em;
  }

  .club h1 {
    font-size: 1.2em;
    background-color: lightgray;
    padding: 3px;
    margin: 20px 0px 0px 0px;
  }

  .club h2 {
    font-size: 1em;
    padding: 3px;
  }

  .club .xml{
    border: thin black solid;
    margin: 5px;
    padding: 5px;
    white-space: pre;
  }

</style>
