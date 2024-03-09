var students = [];
var s1={name:"Pedro Matos", number: 20070, grade:"12"};
var s2={name:"Pedro Matos", number: 20050, grade:"15"};
var s3={name:"Pedro Matos", number: 20080, grade:"3"};
students.push(s1);
students.push(s3);
students.push(s2);

console.log("o aluno " + s1.name + "tem a media de : "+ s1.grade+ "e numeor"+ s1.number)


 function getBestgrade(students){
    var beststudent= students[0];
    for(let i=1; i<students.lenght; i++){
        const grade =students[i].grade;
    if(grade < beststudent.grade){
        beststudent= students[i];
    }
    }
    return beststudent;
}
function getBestgrade(students){
    var beststudent= students[0];
    for(let i=1; i<students.lenght; i++){
        const grade =students[i].grade;
    if(grade < beststudent.grade){
        beststudent= students[i];
    }
    }
    return beststudent;
}

function negative(students){
    var nega= 0;
    for(let i=1; i<students.length; i++){
        if( student.grade<10){
            nega++;
    }
    }
    return nega;
}
function positive(students){
    var pos= 0;
    for(let i=1; i<students.lenghth; i++){
        if( students.grade>10){
            pos++;
    }
    }
    return pos;
}
console.log(positive(students))