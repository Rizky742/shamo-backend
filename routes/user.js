const express = require('express');
const Validator = require('fastest-validator');
const v = new Validator();
const auth = require("../auth");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "tanyakasir";
const app = express();
app.use(express.json())

const models = require("../models/index");
const md5 = require('md5');
const user = models.User

app.get('/', auth, (req, res) => {
    user.findAll()
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

app.get('/:id', (req, res) => {
    let param = req.params.id
    user.findByPk(param)
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

app.put('/:id', (req, res) => {
    let param = { id: req.params.id }
    let data = {
        name: req.body.name,
        email: req.body.email,
        roles: req.body.roles,
        phone: req.body.phone,
        username: req.body.username
    }
    user.update(data, { where: param })
        .then(result => {
            res.json({
                message: "User berhasil di update"
            })
        })
        .catch(error => {
            res.json({
                message: error
            })
        })

})

app.delete('/:id', (req, res) => {
    let param = { id: req.params.id }
    user.destroy({ where: param })
        .then(result => {
            res.json({
                message: "User berhasil dihapus"
            })
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
})

module.exports = app;

