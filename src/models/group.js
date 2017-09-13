var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GroupSchema = Schema({
  name: {type: String, unique: true, required: true},
  members: [{type: Schema.ObjectId, ref: 'User', required: true}],
  summary: {type: String, required: true}
});

// export model
module.exports = mongoose.model('Group', GroupSchema);
