/**
 * Created by ������ on 2018/3/12.
 */
    //////��������
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
/*-----------------------------------��ҳ-------------------------------------*/
/////////////�����б�////////////////////////////////
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
/////////////////////////�ֲ�///////////////////////////
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
/////////////////////////////////////////////////////////////////////jqѡ�
    $(function () {
        $(".main li").mouseenter(function () {
            var a = $(this).index();
            $(".main-bg1 div").eq(a).show().siblings().not("ul").hide();
        })
    });
});
///////////////////�������////////////////////////////

/*----------------xxk-------------------*/
function lan1(){
    document.getElementById("main1").style.display="block";
    document.getElementById("main2").style.display="none";
    document.getElementById("main3").style.display="none";
    document.getElementById("main4").style.display="none";
    document.getElementById("main5").style.display="none";
}
function lan2(){
    document.getElementById("main2").style.display="block";
    document.getElementById("main1").style.display="none";
    document.getElementById("main3").style.display="none";
    document.getElementById("main4").style.display="none";
    document.getElementById("main5").style.display="none";
}
function lan3(){
    document.getElementById("main3").style.display="block";
    document.getElementById("main1").style.display="none";
    document.getElementById("main2").style.display="none";
    document.getElementById("main4").style.display="none";
    document.getElementById("main5").style.display="none";
}
function lan4(){
    document.getElementById("main4").style.display="block";
    document.getElementById("main1").style.display="none";
    document.getElementById("main2").style.display="none";
    document.getElementById("main3").style.display="none";
    document.getElementById("main5").style.display="none";
}
function lan5(){
    document.getElementById("main5").style.display="block";
    document.getElementById("main1").style.display="none";
    document.getElementById("main2").style.display="none";
    document.getElementById("main3").style.display="none";
    document.getElementById("main4").style.display="none";
}
//////////////////////////////////////////////////


