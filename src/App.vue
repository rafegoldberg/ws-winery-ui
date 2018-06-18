<template>  
<div id="app">

  <router-view/>
  
</div>
</template>

<style lang="scss" id="document">

@import "~@/styles/external";

@import "~@/styles/config/scale";
@import "~@/styles/config/fonts";

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}
html {
  font-family: "futura-pt", Futura, sans-serif;
  font-size: Size(1);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6{
  line-height: 1.1;
  margin: unset;
}
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

p, ul ol, dl, figure, blockquote {
  max-width: 42em;
}

pre, code {
  font-family: $ff-mono;
}

@import "~@/styles/extends/themes";

</style>
