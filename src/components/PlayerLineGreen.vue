<!-- a Vue component consists of a template, a Vue 'class' (script), and style -->
<template>
  <div class="player-line">
    <span>Player line GREEN</span>
    <input type="text"/>
    <div id="quarks">
      Up <input type="checkbox" value="up" v-model="quarks"/>
      Down <input type="checkbox" value="down" v-model="quarks"/>
      Charm <input type="checkbox" value="charm" v-model="quarks"/>
      You chose: {{quarks}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quarks: []
    }
  }
}
</script>

<style scoped lang="scss">
.player-line {
  border: thick green solid;
}
</style>
