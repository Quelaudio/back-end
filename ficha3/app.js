module.exports={

    function swap(i1,i2){
        var temp =array[i1];
        array[i1] = array[i2]; 
        array[i2] = temp;
        return array; 
    }
    
    
    function contain(array,value){
        for (let i = 0; i< array.length; i++){
            if( array[i] == value){
                contain = true;
                break;
            }
        }
    }
    
 contains:function (array,value){
        return array.indexOf(array,value) !=-1;
    }
    

concatenate:function(a1,a2){
    var new_array = []
    for (let i=0; i<a1.length; i++ ){
        new_array.push(a1[i]);
    }
    for (let i=0; i<a2.length; i++ ){
        new_array.push(a2[i]);
    }
    return new_array;
}


}