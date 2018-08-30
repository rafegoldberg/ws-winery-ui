<?
function wp_allowed_uploads($mimes) {
  $mimes['kml'] = 'application/xml';
  $mimes['kmz'] = 'application/zip';
  return $mimes;
}
add_filter('upload_mimes','wp_allowed_uploads');
?>