let grads = [90,82,100,70,80]
function countGrade(array){
    let count = 0
    for(i=0; i<array.length; i++){
        if(array[i]>=90){
            count += 1
        }
    }
    return count;
}
let result1 = countGrade(grads)
console.log(result1)

function aver(array){
    let count = 0
    let sum = 0
    for(i=0; i<array.length; i++){
        if(array[i]>=90){
            count += 1;
            sum += array[i];
        }
    }
    return sum / count;
}
let result2 = aver(grads)
console.log(result2)