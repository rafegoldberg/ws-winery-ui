<?
// Allow WP Default Custom
// Fields Metabox Inputs
// 
add_filter( 'acf/settings/remove_wp_meta_box', '__return_false' );

// Authenticate the
// Google Maps' API 
add_filter('acf/fields/google_map/api',function($API){
	$API['key'] = 'AIzaSyBmjMciVWcP31JKaoKHUPELvKxHRcusoOQ'; 
	return $API;
});
?>