<template>  
<div id="app">

  <router-view/>
  
</div>
</template>

<style lang="scss" id="document">

@import "~@/styles/external";

@import "~@/styles/config/scale";
@import "~@/styles/config/fonts";

@import "~@/styles/extend/themes";

:root {
  font-size: $root;
  @media (max-width:68rem){
    font-size: calc(13pt + .33vmin);
  }
}

* {
  box-sizing: border-box;
  margin: unset;
  padding: unset;
}

html, body {
  margin: 0;
  padding: 0;
}
html {
  font-family: "futura-pt", Futura, sans-serif;
  // font-size: $root;
}
body {
  font-size: 1em;
  // font-size: 100%;
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
  margin: 1rem 0;
}

pre, code {
  font-family: $ff-mono;
}

</style>

<style id="UiIcon@css">
img.UiIcon {
  width: 2rem;
  height: 2rem;
}
</style>