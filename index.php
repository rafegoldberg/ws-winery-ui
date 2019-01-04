<?
$isIE = false;
$isIE = htmlentities($_SERVER['HTTP_USER_AGENT'], ENT_QUOTES, 'UTF-8');
$isIE = preg_match('~MSIE|Internet Explorer~i', $isIE) || (strpos($isIE, 'Trident/7.0') !== false && strpos($isIE, 'rv:11.0') !== false)
  ? true
  : false;
if( $_REQUEST['test']=='ie' ) $isIE = true;
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Williams Selyem</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <!-- External  -->
    <script src="//unpkg.com/wpapi@1.1.2/browser/wpapi.min.js"></script>

  <!-- Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-46387613-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-46387613-1');
    </script>

  <?wp_head()?>
</head>
<body <?body_class(($isIE ? 'is-ie' : ''))?>>

    <div id="app">
      <div hidden>
      <?if( have_posts() )while( have_posts() ){
        the_post();
        the_title();
        }?>
      </div>
    </div>
    
  <?if( $isIE )
    get_template_part("templates/ie", "warning");
    ?>

  <?wp_footer()?>
</body>
</html>