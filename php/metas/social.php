<?function SocialMetas() {
  if( !is_callable('get_field') ) return;
  
  $context = get_field("metacard");
  $markup  = SocialMetasGenerator( $context );
  
  return $markup;
}?>

<?function SocialMetasGenerator($context){
  $context = (object) $context;
  $isHome  = is_home() || is_front_page() ? true : false;
  ob_start()
  ?>  
  <!-- social -->
  <meta property="og:title" content="<?=
    $isHome ? '' : get_the_title()." // " ?><?=get_bloginfo('name')
    ?>">
  <meta property="og:description" content="<?=
    $isHome
      ? wp_strip_all_tags(get_field('mandate','options'))
      : is_string($context->text) ? $context->text : get_the_excerpt()
    ?>">
  <meta property="og:image" content="<?= $context->image['url']?> ">
  <meta name="twitter:card" content="summary_large_image">
  <?
  return ob_get_clean();
}?>

<? return SocialMetas() ?>