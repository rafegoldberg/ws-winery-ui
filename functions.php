<?/** WP Init Configuration
   */
  function onWpInit(){
    add_theme_support('post-thumbnails');
    
    include "php/tax/staffRoles.php";
    include "php/tax/varietals.php";
    
    include "php/acf/config.php";
    include "php/acf/options.php";
  }
  add_action('init','onWpInit',0);
  ?>
<?/** Admin Menu Customization
   */
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
