<?
function API_EnableCrossOrigin(){
  if( !did_action('rest_api_init') && $_SERVER['REQUEST_METHOD'] == 'HEAD' ){
    header('Access-Control-Allow-Origin: http://localhost:8080');
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
// Add filter to respond with next and previous post in post response.
function API_addNextPrev(){
  register_rest_field('post','adjacent',[
    'get_callback'=> function($post){
      global $post;

      $next = get_adjacent_post( true, '', false );
      $prev = get_adjacent_post( true, '', true  );
      $adj  = [];
  
      $adj['next'] = is_a($next,'WP_Post')
        ? [ "id"   => $next->ID,
            "slug" => $next->post_name ]
        : null;

      $adj['prev'] = is_a($prev,'WP_Post')
        ? [ "id"   => $prev->ID,
            "slug" => $prev->post_name ]
        : null;

      return $adj;
    },
    'schema'=> null,
  ]);
}
?>

<? 
# REMOVE this action adds additional data
#        to _all_ API calls, slows load...
function API_addWSMetas(){
  register_rest_field('post','ws:fields',array(
    'get_callback'=> function($post){
      return get_post_meta( $post['id'] );
    },
    'schema'=> null,
  ));
}
?>

<?
// add_action( 'rest_api_init', 'API_addWSMetas'  );
add_action( 'rest_api_init', 'API_addNextPrev' );
?>
