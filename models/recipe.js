const mongoose = require('mongoose')

var stepSchema = new mongoose.Schema({
    stepDescription: String,
    code: String
});

var recipeSchema = new mongoose.Schema({
    tittle: String,
    //stepNo: Number,
    Category: {
        type: String,
        enum: ['Database', 'Application Server', 'Web Server']
    },
    description: String, 
    //Steps: [{type: Schema.Types.ObjectId, ref: 'Step'}], 
    //votes: [voteSchema],
    //gists: [{type: Schema.Types.OjectId, ref: 'Gist'}],
    webServer: String,
    database: String,
    appFramework: String,
    appHost: String
}, 
{
    timestamps: true
})


module.exports = mongoose.model('Recipe', recipeSchema)