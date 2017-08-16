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


/* Toggles */
	(function ($) { 
		$('.post_toggles .post_toggle_title a, .post_toggle a').on('click', function (i) { 
			var active_toggle = $(this).parents('.post_toggles').find('.post_toggle_wrap.current_toggle .post_toggle'), 
				toggle = $(this).parents('.post_toggle_wrap'), 
				acc = ($(this).parents('.post_toggles').hasClass('toggles_mode_accordion')) ? true : false, 
				dropDown = toggle.find('.post_toggle');
			
			
			if (toggle.hasClass('current_toggle')) {
				dropDown.slideUp('fast', function () { 
					toggle.removeClass('current_toggle');
				} );
			} else {
				if (acc) {
					active_toggle.slideUp('fast', function () { 
						active_toggle.parents('.post_toggle_wrap').removeClass('current_toggle');
					} );
				}
				
				dropDown.slideDown('fast', function () { 
					toggle.addClass('current_toggle');
				} );
			}
			
			
			i.preventDefault();
			
			
			setTimeout(function () { 
				jQuery('body').trigger('debouncedresize');
			}, 300);
		} );
		
		
		$('.post_toggles .post_toggles_filter a, .post_toggle_filter a').on('click', function (i) { 
			var filter_wrap = $(this).parents('.post_toggles_filter'), 
				filter = $(this).data('key'), 
				toggle = $(this).parents('.post_toggles').find('.post_toggle_wrap');
			
			
			if ($(this).is(':not(.current_filter)')) { 
				filter_wrap.find('a').removeClass('current_filter');
				
				
				$(this).addClass('current_filter');
				
				
				toggle.filter('[data-tags~="' + filter + '"]').slideDown('fast');
				
				
				toggle.filter(':not([data-tags~="' + filter + '"])').slideUp('fast');
				
				
				toggle.filter(':not([data-tags~="' + filter + '"])').removeClass('current_toggle').find('.post_toggle').removeAttr('style');
			}
			
			
			i.preventDefault();
		} );
	} )(jQuery);

	







	