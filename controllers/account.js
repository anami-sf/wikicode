const User = require('../models/user')
const Recipe = require('../models/recipe')
const Instruction = require('../models/instruction')


const index = (req, res, next) => {
    Recipe.find({author: req.user.name})
    .then((recipes)=> {
        console.log("Acctindex view recipes: ", recipes)
        res.render('recipes/index', 
        {recipes})
    })
    .catch((err)=> {
        if(err) {res.redirect('/account/index')}
        console.log('EERRRROOORRR: ', err)
        res.status()
    })
 }

// const show = (req, res, next) => {
//     console.log('req.params.id: ', req.params.id)
//     Recipe.findById(req.params.id)
//     .populate('instructions')
//     .exec((err, recipe) => {        
//         console.log('recipe: ', recipe.title)
//         // console.log('req.user.name: ', req.user.name)
//         console.log('recipe.instructions: ', recipe.instructions)
//         res.render('recipes/show', {
//             instructions: recipe.instructions,
//             recipe: recipe,
//             user: req.user,
//         })})
//     .catch((err)=> {
//         console.log(err)
//         res.status()
//     })
// }

module.exports = {
    index
}