export default function update(){
  if( !this || this.context.loading ) return
  let
  src = (this.embed||this.context._embedded)
  if(!( 'wp:featuredmedia' in src )) return ''
  src = src['wp:featuredmedia'][0].source_url
  src = this.wsRewriteSRC(src)
  return src
}
export function original(WPX){
  let
  self = (arguments[0]||this);
  
  WPX = self.context
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
    .map(src=>{
      src = src.trim().split(/\s/)[0]
      return this.wsRewriteSRC(src)
    })

  return set.reverse()
}
