<?function acf_admin_setup(){
  acf_move_wpContent_field();
  acf_add_fieldGroup_classes();
  } ?>

<?function acf_add_fieldGroup_classes(){?>
  <script>
    (function($){
      $(document).ready(function(){
        $('#acf-group_5b7e9604dbef2, #acf-group_5b6d3536cbd63, #acf-group_5b45397e341bd').addClass('noMove')
      })
    })(jQuery)
  </script>
  <? } ?>

<?function acf_move_wpContent_field(){
  $FIELDS = [ 
    "field_5b816f7b62666" => 'prepend',
    "field_5b734477a0500" => 'append',
  ];
  ?>
  <script type="text/javascript">
    (function($){
      $(document).ready(function(){
        var
        fields = <?=json_encode($FIELDS)?>,
        editor = $('#postdivrich')

        if( editor.is(':visible') )
          Object.keys(fields).map(key=>{
            var
            put = fields[key],
            acf = key
            acf = '[data-key="' + acf + '"] .acf-input'
              return $(acf)[put](editor)
          })
      })
    })(jQuery)
  </script>
  <style type="text/css">
    body:not(.post-new-php) .hide-on-not-new,
    body.post-new-php .hide-on-new {
      display: none !important;
    }
    .acf-field #wp-content-editor-tools {
      background: transparent;
      padding-top: 0;
    }
    .acf-input > #postdivrich + .acf-editor-wrap {
      display: none !important;
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
add_action('acf/input/admin_head', 'acf_admin_setup');
add_action('acf/save_post', 'acf_set_wpTitle_field', 20);
?>