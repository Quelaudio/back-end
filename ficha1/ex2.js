function NomeMes(mes_num) {
     meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
     var memes = meses[mes_num - 1];

    if (memes) {
        return memes
    } else {
        return "Numero de mes invalido.";
    }
}
mes = 2
res =  NomeMes(mes)
console.log("o mes "+ mes + " é "+ res)