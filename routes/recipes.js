var express = require('express');
var router = express.Router();
const usersCtl = require('../controllers/users')

/* GET users listing. */
router.get('/recipes', usersCtl.index)//todo: replace with controller
  //res.send('You are here: /notebooks');

// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }

module.exports = router;
