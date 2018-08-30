<?php 
function ws_api_contact(WP_REST_Request $req){

  if(count(array_intersect( [false,"false"], $req->get_query_params() )))
  return new WP_Error('missing_params', __("All fields are required. Make sure you've filled everything out and try again."), ['status'=>405]);
  
  $fields = (object) get_fields('options');
  $image  = $fields->mailer['image'];
  $sendto = $fields->mailer['sendto'];

  $email = $req->get_param('email');
  $name  = $req->get_param('name');
  $subj  = $req->get_param('subject');
  $text  = $req->get_param('text');

  $html = ob_start();
  ?>
    <table style="width: 100%; margin: 15px 0 0; border-collapse: collapse">
      <tr>
        <td colspan="2" align="center">
          <a href="<?=get_site_url()?>" style="display: inline-block; width: 180px">
            <img src="<?=$image?>" alt="<?=get_bloginfo('name')?>" style="width: 180px">
          </a>
        </td>
      </tr>
    </table>
    <table style="border-collapse: collapse; color: #333; max-width: 460px; margin: 25px auto;">
      <tr>
        <th style="text-align:right; padding: 10px; vertical-align: top; border-right: 1px solid #DDD; border-bottom: 1px solid #BA9454">
          <em style="font-family: Georgia, serif">from:</em>
        </th>
        <td style="padding: 10px; border-bottom: 1px solid #BA9454">
          <?=$name?> <em>(<?=$email?>)</em>
        </td>
      </tr>
      <tr>
        <th style="text-align:right; padding: 10px; vertical-align: top; border-right: 1px solid #DDD; border-bottom: 1px solid #BA9454">
          <em style="font-family: Georgia, serif">regarding:</em>
        </th>
        <td style="padding: 10px; border-bottom: 1px solid #BA9454"><?=$subj?></td>
      </tr>
      <tr>
        <th style="text-align:right; padding: 10px; vertical-align: top; border-right: 1px solid #DDD">
          <em style="font-family: Georgia, serif">message:</em>
        </th>
        <td style="padding: 10px"><?=$text?></td>
      </tr>
    </table>
    <hr style="border:solid #DDD; border-width:1px 0 0">
    <p style="color: #666; line-height: 1.3">
      <small>
        This email was sent from
        <a href="<?=get_site_url()?>" style="font-style: italic; font-weight: normal">
          <?=get_bloginfo('name')?>
        </a>.
        You can <b>reply to this thread to email the user</b> back at <?=$email?>.
      </small>
    </p>
  <?
  $html = ob_get_clean();

  $head = [
    'Content-Type: text/html; charset=UTF-8',
    "Reply-To: $name <$email>",
  ];
  $mail = wp_mail($sendto, "Williams Selyem – $subj", $html, $head);
  
  if( false/* !$mail */ )
    return new WP_Error('couldnt_send', __("We hit a snag and couldn't send your message! Please <a href='?'>reload the page</a>, or try again in a bit if the issue persists. You can also <a href='#call'>reach us by phone</a>."), ['status'=>501]);
  
  return new WP_REST_Response([
    'markup' => $html,
    'fields' => $fields,
    'receipt'=> $sendto,
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