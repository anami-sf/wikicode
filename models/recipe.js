const mongoose = require('mongoose')

var stepSchema = new mongoose.Schema({
    stepDescription: String,
    code: String
});

var recipeSchema = new mongoose.Schema({
    category: String,
    stepNo: Number,
    stepDescription: String, 
    steps: [stepSchema], 
    //votes: [{type: Schema.Types.OjectId, ref: 'Vote'}],
    //gists: [{type: Schema.Types.OjectId, ref: 'Gist'}],
    webServer: String,
    database: String,
    appFramework: String,
    host: String
    //component: [compoentSchema],  
}, {
    timestamps: true
});


module.exports = mongoose.model('Recipe', recipeSchema)