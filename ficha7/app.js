const fs = require('fs');
const express = require('express');
const { parse } = require('node:path');
const { request } = require('http');
const app = express();
const port = 3000;
const mysql = require('mysql2')


//utilizar midlleware
app.use(express.json());

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '12345',
    database: 'ficha7'
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

app.get('/persons', (req, res) => {
    connection.query("select * from ficha7.persons", (err, results,fields)=>{
        res.send(results);
    });
});

value = ["Calheta","abreu","Estudante",43]
app.post('/persons', (req,res) =>{
    connection.query( [value], (err, result) =>{
        res.send(result)
    })
});

