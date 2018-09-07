<?if( function_exists('acf_add_options_page') ){

  // Configure Site
  // Options Page
  // 
  $test = [
    [ "page_title" => 'Vineyards List Page',
      "menu_slug" => 'ws-test',
      "menu_title" => 'Vineyards',
      "icon_url" => 'dashicons-image-filter',
      "position" => -2,
      ],
    [ "page_title" => 'Williams Selyem Theme Options',
      "menu_slug" => 'ws-options',
      "menu_title" => 'Site',
      "icon_url" => 'dashicons-admin-site',
      "update_button" => 'Update Site',
      "update_message" => 'Site settings saved!',
      "capability" => 'edit_posts',
      "position" => -1,
      "redirect" => false,
    ],
  ];
  array_map('acf_add_options_page',$test);

}?>
