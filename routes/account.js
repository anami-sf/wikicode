var express = require('express')
var router = express.Router()
const accountCtl = require('../controllers/account')

router.get('/account', accountCtl.index)
router.get('/account/:id', accountCtl.show)

router.delete('/account/:id', accountCtl.remove)

// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }

module.exports = router