// 用户模块
const db = require('../configs/mongsdb')
const Schema = db.Schema
const userSchema = new Schema({
  age: Number,
  sex: String,
  work: String,
  email: String,
  avatar: String,
  birthday: Date,
  company: String,
  username: String,
  password: String
})

const User = db.model('User', userSchema)

module.exports = User
