import Vue from 'vue'
import * as GoogleMaps from 'vue2-google-maps'

Vue.use(GoogleMaps, {
  load: {
    key: 'AIzaSyA3ozyFU65U2MA4v9j6tJhz1R28MQjJ-qc',
    /* libraries: 'places', 
      // libraries: 'places,drawing,visualization'
     */
  },
  installComponents: false,
    /* manually load map components:
      import { GmapMap, GmapMarker } from 'vue2-google-maps/src/components/marker'
      export.default {
        components:{ GmapMap, GmapMarker }
      }
    */
})