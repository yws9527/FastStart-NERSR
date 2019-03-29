const express = require('express')
const app = express()
const router = require('./routes/routers')

app.get('/', router.showIndex)



app.listen(22222, 'localhost')