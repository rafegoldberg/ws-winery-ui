<?
register_taxonomy("varietals",'post',[
  'labels' => [
    'name'=>"Varietals",
    'singular_name'=>"Varietal",
  ],
  'public'             => true,
  'publicly_queryable' => true,
  'show_in_rest'       => true,
  'meta_box_cb'        => false,
  'has_archive'        => false,
  'hierarchical'       => true,
  'show_admin_column'  => true,
  'show_in_quick_edit' => true,
])
?>