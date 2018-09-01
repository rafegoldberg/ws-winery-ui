<?

add_shortcode('button',function( $atts, $html='' ){
	
	$text = $html ? $html : false;
	$text = $text ? $text : $atts['text'];
  $url  = $atts['url'] ? $atts['url'] : '#';
  
	unset($atts['text']);
	unset($atts['url']);
	
	$class = array_merge( ['UiButton'], array_values($atts) );
	$class = implode(' UiButton_',$class);

	return "<a href='$url' class='$class'><span class='UiButton--inner'>$text</span></a>";
});

add_shortcode('buttonGroup',function( $atts, $html='' ){
  
  // $tag = $atts['tag'] ? $atts['tag'] : 'div';
  // unset($atts['tag']);
  
  $class = ["ButtonGroup"];

  if( is_array($atts) && count($atts) )
    $class .= implode(array_values($atts)," ");

  $class = implode($class,' ');
  $html  = do_shortcode($html);
	return "<div class='$class'>$html</div>";
});

?>