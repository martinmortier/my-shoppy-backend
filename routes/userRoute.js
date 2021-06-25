const express = require('express');
const router = express.Router();
const connection = require('../connection')
const bcrypt = require('bcrypt')

router.get('/', function(req, res) {
    connection.execute('SELECT * FROM user',(err, results) => {
        if(!err){
            res.send(results)
        }
        else{
            console.log(err)
        }
    })
});

router.post('/', async function (req, res) {
    const { login, password, shop_id } = req.body
    const passwordHashed = await bcrypt.hash(password, 10)
    console.log(passwordHashed)
    connection.execute('INSERT INTO user (login,password,shop_id) VALUES (?,?,?)', [login, passwordHashed, shop_id], function (err, result){
        if(!err){
            res.sendStatus(200).send(`User ${login} added`)
        }else{
            console.log(err) 
        }
    })
})

router.get('/login', async function (req,res) {
    const { login, password } = req.body
    const user = await connection.execute(`SELECT * FROM user WHERE user.login =${login}`)
    console.log(user)
    // bcrypt.compare(password,)
})
module.exports = router;