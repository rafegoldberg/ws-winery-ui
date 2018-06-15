<template>

  <ul id="nav">
    <router-link tag="li" to="/">
      <a>Home</a>
    </router-link>
    <router-link tag="li" to="/alt">
      <a>Alt</a>
    </router-link>
  </ul>

</template>

<style lang="scss">
#nav {
  display: flex;
  justify-content: center;
  margin: unset;
  padding: unset;
  > * {
    padding: 7px;
    list-style-type: none;
  }
}
</style>
