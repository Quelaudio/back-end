function nota_final(nota_pra, nota_teo) {
    nota_final = (nota_pra + nota_teo) / 2
    if (nota_final < 9.5){
    console.log("com nota: " + nota_final + "esta aprovado");
    }else{
        console.log("com nota: " + nota_final + "este reprovado");
    }

}