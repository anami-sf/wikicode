const mongoose = require('mongoose')

var recipeSchema = new mongoose.Schema({
    category: String,
    stepNo: Number,
    stepDescription: String, 
    code: String, 
    //votes: [{type: Schema.Types.OjectId, ref: 'Vote'}],
    //gists: [{type: Schema.Types.OjectId, ref: 'Gist'}],
    server: String,
    database: String,
    appFramework: String,
    host: String
    //component: [compoentSchema],  
}, {
    timestamps: true
});


module.exports = mongoose.model('Recipe', recipeSchema)