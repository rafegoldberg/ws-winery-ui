<?if( function_exists('acf_add_options_page') ){

  // Configure Site
  // Options Page
  // 
  acf_add_options_page([
    "menu_slug"      => 'ws-options',
    
    "page_title"     => 'Williams Selyem Theme Options',
    "menu_title"     => 'Site',
    "icon_url"       => 'dashicons-image-filter',

    "update_button"  => 'Update Site',
    "update_message" => 'Site settings saved!',

    "capability"     => 'edit_posts',
    "position"       => -1,
    "redirect"       => false,
  ]);

  // Hide Default ACF
  // Options Page Menu
  //
  add_action('admin_menu',function(){
    remove_menu_page('acf-options');
    remove_menu_page('index.php');
    remove_menu_page('seo');
  },99);

}?>
