<!-- a Vue component consists of a template, a Vue 'class' (script), and style -->
<template>
  <div class="player-line">
    <span>{{name}}</span>
    <span>{{club}}</span>
    <span class="label">k</span><span class="stat">{{k}}</span>
    <span class="label">h</span><span class="stat">{{h}}</span>
    <span class="label">m</span><span class="stat">{{m}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Jo Black',
      club: 'ADL',
      k: 13.7,
      h: 12.6,
      m: 3.6
    }
  }
}
</script>

<style scoped lang="scss">
.label {
  color: red;
}
.stat {
  color: green;
}
</style>
