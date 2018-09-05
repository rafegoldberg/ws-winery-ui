<?php
function addRole_developer(){
  global $roles;
  if ( !isset($roles) ) $roles = new WP_Roles();

  $admin = $roles->get_role('administrator');

  $roles->add_role('developer', 'Developer', $admin->capabilities);
}
add_action('init', 'addRole_developer')
?>