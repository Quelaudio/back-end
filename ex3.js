function cal(num1,num2,op){
    if (op == "+"){
       soma = num1 + num2
       console.log("a resultado da soma é " + soma )

    }
    else if (op == "-") {
        if(num2 < num1){
            sub = num1 - num2
            console.log("a resultado da sub é " + sub )}
        else{
            sub = num2 - num1
            console.log("a resultado da sub é " + sub )}
    }
    else if (op == "*"){
        multi = num1 * num2
        console.log("a resultado da multiplicação é " + multi )
 
    }
    else if (op == "/"){
        div = num1 / num2
        console.log("a resultado da divsão é " + div )
 
    }
    else if (op == "^"){
        cima = num1 ** num2
        console.log("a resultado da não sei o nome é " + cima )
 
    }
    else{
        console.log("operação não reconhecida")
    }



}
cal(2,3,"^")