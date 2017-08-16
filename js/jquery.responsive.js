jQuery(document).ready(function() { 
	/* Mobile Devices Navigation Script */
	(function ($) { 
		$('a.button_menu').on('click', function () { 
			if ($(this).hasClass('active')) {
				$('.nav_menu').css( { 
					display : 'none'
				} );
				$(this).removeClass('active');
			} else {
				$('.nav_menu').css( { 
					display : 'block'
				} );
				
				$(this).addClass('active');
			}
			
			return false;
		} );
		
		$(window).bind('resize', function () { 
			if ($(this).width() > 768) {
				$('a.button_menu').removeClass('active');
				$('.nav_menu').removeAttr('style');
			}
		} );
	} )(jQuery);
} );


jQuery(document).ready(function() { 
	/* Mobile Devices Navigation Script */
	(function ($) { 
		$('a.close').on('click', function () { 
			if ($(this).hasClass('active')) {
				$('.alert_post').css( { 
					display : 'block'
				} );
				$(this).removeClass('active');
			} else {
				$('.alert_post').css( { 
					display : 'none'
				} );
				
				$(this).addClass('active');
			}
			
			return false;
		} );
		
	} )(jQuery);
} );







	