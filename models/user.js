var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = mongoose.model('User', new Schema({
  parent_name: String,
  email: String,
  child: String,     // This is child is the user
  password: String,
  admin: Boolean
}))
