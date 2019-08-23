var express = require('express');
var router = express.Router();
const passport = require('passport')
const userCtl = require('../controllers/users')

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/recipes');
});

// The user will be presented the consent screen if they have not previously consented.
// Then Google will call our Google callback route…

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
))

// Callback route that Google will call after the user confirms:

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/users/index',
    failureRedirect : '/recipes'
  }
))

module.exports = router;
