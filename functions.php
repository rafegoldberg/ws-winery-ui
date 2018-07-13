<?/** WP Configuration
   */
  add_theme_support( 'post-thumbnails' );
  ?>
  
<?/** Custom Post Type Registration
   */
  // include "php/types/example.php";
  ?>

<?/** WP Rest API Configuration
   */
  include "php/api.php";
  ?>

<?/** ACF Options Page Registration
   */
  // include "php/acf/options.php";
  ?>

<?/** Attach the UI
   */
  include "php/ui.attach.php";
  ?>
