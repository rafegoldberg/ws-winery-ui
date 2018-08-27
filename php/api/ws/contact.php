<?php 
function ws_api_contact(WP_REST_Request $req){

  $query = $req->get_query_params();

  $send  = "contact@williamsselyem.com";
  $email = $req->get_param('email');
  $name  = $req->get_param('name');
  $subj  = $req->get_param('subject');
  $text  = $req->get_param('text');

  if( in_array(false, $query) | in_array("false", $query)  )
    return new WP_Error('missing_params', __("All fields are required. Make sure you've filled ever out the form and <a href='?'>try again</a>!"), ['status'=>405]);

  $img = get_field('fallbacks','options')['mailer_image'];
  ob_start();
  ?>
    <table style="border-collapse: collapse">
      <tr>
        <td colspan="2" align="center">
          <a href="<?=get_site_url()?>">
            <img src="<?=$img?>" alt="<?=get_bloginfo('name')?>" style="width: 180px">
          </a>
        </td>
      </tr>
    </table>
    <table style="border-collapse: collapse">
      <tr>
        <th style="text-align:right; padding: 10px; vertical-align: top; border-right: 1px solid #DDD; border-bottom: 1px solid #BA9454">From:</th>
        <td style="padding: 10px; border-bottom: 1px solid #BA9454">
          <?=$name?> <em>(<?=$email?>)</em>
        </td>
      </tr>
      <tr>
        <th style="text-align:right; padding: 10px; vertical-align: top; border-right: 1px solid #DDD; border-bottom: 1px solid #BA9454">Regarding:</th>
        <td style="padding: 10px; border-bottom: 1px solid #BA9454"><?=$subj?></td>
      </tr>
      <tr>
        <th style="text-align:right; padding: 10px; vertical-align: top; border-right: 1px solid #DDD">Message:</th>
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
        You can <b>reply to this message to email the user</b> back (at <?=$email?>.)
      </small>
    </p>
  <?
  $html = ob_get_clean();

  $head = [
    'Content-Type: text/html; charset=UTF-8',
    "Reply-To: $name <$email>",
  ];
  $mail = wp_mail($send, "Williams Selyem – $subj", $html, $head);
  
  if( !$mail )
    return new WP_Error('couldnt_send', __("We hit a snag sending your message! Please <a href='?'>try again</a> in a bit, or reach us by phone at the number below."), ['status'=>501]);
  
  return new WP_REST_Response([
    'markup' => $html,
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