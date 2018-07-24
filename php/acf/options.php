<?if( function_exists('acf_add_options_page') ):

  acf_add_options_page([
    "menu_slug"      => 'ws-options',
    
    "page_title"     => 'Williams Selyem Theme Options',
    "menu_title"     => '<small style="display: block; line-height: 1.1; font-weight: bold; margin-bottom: -8px; margin-top: -4px; border-top: 1px solid transparent; border-bottom: 4px solid transparent;">Williams<br>Selyem</small>',
    "icon_url"       => 'dashicons-awards', //'http://premiumwines.com.br/images/ico_guarda_1.jpg',

    "update_button"  => 'Save Options',
    "update_message" => 'Theme options were saved!',

    "capability"     => 'edit_posts',
    "position"       => -1,
    "redirect"       => false,
  ]);

endif?>