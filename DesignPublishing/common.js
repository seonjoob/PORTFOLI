
$(function(){
 
		$("#art1").fadeIn(2000).slideDown(1000);
		$("#menu").fadeIn(500);

		$(".mini").fadeIn(1000).slideDown(1000);
		$("h2").fadeIn(2000);
		$(".txt2").fadeIn(2000);

    $('.p1').backstretch([
    "images/p1.jpg",
      "images/p11.jpg",
      "images/p21.jpg"
      ], {
       duration: 3000,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 0, //Use the lazy-loading functionality
        start: 0 
    });
  $('.p2').backstretch([
    "images/p2.jpg",
      "images/p22.jpg",
      "images/p22.jpg"
      ], {
       duration: 4500,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
    $('.p3').backstretch([
    "images/p3.jpg",
      "images/p13.jpg",
      "images/p23.jpg"
      ], {
       duration: 6000,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
  $('.p4').backstretch([
    "images/p4.jpg",
      "images/p14.jpg",
      "images/p24.jpg"
      ], {
       duration: 7500,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
  $('.p5').backstretch([
    "images/p5.jpg",
      "images/p15.jpg",
      "images/p25.jpg"
      ], {
       duration: 9500,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
  $('.p6').backstretch([
    "images/p6.jpg",
      "images/p16.jpg",
      "images/p26.jpg"
      ], {
       duration: 10500,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
 $('.p7').backstretch([
    "images/p7.jpg",
      "images/p17.jpg",
      "images/p27.jpg"
      ], {
       duration: 12000,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
  $('.p8').backstretch([
    "images/p8.jpg",
      "images/p18.jpg",
      "images/p28.jpg"
      ], {
       duration: 13500,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
   $('.p9').backstretch([
    "images/p9.jpg",
      "images/p19.jpg",
      "images/p29.jpg"
      ], {
       duration: 15000,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });
    $('.p10').backstretch([
    "images/p10.jpg",
      "images/p20.jpg",
      "images/p30.jpg"
      ], {
       duration: 16500,
        transition: 'push_right|push_left|cover_up',
        transitionDuration: 500,
        preload: 2, //Use the lazy-loading functionality
        start: 0 
    });

 var endZone = $('header').offset().top + 680;
  var endZone2 = $('header').offset().top + 1200;
  var endZone3 = $('header').offset().top + 2000;
  var endZone4 = $('header').offset().top + 2060;
  var endZone5 = $('header').offset().top + 2260;

  $(window).on('scroll', function(){
    if(endZone < $(window).scrollTop()) {
      $(".img1").animate({opacity:1},250);
      $(".img1").vegas({
        slides: [{ src: "images/icec.jpg",transition: 'slideLeft' }],
        },800);
    } 

    if(endZone2 < $(window).scrollTop()) {
      $(".img2").animate({opacity:1},250);
      $(".img2").vegas({
        slides: [{ src: "images/choco.jpg",transition: 'slideRight' }],
        },800);
    } 

    if(endZone3 < $(window).scrollTop()) {
      $(".img6").animate({opacity:1},250);
      $(".img6").vegas({
        slides: [{ src: "images/gelato2.jpg",transition: 'slideDown' }],
        },2000);
    } 

    if(endZone4 < $(window).scrollTop()) {
      $(".img7").animate({opacity:1},250);
      $(".img7").vegas({
        slides: [{ src: "images/sorbe.jpg",transition: 'slideLeft' }],
        },3000);
    } 
    
  });

  $("html, body, *").on("mousewheel",function(e,delta){    
    if (delta > 0) {  
      $("html,body").stop().animate({"scrollTop":"-=7000"},1000);
    }else if (delta < 0) {  
      $("html,body").stop().animate({"scrollTop":"+=980"},1000);     
    }     
  });


});
