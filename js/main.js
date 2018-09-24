//VARIABLES
const SLIDER = $(".slider");
const SEES = $(".see");
const RECENTKIDS = $(".recentlink");
const BACK =$("#bkarw");
console.log(RECENTKIDS);

//SLIDER
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight:true,
        draggable: false,
        pauseOnDotsHover: true
    });
    if($(window).scrollTop > 100){
        $("#nameBanner").fadeOut();
        
    }else{
        $("#nameBanner").fadeIn();
    }
    
});
$(".textbox").click(function(){
    var id = this.id;
    SLIDER.fadeOut();
    $("#"+id+"Page").delay(300).fadeIn(); 
    $("#recentList").slideDown();
    $("#bkarw").delay(100).fadeIn();
    for(var i = 0; i < RECENTKIDS.length; i++){
        var thisisit = $(RECENTKIDS[i]).data("name");
        console.log("Okie Dokie");
        if(thisisit==id){
            console.log(thisisit);
            $(RECENTKIDS[i]).addClass("selected");
        }
    }
});
//Nav 
$("#projects").click(function(){
    $("#recentList").slideUp();
    $(".selected").removeClass("selected");
    console.log("done");
    $("#projectcats").slideToggle("closed");
    $(this).addClass("selected");
    return;
});
$(".cat").click(function(){
    $(".selected").removeClass("selected");
    $(".sublist").slideUp();
    $(this).children("ul").slideDown();
    $(this).children("a").addClass("selected");
    console.log("ok");
    return;
});
$(".pageSection").click(function(){
    if($(this).hasClass("projList")==false ){
        $("#projectcats").slideUp();
        $(".selected").removeClass('selected');
        $(".sublist").slideUp();
        $(this).addClass("selected");
       }
});
$( "p" ).click(function() {
  $( this ).slideUp();
});
$(".threedlink").click(function(){
    var id = this.id;
    SLIDER.slideUp();
    $(".see").fadeOut();
    $("#"+id+"box").fadeToggle();
});
$("#recent").click(function(){
    BACK.fadeOut();
    SEES.fadeOut();
    SLIDER.hide().fadeIn(1000);
    $("#projectcats").slideUp();
    $("#recentList").slideDown();
    console.log("Aye Aye Sir");
});
$(".recentlink").click(function(){
    console.log("hey there");
    var getName = $(this).data("name");
    for(var i = 0; i < RECENTKIDS.length; i++){
        $(RECENTKIDS[i]).removeClass("selected");
    }
    $(this).addClass("selected");
    SEES.fadeOut();
    SLIDER.fadeOut();
    console.log(getName);
    $("#"+getName+"Page").delay(800).fadeIn();
    
});
//Scroll
var screenHeight = $(window).height();
$(window).scroll(function(){
    var x = $(this).scrollTop();
    var banana =Math.floor(x/screenHeight);
    console.log(banana);    
    if(x >= 60){
        $("#nameBanner").fadeOut();
    }else{
        $("#nameBanner").fadeIn();
    }
    
});

$("#swow").click(function(){
    window.location.href="https://teespring.com/shop/operator-buffalo?aid=marketplace&tsmac=marketplace&tsmic=search#pid=46&cid=2744&sid=front";
})
