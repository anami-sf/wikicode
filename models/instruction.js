const mongoose = require('mongoose')

var instructionSchema = new mongoose.Schema({
    description: String,
    code: String,
    recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}
});

module.exports = mongoose.model('Instruction', instructionSchema)