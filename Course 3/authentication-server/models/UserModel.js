var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
  username:  String,
  password: String,
});

User = mongoose.model('User', user);

module.exports = User
