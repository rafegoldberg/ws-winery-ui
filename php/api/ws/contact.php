<?php 
function ws_api_contact(WP_REST_Request $req){

  $query = $req->get_query_params();

  $send  = "rafegoldberg@gmail.com";
  $email = $req->get_param('email');
  $name  = $req->get_param('name');
  $subj  = $req->get_param('subject');
  $text  = $req->get_param('text');

  if( in_array(false, $query) | in_array("false", $query)  )
    return new WP_Error('missing_params', __("All fields are required. Make sure you've filled ever out the form and <a href='?'>try again</a>!"), ['status'=>405]);

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
      <em>Hit <b>Reply</b> to respond directly to the user via email.</em>
    </p>
  <?
  $html = ob_get_clean();

  $head = [
    'Content-Type: text/html; charset=UTF-8',
    "Reply-To: $name <$email>",
  ];
  $mail = wp_mail($send, "Williams Selyem – $subj", $html, $head);
  
  if( !$mail)
    return new WP_Error('couldnt_send', __("We hit a snag sending your message! Please <a href='?'>try again</a> in a bit, or reach us by phone at the number below."), ['status'=>501]);
  
  return new WP_REST_Response([
    'message'=> "We'll get back to you as soon as we can."
  ], 200);
}

add_action('rest_api_init',function(){
  register_rest_route('ws/v1','contact',[
    'methods'  => 'GET',
    'callback' => 'ws_api_contact'
  ]);
});
?>