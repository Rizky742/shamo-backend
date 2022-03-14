const express = require('express');
const Validator = require('fastest-validator');
const v = new Validator();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const SECRET_KEY = "tanyakasir";
const app = express();
app.use(express.json())

const models = require("../models/index");
const user = models.User

app.post('/', async (req, res) => {
    const schema = {

        email: 'string|empty:false|email|unique:true|max:255',
        password: 'string|min:6'
    }
    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(404).json({
            status: 'error',
            message: validate
        })
    }

    const User = await user.findOne({ where: { email: req.body.email } })
    if (!User) {
        return res.json({
            status: 'error',
            message: 'email not found'
        })
    }

    const isValidPassword = await bcrypt.compare(req.body.password, User.password);
    if (!isValidPassword) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        })
    }

    const password = await bcrypt.hash(req.body.password, 10);
    const payload = JSON.stringify(User)
    let token = jwt.sign(payload, SECRET_KEY)

    res.json({
        acces_token: token,
        token_type: "Bearer",
        user: User
    })
})

module.exports = app;