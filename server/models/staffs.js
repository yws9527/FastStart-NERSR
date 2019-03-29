// 职员模块
const db = require('../configs/setting')
const Schema = db.Schema
const staffSchema = new Schema({
  age: Number,
  sex: String,
  name: String,
  email: String,
  hobby: String,
  birthday: Date
})

const Staff = db.model('Staff', staffSchema)

module.exports = Staff