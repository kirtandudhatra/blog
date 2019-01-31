const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userschema = new mongoose.Schema({
  uname: String,
  pass: String
}, {collection: 'users'});

module.exports = mongoose.model('User', userschema);