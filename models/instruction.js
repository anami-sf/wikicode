const mongoose = require('mongoose')

var instructionSchema = new mongoose.Schema({
    description: String,
    code: String,
    //Brackets would indicate that the instruction is associated with multiple recipes
    recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}
});

module.exports = mongoose.model('Instruction', instructionSchema)