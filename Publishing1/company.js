	var liw =  parseInt($('.imgG').children('li').css('width'));

	$('.imgG').css('margin-left', -liw + 'px');
	$('.imgG>li:first').appendTo($('.imgG'));

	$('.btnL').click(function(){
		var marginL = parseInt($('.imgG').css('margin-left'));
		$('.imgG').animate({marginLeft:marginL+liw}, function(){
			$('.imgG').css('margin-left', -liw + 'px');
			$('.imgG>li:last').prependTo($('.imgG'));
		});
	});
	
	$('.btnR').click(slide);
	function slide(){
		var marginL = parseInt($('.imgG').css('margin-left'));
		$('.imgG').animate({marginLeft:marginL-liw},function(){
			$('.imgG').css('margin-left', -liw + 'px');
			$('.imgG>li:first').appendTo($('.imgG'));
		});
	}
	
	var auto = setInterval(slide, 2000);

	$('.btn').hover(function(){
		clearInterval(auto);
	}, function(){
		auto = setInterval(slide, 2000);
	});

	
	
	$('.btnL').mouseenter(function(){
		$(".btnL").css({"opacity":"1"});
	});
	$('.btnL').mouseleave(function(){
		$(".btnL").css({"opacity":"0.4"});
	});
	$('.btnR').mouseenter(function(){
		$(".btnR").css({"opacity":"1"});
	});
	$('.btnR').mouseleave(function(){
		$(".btnR").css({"opacity":"0.4"});
	});

//header
$(window).scroll(function(){
	if(100>$(window).scrollTop()/*<400*/) {
		$('.nav').css({'background-color':'rgba(0,0,0,0)','transition':'.5s'});
		$('button').css('display','none');
	} else {
		$('.nav').css('background-color','rgba(0,0,0,1)');
		$('button').css('display','block');
	}
});
