import loFind from 'lodash/find'

function parseWineNew(){
  let
  tag = loFind(this.context.acf.year,'description')
  return [
    { text: this.context.content.rendered || '' },
    { text: "" },
    { text: tag.description || 'Coming soon.' },
  ]
  return [{text:"1"},{text:"2"},{text:"3"}]
}

import loPair from "lodash/fromPairs"
import loChunk from "lodash/chunk"
import loZip from "lodash/zip"

export default function parseWpContent(){
  if( this.context.loading ) return
    
  if( !this.context.content.rendered.match(/<h\d/gi) )
    return parseWineNew.apply(this)
  
  let
  matches = this.context.content.rendered
    .split( /<h\d.*>(.*)<\/h\d>/gi ) // @todo: dangerous assumptions about content/format
    .map( e=>{
      e = e.trim().replace(/(<([^>]+)>)/ig,"")
      return e.trim()
    })
    .filter( e=>e ),
  matched = loChunk(matches,2)
    .map( arr=> loPair(loZip( ['heading','text'], arr )) )

  let tag;
  if( matched[2] && (tag = loFind(this.context.acf.year,'description')) )
    matched[2].text = tag.description

  return matched
}