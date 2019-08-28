var express = require('express')
var router = express.Router()
const instructionsCtl = require('../controllers/instructions')

router.post('/recipes/:id/instructions', instructionsCtl.create)

module.exports = router