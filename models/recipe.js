const mongoose = require('mongoose')

var recipeSchema = new mongoose.Schema({
    tittle: String,
    //stepNo: Number,
    Category: {
        type: String,
        enum: ['Database', 'Application Server', 'Web Server', 'Host']
    },
    description: String, 
    steps: [{type: mongoose.Schema.Types.ObjectId, ref: 'Step'}], 
    //votes: [voteSchema],
    //gists: [{type: mongoose.Schema.Types.OjectId, ref: 'Gist'}],
    webServer: String,
    database: String,
    appFramework: String,
    appHost: String
}, 
{
    timestamps: true
})


module.exports = mongoose.model('Recipe', recipeSchema)