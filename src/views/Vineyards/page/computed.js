export function media( self ){
  if( this.context.loading ) return
  var
  img = this.embedded['wp:featuredmedia'][0],
  src = img.source_url
  src = src.replace(/.*\/wp-content\//gim,'https://www.williamsselyem.com/wp-content/')
  return src
}

export function iframe( self, str ){
  var
  txt = str || !this.context.loading && this.context.content.rendered,
  rgx = txt.match(/(<iframe[^>]*>[^<]*?<\/iframe>)/gim)

  if( rgx && rgx.length )
  return rgx
    .map(e=> e.trim() )
    .filter(e=> e && e!=="&nbsp;" ? true : false)

  else
  return []
}

export function tables( self, str ){
  var
  txt = str || !this.context.loading && this.context.content.rendered,
  rgx = txt.match(/(<table[^>]*>(?:.|\s)*?<\/table>)/gim)

  if( rgx && rgx.length )
  return rgx
    .map(e=> e.trim() )
    .filter(e=> e && e!=="&nbsp;" ? true : false)

  else
  return []
}

export function text( self, tag, str ){
  var
  tag = tag || 'p',
  txt = str || !this.context.loading && this.context.content.rendered,
  rgx = `(?!${tag}>)([^><]+)(?=<\/?${tag}>)`
  rgx = new RegExp(rgx,'gim')

  return txt
    .match(rgx)
    .map(e=> e.trim() )
    .filter(e=> e && e!=="&nbsp;" ? true : false)
}