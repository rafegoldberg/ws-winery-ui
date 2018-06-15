## Metas

If you match your Vue routes to Wordpress URLs you can pre-populate metatags. This "server-side rendering" trick will (I think) be a useful trick for better SEO. 

#### Usage

```php
<head>
  <!-- metatags -->
  <?#=prerender=>
    $metas = include "php/metas/webapp.php";
    $metas .= include "php/metas/social.php";
    echo $metas;
    ?>
```