const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const url = require('url')
const querystring = require('querystring')
const path = require('path')
const createError = require('http-errors')
const logger = require('morgan')
const session = require('express-session')
const router = require('./routes/routers')

// 自定义跨域中间件
const allowCors = function(req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Credentials','true')
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods', '*')
  //header头信息设置结束后，结束程序往下执行，返回
  if(req.method.toLowerCase() === 'options'){
    res.status(204)
    res.json({}) //直接返回空数据，结束此次请求
  }else{
    next()
  }
}

app.use(session({
  resave: false,
  secret: 'keyboard cat',
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12 // 设置 session 的有效时间，单位毫秒
  }
}))
app.use(allowCors)
app.use(logger('dev'))
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
app.get('/registed', router.user.registed)
app.post('/updateInfo', router.user.updateInfo)


app.listen(22222, 'localhost')
