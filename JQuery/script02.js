let selected_index = -1;

$(document).ready(function(){
    $('.header-content').click(function(){
        selectContent($(this));
    })
})

function selectContent(el){
    index = el.index();
    el.addClass('select');
    if(selected_index == -1){
        $('.content').eq(index/2).show();
        selected_index = index;
    }else if(selected_index == index){
        el.removeClass('select');
        $('.content').eq(index/2).hide();
        selected_index = -1
    }else{
        $('.header-content').eq(selected_index/2).removeClass('select');
        $('.content').eq(selected_index/2).hide();
        $('.content').eq(index/2).show();
        selected_index = index;
    }
}