const express = require('express');
const { sequelize } = require('../models/index');
const app = express();
app.use(express.json())

const models = require("../models/index")
const transaction = models.Transaction

app.get('/', (req, res) => {
    // sequelize.query('CALL filterTodo(1)')
    transaction.findAll({
        include: {
            model: models.User
        }
    })
    // db.query(sql, 1)
        .then(results => {
            res.json({
                message: results
            })
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
})

app.get('/:id', (req, res) => {
    // sequelize.query('CALL filterTodo(1)')
    let param = {id : req.params.id}
    transaction.findAll({
        where: param,
        include: {
            model: models.User
        }
    })
    // db.query(sql, 1)
        .then(results => {
            res.json({
                message: results
            })
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
})

app.post('/', (req,res) => {
    let data = {
        users_id : req.body.users_id,
        address : req.body.address,
        total_price : req.body.total_price,
        shipping_price : req.body.shipping_price,
        status : req.body.status,
        payment : req.body.payment
    }
    transaction.create(data)
    .then(result => {
        res.json({
            message: result
        })
    })
    .catch(error => {
        res.json({
            message: error
        })
    })
})




module.exports = app;