const express = require('express')
const app = express()
const router = require('./routes/routers')

app.post('/login', router.user.login)
app.post('/register', router.user.register)


app.listen(3000, 'localhost')
