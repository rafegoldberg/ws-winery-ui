export default {
  host: location.host,
  http: location.protocol,
  root:{
    local: '/',
    stage: '/clients/ws3/',
    prod:  '/',
  },
  env( key ){
    return this[key] && this[key][ENV] && this[key][ENV] || this[key]
  }
}

let
URI = location.host,
ENV = process.env.NODE_ENV === 'production' ? 'prod' : 'stage'

if( URI.indexOf("localhost") >= 0 ||
    URI.indexOf( "0.0.0.0" ) >= 0  ) ENV = "local";
