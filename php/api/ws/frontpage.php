<?php 
function get_frontpage( ){
  $id    = get_option( 'page_on_front' );
  $front = $id>0 ? get_post($id) : null;
  if( !is_a($front,'WP_Post') )
    return new WP_Error(
      'wpse-error',
      esc_html__('No Static Frontpage','wpse'),
      ['status'=>404]
    );
  $front->acf = get_fields($id);
  return new WP_REST_Response( $front, 200 );
}

add_action('rest_api_init',function(){  
  register_rest_route('ws/v1','front',array(
    'methods'  => 'GET',
    'callback' => 'get_frontpage'
  ));
});
?>