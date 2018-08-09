import Vue from 'vue'
import * as GoogleMaps from 'vue2-google-maps'

Vue.use(GoogleMaps, {
  load: {
    key: 'AIzaSyC3gcuuHZfpmw51P0pWDKRnTEFhwr05K4w',
  },
  installComponents: false,
})