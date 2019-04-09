// 事项模块
const db = require('../configs/mongsdb')
const Schema = db.Schema
const menuSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean
})

const Menu = db.model('Menu', menuSchema)

module.exports = Menu
