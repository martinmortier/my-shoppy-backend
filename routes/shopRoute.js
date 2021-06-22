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

module.exports = router;