<?/** Init
   */
  function onWpInit(){
    add_theme_support('post-thumbnails');
    
    // include "php/tax/classNames.php";
    include "php/tax/staffRoles.php";
    include "php/tax/varietals.php";
    
    include "php/acf/config.php";
    include "php/acf/options.php";
  }
  add_action('init','onWpInit',0);
  ?>
  
<?/** Post Types
   */
  // include "php/types/example.php";
  ?>

<?/** API Config
   */
  include "php/api.php";
  ?>

<?/** ACF Config
   */
  // include "php/acf/options.php";
  ?>

<?/** Link UI
   */
  include "php/ui.php";
  ?>
