import ii from "inflection"
import loPair from "lodash/toPairs"
import loUnpair from "lodash/fromPairs"

function wpMetaParser( entries=[] ){
  if( !Array.isArray(entries) )
    entries = loPair(entries)
  let arr = entries.map(wpMetaParser.mapper)
  return loUnpair(arr)
}
wpMetaParser.mapper = function( item ){
  let
  key,val

  if( 'wp:meta_value' in item ){
    // console.log('MOCK data')
    val = item['wp:meta_value']
    key = item['wp:meta_key']
  }
  else {
    // console.log('REAL data')
    key = item[0]
    val = item[1]
    val = !Array.isArray(val) ? val : (val.length==1 ? val[0] : val)
  }
  
  key = key.replace('-','_')
  key = ii.camelize(key)

  return loPair({ [key]: val })[0]
}

export default wpMetaParser