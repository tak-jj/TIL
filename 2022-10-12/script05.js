$(document).ready(function(){
    let $lists = $('nav ul');
    let $lists_copy = $lists.clone();
    let $close_el = $('<a herf="#">close</a>');

    $lists_copy.css({
        'width': '50%',
        'height': '50%',
        'position': 'absolute',
        'top': 0,
        'right': 0,
        'text-align': 'center',
        'background-color': 'pink',
        'display': 'none'
    });
    $lists_copy.children('li').css({
        'float': 'none',
        'padding': '30px'
    });

    $close_el.css({
        'position': 'absolute',
        'top': '20px',
        'right': '20px',
        'background-color': 'white',
        'color': 'pink'
    });
    $lists_copy.append($close_el);
    $lists_copy.appendTo('body');

    $close_el.click(function(){
        $lists_copy.hide();
    });

    $('header div a').click(function(){
        $lists_copy.show();
    })
})