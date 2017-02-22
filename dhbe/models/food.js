const mongoose = require('mongoose')
Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  retriction: String
})

var Food = mongoose.model('Food', UserSchema)
module.exports = Food
