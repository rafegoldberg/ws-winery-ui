<template>
<div id="WineFiltersWrap">
<UiPanel class="UiTheme_light">

  <div class="WineFilters" :class="{open:isOpen}" @keydown.escape.stop="(isOpen=isOpen?false:true)">
    <button class="WineFilters--ribbon" @click="(isOpen=isOpen?false:true)">
      <span>{{isOpen ? 'Close' : 'Filters'}}</span>
      <UiIcon name="CircleClose" width="1.66rem" height="1.66rem"></UiIcon>
    </button>
    <form class="WineFilters--inner">

      <header class="WineFilters--header">
        <UiHeading :level="4" v-text="'Sort & Filter'"/>
        <UiButton v-show="hasFilters()" class="UiTheme_rust" @click.native.prevent="clearFilters">Clear</UiButton>
      </header>
      
      <WineSearch
        @keydown.native.enter.prevent="$event.target.blur() | (isOpen = false)"/>

      <FiltersGroup
        title="Varietal"
        term="varietals"
        :show="false"
        :wpx="wpapi=>wpapi
          .varietals()
          .exclude([62,5])
          .perPage(20)
        "/>
      <FiltersGroup
        term="tags"
        title="Vintage"
        class="FiltersGroup_pills"
        :show="false"
        :wpx="wp=>wp
          .tags()
          .exclude([69,72]) // spring, port
          .perPage(80)
        "/>
      <FiltersGroup
        @click.native="e=> parseInt(e.path[0].value) == $root.filters.categories && $set($root.filters,'categories','')"
        title="Vineyard"
        type="radio"
        :show="false"
        :wpx="wpapi=>wpapi
          .categories()
          .parent(73) // vineyards
          .exclude([25,26]) // growers + estate vineyards
          .perPage(50)
        "/>
      <FiltersGroup
        title="Region (AVA)"
        term="AVA"
        :show="false"
        :wpx="wpapi=>wpapi
          .AVA()
          .perPage(20)
        "/>
      <FiltersGroup title="Release"
          :show="true"
          @keydown.native.delete="(showRelease = false)">
        <label class="showReleaseSelector">
          <div>
            Showing <b style="color: #BA9454">
              {{showRelease && (showRelease=='after' ? 'current' : 'past') || 'all'}}
            </b> releases.
          </div>
          <select name="release" v-model="showRelease">
            <option id=current name=current value="after">
              Current Release
            </option>
            <option id=past    name=past    value="before">
              Past Releases
            </option>
            <option id=all     name=all    :value="false">
              All Releases
            </option>
          </select>
        </label>
      </FiltersGroup>

    </form>
  </div>

  <UiBox
    @click.self.native="(isOpen = false)"
    :class="{
      WineGridWrapper: true,
      UiBox_stack: true,
      wrap_flex_mid: testr()
    }"
    >

    <WineSearch
        ref="gridSearch"
        v-if="!testr()"
        :class="{ WineSearch_grid: true, hidden: isOpen }"
        >
      <div class="FilterChits" :style="{ marginLeft: 'auto' }">
        <span v-for="item in filtersList()" v-html="item"/>
      </div>
    </WineSearch>
    
    <WineGrid
        :wpx="wpx"
        paginate="12"
        :sticky="true"
        @wp:load="$set($refs.gridSearch, 'results', $event||{})"
        ref="grid"
        >
      <div slot="error">
        <UiHeading :level="3" class="UiHeading_bold UiHeading_tighten" style="text-align: left">
          No Matches
        </UiHeading>
        <p>We couldn't find any wines that matched your search. Try 
          <button @click="(isOpen=true)" :style="{
              all: 'unset',
              cursor: !isOpen ? 'pointer' : '',
              fontWeight: !isOpen ? 'bold' : '',
              textDecoration: !isOpen ? 'underline' : '',
            }">updating your filters</button>, 
          or 
          <button @click="clearFilters" style="all:unset;cursor:pointer;">clear</button> them
          to start over.</p>
        <UiButton :class="{UiTheme_gold:isOpen,UiTheme_rust:!isOpen}" @click.native="clearFilters">Clear Filters</UiButton>
      </div>
    </WineGrid>

  </UiBox>

</UiPanel>
</div>
</template>

<script>
import Vue from "vue"

import navTheme from "@/includes/NavTheme/mixin"

import UiPanel from "@/components/UI/Panel"
import UiBox from "@/components/UI/Box"
import UiIcon from "@/components/UI/Icon"
import UiHeading from "@/components/UI/Heading"
import UiButton from "@/components/UI/Button"

import WineGrid from "@/views/Wine/grid"
import WineSearch from "./search"
import FiltersGroup from "./filters/group"

function hasFilters( filters = this.$root.filters ){
  var
  keys = Object.keys(filters),
  vals = Object.values(filters)
  vals = vals.filter( (v,i)=> keys[i]!=='page' && v.length | v || false)
  return vals.length>0
}
function clearFilters(){
  Object.keys(this.$root.filters).map(k=>{
    var filter = this.$root.filters[k]
    filter.splice && filter.splice(0,filter.length) || this.$set(this.$root.filters,k,[])
  })
  this.showRelease = false
}

export default {
  name: "WineFilters",
  mixins:[ navTheme ],

  beforeCreate(){
    if( this.$route.hash=='#top'||
        this.$route.hash=='#all' )
      this.$set(this.$root.filters,'search',"")
  },
  beforeRouteEnter(to,from,next){
    next(self=> self.navTheme_update({ brand: "logoTheme_dualtone" }))
  },
  metatags:{
    title:"Wine Library"
  },
  props:["page"],
  data:()=>({
    showRelease: false,
    wpx( endpoint ){
      if( hasFilters(this.$root.filters) ){
        return endpoint.param(this.$root.filters)
      }
      else
        return endpoint.category(['wine'])
    }
  }),
  computed:{
    isOpen:{
      get(){
        return this.$root.showFilters
      },
      set(v){
        this.$root.showFilters = v ? true : false
      },
    },
  },

  components:{
    UiPanel,
    UiBox,
    UiIcon,
    UiHeading,
    UiButton,
    WineGrid,
    WineSearch,
    FiltersGroup
  },
  methods:{
    hasFilters,
    clearFilters,
    getFilters(){
      var
      dom = document.querySelectorAll('.WineFilters .FilterItem :checked'),
      arr = Array.from(dom)

      if( !arr.length ) return {}
      
      return arr.reduce((all,el,i,og)=>{
        let
        key = el.attributes.name.value,
        val = el.attributes.label.value
        window.console.log({ key, val, misc:{ el } })

        Array.isArray(all[key])
          ? all[key].push(val)
          :(all[key] = [val])

        return all
      },{})
    },
    filtersList( sep=', '){
      let
      filters = this.getFilters()
      return Object.keys(filters).map(f=> filters[f].join( sep ))
    },
    testr(){
      var
      ref = this.$refs.grid
      
      if( !ref ) return false

      if( ref.context.error | !ref.context.length )
        return true 
      else
        return false
    },
  },
  watch:{
    showRelease(is,was){
      let
      addt,
      date = new Date()

      if( !is )
        addt = { before:'', after:'' }
      else {
        date.setMonth(date.getMonth() - 7)
        addt = {
          page: 1,
          [is]: date,
          [was || (is=='before' ? 'after' : 'before')]: '',
        }
      }
      
      this.$root.filters = Object.assign({}, this.$root.filters, addt)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";

$topoff: 8rem;
$sidebar-pad:   2rem 1.5rem;
$sidebar-width: 18rem;
$ribbon-height: 2.25rem;
$footer-height: 60px;

%rack {
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * + * { margin-left: 1rem }
}

.WineGrid {
  flex: 1;
  &Wrapper {
    position: relative;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    overflow: visible;
    padding-top: 8rem !important;
    @include Break( max-width Breaks(3) ){
      padding-top: 6rem !important;
    }
  }
}

.WineFilters {

  $B: #{&};
  $OPEN: '.open';

  position: sticky;
  top: -1px;
  z-index: 5;

  justify-content: flex-start;
  flex: 0 1 $sidebar-width !important;
  align-self: flex-start;

  height: 100vh;
  max-height: 100vh;
  min-width: $sidebar-width;
  width: $sidebar-width;
  max-width: $sidebar-width;
  overflow: visible;
  margin: $topoff 0 0;
  margin: $topoff 0 1px;

  // border-right: 1px solid rgba(13,13,13,.13);
  box-shadow: -.5em 0 0 -1.5em rgba(black,0);
  
  transition: .38s ease-out;
  transition-property: opacity transform margin-left;
  
  &#{$OPEN} {
    // overflow: hidden;
    // box-shadow: 0 0 3em 0 rgba(black,.1);
    // box-shadow: 1.5em -1.5em 3em -1em rgba(black,.1);
  }
  &:not(#{$OPEN}) {
    transform: translateX(-100%);
    margin-left: -$sidebar-width;
    #{$B}--ribbon {
      padding-right: 3rem;
      /deep/ .UiIcon {
        opacity: 1 !important;
        right: 1.5rem!important;
        margin: 0 !important;
        transform: translateX(25%) rotate(45deg) !important;
        path { fill: #b99453 }
      }
    }
  }

  @at-root .UiBox:last-child {
    #{$B} + & {
      opacity: 1;
      transition: opacity .19s .19s ease-out;
    }
    #{$B}#{$OPEN} + & {
      @include Break( max-width Breaks(3) ){
        opacity: .5;
        mix-blend-mode: multiply;
        > * { pointer-events: none !important }
      }
    }
  }

  &:after {
    $matte: Color(light);
    content: " ";
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: -1px;
    left: 0;
    pointer-events: none;
    background: linear-gradient(
      to top,
      $matte 3px,
      rgba($matte,.3) 2em,
      rgba($matte,0) 3em
      );
    opacity: .9;
  }
  &--ribbon {
    // content: "Filters";
    cursor: pointer;
    appearance: none;
    user-select: none;

    z-index: 9;
    position: absolute;
    left: 100%;
    top: 0;
    
    @extend %rack;

    height: $ribbon-height;
    min-width: 5.5em;
    margin-left: $sidebar-width;
    padding: .1em nth($sidebar-pad,2);

    font: inherit;
    font-size: .9em;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: Color(light);
    border-width: 0 !important;
    outline: none;
    background: Color(theme);
    box-shadow: .5em .25em 2em -.25em rgba(Color(dark),.3);

    transition: inherit;

    #{$B}#{$OPEN} & {
      // transition: .38s 0s ease-out;
      min-width: 100%;
      padding-left: nth($sidebar-pad,2);
      padding-right: nth($sidebar-pad,2);
      margin-left: -$sidebar-width;
      color: Color(light);
      background: Color(slate);
      box-shadow: 2px 0 0 0 Color(dark);
      box-shadow: 0 0 0 0 Color(dark);
    }

    & .UiIcon {
      position: absolute;
      right: nth($sidebar-pad,2);
      margin-right: -5px;
      opacity: 0;
      transition: inherit;
    }
    #{$B}#{$OPEN} & .UiIcon {
      opacity: .5;
      transition-delay: 0s;
    }
    #{$B}#{$OPEN} &:hover .UiIcon {
      transition-delay: .38s;
      &:hover { transition-delay: .0s !important }
    }
    // #{$B}#{$OPEN} .UiIcon { filter: invert(.75) }
    
  }
  &--header {
    @extend %rack;
    .UiButton {
      font-size: 0.7em;
      margin-top: -0.25 * nth($sidebar-pad,2);
      // margin-right: -0.25 * nth($sidebar-pad,2);
    }
  }
  &--inner {
    z-index: 1;
    position: relative;
    width: 100%;
    max-height: 100%;
    max-height: calc( 100% - #{$ribbon-height});
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    margin-top: $ribbon-height;
    padding: 0 nth($sidebar-pad,2);
    background: transparent;
    background: Color(light);
    border-width: 0;

    box-shadow: 1.5em -2.5em 3em -1.25em rgba(Color(dark),.08);
    // box-shadow: 0 0 3em 0 rgba(black,.1);

    >:first-child { margin-top:    2rem }
    >:last-child  { margin-bottom: 2rem }
  }
  @include Break( max-width Breaks(3) ){
    & {
      top: 4rem;
      // margin-top: 6.5rem;
      margin-top: 2rem;
      max-height: calc(100vh - $footer-height); // TODO: set global $footerHeight to 75px
      box-shadow: 1em 0 3em -1em rgba(black,.15);
    }
    &#{$OPEN} {
      overflow: hidden;
      margin-right: -$sidebar-width;
    }
    &--inner {
      min-height: 100%;
      >:last-child { margin-bottom: 3rem }
    }
    @at-root #WineFiltersWrap > .UiPanel { flex-flow: nowrap row }
    .UiHeading { text-align: left !important }
  }
}

.WineSearch {
  $B: &;
  $search-input-height: 2.4rem;
  &.hidden {
    opacity: 0;
  }
  &_grid {
    min-height: $search-input-height;
    margin: 0 0 2.6rem !important;
    transition: .38s .1s ease-out;

    @include Break( min-width Breaks(3) ){
      justify-content: flex-end;
      align-items: center;
      padding-left: 7.5rem;
      transition: .33s 0s ease;
      .WineFilters.open ~ & {
        padding-left: 0;
      }
    }
    @include Break( max-width Breaks(3) ){
      flex-flow: nowrap column-reverse;
      justify-content: flex-end;
      align-items: center;
      transform: translateY(-(3rem + $search-input-height/4));
      margin: 0 0 ($search-input-height/4) !important;
      /deep/ #{$B}--inputWrap {
        margin-left: auto;
        margin-bottom: 3rem + $search-input-height/4 !important;
      }
    }
  }
  .WineFilters & {
    margin: 2.3rem 0 1.3rem;
    /deep/ &--inputWrap {
      width: 100%;
      input {
        flex: 1;
      }
    }
    .UiHeading {
      display: none !important;
    }
  }
}

.FilterChits {
  margin: 0 1em;
  font-size: 0.8rem;
  white-space: nowrap;
  max-width: 80%;
  overflow: hidden;
  > * {
    display: inline-flex;
    color: Color(silver);
    & + * {
      margin-left: 0.3rem;
    }
    &:not(:last-child):after {
      content: '/';
      margin-left: 0.3rem;
    }
  }
  + .WineFiltersWrap { margin-left: auto; }
  @include Break( max-width Breaks(3) ){
    margin: 0 auto;
    order: -1;
  }
}

.showReleaseSelector {
  position: relative;
  display: flex;
  align-items: center;
  margin: 1rem 0 0;
  border: 1px solid rgba(Color(slate),.1);
  padding: 0 .4rem;
  line-height: 2.3;
  font-size: 0.9em;
  color: Color(slate);
  border-radius: 1px;
  transition: .3s ease;
  background: url("https://static.thenounproject.com/png/730205-200.png") right .6em center / 0.6em no-repeat;
  background-color: mix(Color(silver),Color(light),15%);
  background-color: Color(light);
  &:not(:hover) {
    // opacity: .88;
  }
  &:hover {
    border-color: Color(theme);
  }
  &:focus-within {
    border-color: Color(theme);
    box-shadow: 1px 3px 8px -1px rgba(Color(slate),.06);
    // background-color: mix(Color(silver),Color(light),15%);
  }
  & > select {
    appearance: none;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: 8;
  }
}
</style>