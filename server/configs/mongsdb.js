const url = require('./setting')
const mongoose = require('mongoose')
mongoose.connect(url, {useNewUrlParser: true})
const connect = mongoose.connection

// 打印连接日志
connect.on('error', console.error.bind(console, '连接数据库错误！'))
connect.once('open', function (res) {
	console.log('连接数据库成功!')
})

module.exports = mongoose
