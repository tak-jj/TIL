function totalSum(num){
    let sum = 0
    for(let i=num; i>0; i--){
        sum += i;
    }
    return sum;
}
let num = 11
let result = totalSum(num)
console.log(result)