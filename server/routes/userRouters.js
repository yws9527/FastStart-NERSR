const User = require('../models/users.js')

// 登录接口
const login = function (req, res, next) {
	User.find({username: req.body.username}, function (err, docs) {
		if (err) throw err
		if (docs.length) {
			res.json({res: 1})
		} else {
			res.json({res: -1})
		}
	})
}

// 注册接口
const register = function (req, res, next) {
	const body = req.body
	const base = {
		age: 0,
	  sex: '',
	  work: '',
	  email: '',
		avatar: '',
		company: '',
		birthday: Date.now()
	}
	User.find({username: body.username}, function (err, docs) {
		if (err) throw err
		if (docs.length) {
			res.json({res: '该用户名已被占用！'})
		} else {
			User.create({username: body.username, password: body.password, ...base}, function (err, docs2) {
				if (err) throw err
				req.session.username = body.username
				res.json({res: 'success'})
			})
		}
	})
}

// 获取已经注册的用户
const registed = function (req, res, next) {
	res.json({res: 1, username: req.session.username})
}

// 保存用户提交的信息
const updateInfo = async function (req, res, next) {
	try {
		const body = req.body
		const username = body.username
		delete body.username
		const result = await User.where({username}).updateOne(body)
		if (result.ok === 1) {
			res.json({res: 1})
		} else {
			res.join({res: -1})
		}
	} catch (err) {
		throw err
	}
}



































exports.login = login // 登录的路由
exports.register = register // 注册的路由
exports.registed = registed // 获取已经注册的用户名
exports.updateInfo = updateInfo // 更新用户信息
