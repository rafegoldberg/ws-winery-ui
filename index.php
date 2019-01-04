<?
$isie = false;
// $isie = htmlentities($_SERVER['HTTP_USER_AGENT'], ENT_QUOTES, 'UTF-8');
// $isie = preg_match('~MSIE|Internet Explorer~i', $ua) || (strpos($ua, 'Trident/7.0') !== false && strpos($ua, 'rv:11.0') !== false) ? true : false;
if( $_REQUEST['isie'] ) $isie = true;
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Williams Selyem</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <?if( !$isie ):?>
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
  <?endif?>

  <?wp_head()?>
</head>
<body <?if( !$isie ){ body_class() }?>>

  <?if( !$isie ):?>
    <div id="app">
      <div hidden>
      <?if( have_posts() )while( have_posts() ){
        the_post();
        the_title();
        }?>
      </div>
    </div>
  <?else:
    get_template_part("templates/ie", "warning");
    ?>
  <?endif?>

  <?wp_footer()?>
</body>
</html>