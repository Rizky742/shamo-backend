const express = require('express');
const app = express();
app.use(express.json())

const models = require("../models/index")
const product = models.Product

app.get('/', (req, res) => {
    product.findAll({
        include: {
            model: models.ProductCategory
        }
    })
        .then(result => {
            res.json({
                status: "success",
                data: result
            })
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
})

module.exports = app;
