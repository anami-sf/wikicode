const mongoose = require('mongoose')

var recipeSchema = new mongoose.Schema({
    id: String,
    category: String,
    stepNo: Number,
    stepDescription: String, 
    code: String, 
    votes: [{type: Schema.Types.OjectId, ref: 'Vote'}],
    gists: [{type: Schema.Types.OjectId, ref: 'Gist'}],
    server: String,
    db: String,
    appFramework: String,
    Host: String
    //component: [compoentSchema],  
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);