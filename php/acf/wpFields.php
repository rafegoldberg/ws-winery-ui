<?function acf_moveWpContent(){
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
  <? } # acf_moveWpContent() ?>

<?
add_action('acf/input/admin_head', 'acf_moveWpContent');
?>