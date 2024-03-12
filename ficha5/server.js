const fs = require('fs');
const express = require('express');
const { parse } = require('node:path');
const { request } = require('http');
const app = express();
const port = 3000;

//utilizar midlleware
app.use(express.json());

const data = fs.readFileSync('persons.json');

var dataobj = JSON.parse(data);

app.post('/users',(req,res) =>{
      var body = req.body;
      var id = dataobj.data.length +1;
      body.id = id;
      dataobj.data.push(body);
      res.send("foi criado uma nova entidade com id: " + id);
})

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  res.send("foi apagado a entidade com id:" + id);
});

app.get('/', (req, res) => {
  res.send("hELO");
})

app.get('/users', (req, res) => {
  res.send(dataobj);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


  
