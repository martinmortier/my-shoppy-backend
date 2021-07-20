const express = require('express');
const router = express.Router();
const connection = require('../connection')
router.get('/', function (req, res) {
    connection.execute('SELECT category.name AS categoryName, product.name AS productName FROM category INNER JOIN product ON category.id_category = product.id_category', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    })
})

module.exports = router;