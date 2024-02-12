function fatorial(num){
    var res = 1;
    for ( var i = 1; i <= num; i++) {
        res *= i;
    }
    return res;
}
var num = 6
var fact = fatorial(num);
console.log("O fatorial de " + num + " é " +fact);