var main = function () {
	
	$('.icon-menu').click(function() {
		$('.menu').animate({ left: '0px'}, 50);
		
        $('.menu').animate({ top: '0px'}, 250 );
		
    
        $('.jumbotron').animate({
            left: '285px'
        }, 500);
		
    });


	$('.icon-close').click(function() {
		$('.menu').animate({top: '-1000px'}, 500);
		
		$('.menu').animate({ left: '-285px'}, 500);
			
			
		$('.jumbotron').animate({
            left: '0px'
        }, 200);
		
	});
};
$(document).ready(main);