jQuery(document).ready(function(){
	jQuery("#slider").slider({
		min: 0,
		max: 35000,
		step: 20,
		stop: function(event, ui) {
			value01 = jQuery("#slider").slider("value");
			
			if (value01 > 1000) {
				newStep = 1000
				jQuery("#slider").slider('option', 'step', newStep);
				jQuery("input#minCost").val(value01);
			} else {
				newStep = 20
				jQuery("#slider").slider('option', 'step', newStep);
				jQuery("input#minCost").val(value01);
			}
		},
		slide: function(event, ui){
			
			value01 = jQuery("#slider").slider("value");
			
			if (value01 > 1000) {
				newStep = 1000
				jQuery("#slider").slider('option', 'step', newStep);
				jQuery("input#minCost").val(value01);
			} else {
				newStep = 20
				jQuery("#slider").slider('option', 'step', newStep);
				jQuery("input#minCost").val(value01);
			}
		}
	});

	jQuery("input#minCost").change(function(){
		var value_input = jQuery("input#minCost").val();
		
		jQuery("#slider").slider("value",value_input);
	});
});



