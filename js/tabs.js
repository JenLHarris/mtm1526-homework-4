$(document).ready(function(){
		$("#tab2").hide()
		$("#tab3").hide()
		
		$('#tabs-nav a').on('click', function(){
			
		var tabToShow = $(this).attr('href');	
		console.log(tabToShow);
		
		$(tabToShow).fadeIn(300); //$('#tab-1')
		$('.selected').fadeOut(300);
		var classed = $(this).attr('href');
		$('.selected').removeClass('selected');
		
		$(tabToShow).removeClass('selected');
		$(tabToShow).addClass('selected');
		
		
		console.log(classed);
		if (tabToShow == classed){
			
				$(tabToShow).show("slow");
			
				
			}
			
		});	  
});

/*$(document).ready(function () {
	
	$('#next').on('click', function () {
		var current = $('.slides .current').index();
		var next = current + 1;
		
		if (next > $('.slides img').length - 1) {
			next = 0;
		}
		
		$('.slides .current').fadeOut(500, function () {
			$('.slides img')
				.eq(next)
				.fadeIn(500)
				.addClass('current')
			;
			
			$(this).removeClass('current');
		});
	});
	
});*/