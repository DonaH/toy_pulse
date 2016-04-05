var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = mongoose.model('Boogerlist', new Schema({
  rating: String,
  toy_name: String,
  reviewer: String,     // This is child's name as the kid is the user
  date: String,
  comment: String,
  admin: Boolean
}))
