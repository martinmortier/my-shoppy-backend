const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:`${process.env.PASSWORD_DB}`,
    database: 'myShoppy'
});

connection.connect(err => {
    if(!err){
        console.log("connected !")
    }else{
        console.log("connection failed")
    }
})

module.exports = connection   