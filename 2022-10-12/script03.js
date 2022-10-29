$(document).ready(function(){
    let point = $('ul').eq(0).offset().top;

    $(window).on('scroll',function(){
        let scrollposition = $(this).scrollTop();
        if(scrollposition >= point){
            $('ul').css({
                'position':'fixed',
                'top':0
            })
        }else{
            $('ul').css('position','relative');
        }
    })
})