<?php 
function get_wine_reviews( $data ){
  $id   = (int) $data['id'];
  $meta = get_post_meta($id);
  $ttls = [
    "Two"   => 'Robert Parker',
    "Three" => 'Wine Enthusiast',
    "Four"  => 'Wine Spectator',
    "Five"  => 'Burghound',
    "Six"   => 'Vinous',
  ];
  $keys = $meta['reviewmulticheckbox'];
  if( empty($keys) )
    return new WP_REST_Response( false, 200 );
  $revs = array_map(function($v){
    $v = explode('reviewer',$v);
    return ucfirst($v[1]);
  },$keys);
  $revs = array_reduce($revs,function($arr,$ii) use ($meta,$ttls) {
    array_push($arr,[
      "Blurb"  => $meta["Review-$ii-Blurb"][0],
      "Name"   => array_key_exists($ii,$ttls) ? $ttls[$ii] : $meta["Review-$ii-Name"][0],
      "Points" => (int) $meta["Reviewer-$ii-Points"][0],
    ]);
    return $arr;
  },[]); 
  // $revs = rest_ensure_response($revs);
  return new WP_REST_Response( $revs, 200 );
}

add_action('rest_api_init',function(){  
  register_rest_route('ws/v1','/reviews/(?P<id>\d+)',array(
    'methods'  => 'GET',
    'callback' => 'get_wine_reviews'
  ));
});
?>