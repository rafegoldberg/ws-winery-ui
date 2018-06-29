export default function update(){
  if( !this || this.context.loading ) return
  let
  src = (this.embed||this.context._embedded)['wp:featuredmedia'][0].source_url
  src = src.replace(/.*\/wp-content\//gim,'https://www.williamsselyem.com/wp-content/')
  return src
}
export function original(WPX){
  WPX = (arguments[0]||this).context
  if( !WPX || WPX.loading ) return

  let
  data = WPX.content.rendered,
  match = data
    .match( /<img.*["|'\/|\s]>/gi )
    .map( e=> e.trim() )
    .filter( e=> e )
  match = match[0]

  let
  set = /(srcset) *= *((['"])?((\\\3|[^\3])*?)\3|(\w+))/
    .exec(match)[4]
    .split(/,/g)
    .map(e=>{
      e = e.trim().split(/\s/)[0]
      return e.replace(/.*\/wp-content\//gim,'https://www.williamsselyem.com/wp-content/')
    })

  return set.reverse()
}