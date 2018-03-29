
/*------------------------------滑到顶部--------------------------------*/
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
/*----------------------------js选项卡---------------------------------*/
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
///////////////////////////////////////////////////////////


