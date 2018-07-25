<?if( function_exists('acf_add_options_page') ):

  acf_add_options_page([
    "menu_slug"      => 'ws-options',
    
    "page_title"     => 'Williams Selyem Theme Options',
    "menu_title"     => 'Site',
    "icon_url"       => 'dashicons-image-filter', //'http://premiumwines.com.br/images/ico_guarda_1.jpg',

    "update_button"  => 'Save Options',
    "update_message" => 'Theme options were saved!',

    "capability"     => 'edit_posts',
    "position"       => -1,
    "redirect"       => false,
  ]);

endif?>