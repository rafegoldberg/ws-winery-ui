<template>
<div class="WineStats">

  <UiHeading :level="1" :scale="4">
    <b v-html="name"/>
  </UiHeading>

  <span style="position: relative">
    <span class="WineStats--label" style="position: absolute; right: 100%; top: 0;">Hold</span>
    <progress :value=".6/*hold*/" max="1"></progress>
    <span class="WineStats--label" style="position: absolute; left: 100%; top: 0;">Drink</span>
  </span>

  <div class="WineStats--drinkWindow">
    <em v-text="drinkWindow" class="WineStats--drinkWindow-date"/>
    <span class="WineStats--label">Optimal Drinking Window</span>
  </div>
  
  <hr>
  
  <div v-if="true/*vineyard*/" class="WineStats--location">
    <div class="WineStats--location-AVA">
      {{AVA.name}}
    </div>
    <router-link :to="`/vineyards/${vineyard.slug}`" class="WineStats--location-vineyard">
      {{vineyard.name}}
    </router-link>
  </div>
  
  <hr>
  
  <span class="WineStats--label">Release Price</span>
  <UiHeading :level="2" :scale="4">
    <span class="WineStats--price">
      <sup>$</sup>{{price}}
    </span>
  </UiHeading>
  
</div>  
</template>

<script>
import UiHeading from "@/components/UI/Heading"

export default {
  name: "WineStats",
  created(){
    // this.$log(this.fields)
  },
  props:{
    name: { type: String },
    fields:{ type:[Object,Array] },
    vineyard:{ type:[String,Object] },
    AVA:{ type:[Number,String,Object] },
  },
  components:{
    UiHeading
  },
  methods:{},
  asyncComputed:{
    price(){ 
      return parseFloat( this.fields['Release-Price'] ).toFixed(0)
    },
    drinkWindow(){
      return this.fields._wpb_drinkwindow
    },
    // async area(){},
    // async vineyard(){},
  }
}
</script>

<style lang="scss">
@import "~@/styles/theme/colors";
@import "~@/styles/theme/fonts";
.WineStats {
  $val: Color(alt);
  $bgc: Color(light);
  text-align: center;
  max-width: 18em;
  .gold {
    color: Color(theme);
  }
  em {
    font-family: $ff-alt;
  }
  hr {
    width: 1px;
    height: 3em;
    max-height: 15vh;
    margin: 0 auto;
    border: solid Color(theme);
    border-width: 0 0 0 1px;
  }
  progress {
    appearance: none;
    margin: .5em 0 0;
    background-color: transparent;
    border: .95px solid $val;
    &[value]::-webkit-progress-bar {
      background-color: $bgc;
    }
    &[value]::-webkit-progress-value {
      background-color: $val;
    }
  }
}
.WineStats {
  &--label {
    padding: 0 .5rem;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: .75rem;
  }
  &--location {
    letter-spacing: .05em;
    line-height: 1.3;
    margin: .6rem 0;
    text-transform: uppercase;
    >*{display: block;}
    &-AVA {
      @extend .WineStats--label;
      color: Color(theme);
    }
    &-vineyard {
      margin-top: .15rem;
      text-decoration: unset;
    }
  }
  &--price {
    position: relative;
    sup { display: none !important }
    &:before {
      content: "$";
      position: absolute;
      top: -.15em;
      right: 100%;
      font-size: .6em;
    }
  }
  &--drinkWindow {
    line-height: 1.3;
    margin: .6em 0 .3em;
    &-date {
      display: block;
    }
  }
}
</style>

<docs>
```vue
<WineStats title="Mock Up" style="margin:2em auto;"/>
```
</docs>