const express = require('express')
const { signup, login } = require('../Controller/auth')
const authRouter = express.Router()

authRouter.post('/api/signup', signup)
authRouter.post('/api/login', login)


module.exports = authRouter