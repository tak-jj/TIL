let person = {'name':'kim','grade':70}
function isBGrade(person){
    if(person['grade']>=50 && person['grade']<90){
        return true;
    }else{
        return false;
    }
}
let result1 = isBGrade(person)
console.log(result1)
function isNotBGrade(person){
    if(person['grade']<50 || person['grade']>=90){
        return true;
    }else{
        return false;
    }
}
let result2 = isNotBGrade(person)
console.log(result2)
function checkGrade(person){
    if(person['grade']>=90){
        alert('A');
    }else if(person['grade']>=80){
        alert('B');
    }else if(person['grade']>=70){
        alert('C')
    }else{
        alert('F')
    }
}
checkGrade(person);
