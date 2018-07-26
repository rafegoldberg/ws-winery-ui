<?
// display default WP custom fields metabox
add_filter( 'acf/settings/remove_wp_meta_box', '__return_false' );

// Google Maps API authentication
add_filter('acf/fields/google_map/api',function($API){
	$API['key'] = 'AIzaSyA3ozyFU65U2MA4v9j6tJhz1R28MQjJ-qc';
	return $API;
});


// hide the default ACF options page
add_action('admin_menu',function(){
  remove_menu_page('acf-options');
  remove_menu_page('index.php');
  remove_menu_page('seo');
},99);
?>