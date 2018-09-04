import loFind from 'lodash/find'
import loPair from "lodash/fromPairs"
import loChunk from "lodash/chunk"
import loZip from "lodash/zip"

function parseWineNew(){
  let
  tag = loFind(this.context.acf.year,'description')
  return [
    { text: this.context.content.rendered || '' },
    { text: "" },
    { text: tag && tag.description || 'Coming soon.' },
  ]
  return [{text:"1"},{text:"2"},{text:"3"}]
}

export default function parseWpContent(){
  if( this.context.loading ) return
    
  let
  defaults = parseWineNew.apply(this)
  if( this.context.acf.alwaysUseNewParser || !this.context.content.rendered.match(/<h\d/gi) )
    return defaults
  
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

  // let tag;
  // if( matched[2] && (tag = loFind(this.context.acf.year,'description')) )
  //   matched[2].text = tag.description

  if( matched[0] ) 
    defaults[0] = matched[0]
  if( matched[1] )
    defaults[1] = matched[1]
  if( matched[2] )
    defaults[2] = matched[2]

  return defaults
}