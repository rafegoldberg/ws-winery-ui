import ii from "inflection"
import loPair from "lodash/toPairs"
import loUnpair from "lodash/fromPairs"

function wpMetaParser( entries=[] ){
  let
  kvp = entries.map(wpMetaParser.mapper),
  obj = loUnpair(kvp)
  return obj
}
wpMetaParser.mapper = function( meta={} ){
  let
  val = meta['wp:meta_value'],
  key = meta['wp:meta_key']
  key = key.replace('-','_')
  key = ii.camelize(key)
  return loPair({ [key]:val })[0]
}

export default wpMetaParser