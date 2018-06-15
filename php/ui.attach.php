<?/**
   * Link UI Scripts & Styles
   */
  function LinkUiAssets(){
    $BUNDLE = get_template_directory_uri() . "/dist/BGLJ";

    wp_enqueue_style(  'UiStyles', "$BUNDLE.css"  );
    wp_enqueue_script( 'UiScript', "$BUNDLE.umd.min.js", [], false, true );
    
    wp_localize_script('UiScript','WP_API_Settings',[
      'endpoint' => esc_url_raw(rest_url()),
      'nonce' => wp_create_nonce('wp_rest')
      ]);
    }
  add_action( 'wp_enqueue_scripts', 'LinkUiAssets' );
  ?>