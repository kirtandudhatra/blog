var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/blog');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;