<?function acf_move_wpContent_field(){
  $FIELD = 'field_5b734477a0500';
  ?>
  <script type="text/javascript">
    (function($){
      $(document).ready(function(){
        $('[data-key="<?=$FIELD?>"] .acf-input').append( $('#postdivrich') )
      })
    })(jQuery)
  </script>
  <style type="text/css">
    .acf-field #wp-content-editor-tools {
      background: transparent;
      padding-top: 0;
    }
  </style>
  <? } # acf_move_wpContent_field() ?>

<?function acf_set_wpTitle_field( $ID ) {

  $title = get_post($ID)->post_title;

  $post = array();
  $post['ID'] = $ID;
  
  if( $field_value = get_field('post_title') ){
    $post['post_title'] = $field_value;  
    wp_update_post( $post );
  }
  else if( $title ){
    update_field('post_title',$title);
  }
  } ?>

<?
add_action('acf/input/admin_head', 'acf_move_wpContent_field');
add_action('acf/save_post', 'acf_set_wpTitle_field', 20);
?>