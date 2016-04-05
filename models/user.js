var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = mongoose.model('User', new Schema({
  parent_name: String,
  email: String,
  reviewer: String,     // This is child's name as the kid is the user
  reviewer2: String,    // Optional
  password: String,
  admin: Boolean
}))
