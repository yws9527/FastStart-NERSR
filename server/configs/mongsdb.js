const mongoose = require('mongoose')
const url = require('./setting')
mongoose.connect(url, {useNewUrlParser: true})

module.exports = mongoose