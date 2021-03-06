const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String, 
    require: true
  }, 
  email: {
    type: String, 
    require: true
  }, 
  password: {
    type: String, 
    require: true
  },
  isAdmin: {
    type: Boolean, 
    default: false
  },
  date: {
    type: Date, 
    defualt: Date.now
  }
})

const User = mongoose.model('User', UserSchema)
module.exports = User