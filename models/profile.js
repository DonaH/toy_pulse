var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema

var profileSchema = new Schema({
  // image input:
  // blog of each toy

  starList: {
    toy_name: {type: String},
    toy_reviewer: {type: String},
    date_of_comment: {type: Date},
    comment: {type: String}
  },

  boogerList: {
    toy_name: {type: String},
    toy_reviewer: {type: String},
    date_of_comment: {type: Date},
    comment: {type: String}
  }

})

var Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile
