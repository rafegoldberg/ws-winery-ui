<?/** WP Init Configuration
   */
  function onInitWP(){

    add_theme_support('post-thumbnails');
    
    add_filter( 'acf/settings/remove_wp_meta_box', '__return_false' );
    
    include "php/tax/staffRoles.php";
    include "php/tax/varietals.php";

  }
  add_action('init','onInitWP',0);
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
  include "php/ui.php";
  ?>
