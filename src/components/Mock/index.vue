<template>
<div class="MockComponent">
  
  <div class="MockComponent--media">
    <img src="./media.png">
  </div>
  
  <div class="MockComponent--content">

    <h1 class="UiHeader">{{context.title}}</h1>

    <ul class="UiList">

      <li v-for="(text,i) in context.list" :key="i">
        {{text}}
      </li>
    </ul>
    
    <button class="UiButton">{{context.cta}}</button>
    
  </div>
  
</div>
</template>

<script>
import context from "./context.json";
export default {
  data: () => ({
    context
  })
};
</script>

<style lang="scss" scoped>
.MockComponent {
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: nowrap row;
  }
  > * {
    flex: 0 50%;
  }
  // &--media {}
  &--content {
    padding: 6em;
  }
}
</style>
<style lang="scss">
.UiList {
  padding: unset;
  list-style-type: none;
  > * {
    + * { margin-top: .65em }
    &:before {
      display: inline-block;
      vertical-align: -.1em;
      content: " ";
      min-width: 1em;
      min-height: 1em;
      margin: 0 .4em 0 .2em;
      background-image: url("./list.svg");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}
</style>
<style lang="scss">
@import "~@/styles/fonts";
@import "~@/styles/colors";
.UiHeader {
  font-family: $ff-serif;
  font-weight: 300;
  color: Color(gold);
}
</style>
<style lang="scss">
@import "~@/styles/fonts";
@import "~@/styles/colors";
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
