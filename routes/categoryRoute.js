const express = require('express');
const router = express.Router();
const connection = require('../connection')

//Get all rows of category
router.get('/', function (req, res) {
    connection.execute('SELECT * FROM category', function (err, results) {
        if(!err){
            res.send(results)
        }
        else{
            console.log(err)
        }
    })
})

//Insert data in Category table
router.post('/', function(req, res) {
    const id_shop = req.body.id_shop
    const name = req.body.name
    if(name && id_shop){
        connection.execute("INSERT INTO category (name, id_shop) VALUES (?,?)",[name,id_shop], (err, results) => {
            if(!err){
                res.status(200).send(`Category ${name} added`)
            }else{
                console.log(err)
            }
        })
    }
    else{
        res.sendStatus(400).json({error: 'id_shop or name invalid'})
    }
});

module.exports = router;