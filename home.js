$(document).ready( function(){
    init();
});
//currentClicked var is to keep track of currently active menu item
//corn is image of corn
var corn=$('.corn');
var currentClicked;
//initially checking for mouse movement on body, So corn can be rotated towards mouse pointer
// then keep watch whether user click or hover menu item and apply effacts according to that  
function init(){
    // First finding the center of corn image. relative to it, we will find digree
    var centerOfCorn=[corn.offset().left+corn.width()/2, corn.offset().top+corn.height()/2];
    $('body').on( 'mousemove',function (event){ 
        // arctan2 function will give answer in radian angle from positive X axis, So we need to convert in digree(multiply by 180/PI), 
        // Our object is on Y axis. So 90 - (digree)
        var angle = 90-Math.atan2( - (event.pageY - centerOfCorn[1]) , event.pageX - centerOfCorn[0])*(180/Math.PI);      
        corn.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
        corn.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});   
    });

    $('.menu-item:nth-child(1)').hover(function(){   
        $('body').removeClass('bgrnd1 bgrnd3').addClass('bgrnd2');
        corn.attr('src','images/corn2.png');
        currentClicked = $(this);
    }).on('click', addAnimation).on('mouseout',removeAnimation);
    $('.menu-item:nth-child(2)').hover(function(){
        $('body').removeClass('bgrnd2 bgrnd1').addClass('bgrnd3');
        corn.attr('src','images/corn3.png');
        currentClicked = $(this);
    }).on('click', addAnimation).on('mouseout',removeAnimation);
    $('.menu-item:nth-child(3)').hover(function(){
        $('body').removeClass('bgrnd3 bgrnd2').addClass('bgrnd1');
        corn.attr('src','images/corn1.png');
        currentClicked = $(this);
    }).on('click', addAnimation).on('mouseout',removeAnimation);
}
//after click corn will rotate to it's original position and then flip
function addAnimation(){
    corn.addClass('smooth-transition');
    $('.menu-item').removeClass('active');
    currentClicked.addClass('animated bounce active');
    corn.css({ "-webkit-transform": 'rotate(' + 0 + 'deg)'}); 
    corn.css({ '-moz-transform': 'rotate(' + 0 + 'deg)'});   
    // setting time out so that corn can complete rotation and then flip
    setTimeout(function(){ 
        corn.css({ "-webkit-transform": 'rotateY(' + 180 + 'deg)'});
        corn.css({ '-moz-transform': 'rotateY(' + 180 + 'deg)'});   
    },600);
} 
//removing class after curser moves out of clicked element
function removeAnimation(){
   corn.removeClass('smooth-transition');
   currentClicked.removeClass('animated bounce');
}