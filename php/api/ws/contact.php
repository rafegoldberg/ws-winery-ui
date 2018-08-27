<?php 
function ws_api_contact(WP_REST_Request $req){

  $query = $req->get_query_params();

  $send  = "rafegoldberg@gmail.com";
  $name  = $req->get_param('name');
  $subj  = $req->get_param('subject');
  $email = $req->get_param('email');
  $text  = $req->get_param('text');
  $text .= "<br><br>$name <$email>";

  if( in_array(false, $query) )
  return new WP_Error('wpse-error', esc_html__('Please fill out all fields.','wpse'), ['status'=>404]);
  
  $mail = wp_mail($send, $subj, $text);
  
  return new WP_REST_Response(['query'=>[
    'send'=> $send,
    'subj'=> $subj,
    'text'=> $text,
  ], 'mail'=>$mail], 200);
}

add_action('rest_api_init',function(){
  register_rest_route('ws/v1','contact',array(
    'methods'  => 'GET',
    'callback' => 'ws_api_contact'
  ));
});
?>