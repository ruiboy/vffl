<template>
  <div class="header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'vffl - draft day'
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  text-align: center;
  color: darkgray;
  background-color: lightblue;
}
.header.h1 {
  padding: 3px;
}
</style>
