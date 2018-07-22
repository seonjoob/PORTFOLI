$(function(){
	$(".thumbnail ul li a").each(function(index){
		$(this).attr("data-index",index)
	});
	$(".lib ul li").each(function(index){
		$(this).attr("data-index",index)
	})
	$(".thumbnail ul li a").click(function(){
		var thumbI= $(this).attr("data-index");
		console.log(thumbI);
		$(".lib_bg").fadeIn();
		$("body .lib_bg>*").fadeIn(function(){
			lightOpen()
		});
	});
	
	function lightOpen(){
	var libW = $(".lib").width();
	$(".lib ul li").width(libW);
	$(".lib ul").width($(".lib ul li").length*libW)
	var libH = $(".lib ul li").height();
	$(".lib").css({
		"height":libH,
		"margin-top":-(libH/2),
		"margin-left":-(libW/2)
		})
	}
	$(window).resize(function(){
		lightOpen;
	});
});
