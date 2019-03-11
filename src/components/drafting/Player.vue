<template>
  <div class="player">
    <ul>
      <li v-for="(value, key) in player">
        {{key}}: {{value}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      player: {
        required: false,
        type: Object
      }
    }
  }
</script>

<style scoped lang="scss">
  .player {
    border: thin black dashed;
  }
</style>
