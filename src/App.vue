<template>  
<div id="app">

  <router-view/>
  
</div>
</template>

<style lang="scss" id="document">

@import "~@/styles/external";
@import "~@/styles/var/fonts";

@import "~@/styles/theme/dark";
@import "~@/styles/theme/cream";

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}
html {
  font-family: "futura-pt", Futura, sans-serif;
  font-size: 14pt;
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
pre, code {
  font-family: $ff-mono;
}
</style>
<style lang="scss" id="ui.panel">
.UiPanel {

  display: flex;
  justify-content: stretch;
  align-items: center;
  flex-flow: nowrap row;
  > * { flex: 0 1 50% }
  > :only-child { margin: 0 auto } 
  // display: grid;
  // grid-template-columns: repeat(2,1fr);
  // grid-gap: 0;
}
</style>
<style lang="scss" id="ui.box">
.UiBox {
  align-self: center;
  padding: 4em 2em;
}
</style>
<style lang="scss" id="ui.list">
.UiList {
  padding: unset;
  list-style-type: none;
  > * {
    position: relative;
    padding-left: 1.8em;
    
    & + * { margin-top: .65em }
    
    &:before {
      position: absolute;
      left: 0;
      top: .2em;
      transform: translateY(0%);

      display: inline-block;
      content: " ";
      min-width: 1em;
      min-height: 1em;
      margin: 0 .5em 0 .3em;
      background-image: url("~@/assets/list-bullet.svg");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }    
  }
}
</style>
<style lang="scss" id="ui.header">
@import "~@/styles/var/fonts";
@import "~@/styles/var/colors";
.UiHeader {
  font-family: $ff-serif;
  font-weight: 300;
  color: Color(gold);
}
</style>
<style lang="scss" id="ui.button">
@import "~@/styles/var/fonts";
@import "~@/styles/var/colors";
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