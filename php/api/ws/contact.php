<?php 
function ws_api_contact(WP_REST_Request $req){

  $query = $req->get_query_params();

  $send  = "rafegoldberg@gmail.com";
  $email = $req->get_param('email');
  $name  = $req->get_param('name');
  $subj  = $req->get_param('subject');
  $text  = $req->get_param('text');

  if( in_array(false, $query) | in_array("false", $query)  )
    return new WP_Error('wpse-error',esc_html__('Please fill out all fields.','wpse'),[
      'status'=> 404
    ]);

  ob_start();
  ?>
    <table style="border-collapse: collapse">
      <tr>
        <th style="text-align:right; padding: 10px; vertical-align: top; border-right: 1px solid #DDD">From:</th>
        <td style="padding: 10px">
          <?=$name?> <em>(<?=$email?>)</em>
        </td>
      </tr>
      <tr>
        <th style="text-align:right; padding: 10px; vertical-align: top; border-right: 1px solid #DDD">Regarding:</th>
        <td style="padding: 10px"><?=$subj?></td>
      </tr>
      <tr>
        <th style="text-align:right; padding: 10px; vertical-align: top; border-right: 1px solid #DDD">Message:</th>
        <td style="padding: 10px"><?=$text?></td>
      </tr>
    </table>
    <hr>
    <p style="color: #666">
      <em>Just hit <b>Reply</b> to respond directly to this user.</em>
    </p>
  <?
  $html = ob_get_clean();
  
  $mail = wp_mail($send, "New WS User Message – $subj", $html, [
    'Content-Type: text/html; charset=UTF-8',
    "Reply-To: $name <$email>",
  ]);
  
  return new WP_REST_Response([
    'mssg'=>$html,
    'sent'=>$mail,
    'meta'=>
  ], 200);
}

add_action('rest_api_init',function(){
  register_rest_route('ws/v1','contact',array(
    'methods'  => 'GET',
    'callback' => 'ws_api_contact'
  ));
});
?>