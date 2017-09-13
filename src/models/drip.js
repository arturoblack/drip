var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DripSchema = Schema({
  title: {type: String, required: true},
  members: [{type: Schema.ObjectId, ref: 'User', required: true}],
  summary: {type: String, required: true},
  drips: [{
    name:{type: String, required: true},
    ammount: {type:Number, required: true},
    timestamp: {type:Date, required: true},
    tags: [{name: String, color: String, _id: false}],
    who: {type: Schema.ObjectId, ref: 'User', required: true},
    category: {type: Schema.ObjectId, ref: 'Category', required: true},
    direction: {type: Boolean, default: false}
  }]
});

// // Virtual for book's URL
// BookSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/book/' + this._id;
// });
//
// //Export model
module.exports = mongoose.model('Drip', DripSchema);
