<?if( true ):
  $classGroups = get_field('classGroups','options');
  foreach ($classGroups as $group) {
    /* ?><script>
        console.log('Class Group->',<?=json_encode($group)?>)
        </script><?
    */
    register_taxonomy("$group[slug]ClassGroup",'page',[
      'public' => true,
      'publicly_queryable' => true,
      'labels' => [
        'name'=>"$group[name] Classes",
        'singular_name'=>"$group[name] Class",
      ],
      'show_in_rest' => false,
      "meta_box_cb"  => false,
      'has_archive'  => true,
      'hierarchical' => true,
    ]);
  }
endif;?>