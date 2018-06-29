import loFlat from "lodash/flatten"
import loFind from "lodash/find"

export default function getTerm( where, WPX ){
  if( !WPX )
    WPX = this.context
  if( !where || !WPX._embedded )
    return {}

  let
  terms = WPX._embedded["wp:term"]
  terms = loFlat(terms)

  return loFind( terms, where )
}