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
    if(typeof id === 'number'){
        connection.execute('SELECT * FROM shop WHERE shop.id_shop = ?', [id], function (err, results) {
            if(!err){
                res.send(results)
            }
            else{
                console.log(err)
            }
        })
    }
    else{
        res.sendStatus(400).json("Not argument Enough")
        console.log('Type of id params not valid')
    }    
})

module.exports = router;