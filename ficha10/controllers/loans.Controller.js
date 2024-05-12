const loans = require('../models/loans');
const  loan  = require('../sequelize').loan;

exports.getAllLoans=(req,res,next) =>{
        loan.findAll()
        .then(loans => {
                res.send(loans);
        });
}


exports.insertLoans