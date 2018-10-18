<template>
  <GMap
    ref="map"
    class="MapBox"
    :center="mapCenter"
    :zoom="10"
    :options="{
      disableDefaultUI: true,
      styles: theme,
      mapTypeId: 'terrain',
    }">
    <GMark
        v-if="!this.kml && this.mark.label"
        :label="mark.label"
        :position="mapCenter"
        :options="{
          label: {
            text: mark.label,
            color: '#0E0E0E',
          },
          icon:{
            url: mark.icon,
            labelOrigin:{ x:90, y:65 },
          },
        }">
      Hello world!
    </GMark>
  </GMap>
</template>

<script>
import {gmapApi as GM} from 'vue2-google-maps'

import GMap  from 'vue2-google-maps/src/components/map'
import GMark from 'vue2-google-maps/src/components/marker'

import theme from "./themes/CreameryCustom.json"

export default {
  name: "MapBox",
  props:[ 'map', 'mark', 'kml' ],
  components:{ GMap, GMark },
  mounted(){
    if( this.kml )
      this.$refs.map.$mapPromise.then(this.setKML)
  },
  data:()=>({
    theme,
    kmlLayer: false,
    kmlLastClick: false,
  }),
  computed:{
    Google: GM,
    getKML(){
      if( !this.kml ) return

      var
      url,
      mid,
      map = this.kml,
      ucb = Math.round(new Date().getTime()/1000) // uncache param

      if( map.split('?').length == 1 ){
        if( map.indexOf('//')>=0 ) return `${map}?ucb=${ucb}`;
        mid = map
      }
      else if( map = map.split('?')[1] ){
        mid = map.split('&')
        mid = mid.map(param=> !param.indexOf('id=') ? param.split('=')[1] : false)
        mid = mid.filter(p=>p)[0]
      }

      url = `https://google.com/maps/d/kml?forcekml=1&mid=${mid}&ucb=${ucb}`

      return url
    },
    mapCenter(){
      if( !this.map ) return { lat:0, lng:0 }
      let
      lat = parseFloat(this.map.lat||0),
      lng = parseFloat(this.map.lng||0)
      return {lat,lng}
    }
  },
  methods:{
    setKML(map){
      this.kmlLayer = new this.Google.maps.KmlLayer({
        map,
        url: this.getKML,
        clickable: true,
      });
      this.kmlLayer.addListener('click', this.kmlClick)
    },
    kmlClick( e ){
      let
      data = e.featureData,
      slug = data.name.toLowerCase().replace(/\s/g,'-')

      if( slug.indexOf('-ava')>=0 ) return

      if( slug == this.kmlLastClick )
        this.$router.push(`/vineyards/${slug}`)
        
      this.kmlLastClick = slug
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
.MapBox {
  .UiBox > &:only-child {
    width: 100vw !important;
    min-height: 32vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
<style lang="scss">
.MapBoxWrap {
  &.UiBox {
    min-height: 16rem !important;
  }
}
</style>
