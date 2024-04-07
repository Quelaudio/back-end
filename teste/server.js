const fs = require('fs');
const express = require('express');
const { parse } = require('node:path');
const { request } = require('http');
const app = express();
const port = 3000;

app.use(express.json());


fs.openSync("./log.txt", "a+");
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })

app.get('/', (req,res) => {
    const body ='Hello world';
    res.writeHead(200, {
        'Content-Length': 
        Buffer.byteLength(body),
        'Content-Type': 'text/plain' 
    })
    res.end(body);
        
})

app.get('/html', (req,res) => {
    const body ='<html><body><p>This is a paragraph.</p><p>This is another paragraph.</p></body></html>'
    
    res.writeHead(200, {
        'Content-Length': 
        Buffer.byteLength(body),
        'Content-Type': 'text/html' 
    })
    res.end(body);
        
})

app.get('/hello.html', (req,res) => {
    const body =fs.readFileSync("hello.html","utf-8")
    
    res.writeHead(200, {
        'Content-Length': 
        Buffer.byteLength(body),
        'Content-Type': 'text/html' 
    })
    res.end(body);
        
})

app.get('/hello.html', (req, res) => {
    var body = fs.readFileSync("hello.html", "utf-8");
    var date = new Date();
    body = body.replace("date_placeHolder", date.toLocaleDateString());
    res.writeHead(200,
        {
            'Content-Length' : Buffer.byteLength(body),
            'Content-Type' : 'text/html' });
            res.end(body);
});