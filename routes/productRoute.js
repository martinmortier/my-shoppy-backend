const express = require('express');
const router = express.Router();
const connection = require('../connection')

router.get('/', function(req, res) {
   connection.execute("SELECT * FROM product", function (err, result) {
        if(!err){
            res.send(result)
        }
        else{
            console.log(err)
        }
    }) 
});

router.post('/', function (req,res) {
    const { name, price, category_id } = req.body
    connection.execute("INSERT INTO product (name,price,category_id) VALUES (?,?,?)",[name,price,category_id], function(err, result) {
        if(!err){
            res.sendStatus(200).send(`Product ${name} added`)
        }
    })
})
module.exports = router;