<template>
  <div class="header">
    <h1>vffl</h1>
    <ul>
      <li>
        <router-link to="drafting">Drafting</router-link>
      </li>
      <li>
        <router-link to="sandbox">Sandbox</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
  .header {
    background-color: lightblue;
  }

  .header.h1 {
    float: left;
    color: darkblue;
    padding: 3px;
  }

  .header > ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  .header > ul > li {
    flex-grow: 1;
    flex-basis: 200px;
    padding: 1px;
  }
</style>
