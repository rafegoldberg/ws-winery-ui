<template>
  <GMap
    class="MapBox"
    :center="mapCenter"
    :zoom="14"
    :options="{
      disableDefaultUI: true,
      styles:[
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
      :label="mark.label"
      :position="mapCenter"
      :options="{
        title: mark.label,
        icon:{
          url: mark.icon,
          labelOrigin:{ x:90, y:65 }
        }
      }"/>
  </GMap>
</template>

<script>
import GMap  from 'vue2-google-maps/src/components/map'
import GMark from 'vue2-google-maps/src/components/marker'

export default {
  name: "MapBox",
  props:[ 'map', 'mark' ],
  components:{ GMap, GMark },
  computed:{
    mapCenter(){
      let
      lat = parseFloat(this.map.lat),
      lng = parseFloat(this.map.lng)
      return {lat,lng}
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks";
.MapBox {
  .UiBox > &:only-child {
    width: 100vw !important;
    min-height: 32vh;
    position: absolute;
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
