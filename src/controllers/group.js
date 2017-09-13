var mongoose = require('mongoose');
var GroupModel = require('../models/group');
var UserModel = require('../models/user');

exports.list = function (req, res) {
  GroupModel.find({})
    .exec()
    .then(
      groups => res.render('group/index', { groups: groups }),
      err => res.render('error', {error:err})
    );
};

exports.get = function (req, res, id){
  GroupModel.findOne({_id: id}, (err, data) => {
    if(err) return console.error(err);
    res.render('drips/item', { drips: data });
  });
};

exports.create = function (req, res, id){
  let group = new GroupModel({
    name:req.body.name,
    members: [req.body.member],
    summary: req.body.summary
  });

  group.save((err, data) => {
    if(err) return console.error(err);
    res.render('group/index', {group: data});
  });
};

exports.update = function (req, res){
  GroupModel.findOne({_id: id}, (err, data) => {
    if(err) return console.error(err);
    res.render('drips/item', { drips: data });
  });
};

exports.delete = function (req, res){
  GroupModel.findOne({_id: id}, (err, data) => {
    if(err) return console.error(err);
    res.render('drips/item', { drips: data });
  });
};

// Custom apis
exports.byUser = function(req, res) {
  UserModel.findOne({username: req.params.user})
    .exec()
    .then(
      user => {
        if(user)
          GroupModel.find({members: user._id})
            .exec()
            .then(
              groups => res.render('group/index', { groups: groups }),
              err => res.render('error', {error:err})
            );
        else
          res.render('group/index', { groups: [] });
      },
      err => res.render('error', {error:err})
    );

};
