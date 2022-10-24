let subs = ['kor','math','kor','eng','sci']
function countKorean(array){
    let count = 0
    // make variable to store count
    for(let i=0; i<array.length; i++){
        if(array[i] == 'kor'){
            count += 1;
        }
    }
    return count;
}
let result1 = countKorean(subs)
console.log(result1)

function countSub(subject,array){
    let count = 0
    for(let i=0; i<array.length; i++){
        if(array[i] == subject){
            count += 1;
        }
    }
    return count;
}
let result2 = countSub('math',subs)
console.log(result2)