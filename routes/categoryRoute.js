const express = require('express');
const router = express.Router();
const connection = require('../connection')

//Get all rows of category
router.get('/', function (req, res) {
    res.send('John doe')
})

//Insert row in category
router.post('/', function(req, res) {
    const shop_id = req.body.shop_id
    const name = req.body.name
    if(name && shop_id){
        connection.execute("INSERT INTO category (name, shop_id) VALUES (?,?)",[name,shop_id], (err, results) => {
            if(!err){
                res.status(200).send(`Category ${name} added`)
            }else{
                console.log(err)
            }
        })
    }
    else{
        res.sendStatus(400)
    }
});

// router.get('/:id', function(req, res) {
//     req.
// })

module.exports = router;