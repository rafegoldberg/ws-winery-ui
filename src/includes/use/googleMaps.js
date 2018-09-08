import Vue from 'vue'
import * as GoogleMaps from 'vue2-google-maps'

let
key = 'AIzaSyBmjMciVWcP31JKaoKHUPELvKxHRcusoOQ'

Vue.use(GoogleMaps, {
  load: {
    key: key,
  },
  installComponents: false,
})