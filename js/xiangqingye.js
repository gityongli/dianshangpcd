/**
 * Created by ������ on 2018/3/16.
 */
/*----------------xxk-------------------*/
function li1(){
    document.getElementById("main1").style.display="block";
    document.getElementById("main2").style.display="none";
    document.getElementById("main3").style.display="none";
    document.getElementById("main4").style.display="none";
    document.getElementById("main5").style.display="none";
}
function li2(){
    document.getElementById("main2").style.display="block";
    document.getElementById("main1").style.display="none";
    document.getElementById("main3").style.display="none";
    document.getElementById("main4").style.display="none";
    document.getElementById("main5").style.display="none";
}
function li3(){
    document.getElementById("main3").style.display="block";
    document.getElementById("main1").style.display="none";
    document.getElementById("main2").style.display="none";
    document.getElementById("main4").style.display="none";
    document.getElementById("main5").style.display="none";
}
function li4(){
    document.getElementById("main4").style.display="block";
    document.getElementById("main1").style.display="none";
    document.getElementById("main2").style.display="none";
    document.getElementById("main3").style.display="none";
    document.getElementById("main5").style.display="none";
}
function li5(){
    document.getElementById("main5").style.display="block";
    document.getElementById("main1").style.display="none";
    document.getElementById("main2").style.display="none";
    document.getElementById("main3").style.display="none";
    document.getElementById("main4").style.display="none";
}
//////////////////////////////////////////////////
$(function(){
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
})
///////////////////////////////////////////////////////////
$(function () {
    $(".start a").hover(function () {
        $(this).addClass("active").prevAll().addClass("active")
    }, function () {
        $(this).removeClass("active").prevAll().removeClass("active")
    });
    $(".start a").bind("click", function () {
        $(this).addClass("s").prevAll().addClass("s");
        $(this).nextAll().removeClass("s")
    })
})