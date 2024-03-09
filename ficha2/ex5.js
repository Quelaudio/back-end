function drawSquare(height,width){
    
    for(let i = 0; i< height; i++){
        var line ="";
        for (let i = 0; i< width; i++){
            line+="*"
        }
        console.log(line)
    }
}

drawSquare(30,50);