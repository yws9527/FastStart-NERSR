const user = require('../models/users.js')

const login = function (req, res, next) {
  res.send({res: '欢迎回来！'})
}
const register = function (req, res, next) {
  res.send({res: '欢迎注册！'})
}

exports.login = login // 登录的路由
exports.register = register // 注册的路由
