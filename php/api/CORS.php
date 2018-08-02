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