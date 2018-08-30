export default {
  methods: {
    isRelative( url ){
      let
      checks = [
        url.indexOf('mailto:')    == 0,
        url.search(/https?:\/\//) == 0,
        url.indexOf('//')         == 0,
        url.indexOf('www.')       == 0,
      ]
      return checks.includes(true) ? false : true
    }
  }
}