
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


