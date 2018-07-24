<?
register_taxonomy("varietals",'post',[
  'public' => true,
  'publicly_queryable' => true,
  'labels' => [
    'name'=>"Varietals",
    'singular_name'=>"Varietal",
  ],
  'show_in_rest' => true,
  "meta_box_cb"  => false,
  'has_archive'  => false,
  'hierarchical' => true,
])
?>