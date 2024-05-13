const  Loan  = require('../sequelize').loan;

exports.getAllLoans=(req,res,next) =>{
        Loan.findAll()
        .then(loans => {
                res.send(loans);
        });
},




exports.createLoans=(req,res,next)=>{
        Loan.create(req.body)
        .then(newLoan => {
                res.send("Inserted with ID: "+ newLoan.loan_id);
        });
}


exports.deleteLoans=(req,res,next)=>{
        Loan.destroy({
                where: {
                        loan_id: req.params.id
                }
            }).then((count) => {
                if( count == 0){
                    res.send(req.params.id + " not found")
        
                }
                else{
                res.send("User eliminated with ID: " + req.params.id)
                }
            });

}


exports.updateloans=(req,res,next)=>{
                Loan.update(req.body, {
                        where: {
                            loan_id: req.body.loan_id 
                        }
                    }).then(result => {
                        if (result[0] === 0) {
                            res.status(404).send("Loan not found");
                        } else {
                            res.status(200).send("Loan with "+  req.body.loan_id +"updated successfully");
                        }
                    }).catch(error => {
                        console.error("Error updating Loan:", error);
                        res.status(500).send("Error updating Loan");
                    });
                
}

exports.getAllLoansPK=(req,res,next) =>{
        Loan.findByPk(req.params.id)
        .then(loans => {
                res.send(loans);
        });
}