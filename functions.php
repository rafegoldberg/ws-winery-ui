<?/** WP Config
   */
  include "php/wp/admin.php";
  include "php/wp/relativeLinks.php";
  // include "php/wp/mimeTypes.php";

  include "php/wp/shortcodes/gold.php";
  include "php/wp/shortcodes/heading.php";

  include "php/api/adjacent.php";
  include "php/api/CORS.php";
  include "php/api/metaQuery.php";
  include "php/api/wsMetas.php";

  include "php/api/ws/frontpage.php";
  include "php/api/ws/reviews.php";
  include "php/api/ws/contact.php";
?>

<?/** Attach Vue UI
   */
  include "php/ui.php";
  ?>

<?/** Register Post Types
   */
  // include "php/types/example.php";
  ?>

<?/** Register Taxonomies
   */
  include "php/tax/classNames.php";
  include "php/tax/vitAreas.php";
  include "php/tax/staffRoles.php";
  include "php/tax/varietals.php";
?>

<?/** Configure ACF
   */
  // include "php/acf/localize.php";
  include "php/acf/config.php";
  include "php/acf/options.php";
  include "php/acf/wpFields.php";
?>

<?/** Configure WP Theme
   */
  function onWpInit(){
    add_theme_support('post-thumbnails');
  }
  add_action('init','onWpInit',0);
?>

<?/** Configure Rest Caching Plugin
   * (clear on post update)
   */
  function clear_api_cache(){
    if( class_exists( 'WP_REST_Cache' ) )
    WP_REST_Cache::empty_cache();
  }
  add_action('save_post','clear_api_cache');
  ?>