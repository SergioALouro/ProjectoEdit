$(document).ready(function(){
	$('.icon-list').on('click',function(){
		$('.box').animate({ right: 0,}, 'slow');
	});
	$('.icon-cancel').on('click',function(){
		$('.box').animate({ right: -320,},'slow'); 
	});

	$('.next').on('click',function(){
		var currentImg = $('.active');
		var nextImg = currentImg.next();

		if (nextImg.length) {
			nextImg.addClass('active');
			currentImg.removeClass('active');
		}
	});

	$('.prev').on('click',function(){
		var currentImg = $('.active');
		var previousImg = currentImg.prev();

		if (previousImg.length) {
			previousImg.addClass('active');
			currentImg.removeClass('active');
		}
	});

	$('.icon-search').on('click', function(){
		$('.search-box').toggle('slow', function(){
		});
	});


});
