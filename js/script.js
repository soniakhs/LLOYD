
var n = $(".item");
function openMenu(){
    $(".menu ul").css({opacity:"1"});
}

function closeMenu(){
    $(".menu ul").css({opacity:"0"});
}

$(".best button").on("click",openPop);
$(".closeBtn").on("click", closePop);
function openPop(){
    var n = $(this).attr('value');
    var info_name = ".item"+n;
    $(".item").stop().show("slow");
    $(info_name).show();
}

function closePop(){
    $(this).parent("div").hide();
    $(".item").stop().hide("fast");
}

var slide = $("article:nth-child(1) > img");
var sno = 0;
var eno = slide.length-1;
var timer = setInterval("autoSlide()",4000);
var num = $("best")
function autoSlide(){
    $(slide[sno]).animate({
        opacity:"0"
    },1000);
   
    console.log(sno);
    sno ++;
    if(sno>eno) sno = 0;
    
    $(slide[sno]).animate({
        opacity:"1"
    },1000);
}

var slide2 = $("article:nth-child(5) > img");
var sno2 = 0;
var eno2 = slide2.length-1;
var timer2 = setInterval("autoSlide2()",3000);

function autoSlide2(){
    $(slide2[sno2]).animate({
        left:"100%"
    },1000,function(){
        $(this).css({left:"-100%"})
    });
    
    sno2++;
    if(sno2 > eno2) sno2 = 0;
    
    $(slide2[sno2]).animate({
        left:0
    },1000)
}