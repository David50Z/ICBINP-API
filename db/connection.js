const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/users")

module.exports = mongoose