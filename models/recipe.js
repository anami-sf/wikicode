const mongoose = require('mongoose')

var packageSchema = new mongoose.Schema({
    component: Array,
    package: String
})

var stepSchema = new mongoose.Schema({
    stepDescription: String,
    code: String
});

var recipeSchema = new mongoose.Schema({
    tittle: String,
    packages: [packageSchema],
    //stepNo: Number,
    description: String, 
    //Steps: [{type: Schema.Types.ObjectId, ref: 'Step'}], 
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