const User = require('../models/user')
const Recipe = require('../models/recipe')


const index = (req, res, next) => {
    Recipe.find({})
    .then((recipes)=> {
        console.log("index view recipes: ", recipes)
        res.render('recipes/index', {
            recipes: recipes,
            user: req.user
        })
    })
    .catch((err)=> {
        console.log('EERRRROOORRR: ', err)
        res.status()
    })
    // User.find({})
    // .then((users)=> {
    //     res.render('recipes/index', {
    //         users: users,
    //         user: req.user,
    //         name: req.query.name
    //     })
    // })
    .catch((err)=> {
        console.log(err)
        res.status()
    })
    
}

//Form to create new recipe
const newRecipe = (req, res, next) => {
    //todo: if (isAutheticated) {}
    res.render('recipes/newRecipe', {
        user: req.user
    })
}

const create = (req, res) => {
    Recipe.create(req.body)
    .then((recipe)=> {
        recipe.author = req.user.name
        recipe.save()
        .then(() => res.redirect(`/recipes/${recipe._id}`))
        
    })
    .catch((err)=> {
        console.log(err)
        res.status()        
    })
}

const show = (req, res, next) => {
    Recipe.findById(req.params.id)
    .populate('instructions')
    .exec((err, recipe) => {        
        console.log('recipe: ', recipe.title)
        // console.log('req.user.name: ', req.user.name)
        console.log('recipe.instructions: ', recipe.instructions)
        res.render('recipes/show', {
            instructions: recipe.instructions,
            recipe: recipe,
            user: req.user,
        })})
}

const editRecipe = (req, res, next) => {
    //todo: if (isAutheticated) {}
    Recipe.findById(req.params.id)
    .then((recipe) => {
        res.render('recipes/editRecipe', {
            user: req.user,
            recipe
        })
    })
}

// const edit = (req, res) => {
//     Recipe.findByIdAndUpdate(req.params.id, options.omitUndefined=true)
//     .then((recipe)=> {
//         recipe.save()
//         .then(() => res.redirect(`/recipes/${recipe._id}`))
        
//     })
//     .catch((err)=> {
//         console.log(err)
//         res.status()        
//     })
// }

module.exports = {
    index,
    newRecipe,
    create,
    show,
    editRecipe, 
}