<template>
  <GMap
    ref="map"
    class="MapBox"
    :center="mapCenter"
    :zoom="14"
    :options="{
      disableDefaultUI: true,
      styles:[
        //{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        //{elementType: 'labels.text.fill', stylers: [{color: '#FF0000'}]},
        
        { featureType: 'poi.business',
          stylers: [{visibility: 'off'}]
          },
        { featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [
            {color: '#BBBBBB'},
          ]
        },
      ],
    }">
    <GMark
      v-if="!this.kml"
      :label="mark.label"
      :position="mapCenter"
      :options="{
        label: {
          text: mark.label,
          color: '#D21034',
        },
        icon:{
          url: mark.icon,
          labelOrigin:{ x:90, y:65 },
        },
      }"/>
  </GMap>
</template>

<script>
import {gmapApi as GM} from 'vue2-google-maps'

import GMap  from 'vue2-google-maps/src/components/map'
import GMark from 'vue2-google-maps/src/components/marker'

export default {
  name: "MapBox",
  props:[ 'map', 'mark', 'kml' ],
  components:{ GMap, GMark },
  mounted(){
    if( this.kml )
      this.$refs.map.$mapPromise.then(this.setKML)
  },
  computed:{
    Google: GM,
    gKML(){
      let
      mid = this.kml.split(/\?id=(.*)&/)[1],
      url = `http://www.google.com/maps/d/kml?forcekml=1&mid=${mid}`
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
      new this.Google.maps.KmlLayer({
        map,
        url: this.gKML
      });
    }
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
