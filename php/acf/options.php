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

}?>
