$(document).ready(function(){
	var crrImg = 0;
	var thmb_h = $('.gallery_thumbs .nav li').height();
	var thmbsh = $('.gallery_thumbs .nav ul').height();
	thmbsh = thmbsh-390;
	var thmb_t = $('.gallery_thumbs .nav ul').css('top') == '0px' ? 0 : thmb_t;
	
	$('.gallery_thumbs li a, .gallery_thumbs #up_btn, .gallery_thumbs #down_btn').click(function(){
		return false;
	});
	
	$('.large_img img').each(function(e){
		$(this).css('display','none')
	});
	$('.large_img').find('img').eq('0').fadeIn('slow')
	
	$('.gallery_thumbs li').each(function(e){
		$(this).find('a').click(function(){
			$('.large_img').find('img').eq(crrImg).fadeOut(1000);
			crrImg = e;
			$('.large_img').find('img').eq(e).fadeIn(1000);
		});
	});
	
	$('.gallery_thumbs #up_btn').click(function(){
		if (thmb_t < 0) {
			thmb_t = thmb_t + thmb_h;
			$('.gallery_thumbs .nav ul').animate({top:thmb_t}, 500);
		}
	});
	
	$('.gallery_thumbs #down_btn').click(function(){
		if (thmb_t > -thmbsh) {
			thmb_t = thmb_t - thmb_h;
			$('.gallery_thumbs .nav ul').animate({top:thmb_t}, 500);
		}
	});
});