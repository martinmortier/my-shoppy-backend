require('dotenv').config()
const mysql = require('mysql2');
const express = require('express')
const app = express()
const port = 3000

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:`${process.env.PASSWORD_DB}`,
  database: 'testDB'
});

connection.connect(err => {
    if(!err){
        console.log("connected !")
    }else{
        console.log("connection failed")
    }
})
app.get('/', (req, res) => {
    connection.execute("SELECT * FROM testTable",(err,rows, fields) => {
        if(!err){
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})