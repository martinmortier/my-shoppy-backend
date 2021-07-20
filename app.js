require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const shop = require('./routes/shopRoute')
const user = require('./routes/userRoute')
const category = require('./routes/categoryRoute')
const product = require('./routes/productRoute')
const dashboard = require('./routes/dashboardRoute')

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/shop', shop)
app.use('/user', user)
app.use('/category', category)
app.use('/product', product)
app.use('/dashboard',dashboard)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
