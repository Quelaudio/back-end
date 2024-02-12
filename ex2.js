function NomeMes(numeroMes) {
     meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

     nomeMes = meses[numeroMes - 1];

    if (nomeMes) {
        console.log("O numero " + numeroMes + " corresponde ao mes de " +nomeMes+".");
    } else {
        console.log("Numero de mes invalido. Por favor forneça um numero de 1 a 12.");
    }
}

NomeMes(12)