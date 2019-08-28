require('./config/database')
const  Recipe = require('./models/recipe')
const Instruction = require('./models/instruction')
const data = require('./data')

//These are mongoose promises
const deleteRecipe = Recipe.deleteMany({})
const deleteInstruction = Instruction.deleteMany({})
const createRecipes = Recipe.create(data.recipes)

//Promise.all([]) accepts an array of promises and returns a single promise in their place. Does NOT execute in order. 

Promise.all([deleteRecipe, deleteInstruction])
.then((results) => {
    return createRecipes
})
.then((recipes) => {
    return Recipe.findOne({title: 'express-generator-app'})
        //Performer.findOne({name: 'Mark Hamill'}),  
})
.then((recipe) => {
    recipe.instructions.push(data.rec1Steps)
    return recipe.save()
})
.then(()=> process.exit())





