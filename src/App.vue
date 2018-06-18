<template>  
<div id="app">

  <router-view/>
  
</div>
</template>

<style lang="scss" id="document">

@import "~@/styles/external";

@import "~@/styles/config/scale";
@import "~@/styles/config/fonts";

@import "~@/styles/theme/light";
@import "~@/styles/theme/cream";
@import "~@/styles/theme/dark";

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}
html {
  font-family: "futura-pt", Futura, sans-serif;
  font-size: Scale();
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
</style>
<style lang="scss" id="ui.panel">
@import "~@/styles/config/scale";
.UiPanel {

  display: flex;
  justify-content: stretch;
  align-items: center;
  flex-flow: nowrap row;
  > * { flex: 1 }
  > :only-child {
    flex: 0 $legible;
    margin: 0 auto
  }
  // display: grid;
  // grid-template-columns: repeat(2,1fr);
  // grid-gap: 0;
}
</style>
<style lang="scss" id="ui.box">
.UiBox {
  align-self: center;
  padding: 4em 3em;
}
</style>
<style lang="scss" id="ui.header">
@import "~@/styles/config/fonts";
@import "~@/styles/config/colors";
.UiHeader {
  font-family: $ff-serif;
  font-weight: 300;
  color: Color(gold);
}
</style>
<style lang="scss" id="ui.button">
@import "~@/styles/config/fonts";
@import "~@/styles/config/colors";
.UiButton {
  font-family: $ff-sans;
  font-weight: 500;
  color: Color(gallery);
  background: Color(gold);
  padding: .8em 1.5em;
  border: none;
  font-size: .7rem;
  letter-spacing: .1em;
  text-transform: uppercase;
}
</style>