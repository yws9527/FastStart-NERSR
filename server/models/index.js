// 所有模块汇总
/* 
  users --  用户模块
  staffs -- 职员模块
  menus --  事项模块
*/

const users = require('./users')
const staffs = require('./staffs')
const menus = require('./menus')

module.exports = {
  users,
  staffs,
  menus
}