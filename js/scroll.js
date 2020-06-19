$(document).ready(function(e) {
	 $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#scrollup').fadeIn();
			$('div.menu').css({'position':'fixed','top':0,'left':0,'width':'100%','z-index':100});
		} else {
			$('#scrollup').fadeOut();
			$('div.menu').css({'position':'relative','top':'auto','left':'auto'});
		}
		}); 

	$('#scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 });
		return false;
	});
});
