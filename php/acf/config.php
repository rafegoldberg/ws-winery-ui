<?
// display default WP custom fields metabox
add_filter( 'acf/settings/remove_wp_meta_box', '__return_false' );

// hide the default ACF options page
add_action('admin_menu',function(){
  remove_menu_page('acf-options');
  remove_menu_page('index.php');
  remove_menu_page('seo');
},99);
?>