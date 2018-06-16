<template>  
<div id="app">

  <router-view/>
  
</div>
</template>

<style lang="scss">
@import "~@/assets/fonts/Butler/spec.css";
@import url("https://use.typekit.net/bpm5ocx.css");

* {
  box-sizing: border-box;
}

html {
  font-family: Futura PT, Futura, sans-serif;
  font-size: 14pt;
  line-height: 1.6;
  &,body {
    margin: 0;
    padding: 0;
  }
}

h1, h2, h3, h4, h5, h6{
  line-height: 1.1;
  margin: unset;
}
img {
  display: block;
  margin: 0;
  max-width: 100%;
  height: auto;
}
pre, code {
  font-family: Source Code Pro;
}
</style>
