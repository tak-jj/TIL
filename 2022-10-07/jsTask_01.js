let numbers = [10,20,30]
function sum(array){
    let sum = 0
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}
let result = sum(numbers)
console.log(result)