let num = []
let op = []

$(document).ready(function(){
    $('.num').click(function(){
        number($(this));
    })
    $('.op').click(function(){
        operator($(this));
    })
})

function number(el){
    let screen = $('.screen')
    num.push(parseInt(el.attr('value')));
    screen.append(el.attr('value'));
}

function operator(el){
    let screen = $('.screen')
    if(el.attr('value') == 'clear'){
        screen.empty();
        num = [];
        op = [];
    }else if(el.attr('value') == '='){
        let result = calculate(num[0],num[1],op[0]);
        for(i=1; i<op.length; i++){
            result = calculate(result,num[i+1],op[i]);
        }
        screen.html(result);
        num = [result];
        op = [];
    }else{
        op.push(el.attr('value'));
        screen.append(el.attr('value'));
    }
}

function calculate(num1, num2, op){
    let result = 0;
    if(op == '+'){
        result = num1 + num2;
    }else if(op == '-'){
        result = num1 - num2;
    }else if(op == '*'){
        result = num1 * num2;
    }else if(num2 != 0){
        result = num1 / num2;
    }else{
        alert('Cannot calculate!');
    }
    return result;
}