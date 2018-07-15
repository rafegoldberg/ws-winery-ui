<?/** WP Init Configuration
   */
  function onInitWP(){

    add_theme_support('post-thumbnails');
    
    add_filter( 'acf/settings/remove_wp_meta_box', '__return_false' );
    
    register_taxonomy("staff_roles",'post',[
      'public' => true,
      'publicly_queryable' => true,
      'show_in_rest' => true,
      "meta_box_cb" => false,
      'has_archive' => false,
      'hierarchical' => false,
      'labels'       => [
        'name'=>"Staff Roles",
        'singular_name'=>"Role",
      ],
      ]);
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
  include "php/ui.attach.php";
  ?>
