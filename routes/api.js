var express = require('express');
var router = express.Router();
var mdw = require('./middleware');


/* API listing. */
router.post('/auth', function(req, res, next) {
  let user = {
    name: "Arturo",
    username: "arturoblack"
  };
  let token = jwt.sign(user, config.secret, {
    expiresIn: 60*15 // expires in 15 min
  });
  res.json({ success: true, message: 'Authentication ok.', token: token });
});

// route middleware to verify a token
router.use(mdw.hasToken);

router.get('/dos', function(req, res, next) {
  res.json({ success: true, message: 'Authentication ok.' });
});


module.exports = router;
