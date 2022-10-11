let numObject = [{'name':'kim','number':22},{'name':'lee','number':11},{'name':'park','number':35}]
function objectSum(array){
    let sum = 0
    for(let i=0; i<array.length; i++){
        if(array[i]['number'] % 2 == 1){
            sum += array[i]['number']
        }
    }
    return sum;
}
let result = objectSum(numObject)
console.log(result)