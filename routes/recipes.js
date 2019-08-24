var express = require('express')
var router = express.Router()
const recipesCtl = require('../controllers/recipes')

router.get('/recipes', (req, res) =>
  res.render('recipes/index')
)

router.get('/recipes/htmlUpload', recipesCtl.htmlUpload)



/* GET users listing. */
//router.get('/recipes', recipesCtl.index)//todo: replace with controller
  //res.send('You are here: /notebooks');

// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }

module.exports = router;
