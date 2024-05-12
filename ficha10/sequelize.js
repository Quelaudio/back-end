const mysql = require('mysql2')
const { Sequelize,DataTypes } = require('sequelize');

const BookDataModel = require('./models/books');
const UserDataModel = require('./models/users');
const LoansDataModel = require('./models/loans');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');


const sequelize_instance = new Sequelize('ficha10', 'root', '12345',{
    dialect: 'mysql'

});

sequelize_instance.authenticate()
.then(()=> {
    console.log("connection has been established");
})
.catch(err => {
    console.log("unable to connect", err);
});


sequelize_instance.sync({ force: false})
    .then(() => {
        console.log('Database e tables created');
    });

    
const Book = BookDataModel(sequelize_instance, DataTypes);
const user = UserDataModel(sequelize_instance, DataTypes);
const loan = LoansDataModel(sequelize_instance, DataTypes);

user.hasMany(loan, {foreignkey: 'user_id'});
Book.hasMany(loan, {foreignkey: 'book_id'});

loan.belongsTo(user, {foreignkey: 'user_id'});
loan.belongsTo(Book, {foreignkey: 'book_id'});


module.exports = {
    user, Book,loan
}


