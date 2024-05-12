const books = require('../models/books');
const Book = require('../sequelize').Book;

exports.getAllBooks=(req,res,next) =>{
        Book.findAll()
        .then(books => {
                res.send(books);
        });
}

