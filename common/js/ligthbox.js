$(function(){
	$(".box ul li a").each(function(index){
		$(this).attr("data-index",index)
	});
$(".lib ul li").each(function(index){
		$(this).attr("data-index",index)
	});
$(".box ul li a").click(function(){
	var boxI = $(this).attr("data-index");
	console.log(boxI);
	$(".lib_bg").fadeIn();
	$("body .lib_bg>*").fadeIn();
});
function lightOpen(){
	var libW = $(".lib").width();
	$(".lib ul li").width(libW);
	$(".lib ul").width($(".box ul li").length*libW).height()
	var libH = $(".lib").height();
	$(".lib").css(
	{
		"height": libH,
		"margin-top": (libH/2).
		"margin-left": (libW/2)
	})
}
$(window).resize(function(){
	lightOpen();
});
});