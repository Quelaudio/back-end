const fs = require('fs');
const express = require('express');
const { parse } = require('node:path');
const { request } = require('http');
const app = express();
const port = 3000;
const mysql = require('mysql2');
const { error } = require('console');


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

app.get('/persons/:id', (req, res) => {
    connection.query("select * from ficha7.persons where id=?", [req.params.id],(err, results,fields)=>{
        if (err) throw err;
        res.send(results);
    });
});

app.get('/persons/:profession/:age', (req, res) => {
    connection.query("select * from ficha7.persons where Profession=? and Age= ?", [req.params.profession, req.params.age],(err, results,fields)=>{
        if (err) throw err;
        res.send(results);
    });
});

app.delete('/persons', (req, res) => {
    connection.query("delete from ficha7.persons where id=?", [1],(err, results,fields)=>{
        if (err) throw err;
        res.send(results);
    });
});




app.post('/persons', (req, res) => {
    connection.query("insert into persons(FirstName,lastname,Profession,Age)values(? ? ? ?);"["nuno","Freitas","Dragao",54],(err, results,fields)=>{
        if (err) throw err;
        res.send(results);
    });
});
