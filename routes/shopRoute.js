const express = require('express');
const router = express.Router();
const connection = require('../connection')

router.get('/', function(req, res) {
    connection.execute('SELECT * FROM shop', (err, results) => {
        if(!err){
            res.send(results)
        }
        else{
            console.log(err)
        }
    })
});

router.get('/:id', function(req,res) {
    const id = req.params.id
    connection.execute('SELECT * FROM shop WHERE shop.id_shop = ?', [id], (err, results) => {
        res.send(results)
    })    
})

module.exports = router;