var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = Schema({
  name: {type: String, required: false}
});

// //Export model
module.exports = mongoose.model('Category', CategorySchema);
