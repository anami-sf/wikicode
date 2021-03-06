const User = require('../models/user')
const Recipe = require('../models/recipe')
const Instruction = require('../models/instruction')


const index = (req, res, next) => {
    Recipe.find({author: req.user.name})
    .then((recipes)=> {
        console.log("Acctindex view recipes: ", recipes)
        res.render('account/index', {
            recipes,
            user: req.user
        })
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
    console.log('DELETE req.params.id: ', req.params.id)
    Recipe.findByIdAndDelete(req.params.id)
    .then((recipe) => {
        console.log(recipe);
        res.redirect('/account') 
    })
    // .catch(() => {
    //     if(err) {res.redirect('/account')}
    //     console.log('ERROR: ', err)
    // })
 }

 const removeStep = (req, res, next) => {
    console.log('DELETE STEP req.params.id: ', req.params.id)
    Instruction.findByIdAndDelete(req.params.id)
    .then((instruction) => {
        console.log('DELETE STEP instruction: ', instruction);
        // todo: How do I redirect to account/recipe._id
        //instruction.recipe
        res.redirect(`/account/${instruction.recipe}`) 
    })
    // .catch(() => {
    //     if(err) {res.redirect('/account')}
    //     console.log('ERROR: ', err)
    // })
 }

module.exports = {
    index,
    show,
    remove,
    removeStep
}