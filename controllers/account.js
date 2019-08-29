const User = require('../models/user')
const Recipe = require('../models/recipe')
const Instruction = require('../models/instruction')


const index = (req, res, next) => {
    Recipe.find({author: req.user.name})
    .then((recipes)=> {
        console.log("Acctindex view recipes: ", recipes)
        res.render('account/index', 
        {recipes})
    })
    .catch((err)=> {
        if(err) {res.redirect('/account/index')}
        console.log('ERROR: ', err)
        res.status()
    })
 }

 const show = (req, res, next) => {
    console.log('req.params.id: ', req.params.id)
    Recipe.findById(req.params.id)
    .populate('instructions')
    .exec((err, recipe) => {        
        console.log('recipe: ', recipe.title)
        // console.log('req.user.name: ', req.user.name)
        console.log('recipe.instructions: ', recipe.instructions)
        res.render('account/show', {
            instructions: recipe.instructions,
            recipe: recipe,
            user: req.user,
        })})
}

 const remove = (req, res, next) => {
    Recipe.findByIdAndDelete(req.params._id)
    .then(() => {
        res.redirect('/account')
    })
    .catch(() => {
        if(err) {res.redirect('/account/index')}
        console.log('ERROR: ', err)
    })
 }


module.exports = {
    index,
    show,
    remove
}