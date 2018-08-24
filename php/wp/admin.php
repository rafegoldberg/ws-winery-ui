<?
function wp_admin_styles() {
  wp_register_style('ws_wp_css', get_template_directory_uri()."/admin/style.css", false, '1.0.0');
  wp_enqueue_style('ws_wp_css');
}  
add_action( 'admin_enqueue_scripts', 'wp_admin_styles' );
?>