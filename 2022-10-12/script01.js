$(document).ready(function(){
    $('ul li').on({
        'mouseenter':function(){
            balloonOn($(this));
        },
        'mouseleave':function(){
            balloonOff();
        },
        'mousemove':function(event){
            position(event);
        }
    })
})

function balloonOn(el){
    $('.balloon').append(el.attr('title')).show();
}

function balloonOff(){
    $('.balloon').empty().hide();
}

function position(el){
    $('.balloon').animate({
        top: el.pageY,
        left: el.pageX
    },0);
}