/**
 * Created by 李永丽 on 2018/3/12.
 */
    //////滚动窗口
$(window).scroll(function(){
    if($(window).scrollTop()>500){
        $(".back-to-top").fadeIn(500)
    }else{
        $(".back-to-top").fadeOut(500)
    }
});
$(".back-to-top").click(function(){
    $("body").animate({scrollTop:"0"},5000)
});
/*-----------------------------------首页-------------------------------------*/
/////////////下拉列表////////////////////////////////
$(function () {
    $("#header-left .li ").mouseenter(function () {
        $(this).stop().children("ul").slideDown(200)
    }).mouseleave(function () {
        $(this).stop().children("ul").slideUp(200)
    });
    $("#header-right .li ").mouseenter(function () {
        $(this).stop().children("ul").slideDown(200)
    }).mouseleave(function () {
        $(this).stop().children("ul").slideUp(200)
    });
/////////////////////////轮播///////////////////////////
    var c = 0;
    function run() {
        c++;
        c = ( c == 3) ? 0 : c;
        $("#banner-bg ul").stop().animate({"marginLeft": -1920 * c}, 500);
        $(".ul1 li").eq(c).css("background", "red").siblings().css("background", "black")
    }
    var time = setInterval(run, 1500);
    $(".ul1 li").mouseenter(function () {
        clearInterval(time);
        c = $(this).index();
        $("#banner-bg ul").stop().animate({"marginLeft": -1920 * c}, 500);
        $(".ul1 li").eq(c).css("background", "red").siblings().css("background", "black")
    });
    $(".ul1 li").mouseout(function () {
        time = setInterval(run, 1500)
    });
/////////////////////////////////////////////////////////////////////js选项卡
    $(function () {
        $(".main li").mouseenter(function () {
            var a = $(this).index();
            $(".main-bg1 div").eq(a).show().siblings().not("ul").hide();
        })
    });
});
function lan1(){
    document.getElementById("hover").style.transform="transformX(0px)";
}
function lan2() {
    document.getElementById("hover").style.transform = "translateX(238px)";
}
function lan3() {
    document.getElementById("hover").style.transform = "translateX(476px)";
}
function lan4() {
    document.getElementById("hover").style.transform = "translateX(714px)";
}
function lan5() {
    document.getElementById("hover").style.transform = "translateX(952px)";
}
///////////////////插件滚动////////////////////////////

/*-----------------------------------首页结束-------------------------------------*/


