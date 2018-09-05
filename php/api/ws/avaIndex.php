<?
// Add order position as int to AVA endpoint
function add_AVAIndicies(){
  register_rest_field('AVA','index',[
    'get_callback'=> function($term){
      $terms = get_terms($term['taxonomy'],["fields"=>'ids']);
      $index = array_search($term['id'],$terms);
      return $index+1;
    },
    'schema'=> null,
  ]);
}
add_action( 'rest_api_init', 'add_AVAIndicies' );
?>