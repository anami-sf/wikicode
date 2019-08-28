const Recipe = require('../models/recipe')
const Instruction = require('../models/instruction')

const create = (req, res) => {
    Recipe.findById(req.params.id)
    //req.body.recipe = recipe._id
    .then((recipe)=> {
        console.log('instructionCtl.create: ', req.body)
        Instruction.create(req.body)
        .then(instruction => {
            recipe.instructions.push(instruction)
            recipe.save()
        })
        res.redirect(`/recipes/${recipe._id}`)
    })
    .catch((err)=> {
        console.log(err)
        res.status()        
    })
}

module.exports = {
    create
}