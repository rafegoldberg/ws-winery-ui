import loPair from "lodash/fromPairs"
import loChunk from "lodash/chunk"
import loZip from "lodash/zip"

export default function parseWpContent(){
  if( this.context.loading ) return
  
  let
  matches = this.context.content.rendered
    .split( /<h2.*>(.*)<\/h2>/gi )
    .map( e=> e.trim() )
    .filter( e=>e ),
  matched = loChunk(matches,2)
    .map( arr=> loPair(loZip( ['heading','text'], arr )) )

  return matched
}