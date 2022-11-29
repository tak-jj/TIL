let select_index = 0;
$(document).ready(function(){
    $('ul li').hover(function(){
        setHover($(this), 1);
    }, function(){
        setHover($(this), 0);
    })
    $('ul li').click(function(){
        setSelect($(this).index());
    })
});

function setHover(el,add){
    if(add==1){
        if(select_index == el.index()){
            el.removeClass('select');
        }
        el.addClass('hover');
        el.animate({
            height:'75px',
            'line-height':'60px'
        });
    }else{
        el.removeClass('hover');
        el.animate({
            height:'40px',
            'line-height':'35px'
        });
        if(select_index == el.index()){
            el.addClass('select');
        }
    }
}

function setSelect(index){
    $('ul li').eq(index).addClass('select');
    $('.content').eq(index).addClass('select').show();

    if(index != select_index){
        $('ul li').eq(select_index).removeClass('select')
        $('.content').eq(select_index).removeClass('select').hide();
        select_index = index;
    }
}