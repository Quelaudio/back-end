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
            // console.log(user)
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
        if (err) {
            res.status(500).send("Error getting users");
        } else {
            res.status(200).send( users);
        }
        
    })
});


app.post('/user', (req, res) => {
    var details = req.body;
    User.create({ firstName: details.firstName, lastName: details.lastName, Profession: details.Profession, age: details.age }).then(newUser => {
        res.send("Inserted with ID: "+ newUser.id);
    });
});






app.delete('/user', (req,res)=> {
    var details  =req.body;
    User.destroy({
        where: {
            id: details.id
        }
    }).then((count) => {
        if( count == 0){
            res.send(details.id + " not found")

        }
        else{
        res.send("User eliminated with ID: " + details.id)
        }
    });
});


app.delete('/user/:id', (req,res)=> {
    var id = req.params.id
    User.destroy({
        where: {
            id: id
        }
    }).then((count) => {
        if( count == 0){
            res.send(id + " not found")

        }
        else{
        res.send("User eliminated with ID: " + id)
        }
    });
});

app.get('/user/id', (req, res) => {
    var id= req.query.id
    User.findByPk(id).then(users =>{
        if (!users) {
            res.status(500).send("Error getting user");
        } else {
            res.status(200).send(users);
        }
        
    })
});


// Selecionar as pessoas pelo sua idade e profissão. Devolver todas as pessoas que reúnam essas
// condições. Caso não exista, o erro deverá ser tratado de forma adequada.

app.get('/user/:idade/:profissao', (req, res) => {
    var age= req.params.age;
    var profission = req.params.Profession
    User.findAll({      
        where: {
            age: age,
            Profession: profission
          }
    }).then(users =>{
        if (!users) {
            res.status(500).send("Error getting user");
        } else {
            res.status(200).send(users);
        }
        
    })
});


//  Alterar os detalhes de uma pessoa selecionada pelo seu ID. Os novos detalhes deverão ser
// devolvidos na resposta.
app.put('/user', (req,res) => {
var body = req.body;
    var values = {
        firstName: body.firstName,
        lastName: body.lastName,
        age: body.age,
        Profession: body.Profession
    };

    User.update(values, {
        where: {
            id: body.id 
        }
    }).then(result => {
        if (result[0] === 0) {
            res.status(404).send("User not found");
        } else {
            res.status(200).send("User with "+  id +"updated successfully");
        }
    }).catch(error => {
        console.error("Error updating user:", error);
        res.status(500).send("Error updating user");
    });

});
