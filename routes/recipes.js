var express = require('express')
var router = express.Router()
const recipesCtl = require('../controllers/recipes')

router.get('/recipes', (req, res) =>
  res.render('recipes/index')
)

router.get('/recipes/newRecipe', recipesCtl.newRecipe)
router.post('/recipes', recipesCtl.create)
router.get('/recipes/:id', recipesCtl.show)

// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }

module.exports = router
