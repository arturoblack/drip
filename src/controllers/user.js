var mongoose = require('mongoose');
var DripModel = require('../models/drip');
var UserModel = require('../models/user');

exports.list = function (req, res) {
  // code
};

exports.get = function (req, res){
  console.log('asdasds');
  UserModel.findOne({username: req.params.username})
    .exec()
    .then(
      user => {
        DripModel.find({members: user._id})
          .exec()
          .then(
            drips => res.render('user/index', { drips: drips, user: user }),
            err => handleError(err)
          );
      },
      err => handleError(err)
    );
};
