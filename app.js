require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const shop = require('./routes/shopRoute')
const user = require('./routes/userRoute')

app.use('/shop', shop)
app.use('/user', user)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
