const mongoose = require('mongoose')
const url = require('./configs/setting')
mongoose.connect(url, {useNewUrlParser: true})

module.exports = mongoose