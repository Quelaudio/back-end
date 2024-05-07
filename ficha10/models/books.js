module.exports = (sequelize, type) => {
    return sequelize.define('Books',{
    book_id: {
        type: type.STRING,
        autoIncrement: true,
        primaryKey:true

    },
    title: type.TEXT,
    lastName: type.TEXT,
    author_name : type.TEXT,
    publication_date: type.DATEONLY,
    genre: type.STRING,
    available_copies: type.INTEGER
    });
}