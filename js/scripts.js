$(function($) {

	var $beforeSlide = $('.before-slide'),
	img_width = $('.before-slide img').width(), 
	init_split = Math.round(img_width / 2);
	
	var compSlide = $('.comparison-slider');
	var bf = $('#before');
	var af = $('#after');
	
	$beforeSlide.width(init_split);
	
	var isDown = false;
	
	compSlide.mousedown(function () {
	isDown = true;
		compSlide.mousemove(function (e) {
			if(isDown){
				var offSetSlide = e.offsetX || e.clientX - $beforeSlide.offset().left;
				$beforeSlide.width(offSetSlide);
				
				if (offSetSlide <= 120)
				{
					bf.hide();
				}
			
				if (offSetSlide >= 120)
				{
					bf.show();
				}	
				
				if (offSetSlide >= 400)
				{
					af.hide();
				}
		
				if (offSetSlide <= 400)
				{
					af.show();
				}
			}
		
			compSlide.mouseup(function () {
				isDown = false;
			});
				
		});
	});
});
