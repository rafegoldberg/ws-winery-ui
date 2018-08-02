/**
 * Vue filter to truncate a string to the specified length.
 * @param {String} value The value string.
 */
export function truncate( value, length=170, affix='…' ){
  if( !value ) return
  if( value.length < length ) return value

  length = length - 3
  return value.substring(0,length).trim() + affix
}