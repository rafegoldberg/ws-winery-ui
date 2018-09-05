<?
add_filter('acf/settings/show_admin',function(){
  $user = wp_get_current_user();
  $role = $user->roles ? $user->roles[0] : false;

  if( $role!='developer' ) return false;
  else return true;
  });

add_action('admin_menu',function(){
  // hide ACF default options page
  remove_menu_page('acf-options');

  // hide WP default menu items
  remove_menu_page('index.php');
  remove_menu_page('link-manager.php');
  remove_menu_page('edit-comments.php');
  remove_menu_page('seo');

  remove_submenu_page('options-general.php','privacy.php');
  remove_submenu_page('options-general.php','options-discussion.php');
  
  // hide developer tools from non-devs
  $user = wp_get_current_user();
  $role = $user->roles ? $user->roles[0] : false;
  
  if( $role!='developer' ){
    remove_menu_page('themes.php');
    remove_menu_page('plugins.php');

    remove_submenu_page('tools.php','taxonomy-switcher');
    remove_submenu_page('options-general.php','options-permalink.php');
  }
},99);
?>