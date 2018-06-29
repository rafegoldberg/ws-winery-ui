/**
 * Round decimals to the given place
 *
 * @param {String} value    the number to round
 * @param {Number} decimals tens-place to round to
 */
export function round( val, dec ){
  if( !val ) val = 0
  if( !dec ) dec = 0

  val = Math.round( val * Math.pow(10,dec) )
  val = val / Math.pow(10,dec)

  return val
}