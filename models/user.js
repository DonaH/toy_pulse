var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema

module.exports = mongoose.model('User', new Schema({
  parent_name: String,
  child_name: String, // the child is the toy_reviewer
  email: String,      // parent's email
  password: String,
  admin: Boolean
}))
