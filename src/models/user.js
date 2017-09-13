var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
  username: {type: String, required: true, unique: true},
  name: {type: String, required: false},
  last_name: {type: String, required: false},
  password: {type: String, required: false},
  groups: [{type: String, required: false}]
});

// //Export model
module.exports = mongoose.model('User', UserSchema);
