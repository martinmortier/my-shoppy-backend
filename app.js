require('dotenv').config()
const mysql = require('mysql2');
const express = require('express')
const app = express()
const port = 3000
const shop = require('./routes/shopRoute')
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

app.use('/shop', shop)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})