<?
register_taxonomy("AVA",'post',[
  'description' => "American Viticultural Areas (AVA)",
  'labels'      => [
    'name'          => "Areas (AVA)",
    'singular_name' => "Area",
    'add_new_item'  => "New Area",
    'all_items'     => "All Areas",
  ],
  'public'             => true,
  'publicly_queryable' => true,
  'show_in_rest'       => true,
  "meta_box_cb"        => false,
  'show_admin_column'  => false,
  'has_archive'        => false,
  'hierarchical'       => false,
  'show_in_quick_edit' => true,
])
?>