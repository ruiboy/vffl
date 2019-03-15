<template>
  <div class="header">
    <ul>
      <li>
        <router-link to="/drafting">Drafting</router-link>
      </li>
      <li>
        <router-link to="/draftorder">Drafted</router-link>
      </li>
      <li>
        <router-link to="/club/Austins">Austins</router-link>
      </li>
      <li>
        <router-link to="/club/Cheetahs">Cheetahs</router-link>
      </li>
      <li>
        <router-link to="/club/Fred">Fred</router-link>
      </li>
      <li>
        <router-link to="/club/Ruiboys">Ruiboys</router-link>
      </li>
      <li>
        <router-link to="/club/Slashers">Slashers</router-link>
      </li>
      <li>
        <router-link to="/club/THC">THC</router-link>
      </li>
      <li>
        <router-link to="/sandbox/value123">Sandbox</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
  .header {
    background-color: darkblue;
    color: white;
  }

  .header a {
    color: white;
  }

  .header > ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .header > ul > li {
    flex-grow: 1;
    flex-basis: 100px;
    padding: 0px;
  }
</style>
