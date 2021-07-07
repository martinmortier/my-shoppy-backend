const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
    host: 'myshoppy-1.coq2puig72hb.eu-west-3.rds.amazonaws.com',
    user: 'admin',
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