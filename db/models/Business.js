const mongoose = require('mongoose')
const { data_set } = require('../data_set.json')

const Business = mongoose.model('Business', data_set)

module.exports = Business