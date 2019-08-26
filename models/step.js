const mongoose = require('mongoose')

var stepSchema = new mongoose.Schema({
    description: String,
    code: String
});

module.exports = mongoose.model('Step', stepSchema)