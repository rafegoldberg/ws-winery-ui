import loPair from "lodash/fromPairs"
import loChunk from "lodash/chunk"
import loZip from "lodash/zip"

export default function parseWpContent(){
  if( this.context.loading ) return
  
  let
  matches = this.context.content.rendered
    .split( /<h2.*>(.*)<\/h2>/gi ) // @todo: dangerous assumptions about content/format
    .map( e=>{
      e = e.trim().replace(/(<([^>]+)>)/ig,"")
      return e.trim()
    })
    .filter( e=>e ),
  matched = loChunk(matches,2)
    .map( arr=> loPair(loZip( ['heading','text'], arr )) )

  return matched
}