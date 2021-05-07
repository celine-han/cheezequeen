//메인 메뉴
$(function(){
    $mainmnu = $('header>.mainmnu>.mainmnu_gnb');
    $submnu = $('header>.mainmnu>.mainmnu_gnb>li>.sub');
    $subbg = $('header>.mainmnu>.mainmnu_gnb>.bg');
    $slide = $('.slide>.slide-banner');
    $slideimg = $slide.find('li');
    $arrowBtn = $('.slide>.arrow>a');

    let anichck = false;
    let intervalKey = null;

    const nextMoveFn = function(){
        if(anichck==false){
            anichck = true;
            $slide.stop().animate({
                left : "-=1000"
            }, function(){
                $('.slide>.slide-banner>li').first().appendTo($slide);
                $slide.css({left:"+=1000"});
                anichck = false;
            });
        }
    };

    $mainmnu.on({
        'mouseenter': function(){
            $submnu.fadeIn(200);
            $subbg.fadeIn(200);
        }
        ,
        'mouseleave' : function(){
            $submnu.fadeOut(200);
            $subbg.fadeOut(200);
        }
    });

    //다음버튼
    $arrowBtn.last().on('click', function(evt){
        evt.preventDefault();
        clearInterval(intervalKey);
        nextMoveFn();
    });

    //이전버튼
    $arrowBtn.first().on('click', function(evt){
        evt.preventDefault();
        clearInterval(intervalKey);
    
        if(anichck==false){
            anichck = true;

            $slide.stop().animate({
                left: "+=1000"
            }, function(){
                $('.slide>.slide-banner>li').last().prependTo($slide);
                $slide.css({left:"-=1000"});
                anichck = false;
            });
        }
    });

    //자동재생
    $(window).on('load', function(){
        clearInterval(intervalKey);
        intervalKey= setInterval(function(){
            nextMoveFn();
        }, 5000);
    });

    $slide.on('mouseleave', function(){
        clearInterval(intervalKey);
        setInterval(function(){
            nextMoveFn();
        }, 5000);
    });
});