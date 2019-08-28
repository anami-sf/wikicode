const Recipe = require('../models/recipe')
const Instruction = require('../models/instruction')

const create = (req, res) => {
    Recipe.findById(req.params.id)
    .then((recipe)=> {
        req.body.recipe = recipe._id
        console.log('instructionCtl.create: ', req.body)
        Instruction.create(req.body)
        .then(instruction => {
            recipe.instructions.push(instruction._id)
            recipe.save(function(err) {
                if (err) return handleError(err)
                res.redirect(`/recipes/${recipe._id}`)
            })
        })
    })
    .catch((err)=> {
        console.log(err)
        res.status()        
    })
}

module.exports = {
    create
}