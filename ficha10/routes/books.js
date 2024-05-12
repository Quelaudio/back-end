var express = require('express');
var router = express.Router();
var booksController = require('../controllers/books.Controller')

/* GET home page. */
/* GET home page. */
// router.get('/test', (req,res) =>{
    
// });



router.get('/', booksController.getAllBooks);


module.exports = router;