import Vue from 'vue'
import * as GoogleMaps from 'vue2-google-maps'

Vue.use(GoogleMaps, {
  load: {
    key: 'AIzaSyC3gcuuHZfpmw51P0pWDKRnTEFhwr05K4w',
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