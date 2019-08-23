var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/notebooks', (req, res, next) => {
  res.redirect('/auth/google') //todo: replace with controller
  //res.send('You are here: /notebooks');
});

// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }

module.exports = router;
