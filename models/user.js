var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  parent_name: String,
  email: String,
  child: String,     // This is child is the user
  password: String,
  admin: Boolean
})

var User = mongoose.model('User', userSchema)

module.exports = User
