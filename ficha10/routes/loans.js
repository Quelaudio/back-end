var express = require('express');
var router = express.Router();
var loansController = require('../controllers/loans.Controller')

router.get('/', loansController.getAllLoans);


module.exports = router;