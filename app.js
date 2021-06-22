require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const shop = require('./routes/shopRoute')
const user = require('./routes/userRoute')
const category = require('./routes/categoryRoute')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/shop', shop)
app.use('/user', user)
app.use('/category', category)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
