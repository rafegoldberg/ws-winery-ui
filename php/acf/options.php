<?if( function_exists('acf_add_options_page') ):

  acf_add_options_page([
    "page_title"     => 'Williams Selyem Theme Options',
    "menu_title"     => '<small>Williams<br>Selyem</small>',
    "icon_url"       => 'http://premiumwines.com.br/images/ico_guarda_1.jpg',

    "menu_slug"      => 'ws-options',
    // "parent_slug"    => 'appearance',
    
    "update_button"  => 'Save Options',
    "update_message" => 'Theme options were saved!',

    "capability"     => 'edit_posts',
    "position"       => -1,
    "redirect"       => false,
  ]);

endif?>

<?if( is_admin() ):?>
<style>
#adminmenu .wp-menu-name > small {
  display: block;
  line-height: 1.1;
  font-weight: bold;
  margin-bottom: -8px;
  margin-top: -4px;
  border-top: 1px solid transparent;
  border-bottom: 4px solid transparent;
}
#adminmenu img[src="http://premiumwines.com.br/images/ico_guarda_1.jpg"] {
  width: 2.2em;
  margin-top: -0.55em;
  mix-blend-mode: screen;
  filter: invert(1) contrast(2);
}
#adminmenu .current img[src="http://premiumwines.com.br/images/ico_guarda_1.jpg"] {
  filter: invert(1) contrast(8);
}
</style>
<?endif?>