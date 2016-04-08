var mongoose = require('mongoose')
var Schema = mongoose.Schema

var starSchema = new Schema({
  img_url: String,
  // rating: String,
  toy_name: String,
  reviewer: String,     // This is child's name as the kid is the user
  date: String,
  comment: String,
  admin: Boolean
})

var Star = mongoose.model('Star', starSchema)

module.exports = Star
