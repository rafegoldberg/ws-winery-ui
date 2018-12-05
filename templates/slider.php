<?/**
   * Template Name: Slider
   */
  ?>

<!DOCTYPE html>
<html lang="en">
<head>

  <title>Williams Selyem</title>

  <!-- Metatags -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <!-- External Dependencies -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js"></script>
  <script src="//unpkg.com/wpapi@1.1.2/browser/wpapi.min.js"></script>

  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-46387613-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-46387613-1');
  </script>

  <!-- Wordpress -->
  <?wp_head()?>
  
</head>
<body <?body_class()?>>

  <!-- Vue -->
  <div id="app">
    <div hidden>
    <?if (have_posts()) while (have_posts()) {
      the_post();
      the_title();
      // the_content();
    }?>
    </div>
  </div>

  <!-- Wordpress -->
  <?wp_footer()?>

</body>
</html>