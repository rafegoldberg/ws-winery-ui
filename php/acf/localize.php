<?function acf_save_fields( $path ){
  $path = get_stylesheet_directory() . '/fields';
  return $path;
  }?>

<?function acf_load_fields( $paths ) {
  # nix default load dir
  unset($paths[0]);

  # point to custom path
  $paths[] = get_stylesheet_directory() . '/fields';

  return $paths;  
  }?>

<?
add_filter( "acf/settings/save_json", 'acf_save_fields' );
add_filter( "acf/settings/load_json", 'acf_load_fields' );
?>