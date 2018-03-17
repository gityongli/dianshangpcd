/**
 * Created by ¿Ó”¿¿ˆ on 2018/3/14.
 */
/////////////////////////¬÷≤•///////////////////////////
var c = 0;
function run() {
    c++;
    c = ( c == 3) ? 0 : c;
    $("#banner-bg ul").stop().animate({"marginLeft": -1190 * c}, 500);
    $(".ul1 li").eq(c).css("background", "deepskyblue").siblings().css("background", "white")
}
var time = setInterval(run, 1500);
$(".ul1 li").mouseenter(function () {
    clearInterval(time);
    c = $(this).index();
    $("#banner-bg ul").stop().animate({"marginLeft": -1190 * c}, 500);
    $(".ul1 li").eq(c).css("background", "deepskyblue").siblings().css("background", "white")
});
$(".ul1 li").mouseout(function () {
    time = setInterval(run, 1500)
});
///////////////////////////////////////////




/////////////////////////////////////////////////////////////////////js—°œÓø®
/*$(function () {
    $(".main li").click(function () {
        var a = $(this).index();
        $(".main-bg1 div").eq(a).show().siblings().not("ul").hide();
    })
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
///////////////////home////////////////////////////
$(".ul4 li").hover(function(){
    $(this).find("span").stop().animate({marginTop:"-380px"},300)
},function(){
    $(this).find("span").animate({marginTop:"0px"},300)
});*/
