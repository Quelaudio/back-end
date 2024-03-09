var person = require('./config')
const pessoa = {
    name: "claudio",
    age: 20,
    gender: "Masculino"
  };
  
  const jsonPessoa = JSON.stringify(pessoa);
  console.log(pessoa);
  var novo = '{ "name": "claudio", "age": 20, "gender": "Masculino" }';
  const convert =  JSON.parse(novo);

   console.log(convert.name);

   
   var p1 = new person('James','Bond');
  
  
 

