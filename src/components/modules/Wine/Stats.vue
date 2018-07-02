<template>
<div class="WineStats">

  <UiHeading :level="1" :scale="4">
    <b>{{title}}</b>
  </UiHeading>

  <div>
    <small>Hold</small> <progress :value="hold" max="1"></progress> <small>Drink</small>
  </div>

  <div class="gold" style="line-height:1.1; margin:.5em 0">
    <em>{{metas.WpbDrinkwindow}}</em>
    <br>
    <small>Optimal Drinking Window</small>
  </div>
  
  <hr>
  
  <div v-if="vineyard" style="letter-spacing:.05em; line-height:1.1; margin:.5em 0; text-transform: uppercase;">
    <div class="gold" style="font-size:.8em">Location</div>
    <div>{{vineyard}}</div>
  </div>
  
  <hr>
  
  <small>Release Price</small>
  <UiHeading v-if="title" :level="2" :scale="4">
    ${{parseFloat(metas.ReleasePrice).toFixed(2)}}
  </UiHeading>
  
</div>  
</template>

<script>
import loFind from 'lodash/find';
import wpMetaParser from "./wpMetaParser"

import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiHeading from "@/components/UI/Heading"

export default {
  name: "WineStats",
  props:{
    title:   { type: String        },
    fields:  { type:[Object,Array] },
    category:{ type:[Object,Array] },
  },
  components:{
    UiHeading
  },
  methods:{
    wpMetaParser,
  },
  computed:{
    metas(){
      return wpMetaParser(this.fields)
    },
    vineyard(){
      // return "Vineyard Name"
      let
      match = obj=>( JSON.stringify(obj).indexOf('vineyard') > 0 ),
      entry = loFind( this.category, match )
      return !entry ? false : (entry.name || entry['#CDATA-SECTION'] || entry)
    },
    hold(){ 
      if( !this.metas.length ) return
      let
      today = (new Date()).getFullYear(),
      dates = this.metas.WpbDrinkwindow.split(/-|_|–|\/|:/g)
      dates = dates.map( y=> parseInt(y) )

      if( dates.length !== 2 ) return 1
      return 1 - (dates[1] - today) / (dates[1] - dates[0] )
    }
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
  small {
    text-transform: uppercase;
    padding: 0 .5em;
    letter-spacing: 0.05em;
    font-size: 0.75em;
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
</style>

<docs>
```vue
<WineStats title="Mock Up" style="margin:2em auto;"/>
```
</docs>