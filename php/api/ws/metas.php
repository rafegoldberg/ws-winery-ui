<? 
function API_addWSMetas(){
  register_rest_field('post','ws:fields',array(
    'get_callback'=> function($post){
      return get_post_meta( $post['id'] );
    },
    'schema'=> null,
  ));
}
// add_action( 'rest_api_init', 'API_addWSMetas'  );
?>