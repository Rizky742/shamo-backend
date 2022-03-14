const express = require('express');
const Validator = require('fastest-validator');
const v = new Validator();
const auth = require("../auth");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const SECRET_KEY = "tanyakasir";
const app = express();
app.use(express.json())

const models = require("../models/index");
const user = models.User

app.post('/', async(req, res) => {
    const schema = {
        name: 'string|empty:false|max:255',
        username: 'string|empty:false|unique:true|max:255',
        email: 'string|empty:false|email|unique:true|max:255',
        phone: 'string|empty:false|max:255',
        password: 'string|min:6'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(404).json({
            status: 'error',
            message: validate
        })
    }

    const password = await bcrypt.hash(req.body.password, 10);

    let data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password
        // password : md5(req.body.password),
    }
    await user.create(data)
        .then(result => {
            user.findOne({ where: { email: req.body.email } })
                .then(result => {
                    let payload = JSON.stringify(result)
                    let token = jwt.sign(payload, SECRET_KEY)
                    res.json({
                        acces_token: token,
                        token_type: "Bearer",
                        user: result
                    })
                })
                .catch(error => {
                    res.json({
                        message: error
                    })
                })
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
})

module.exports = app;