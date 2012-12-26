
$(window).stellar();

$(document).ready(function(){
	
	$('.scroll').click(function(){
  	var catTopPosition = $($(this).attr('href')).offset().top;
		$('html, body').animate({scrollTop:catTopPosition});
	});
});