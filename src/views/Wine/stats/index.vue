<template>
<div class="WineStats">

  <UiHeading :level="1" :scale="4" v-html="name"/>

  <span style="position: relative">
    <span class="WineStats--label" style="position: absolute; right: 100%; top: 0;">Hold</span>
    <progress ref="drinkWindow" max="1"></progress>
    <span class="WineStats--label" style="position: absolute; left: 100%; top: 0;">Drink</span>
  </span>

  <div class="WineStats--drinkWindow gold">
    <em v-text="drinkWindow" class="WineStats--drinkWindow-date"/>
    <span class="WineStats--label">Optimal Drinking Window</span>
  </div>
  
  <hr>
  
  <div class="WineStats--location">
    <div
      v-if="AVA"
      class="WineStats--location-AVA"
      >
      <router-link to="/growing-ava" v-text="AVA.name" style="text-decoration: none"/>
    </div>
    <router-link
      v-if="vineyard.name.toLowerCase().indexOf('vineyard')>=0"
      v-text="vineyard.name"
      :to="`/vineyards/${vineyard.slug}`"
      class="WineStats--location-vineyard"
      />
    </router-link>
  </div>
  
  <template v-if="price">

    <hr>
    
    <span class="WineStats--label WineStats--label_price">Release Price</span>
    <UiHeading :level="2" :scale="4">
      <span class="WineStats--price">
        <sup>$</sup>{{price}}
      </span>
    </UiHeading>
    
  </template>

  <span v-if="current" class="WineStats--current">
    Current Release
  </span>
  
</div>
</template>

<script>
import UiHeading from "@/components/UI/Heading"

export default {
  name: "WineStats",
  created(){
    // this.$log(this.fields)
  },
  mounted(){
    // this.$log({ref:this.$refs.drinkWindow,hold:this.hold})
    let
    ref = this.$refs.drinkWindow
    setTimeout( ()=> (ref.value = this.hold), 0 )
  },
  props:{
    name: { type: String },
    fields:{ type:[Object,Array] },
    vineyard:{ type:[String,Object] },
    AVA:{ type:[Number,String,Object] },
    hold:{ type:Number, default: 0, },
    current:{ type:Boolean, default: false },
  },
  components:{
    UiHeading
  },
  methods:{},
  asyncComputed:{
    price(){ 
      return this.fields['Release-Price']
      // return parseFloat( this.fields['Release-Price'] ).toFixed(0)
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
    &, &::-webkit-progress-bar {
      background-color: $bgc;
    }
    &::-webkit-progress-value {
      background-color: $val;
      transition: 1s .25s ease;
    }
    &::-moz-progress-bar {
      background-color: $val;
      transition: 1s .25s ease;
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
    &_price {
      color: Color(theme);
    }
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
    // font-family: $ff-alt;
    font-weight: 100;
    // letter-spacing: -.01em;
    sup { display: none !important }
    &:before {
      content: "$";
      position: absolute;
      top: 0%;
      right: 100%;
      transform: translate(-12.5%,12.5%);
      font-size: .5em;
    }
  }
  &--drinkWindow {
    line-height: 1.3;
    margin: .6em 0 .3em;
    &-date {
      display: block;
    }
  }
  &--current {
    display: inline-block;
    margin-top: 1rem;
    padding: .5em .75em;
    font-size: .75rem;
    text-transform: uppercase;
    letter-spacing: .05em;
    line-height: 1;
    color: Color(theme);
    border: 2px solid;
    border-radius: 25px;
  }
}
</style>

<docs>
```vue
<WineStats title="Mock Up" style="margin:2em auto;"/>
```
</docs>