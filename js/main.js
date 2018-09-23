//VARIABLES
const SLIDER = $(".slider");


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
    if(SLIDER.hasClass("no")==false){
        SLIDER.fadeOut();
        SLIDER.addClass("no");
        console.log("boom "+id);
    }
    $("#"+id+"Page").fadeIn();
    
});



//NAV FUNCTIONS
$("#projects").click(function(){
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
})

//sidestep
var screenHeight = $(window).height();

$(window).scroll(function(){
    var x = $(this).scrollTop();
    var banana =Math.floor(x/screenHeight);
    console.log(banana);
    if(banana == 0){
        $('#one').css({
            'opacity' : '1'
        });
        
    }else{
        $('#one').css({
            'opacity' : '.5'
        });
    }
    if( banana == 1){
        $('#two').css({
            'opacity' : '1'
        });
        
    } else{
        $('#two').css({
            'opacity' : '.5'
        });
    }
    if( banana ==3){
        $('#three').css({
            'opacity' : '1'
        });
        
    }else{
        $('#three').css({
            'opacity' : '.5'
        });
    }
    if( banana==4){
        $('#four').css({
            'opacity' : '1'
        }); 
    }else{
        $('#four').css({
            'opacity' : '.5'
        });
    }
    
});


