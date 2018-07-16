<?
function API_EnableCrossOrigin(){
  if( !did_action('rest_api_init') && $_SERVER['REQUEST_METHOD'] == 'HEAD' ){
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Expose-Headers: Link');
    header('Access-Control-Allow-Methods: HEAD, GET, OPTIONS');
  }
}
add_action( 'send_headers', 'API_EnableCrossOrigin' );
?>

<?
// function API_EnableMetaQuery($valid_vars){
//   $valid_vars = array_merge($valid_vars, array('filter'));
//   return $valid_vars;
// }
// add_filter('rest_query_vars', 'API_EnableMetaQuery');
?>

<? 
function API_EnableMetaFields(){
  
  register_rest_field('post','ws:fields',array(
    'get_callback'=> function($object){
      //get the id of the post object array
      $post_id = $object['id'];
      
      //return the post meta
      return get_post_meta( $post_id );
    },
    'schema'=> null,
  ));
}
add_action( 'rest_api_init', 'API_EnableMetaFields' )
?>
