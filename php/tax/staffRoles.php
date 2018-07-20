<?
register_taxonomy("staff_roles",'post',[
  'public' => true,
  'publicly_queryable' => true,
  'show_in_rest' => true,
  "meta_box_cb" => false,
  'has_archive' => false,
  'hierarchical' => false,
  'labels'       => [
    'name'=>"Staff Roles",
    'singular_name'=>"Role",
  ],
])
?>