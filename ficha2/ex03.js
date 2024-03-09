var words ="olaaa tudoa bem";
var count = 0;


function num_vogais(str){
    for (let i=0;i<str.length;i++){
        if(str[i] == "a"|| str[i]=="e"|| str[i]=="i"|| str[i]=="o"|| str[i]=="u")
        count++;
    }
    return count;
}
var cc = num_vogais(words);
console.log(cc);