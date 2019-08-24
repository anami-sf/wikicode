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
const htmlUploadForm = (req, res, next) => {
    //todo: if (isAutheticated) {}
    res.render('recipes/htmlUpload')
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
    User.findById(req.params.id)
    .then((recipe)=> {
        res.render('recipes/', {
            recipe: recipe,
            //users: users,
            //user: req.user,
            //name: req.query.name
        })
    })
    .catch((err)=> {
        console.log(err)
        res.status()
    })
}

module.exports = {
    index,
    htmlUploadForm,
    create,
    show
}