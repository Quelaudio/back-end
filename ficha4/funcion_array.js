array1 =[];
array1.push(function(){
    console.log("hello world 1");
});

array1.push(function(){
    console.log("2");
});
array1.push(function(){
    console.log("3");
});

for(i= 0; i < array1.length;i++){
    array1[i]();
}

array1.forEach(element => {
    element();
});