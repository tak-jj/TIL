function makeTable(el){
    let num = parseInt(el.attr('value'));
    $('#result').empty()
    for(i=1; i<10; i++){
        $('#result').append('<p>'+ num + '*' + i + '=' + (num*i) + '</p>')
    }
}

$(document).ready(function(){
    $('button').click(function(){
        makeTable($(this));
    })
})