<?php 
function ws_api_contact(WP_REST_Request $req){

  $query = $req->get_query_params();

  $send  = "rafegoldberg@gmail.com";
  $email = $req->get_param('email');
  $name  = $req->get_param('name');
  $subj  = $req->get_param('subject');
  $text  = $req->get_param('text');

  ob_start();
    ?>
    <table>
      <tr>
        <th style="text-align:right;padding: 10px; vertical-align: top; border-right: 1px solid #DDD;">From:</th>
        <td>
          <?=$name?> <em>(<?=$email?>)</em>
        </td>
      </tr>
      <tr>
        <th style="text-align:right;padding: 10px; vertical-align: top; border-right: 1px solid #DDD;">Subject:</th>
        <td><?=$subj?></td>
      </tr>
      <tr>
        <th style="text-align:right;padding: 10px; vertical-align: top; border-right: 1px solid #DDD;">Message:</th>
        <td><?=$text?></td>
      </tr>
    </table>
    <?
  $html = ob_get_clean();

  if( in_array(false, $query) )
  return new WP_Error('wpse-error', esc_html__('Please fill out all fields.','wpse'), ['status'=>404]);
  
  $mail = wp_mail($send, $subj, $html, ['Content-Type: text/html; charset=UTF-8']);
  
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