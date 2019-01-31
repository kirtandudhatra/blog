const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var postschema = new mongoose.Schema({
  title: String,
  body: String
}, {collection: 'posts'});
module.exports = mongoose.model('Posts', postschema);