const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const url = require('url')
const querystring = require('querystring')
const path = require('path')
const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const router = require('./routes/routers')

// 自定义跨域中间件
const allowCors = function(req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Credentials','true')
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods', '*')
  next()
}

app.use(allowCors)
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// 错误处理
/*app.use(function(req, res, next) {
  next(createError(404))
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render('error')
})*/

app.post('/login', router.user.login)
app.post('/register', router.user.register)


app.listen(22222, '192.168.83.24')
