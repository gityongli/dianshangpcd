/**
 * Created by ¿Ó”¿¿ˆ on 2018/3/15.
 */
/////////////////////////¬÷≤•///////////////////////////
var c = 0;
function run() {
    c++;
    c = ( c == 4) ? 0 : c;
    $("#banner-bg ul").stop().animate({"marginLeft": -1200 * c}, 500);
    $(".ul1 li").eq(c).css("background", "deepskyblue").siblings().css("background", "white")
}
var time = setInterval(run, 1500);
$(".ul1 li").mouseenter(function () {
    clearInterval(time);
    c = $(this).index();
    $("#banner-bg ul").stop().animate({"marginLeft": -1200 * c}, 500);
    $(".ul1 li").eq(c).css("background", "deepskyblue").siblings().css("background", "white")
});
$(".ul1 li").mouseout(function () {
    time = setInterval(run, 1500)
});
///////////////////////////////////////////