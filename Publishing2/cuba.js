$(function(){
    //각 디바이스의 높이값을 가져와 웹사이트의 높이값으로 적용
    // $("article").height($(window).height()); 이렇게 한줄로 써줘도되지만 보통 변수 쓴다.
    var ht=$(window).height();
    $("article").height(ht);

    //브라우저가 리사이즈 될 때마다 브라우저와 article의 높이값이 갱신
    $(window).resize(function(){ //$(window).on(function()으로 써도됨
        var ht= $(window).height();
        $("article").height(ht);
    });
    
    //각 박스 안의 디자인 요소 제어
    //메뉴 버튼 클릭 시
    $("#menu li").click(function(e){
        e.preventDefault();

        var ht = $(window).height();//현재 브라우저의 높이값을 리턴
        var i = $(this).index();
        var nowTop = ht * i;

        $("html, body").stop().animate({"scrollTop":nowTop},1000);
    });

    //메뉴 on 스타일
    $(window).scroll(function(){
        var ht = $(window).height();
        var scroll = $(window).scrollTop();

        //A && B A와 B의 조건 모두 만족
        /**
        if(scroll>=ht*0 && scroll < ht*1) {//첫번째 박스
            $("#menu li").removeClass();
            $("#menu li").eq(0).addClass('on');
        }
        if(scroll>=ht*0 && scroll < ht*2) {//첫번째 박스
            $("#menu li").removeClass();
            $("#menu li").eq(1).addClass('on');
        }
        **/
        for(var i=0; i<5; i++){
            if(scroll >= ht*i && scroll<ht*(i+1)){
                $("#menu li").removeClass();
                $("#menu li").eq(i).addClass('on');
            }
        }

        //마우스 휠 이벤트
        $("article").mousewheel(function(event, delta){
            if(delta>0) {//마우스 휠을 올렸을 때
                var prev = $(this).prev().offset().top;
                $("html,body").stop().animate({"scrollTop":prev},1000,"easeOutBounce");
            
                }else if(delta < 0){//마우스 휠을 내렸을 때
                var next = $(this).next().offset().top;
                $("html,body").stop().animate({"scrollTop":next},1000,"easeOutBounce");
            }
        });
    });
    
});

