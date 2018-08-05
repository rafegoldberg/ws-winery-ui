<?/**
   * Template Name: Slider
   */
  ?>

<!DOCTYPE html>
<html lang="en">
<head>

  <title>VuePress</title>

  <!-- Metatags -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <!-- External -->
  <script src="//unpkg.com/wpapi@1.1.2/browser/wpapi.min.js"></script>
  <!-- <script src="//unpkg.com/vue"></script> -->
  
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