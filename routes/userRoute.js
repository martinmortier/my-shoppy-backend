const express = require('express');
const router = express.Router();
const connection = require('../connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
    const { login, password, id_shop } = req.body
    const passwordHashed = await bcrypt.hash(password, 10)
    console.log(passwordHashed)
    connection.execute('INSERT INTO user (login,password,id_shop) VALUES (?,?,?)', [login, passwordHashed, id_shop], function (err, result){
        if(!err){
            res.status(200).send(`User ${login} added`)
        }else{
            console.log(err) 
        }
    })
})

router.post('/login', async function (req,res) {
    const { login, password } = req.body
    connection.execute('SELECT * FROM user WHERE user.login = ?', [login], function ( err, results) {
        if(err || results.length === 0){
            res.status(404).json({error: 'user not found'})
        }
        const user = results[0]
        const passwordCorrect = bcrypt.compare(password,user.password)
        if(!(user && passwordCorrect)){
            res.status(401).json({error: 'invalid username or password'})
        }
        const userForToken = {
            id: user.user_id,
            login: user.login,
            id_shop: user.id
        }
        const token = jwt.sign(userForToken,process.env.SECRET_JWT)
        res.status(200).send({token, login: user.login, id_shop: user.id_shop})
    })
    
})
module.exports = router;