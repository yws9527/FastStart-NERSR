const User = require('../models/users.js')

const login = function (req, res, next) {
	console.log(req.body, 'user')
	User.find({username: req.body.username}, function (err, docs) {
		if (err) throw error
		if (docs.length) {
			res.json({res: 1})
		} else {
			res.json({res: -1})
		}
	})
}
const register = function (req, res, next) {
	const body = req.body
	const base = {
		age: 0,
	  sex: '',
	  work: '',
	  email: '',
	  birthday: Date.now(),
	  company: ''
	}
	User.find({username: body.username}, function (err, docs) {
		if (err) throw error
		if (docs.length) {
			res.json({res: '该用户名已被占用！'})
		} else {
			User.create({username: body.username, password: body.password, ...base}, function (err, docs2) {
				if (err) throw error
				res.json({res: 'success'})
			})
		}
	})
}

exports.login = login // 登录的路由
exports.register = register // 注册的路由
