function minimo(array){
    var minimo = array[0];
    for (var i in array){
        if ( array[i] < minimo){
            minimo = array[i]
        }
    }
    console.log(minimo)
}

var array =[5,2,9,4]


function max(array){
    var minimo = array[0];
    for (var i in array){
        if ( array[i] > minimo){
            minimo = array[i]
        }
    }
    console.log(minimo)
}




function media(array){
    var total = 0;
    for (var i in array){
        total += array[i];
       var div = total / array.length;
    }
    console.log(div)
}

media(array)

