var express = require('express')
var router = express.Router()
const recipesCtl = require('../controllers/recipes')

router.get('/recipes', recipesCtl.index)
router.get('/recipes/newRecipe', isLoggedIn, recipesCtl.newRecipe)
router.post('/recipes', isLoggedIn, recipesCtl.create)
router.get('/recipes/:id', recipesCtl.show)
router.get('/recipes/:id/edit', recipesCtl.editRecipe)//Display FORM
router.put('/recipes/:id', recipesCtl.updateRecipe)
router.post('/recipes/:id/votes', recipesCtl.addVote)

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router
