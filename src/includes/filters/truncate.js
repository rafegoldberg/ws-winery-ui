/**
 * Vue filter to truncate a string to the specified length.
 * @param {String} value The value string.
 */
export function truncate(value,length=170,opt={
  affix:'…',
  cleanHTML: true
}){
  if( !value ) return
  if( value.length < length ) return value

  opt.cleanHTML && (
    value = value.trim().replace(/(<([^>]+)>)/ig,"")
    )

  length = length - 3
  return value.substring(0,length).trim() + opt.affix
}