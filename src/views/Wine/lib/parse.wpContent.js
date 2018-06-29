import loPair from "lodash/fromPairs"
import loChunk from "lodash/chunk"

export default function( data ){
  if( typeof data == 'object' && data.content && data.content.rendered )
    data = data.content.rendered
  else if( typeof data == 'string' )
    data = data
  else
    return
    
  let
  match = data
    .split( /<h2.*>(.*)<\/h2>/gi )
    .map(e=>e.trim())
    .filter(e=>e)

  return loPair( loChunk(match,2) )
}