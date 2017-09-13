var mongoose = require('mongoose');
var GroupModel = require('../models/group');
var UserModel = require('../models/user');

exports.index = function (req, res){
  UserModel.find({}).exec(
    (err, users) => {
      if(err) return handleError(err);
      res.render('index', {users: users});
    }
  );
};
