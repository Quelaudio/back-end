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

app.post('/users', (req, res) => {
  var body = req.body;
  var id = dataobj.data.length + 1;
  body.id = id;
  dataobj.data.push(body);
  res.send("foi criado uma nova entidade com id: " + id);
});

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var details = req.body;
  var index = -1; // Initialize index outside the loop
  for (let i = 0; i < dataobj.data.length; i++) {
    if (id == dataobj.data[i].id) {
      index = i;
      break; // Exit the loop once user is found
    }
  }
  if (index != -1) {
    details.id = id;
    dataobj.data[index] = details;
    res.send("User with id: " + id + " updated successfully");
  } else {
    res.send("User with id: " + id + " not found");
  }
});


app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  result = dataobj.data.filter((users) => users.id != id);
  if (dataobj.data.length == result.lenght) {
    res.send("Não foi encontrado nenhum com esse id");
  }
  else {
    dataobj.data = result;
    res.send("Foi apaagdo o id:" + id);
  }

});


app.get('/', (req, res) => {
  res.send("hELO");
})

app.get('/users', (req, res) => {
  res.send(dataobj);
})

app.get('/users/:id', (req, res) => {
  var id = req.params.id
  const result = dataobj.data.filter((users) => users.id == id);
  res.send(result)
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})



