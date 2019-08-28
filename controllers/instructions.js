const Recipe = require('../models/recipe')
const Instruction = require('../models/instruction')

const create = (req, res) => {
    Recipe.findById(req.params.id)
    .then((recipe) => {
        //Recipe is not getting passed to the instruction
        req.body.recipe= recipe._id
        Instruction.create(req.body)
        .then((instruction) => {
            recipe.instructions.push(instruction._id)
            recipe.save((err) => {
                if (err) return handleError(err)
                res.redirect(`/recipes/${recipe._id}`)
            })
        })
        .catch((err)=>{
            console.log('Error: ', err)
            handleError(err)
        })
    })
    .catch((err)=>{
        console.log('Error: ', err)
        handleError(err)
    })
}

const show = (req, res, next) => {
    console.log('req.params.id: ', req.params.id)
    Recipe.findById(req.params.id)
    .then((recipe)=> {
        Instruction.find({recipe: recipe._id}, (err, instructions)=> {
            res.render('recipes/show', {
                instructions: instructions,
                recipe: recipe,
                user: req.user,
                name: req.query.name
            })
        })
    })
    .catch((err)=> {
        console.log(err)
        res.status()
    })
}

module.exports = {
    show,
    create
}