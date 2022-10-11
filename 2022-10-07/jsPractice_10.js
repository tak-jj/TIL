function isGrade(person){
    if(person['grade']>50){
        return true;
    }else{
        return false;
    }
}
let person = {'name':'kim','grade':30}
let result = isGrade(person)
console.log(result)