<?/** API Config
   */
  include "php/api/adjacent.php";
  include "php/api/CORS.php";
  include "php/api/metaQuery.php";
  include "php/api/wsMetas.php";

  include "php/wp/shortcodes/gold.php";
?>

<?/** Post Types
   */
  // include "php/types/example.php";
  ?>

<?/** Taxonomies
   */
  // include "php/tax/classNames.php";
  include "php/tax/vitAreas.php";
  include "php/tax/staffRoles.php";
  include "php/tax/varietals.php";
?>

<?/** ACF Config
   */
  // include "php/acf/options.php";
  include "php/acf/config.php";
  include "php/acf/options.php";
?>

<?/** Init
   */
  function onWpInit(){
    add_theme_support('post-thumbnails');
  }
  add_action('init','onWpInit',0);
  ?>
  
<?/** Link UI
   */
  include "php/ui.php";
  ?>
