var mongoose = require('mongoose')
var Schema = mongoose.Schema

var reviewSchema = new Schema({
  img_url: String,
  // rating: String,
  boogerlist: {type: Boolean, default:false},
  toy_name: String,
  reviewer: String,     // This is child's name as the kid is the user
  date: {type: Date, default:Date.now},
  comment: String,
  admin: Boolean
})

var Review = mongoose.model('Review', reviewSchema)

module.exports = Review
 
