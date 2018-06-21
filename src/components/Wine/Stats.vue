<template>
<div class="WineStats">

  <UiHeading v-if="title" :level="1" :scale="4">
    <b>{{title}}</b>
  </UiHeading>

  <div>
    <small>Hold</small> <progress :value="hold" max="1"></progress> <small>Drink</small>
  </div>

  <div style="line-height:1.1; margin:.5em 0">
    <em>{{metas.WpbDrinkwindow}}</em>
    <br>
    <small>Optimal Drinking Window</small>
  </div>

  
  <hr>
  
  <div style="line-height:1.1; margin:.5em 0; font-size: 1.15em; text-transform: uppercase;">
    <small style="font-weight:100">Location</small>
    <br>
    <div style="letter-spacing:.05em;">{{vineyard}}</div>
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
  props:[ 'wp:post_id', 'wp:postmeta', 'title', 'category' ],
  components:{
    UiHeading
  },
  methods:{
    wpMetaParser,
  },
  computed:{
    metas(){
      return wpMetaParser(this['wp:postmeta'])
    },
    vineyard(){
      let
      keyed = '#cdata-section',
      match = obj=>( obj[keyed].toLowerCase().indexOf('vineyard') > 0 ),
      entry = loFind( this.category, match )
      return entry[keyed]
    },
    hold(){ 
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
@import "~@/styles/config/colors";
@import "~@/styles/config/fonts";
.WineStats {
  $val: Color(alt);
  $bgc: Color(light);
  text-align: center;
  max-width: 18em;
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
