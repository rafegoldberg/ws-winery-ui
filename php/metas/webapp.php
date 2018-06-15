<?function WebappMetas() {

  $context = [
    "themeURI" => get_stylesheet_directory_uri()
  ];
  $markup  = WebappMetasGenerator( $context );
  
  return $markup;
}?>

<?function WebappMetasGenerator($context=[]){
  $CTX = (object) $context;
  ob_start()
  ?>
  <!-- favicon -->
  <link rel="icon" href="<?=$CTX->themeURI?>/favicon.ico">

  <!-- webapp -->
  <link rel="apple-touch-icon" rel:glossy="-precomposed" href="<?=$CTX->themeURI?>/app-icon.png"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <?
  # <link rel="apple-touch-startup-image" href="img/splash.png" />
  return ob_get_clean();
}?>

<? return WebappMetas() ?>