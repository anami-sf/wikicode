const express = require('express')
const router = express.Router()
const recipesCtl = require('../controllers/recipes')
const instructionsCtl = require('../controllers/instructions')

router.post('/recipes/:id/instructions', instructionsCtl.create)

//how do I get here????
// router.get('/recipes/:id/instructions', instructionsCtl.show)

module.exports = router