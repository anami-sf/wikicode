const mongoose = require('mongoose')

var instructionSchema = new mongoose.Schema({
    code: String,
    step: String,
    recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}
});

module.exports = mongoose.model('Instruction', instructionSchema)