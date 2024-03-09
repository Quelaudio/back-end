

function conta(str,character){
    var count =0 ;
    for (let i = 0;i<str.length;i++){
        if(str[i] == character)
        count++;
    }
    return count;console
}

var print = conta("ola tudo bem", "o")
console.log(print)