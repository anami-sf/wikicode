var express = require('express')
var router = express.Router()
const accountCtl = require('../controllers/account')

router.get('/account', accountCtl.index)
//router.get('/accounts/:id', accountsCtl.show)

// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }

module.exports = router