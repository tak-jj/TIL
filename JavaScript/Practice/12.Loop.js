let people = [{'name':'kim','age':90},{'name':'lee','age':85},{'name':'park','age':60}]
for(let i=0; i<people.length; i++){
    if(people[i]['age']<70){
        console.log(people['name']);
    }
}