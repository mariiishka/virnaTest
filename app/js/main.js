var block_show = false;

function scrollTracking(){
	if (block_show) {
		return false;
	}
 
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.active').offset().top;
	var eh = $('.active').outerHeight();
	var dh = $(document).height();   
 
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
        // console.log('sd')

		$('.active-1').fadeIn('slow', 'linear').fadeTo('normal', 1);

		$('.active div:eq(0)').show('slow', function(){
			$(this).next().show('slow', arguments.callee);
		});
	} else {
        $('.active-1').fadeOut('fast', 'linear').fadeTo('normal', .5);

        $('.active div:eq(0)').hide('slow', function(){
			$(this).next().hide('slow', arguments.callee);
		});
    }

}
 
$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});
