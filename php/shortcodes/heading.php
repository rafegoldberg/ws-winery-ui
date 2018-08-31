<?add_shortcode('heading',function( $atts, $html=null ){
	
	$level = $atts['level'] ? $atts['level'] : 3;
	$scale = $atts['scale'] ? $atts['scale'] : $atts['level'];
	
	unset($atts['level']);
	unset($atts['scale']);
	
	$tag     = "h$level";
	$classes = "UiHeading UiHeading_scale$scale ";
	$classes.= "UiHeading_";
	$classes.= implode(array_values($atts)," UiHeading_");

	return "<$tag class='$classes'>$html</$tag>";
})?>