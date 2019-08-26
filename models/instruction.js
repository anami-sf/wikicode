const mongoose = require('mongoose')

var instructionSchema = new mongoose.Schema({
    description: String,
    code: String
});

module.exports = mongoose.model('Instruction', instructionSchema)