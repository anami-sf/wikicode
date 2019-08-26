const User = require('../models/user')
const Recipe = require('../models/recipe')

const index = (req, res, next) => {
    User.find({})
    .then((users)=> {
        //res.status(200).json(movies)
        res.render('recipes/index', {
            users: users,
            user: req.user,
            name: req.query.name
        })
    })
    .catch((err)=> {
        console.log(err)
        res.status()
    })
}

//Form to create new recipe
const newRecipe = (req, res, next) => {
    //todo: if (isAutheticated) {}
    res.render('recipes/newRecipe')
}

const create = (req, res) => {
    Recipe.create(req.body)
    .then((recipe)=> {
        res.redirect(`/recipes/${recipe._id}`)
    })
    .catch((err)=> {
        console.log(err)
        res.status()        
    })
}

const show = (req, res, next) => {
    console.log('req.params.id: ', req.params.id)
    Recipe.findById(req.params.id)
    .then((recipe)=> {
        console.log('recipe: ', recipe)
        console.log('req.user: ', req.user)
        console.log('req.query.name: ', req.query.name)
        res.render('recipes/show', {
            recipe: recipe,
            user: req.user,
            name: req.query.name
        })
    })
    .catch((err)=> {
        console.log(err)
        res.status()
    })
}

module.exports = {
    index,
    newRecipe,
    create,
    show
}