var mongoose = require('mongoose');
var DripModel = require('../models/drip');
var GroupModel = require('../models/group');
var UserModel = require('../models/user');

exports.list = function (req, res) {
  // code
};

exports.get = function (req, res){
  DripModel.findOne({_id: req.params.id})
    .exec()
    .then(
      drip => res.render('drips/index', { drip: drip}),
      err => handleError(err)
    );
};

exports.create = function (req, res){
  console.log(req.body);
  let drip = new DripModel({
    title: req.body.title,
    members: [req.body.member], // req.user._id
    summary: req.body.summary,
  });
  drip.save()
    .then(
      drip => res.render('drips/index', {drip: drip}),
      err => handleError(err)
    );
};
