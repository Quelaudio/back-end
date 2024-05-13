var express = require('express');
var router = express.Router();
var loansController = require('../controllers/loans.Controller')

router.get('/', loansController.getAllLoans);
router.post('/', loansController.createLoans);
router.delete('/:id', loansController.deleteLoans);
router.put('/', loansController.updateloans);
router.get('/:id', loansController.getAllLoansPK);



module.exports = router;