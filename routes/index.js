var express = require('express');
var router = express.Router();
var mainCtrl = require('../src/controllers/main');
var groupCtrl = require('../src/controllers/group');
var dripCtrl = require('../src/controllers/drip');
var userCtrl = require('../src/controllers/user');
/* GET home page. */
router.get('/', mainCtrl.index);

// group routes
router.get('/group', groupCtrl.list);
router.post('/group', groupCtrl.create);
router.get('/group/user/:user', groupCtrl.byUser);
// user
router.get('/user/:username', userCtrl.get);
router.get('/user/:username/drip/:id', dripCtrl.get);
router.post('/user/:username/drip/:id/add', dripCtrl.createDrip);
// drip group
router.get('/drip/:id', dripCtrl.get);
router.post('/drip', dripCtrl.create);


module.exports = router;
