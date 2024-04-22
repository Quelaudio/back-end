const express = require('express');
const app = express();
const port = 3000;
const { Sequelize } = require('sequelize');

app.use(express.json());

// const swaggerfile= require('./swagger_output.json')
// const swaggerUi = require('swagger-ui-express')


// app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerfile))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const sequelize = new Sequelize('ficha9', 'root', '12345',{
    dialect: 'mysql'

});

sequelize.authenticate()
.then(()=> {
    console.log("connection has been established");
})
.catch(err => {
    console.log("unable to connect", err);
});

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING
    },
    Profession :{
        type: Sequelize.STRING
        
    },
    age: {
        type: Sequelize.INTEGER
    }
});


sequelize.sync({ force: false})
    .then(() => {
        console.log('Database e tables created');
        }).then(function () {
            return User.findAll();
        }).then(function (user){
            console.log(user)
        })
        .catch(err => {
            console.log(err);
        });
  
// user.bulkCreate([
//     { firstName:'Pedro', lastName: 'Jardim', Profession: 'IT', age:62},
//     { firstName:'claudio', lastName: 'vieira', Profession: 'Dev', age:20},
//     { firstName:'Hugo', lastName: 'correia', Profession: 'cook', age:40},
//     { firstName:'Calheta', lastName: 'abreu', Profession: 'homeless', age:54}
// ]).then(function (){
//     return user.findAll();
// }).then(function ( users) {
//     console.log(users)
// })



app.get('/user', (req, res) => {
    User.findAll().then(users =>{
        res.send( users);
    })
});


app.post('/user', (req, res) => {
    var details = req.body
    User.create({ firstName: details.firstName, lastName: details.lastName, age: details.age });
    res.send("inserted with ID:", res.insertId);
    
});






