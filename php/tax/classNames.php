<?register_taxonomy("classNames",'page',[
  'public' => true,
  'publicly_queryable' => true,
  'labels' => [
    'name'=>"Component Classes",
    'singular_name'=>"Class",
  ],
  'show_in_rest' => false,
  "meta_box_cb"  => false,
  'has_archive'  => true,
  'hierarchical' => true,
  ])?>

<?# add_filter(
  # 'acf/fields/taxonomy/result/name=test-term',
  # function( $title, $term, $field, $post_id ){
  #   $parent = get_term_by('id',$term->parent,'classNames');
  #   return $parent->name .' '. $title;
  # },
  # 10, 4)?>

<?# add_filter(
  # 'acf/fields/taxonomy/query/name=test-term',
  # function($args, $field, $post_id){
  #   // $args['post_parent__in'] = [77];
  #   $args['exclude'] = [77];
  #   return $args;
  # },
  # 10, 3 )?>