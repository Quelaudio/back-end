module.exports = (sequelize, type) => {
    return sequelize.define('Loans',{
    loan_id: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey:true

    },
    loan_data: type.DATEONLY,
    return_date: type.DATEONLY
    
    });
}