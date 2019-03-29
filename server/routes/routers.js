const showIndex = function (req, res, next) {
  res.send({res: '你来啦！'})
}

exports.showIndex = showIndex // 访问首页的路由