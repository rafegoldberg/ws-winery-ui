<?register_taxonomy("staff_roles",'post',[
  'labels'       => [
    'name'=>"Staff Roles",
    'singular_name'=>"Role",
  ],
  'public' => true,
  'publicly_queryable' => true,
  'show_in_rest' => true,
  "meta_box_cb" => false,
  'has_archive' => false,
  'hierarchical' => false,
])?>