import loFlat from 'lodash/flatten'

export function media( self ){
  if( this.context.loading ) return

  if( 'cover' in this.context.acf
      && this.context.acf.cover
      && Object.values(this.context.acf.cover).filter(v=> v ? true : false).length
    ){
    let cover = this.context.acf.cover
    if ( !this.useLandscape )
      return cover.portraitImg.url
    else
      return cover.landscapeImg.url
  }

  var
  img = loFlat(this.embedded['wp:featuredmedia'])[0],
  src = img.source_url
  src = this.rewriteSRC(src)
  return src
}

export function iframe( self, str ){
  if( this.context.loading ) return

  if( 'video' in this.context.acf
      && this.context.acf.video
      && this.context.acf.video.length
    ){
    let
    acf = this.context.acf.video,
    vid = acf.indexOf('/')>=0
        ? acf.split('/').reverse()[0]
        : acf;
    vid = `<iframe src="//player.vimeo.com/video/${vid}?title=0&byline=0&portrait=0" width="640" height="355" frameborder="0" allowfullscreen="allowfullscreen"></iframe>`;
    return [vid];
  }
    
  let
  txt = str || this.context.content.rendered,
  rgx = txt.match(/(<iframe[^>]*>.*[^<]*?<\/iframe>)/gim)

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

export function text( self, str='', tag="p" ){
  if( this.context.loading ) return

  if( 'vineyardNotes' in this.context.acf
      && this.context.acf.vineyardNotes
    ) str = this.context.acf.vineyardNotes.quote
          +(this.context.acf.vineyardNotes.content || this.context.content.rendered)

  var
  txt = str || this.context.content.rendered,
  rgx = `(?!${tag}>)([^><]+)(?=<\/?${tag}>)`
  rgx = new RegExp(rgx,'gim')

  return txt
    .match(rgx)
    .map(e=> e.trim() )
    .filter(e=> e && e!=="&nbsp;" ? true : false)
}